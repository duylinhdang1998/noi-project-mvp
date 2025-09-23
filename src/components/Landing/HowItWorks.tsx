import React from 'react';
import { UserPlus, Zap, Lightbulb } from 'lucide-react';
const steps = [
  {
    step: 'Step 1',
    title: 'Create Your Profile',
    desc: 'Students highlight their passions, while clubs detail their mission and member needs.',
    icon: <UserPlus className='w-10 h-10 text-primary' />,
  },
  {
    step: 'Step 2',
    title: 'Get Matched',
    desc: 'Our AI analyzes preferences to instantly suggest the best connections.',
    icon: <Zap className='w-10 h-10 text-primary' />,
  },
  {
    step: 'Step 3',
    title: 'Connect & Engage',
    desc: 'Seamlessly join, participate, and build a thriving campus life.',
    icon: <Lightbulb className='w-10 h-10 text-primary' />,
  },
];

export default function HowItWorks() {
  return (
    <div className='bg-white py-[112px] flex flex-col'>
      <div className='container max-w-7xl mx-auto flex flex-col gap-y-7'>
        <h1 className='text-center text-[40px] font-bold'>How It Works</h1>
        <span className='text-center text-base text-[#565D6DFF]'>
          Connecting students and organizations is simple with NỐI's intelligent
          platform.
        </span>
        <div className='grid grid-cols-3 gap-8'>
          {steps.map((s, index) => (
            <div
              key={s.title}
              className='rounded-2xl bg-white p-6 flex flex-col gap-2 justify-center items-center'
            >
              <span className='inline-flex w-[120px] rounded-full justify-center items-center h-[46px] px-3 bg-secondary text-white text-sm'>
                Step{index + 1}
              </span>
              <div className='flex justify-center items-center w-[80px] h-[80px] bg-[#F2F2FDFF] rounded-full'>
                {s.icon}
              </div>
              <h3 className='text-xl font-semibold'>{s.title}</h3>
              <span className='text-base text-[#565D6DFF] text-center '>
                {s.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
