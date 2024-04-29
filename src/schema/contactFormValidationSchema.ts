import * as Yup from 'yup';

export const contactFormValidationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  message: Yup.string()
    .min(40, 'Message must contain at least 40 characters')
    .required('Message is required'),
});
