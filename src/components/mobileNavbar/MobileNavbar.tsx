'use client';
import { usePathname } from 'next/navigation';
import { IoIosMenu } from 'react-icons/io';
const MobileNavbar = () => {
  const currentPath = usePathname() || '/';
  return (
    <div className='flex justify-end items-center p-4'>
      <button className='border rounded-md bg-white p-1'>
        <IoIosMenu className='text-[28px] text-black' />
      </button>
    </div>
  );
};
export default MobileNavbar;
