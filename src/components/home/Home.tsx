'use client';
import HomeImageSection from './HomeImageSection';
import Title from './Title';

const Home = () => {
  return (
    <main className={`mt-[76px] px-4 py-10`}>
      <Title />
      <HomeImageSection />
    </main>
  );
};
export default Home;
