import HeroImages from './HeroImages';
import { Poppins } from 'next/font/google';
import Title from './Title';
const popins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

const Home = () => {
  return (
    <main
      className={`${popins.className} max-w-screen-xl mx-auto p-4 md:flex md:px-12 lg:px-16 min-h-full min-height-screen`}
    >
      <Title />
      <HeroImages />
    </main>
  );
};
export default Home;
