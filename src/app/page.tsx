import Reveal from '@/components/Reveal';
import Visible from '@/components/Visible';

const page = () => {
  return (
    <>
      <div className='min-h-screen p-4'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet beatae
        cupiditate esse, accusamus ex voluptate nemo autem ipsum praesentium
        quibusdam. Officia nesciunt possimus nemo commodi enim autem iure
        molestiae non!
      </div>
      <div className='min-h-screen p-4'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet beatae
        cupiditate esse, accusamus ex voluptate nemo autem ipsum praesentium
        quibusdam. Officia nesciunt possimus nemo commodi enim autem iure
        molestiae non!
      </div>
      <Reveal width='fit-content'>
        <h1>Hello</h1>
        <p>i am giorgi</p>
      </Reveal>
      <Visible>test</Visible>
    </>
  );
};
export default page;
