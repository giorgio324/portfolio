import HeroImages from './HeroImages';
import Title from './Title';

const Home = () => {
  return (
    <main
      className={`max-w-screen-xl mx-auto p-4 md:flex md:px-12 lg:px-16 min-h-full min-height-screen`}
    >
      <Title />
      <HeroImages />
    </main>
  );
};
export default Home;
