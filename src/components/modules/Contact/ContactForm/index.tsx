'use client';

import React, { useEffect, useRef } from 'react';
import { useForm } from '@formspree/react';
import { Formik, Form, Field, ErrorMessage, FormikProps } from 'formik';
import * as Yup from 'yup';
import dynamic from 'next/dynamic';
import clsx from 'clsx';

const ReCAPTCHA = dynamic(() => import('react-google-recaptcha'), { ssr: false });

export default function ContactForm() {
  const formId = process.env.NEXT_PUBLIC_FORM_ID;
  if (!formId) throw new Error('Missing NEXT_PUBLIC_FORM_ID');

  const [state, handleSubmit] = useForm(formId);

  /* 1️⃣ Grab a ref to Formik so we can reset fields from outside */
  const formikRef = useRef<FormikProps<{
    name: string;
    email: string;
    message: string;
    recaptcha: string;
  }> | null>(null);

  /* 2️⃣ Top-level useEffect – runs after Formspree succeeds */
  useEffect(() => {
    if (state.succeeded) {
      formikRef.current?.resetForm();
      formikRef.current?.setFieldValue('recaptcha', '');
    }
  }, [state.succeeded]);

  return (
    <Formik
      innerRef={formikRef}         /* <-- expose ref */
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
      onSubmit={() => {}}          /* Formspree handles via DOM event */
    >
      {({ values, touched, errors, setFieldValue }) => (
        <Form onSubmit={handleSubmit} noValidate>
          {/* --- Full name --- */}
          <div className="relative mb-4">
            <Field
              type="text"
              name="name"
              placeholder="Full name*"
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
              className={clsx('input', { 'input-error': touched.message && errors.message })}
            />
            <ErrorMessage component="span" name="message" className="text-red-600 block mt-1" />
          </div>

          {/* --- reCAPTCHA --- */}
          {values.name && values.email && values.message && process.env.NODE_ENV !== 'development' && (
            <div className="relative mb-4">
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY!}
                onChange={(token) => setFieldValue('recaptcha', token)}
              />
              <ErrorMessage component="span" name="recaptcha" className="text-red-600 block mt-1" />
            </div>
          )}

          {state.succeeded && (
            <p className="my-4 text-center text-green-500">
              Your message has been successfully sent, I’ll get back to you ASAP!
            </p>
          )}

          <button type="submit" className="button button-secondary" disabled={state.submitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}
