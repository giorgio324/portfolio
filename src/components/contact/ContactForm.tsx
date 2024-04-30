'use client';
import { Form, Formik, FormikHelpers } from 'formik';
import FormikField from '../shared/FormikField';
import { contactFormValidationSchema } from '@/schema/contactFormValidationSchema';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import Reveal from '../animation/Reveal';
import LoadingSpinner from '../shared/LoadingSpinner';

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const initialValues: FormValues = {
    name: '',
    email: '',
    message: '',
  };

  const handleSubmit = async (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>
  ) => {
    const serviceId = 'service_gu2k4e9';
    const templateId = 'template_8lxuy8j';
    const publicKey = 'XVyc25m5VA-gYYba8';
    /* templateParam keys represent template values in emailjs template */
    const templateParams = {
      from_name: values.name,
      from_email: values.email,
      to_name: 'Giorgi Kochuashvili',
      message: values.message,
    };
    setLoading(true);
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((resp) => {
        formikHelpers.resetForm();
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactFormValidationSchema}
    >
      <Form className='my-16 flex flex-col gap-6 items-start manrope'>
        <FormikField label={'Name'} name={'name'} placeholder={'Name'} />
        <FormikField
          label={'Email'}
          name={'email'}
          placeholder={'Email'}
          type='email'
        />
        <FormikField
          label={'Message'}
          name={'message'}
          placeholder={'Message'}
          component='textarea'
        />
        <Reveal>
          <button
            className={`w-[117px] h-[44px] md:w-[140px] md:h-[50px] text-sm md:text-base lg:text-lg rounded-full bg-buttonGreenBackgroundColor text-blackTextColor font-bold uppercase ${
              loading &&
              'bg-cardBackgroundColor cursor-not-allowed flex justify-center items-center'
            }`}
            type='submit'
            disabled={loading}
          >
            {loading ? <LoadingSpinner /> : 'Submit'}
          </button>
        </Reveal>
      </Form>
    </Formik>
  );
};
export default ContactForm;
/* 44 */
/* 117 */
