import { IoIosMenu } from 'react-icons/io';

type Props = {
  openNavbar: () => void;
};

const MobileNavbarButton = ({ openNavbar }: Props) => {
  return (
    <button className='border rounded-md bg-white p-1'>
      <IoIosMenu className='text-[28px] text-black' onClick={openNavbar} />
    </button>
  );
};
export default MobileNavbarButton;
