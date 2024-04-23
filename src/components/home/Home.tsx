import HomeImageSection from './HomeImageSection';
import Title from './Title';

const Home = () => {
  return (
    <main
      className={
        'max-w-screen-xl mx-auto mt-[76px] md:mt-[96px] px-4 md:px-10 lg:px-[108px] py-10 md:pt-[140px] md:pb-[160px] md:flex justify-center items-center gap-8'
      }
    >
      <Title />
      <HomeImageSection />
    </main>
  );
};
export default Home;
