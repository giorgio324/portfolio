import RevealWithBackground from '../animation/RevealWithBackground';

type Props = {
  children: React.ReactNode;
};

const SectionSubTitle = ({ children }: Props) => {
  return (
    <RevealWithBackground>
      <p className='text-xl md:text-2xl manrope font-medium'>{children}</p>
    </RevealWithBackground>
  );
};
export default SectionSubTitle;
