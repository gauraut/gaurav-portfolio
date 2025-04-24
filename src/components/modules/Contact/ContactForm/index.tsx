'use client';

import { useForm } from '@formspree/react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import dynamic from 'next/dynamic';
import * as Yup from 'yup';
import clsx from 'clsx';

// 👉 dynamic import prevents SSR errors
const ReCAPTCHA = dynamic(() => import('react-google-recaptcha'), { ssr: false });

const ContactForm = () => {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM!);

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
      onSubmit={async (values, helpers) => {
        try {
          await handleSubmit(values);
          helpers.resetForm();
        } catch {
          alert('Something went wrong, please try again!');
        } finally {
          helpers.setSubmitting(false);
        }
      }}
    >
      {({ touched, errors, setFieldValue, isSubmitting, values }) => (
        <Form>
          {/* --- Name --- */}
          <div className="relative mb-4">
            <Field
              type="text"
              name="name"
              placeholder="Full name*"
              className={clsx('input', { 'input-error': touched.name && errors.name })}
            />
            <ErrorMessage className="text-red-600 block mt-1" component="span" name="name" />
          </div>

          {/* --- Email --- */}
          <div className="relative mb-4">
            <Field
              type="email"
              name="email"
              placeholder="Email*"
              className={clsx('input', { 'input-error': touched.email && errors.email })}
            />
            <ErrorMessage className="text-red-600 block mt-1" component="span" name="email" />
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
            <ErrorMessage className="text-red-600 block mt-1" component="span" name="message" />
          </div>

          {/* --- ReCAPTCHA --- */}
          {values.name && values.email && values.message && process.env.NODE_ENV !== 'development' && (
            <div className="relative mb-4">
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_PORTFOLIO_RECAPTCHA_KEY!}
                onChange={(token) => setFieldValue('recaptcha', token)}
              />
              <ErrorMessage className="text-red-600 block mt-1" component="span" name="recaptcha" />
            </div>
          )}

          {/* --- Success message --- */}
          {state.succeeded && (
            <p className="my-4 text-center text-green-500">
              Your message has been successfully sent, I’ll get back to you ASAP!
            </p>
          )}

          {/* --- Submit --- */}
          <button type="submit" className="button button-secondary" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
