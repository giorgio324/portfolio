import RevealWithBackground from '../animation/RevealWithBackground';

type Props = {
  children: React.ReactNode;
};

const SectionDescription = ({ children }: Props) => {
  return (
    <RevealWithBackground>
      <p className='text-paragraphTextColor md:text-lg manrope'>{children}</p>
    </RevealWithBackground>
  );
};
export default SectionDescription;
