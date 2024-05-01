type Props = {
  handleClick?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    elementId: string
  ) => void;
  children: React.ReactNode;
  inverted?: boolean;
  type?: 'button' | 'submit';
  loading?: boolean;
};

const Button = ({
  handleClick,
  children,
  inverted = false,
  type = 'button',
  loading = false,
}: Props) => {
  return (
    <button
      type={type}
      disabled={loading}
      className={`py-3 px-4 md:px-6 capitalize text-sm md:text-base lg:text-lg rounded-full font-bold  transition-colors duration-300 ${
        inverted
          ? 'bg-buttonBlackBackgroundColor text-buttonGreenBackgroundColor hover:text-black hover:bg-gray-400'
          : 'bg-buttonGreenBackgroundColor text-blackTextColor hover:text-white hover:bg-green-500'
      }
      ${
        loading &&
        'bg-cardBackgroundColor cursor-not-allowed flex justify-center items-center hover:text-white hover:bg-cardBackgroundColor'
      }`}
      onClick={handleClick ? (e) => handleClick(e, 'contact') : undefined}
    >
      {children}
    </button>
  );
};
export default Button;
