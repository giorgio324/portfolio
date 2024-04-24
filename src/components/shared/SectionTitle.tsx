import RevealWithBackground from '../animation/RevealWithBackground';

type Props = {
  children: React.ReactNode;
};

const SectionTitle = ({ children }: Props) => {
  return (
    <RevealWithBackground>
      <h1 className='text-4xl lg:text-5xl flex flex-col bebas-neue w-max'>
        {children}
      </h1>
    </RevealWithBackground>
  );
};
export default SectionTitle;
