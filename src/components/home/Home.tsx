'use client';
import HeroImages from './HeroImages';
import Title from './Title';

const Home = () => {
  return (
    <main className={`mt-[76px] px-4 py-10`}>
      <Title />
      <HeroImages />
    </main>
  );
};
export default Home;
