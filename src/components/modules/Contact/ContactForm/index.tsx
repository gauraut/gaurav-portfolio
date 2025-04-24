'use client';

import React, { useEffect } from 'react';
import { useForm } from '@formspree/react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import dynamic from 'next/dynamic';
import clsx from 'clsx';

// --- Lazy‑load reCAPTCHA only on the client (avoids hydration errors) ---
const ReCAPTCHA = dynamic(() => import('react-google-recaptcha'), { ssr: false });

/**
 * Contact form (Formik + Formspree + reCAPTCHA v2/v3)
 * --------------------------------------------------
 * 1. Validates name, email, message, and captcha (prod only)
 * 2. Submits via Formspree hook
 * 3. Clears the fields automatically once Formspree reports success
 * --------------------------------------------------
 * Env vars required:
 *   NEXT_PUBLIC_FORM_ID         – just the Formspree ID (e.g. "xovernjb")
 *   NEXT_PUBLIC_RECAPTCHA_KEY   – your Google reCAPTCHA site key
 */
export default function ContactForm() {
  const formId = process.env.NEXT_PUBLIC_FORM_ID;

  if (!formId) {
    throw new Error('Missing NEXT_PUBLIC_FORM_ID – add it to .env.local and Vercel env');
  }

  const [state, handleSubmit] = useForm(formId);

  return (
    <Formik
      initialValues={{ name: '', email: '', message: '', recaptcha: '' }}
      validationSchema={Yup.object({
        name: Yup.string().required('Full name field is required'),
        email: Yup.string().email('Invalid email').required('Email field is required'),
        message: Yup.string().required('Message field is required'),
        recaptcha:
          process.env.NODE_ENV !== 'development'
            ? Yup.string().required('Robots are not welcome yet!')
            : Yup.string(),
      })}
      /** Formik onSubmit is a no‑op: Formspree handles real submission via DOM event */
      onSubmit={() => {}}
    >
      {({ values, touched, errors, setFieldValue, resetForm }) => {
        // 🔄 Clear all fields after Formspree success
        useEffect(() => {
          if (state.succeeded) {
            resetForm();
            setFieldValue('recaptcha', '');
          }
        }, [state.succeeded, resetForm, setFieldValue]);

        return (
          /* hand the DOM event straight to Formspree */
          <Form onSubmit={handleSubmit} noValidate>
            {/* --- Full name --- */}
            <div className="relative mb-4">
              <Field
                type="text"
                name="name"
                placeholder="Full name*"
                aria-label="Full name"
                className={clsx('input', { 'input-error': touched.name && errors.name })}
              />
              <ErrorMessage component="span" name="name" className="text-red-600 block mt-1" />
            </div>

            {/* --- Email --- */}
            <div className="relative mb-4">
              <Field
                type="email"
                name="email"
                placeholder="Email*"
                aria-label="Email address"
                className={clsx('input', { 'input-error': touched.email && errors.email })}
              />
              <ErrorMessage component="span" name="email" className="text-red-600 block mt-1" />
            </div>

            {/* --- Message --- */}
            <div className="relative mb-4">
              <Field
                as="textarea"
                rows={8}
                name="message"
                placeholder="Message*"
                aria-label="Message"
                className={clsx('input', { 'input-error': touched.message && errors.message })}
              />
              <ErrorMessage component="span" name="message" className="text-red-600 block mt-1" />
            </div>

            {/* --- reCAPTCHA (only after all fields filled) --- */}
            {values.name && values.email && values.message && process.env.NODE_ENV !== 'development' && (
              <div className="relative mb-4">
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY!}
                  onChange={(token: string | null) => setFieldValue('recaptcha', token)}
                />
                <ErrorMessage component="span" name="recaptcha" className="text-red-600 block mt-1" />
              </div>
            )}

            {/* --- Success banner --- */}
            {state.succeeded && (
              <p className="my-4 text-center text-green-500">
                Your message has been successfully sent, I’ll get back to you ASAP!
              </p>
            )}

            {/* --- Submit button --- */}
            <button type="submit" className="button button-secondary" disabled={state.submitting}>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}
