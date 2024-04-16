import About from '@/components/home/About';
import Home from '@/components/home/Home';
import { Poppins } from 'next/font/google';

const popins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

const page = () => {
  return (
    <section className={`${popins.className} `}>
      <Home />
      <About />
    </section>
  );
};
export default page;
