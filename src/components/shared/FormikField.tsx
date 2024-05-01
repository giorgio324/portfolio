import { useField } from 'formik';
import Reveal from '../animation/Reveal';

type Props = {
  name: string;
  placeholder: string;
  label: string;
  type?: string;
  component?: 'input' | 'textarea';
};

const FormikField = ({
  label,
  placeholder,
  type = 'text',
  component = 'input',
  ...props
}: Props) => {
  const [field, meta] = useField(props);

  const FieldComponent = component;

  return (
    <div className='w-full lg:text-lg'>
      <Reveal>
        <label className='flex flex-col gap-2 text-paragraphTextColor '>
          {label}
          <FieldComponent
            {...field}
            {...props}
            placeholder={placeholder}
            type={component === 'input' ? type : undefined}
            className={`bg-cardBackgroundColor text-white rounded-md text-base py-3 px-4 lg:text-lg ${
              component === 'textarea' && 'h-36 resize-none'
            }`}
          />
        </label>
      </Reveal>
      {meta.touched && meta.error ? (
        <p className='text-red-500 mt-2 '>{`*${meta.error}`}</p>
      ) : null}
    </div>
  );
};
export default FormikField;
