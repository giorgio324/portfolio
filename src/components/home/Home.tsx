import HomeImageSection from './HomeImageSection';
import Title from './Title';

const Home = () => {
  return (
    <main
      className={
        'max-w-screen-xl mx-auto pt-28 pb-10 md:pt-64 md:pb-44 px-4 md:px-10 lg:px-[108px]  md:flex justify-center items-center gap-8'
      }
    >
      <Title />
      <HomeImageSection />
    </main>
  );
};
export default Home;
