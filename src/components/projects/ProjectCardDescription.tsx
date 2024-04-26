import SectionDescription from '../shared/SectionDescription';
import SectionSubTitle from '../shared/SectionSubTitle';

type Props = {
  title: string;
  description: string;
};

const ProjectCardDescription = ({ title, description }: Props) => {
  return (
    <div className='mt-10 lg:mt-0 flex flex-col gap-3'>
      <SectionSubTitle>{title}</SectionSubTitle>
      <SectionDescription>{description}</SectionDescription>
    </div>
  );
};
export default ProjectCardDescription;
