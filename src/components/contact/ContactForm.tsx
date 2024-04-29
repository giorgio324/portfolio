'use client';
import { Field, Form, Formik, FormikHelpers, FormikProps } from 'formik';
import FormikField from '../shared/FormikField';
import { contactFormValidationSchema } from '@/schema/contactFormValidationSchema';

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const initialValues: FormValues = {
    name: '',
    email: '',
    message: '',
  };

  const handleSubmit = (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>
  ) => {
    console.log(values);
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
        <button
          className='py-3 px-8 text-sm md:text-base lg:text-lg rounded-full bg-buttonGreenBackgroundColor text-blackTextColor font-bold uppercase'
          type='submit'
        >
          Submit
        </button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
