'use client';

import { useState } from 'react';
import { ChevronDown } from 'tabler-icons-react';
import FlareCursor from "../components/Cursor";  // adjust path based on your folder

const faqData = [
  {
    question: 'Who can participate in this Hackathon?',
    answer: 'The hackathon is exclusively open to students of Thanthai Periyar Government Institute of Technology (TPGIT), Vellore.'
  },
  {
    question: 'Is there any registration fee?',
    answer: 'No, there are absolutely no registration fees. Participation in Hackathon 2025 is completely free for all eligible students.'
  },
  {
    question: 'Do all team members need to register separately?',
    answer: 'No, only the team leader needs to complete the registration form. The other members’ details can be added while registering the team.'
  },
  {
    question: 'Can I register on the spot at the venue?',
    answer: 'No, on-spot registration is not allowed. All teams must register before the deadline through the online registration link.'
  },
  {
    question: 'When does the hackathon start?',
    answer: 'The hackathon officially begins one month before the final presentation day. Teams can start building and refining their projects during this period.'
  },
  {
    question: 'What happens on the final presentation day?',
    answer: 'On the final day, all teams must present their completed projects or prototypes to the judging panel. You’ll have to demonstrate your idea, explain the implementation, and answer a few questions from the judges.'
  },
  {
    question: 'What is the team size limit?',
    answer: 'Each team can have a maximum of 4 members. Solo participation is also allowed for individual developers.'
  },
  
  {
    question: 'How will the projects be judged?',
    answer: 'Judging will be based on creativity, innovation, technical implementation, design, and presentation. The decision of the judges will be final.'
  },
  {
    question: 'Will certificates or prizes be provided?',
    answer: 'Yes! Winners will receive exciting prizes and recognition. All participants will be awarded certificates.'
  },
];

function Questions() {
  const [openStates, setOpenStates] = useState(Array(faqData.length).fill(false));

  function handleClick(index: number) {
    const newOpenStates = [...openStates];
    newOpenStates[index] = !newOpenStates[index];
    setOpenStates(newOpenStates);
  }

  return (
    <section className='pt-20' id="faqs">
      <FlareCursor />
      <h2 className="text-4xl font-bold mb-16 text-center gradient-text">Hackathon FAQs</h2>

      <div className='py-3 mx-auto px-3'>
        <div className='mx-auto max-w-7xl flex flex-col'>
          {faqData.map((faq, index) => (
            <div key={faq.question} className="z-10">
              <div
                onClick={() => handleClick(index)}
                className="flex cursor-pointer justify-between gap-2 text-[#bdbdbe] hover:text-green-400 font-space bg-black border-[#76767661] border m-3 sm:m-5 px-5 py-5 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,100,0.2)]"
              >
                <span className="text-lg sm:text-xl">{faq.question}</span>
                <span>
                  {openStates[index] ? (
                    <ChevronDown stroke={1.5} size={24} />
                  ) : (
                    <ChevronDown size={24} stroke={1.5} />
                  )}
                </span>
              </div>
              {openStates[index] && (
                <div className='flex py-3 animate-fadeIn'>
                  <p className='text-sm sm:text-xl text-green-400 font-space px-5 sm:px-10 text-wrap'>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Questions;
