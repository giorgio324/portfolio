'use client';

import { useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

type Props = {
  children: React.ReactNode;
};
const Visible = ({ children }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [test, setTest] = useState(false);
  useEffect(() => {
    console.log(isInView);
    if (isInView) {
      setTest(true);
    } else {
      setTest(false);
    }
  }, [isInView]);
  return <div ref={ref}>{children}</div>;
};
export default Visible;
