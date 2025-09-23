import React from 'react';
import { Brain, Star, CircleCheck } from 'lucide-react';

const featureItems = [
  {
    title: 'AI Matching',
    description:
      'Our smart algorithm connects students with clubs and organizations with ideal members based on interests, skills, and goals.',
    icon: <Brain className='w-12 h-12 text-primary' />,
  },
  {
    title: 'Two‑way Rating',
    description:
      'Students and clubs can rate each other, ensuring high-quality interactions and fostering a transparent community.',
    icon: <Star className='w-12 h-12 text-primary' />,
  },
  {
    title: 'Corporate Relationship System',
    description:
      'Smart sponsorship hub connecting enterprises with student clubs and projects — transparent, efficient, and impactful',
    icon: <CircleCheck className='w-12 h-12 text-primary' />,
  },
];
export default function KeyFeatures() {
  return (
    <div className='bg-[#FAFAFBFF] py-[112px] flex flex-col'>
      <div className='container max-w-7xl mx-auto flex flex-col gap-y-7'>
        <h1 className='text-center text-[40px] font-bold'>Key Features</h1>
        <div className='grid grid-cols-3 gap-8'>
          {featureItems.map((item) => (
            <div
              key={item.title}
              className='rounded-2xl bg-white border border-[#E0E0E0] p-6 flex flex-col gap-3'
            >
              {item.icon}
              <h2 className='text-xl font-semibold'>{item.title}</h2>
              <p className='text-base text-[#565D6DFF]'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
