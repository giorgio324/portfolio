import { IoIosMenu } from 'react-icons/io';
import Reveal from '../animation/Reveal';

type Props = {
  openNavbar: () => void;
};

const MobileNavbarButton = ({ openNavbar }: Props) => {
  return (
    <Reveal direction='right-to-left'>
      <button className='border rounded-md bg-white p-1' onClick={openNavbar}>
        <IoIosMenu className='text-[28px] text-black' />
      </button>
    </Reveal>
  );
};
export default MobileNavbarButton;
