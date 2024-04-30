import ContactForm from './ContactForm';
import ContactTitle from './ContactTitle';

const Contact = () => {
  return (
    <div className='max-w-screen-xl mx-auto px-4 md:px-10 lg:px-28 py-16 md:py-32 lg:flex lg:justify-between gap-6'>
      <ContactTitle />
      <ContactForm />
    </div>
  );
};
export default Contact;
