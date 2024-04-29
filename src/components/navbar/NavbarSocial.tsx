import { socials } from '@/data/social';
import Link from 'next/link';
const NavbarSocial = () => {
  return (
    <div className=' flex gap-6 '>
      {socials.map((social) => {
        return (
          <Link href={social.path} target='_blank' key={social.label}>
            <social.icon className='text-2xl' />
          </Link>
        );
      })}
    </div>
  );
};
export default NavbarSocial;
