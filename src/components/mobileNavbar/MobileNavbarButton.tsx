import { IoIosMenu } from 'react-icons/io';
import Reveal from '../animation/Reveal';

type Props = {
  openNavbar: () => void;
};

const MobileNavbarButton = ({ openNavbar }: Props) => {
  return (
    <Reveal direction='right-to-left'>
      <button
        className='border rounded-lg bg-white p-[6px] '
        onClick={openNavbar}
      >
        <IoIosMenu className='text-[30px] text-black' />
      </button>
    </Reveal>
  );
};
export default MobileNavbarButton;
