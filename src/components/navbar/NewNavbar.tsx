'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

let tabs = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Me' },
  { id: 'projects', label: 'Projects' },
];

const NewNavbar = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className='flex space-x-1 sticky top-0'>
      <nav className='max-w-screen-xl mx-auto flex justify-center items-center py-4'>
        <ul className='px-4 py-2 bg-desktopNavBackgroundColor rounded-full flex justify-center items-center gap-8'>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id ? '' : 'hover:text-white/60'
              } relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
              style={{
                WebkitTapHighlightColor: 'transparent',
              }}
            >
              {activeTab === tab.id && (
                <motion.span
                  layoutId='bubble'
                  className='absolute inset-0 z-10 bg-white mix-blend-difference'
                  style={{ borderRadius: 9999 }}
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              {tab.label}
            </button>
          ))}
        </ul>
      </nav>
    </div>
  );
};
export default NewNavbar;
