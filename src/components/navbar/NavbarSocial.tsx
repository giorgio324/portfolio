import { socials } from '@/data/social';
const NavbarSocial = () => {
  return (
    <div className=' flex gap-6 '>
      {socials.map((social) => {
        return (
          <a href={social.path} target='_blank'>
            <social.icon className='text-2xl' />
          </a>
        );
      })}
    </div>
  );
};
export default NavbarSocial;
