'use client';

import { useState } from 'react';
import { ChevronDown } from 'tabler-icons-react';
import FlareCursor from "../components/Cursor";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
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

  const [openStates, setOpenStates] = useState<boolean[]>(Array(faqData.length).fill(false));

  const handleClick = (index: number) => {
    const newOpenStates = [...openStates];
    newOpenStates[index] = !newOpenStates[index];
    setOpenStates(newOpenStates);
  };

  return (
    <section className="faq-section" id="faqs">
      <FlareCursor />
      <h2 className="faq-title">Hackathon FAQs</h2>
      <div className="faq-container">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => handleClick(index)}>
              <span>{faq.question}</span>
              <span className={`chevron ${openStates[index] ? 'open' : ''}`}>
                <ChevronDown stroke='1.5' size={24} />
              </span>
            </div>
            {openStates[index] && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <style>{`
        .faq-section {
          padding: 60px 20px;
          background-color: #000;
          color: #fff;
          text-align: center;
          font-family: Arial, sans-serif;
        }

        .faq-title {
          font-size: 36px;
          font-weight: bold;
          margin-bottom: 40px;
          color: #ffcc00;
          text-shadow: 2px 2px 5px #000;
        }

        .faq-container {
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .faq-item {
          background-color: #111;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          overflow: hidden;
          transition: box-shadow 0.3s ease;
        }

        .faq-item:hover {
          box-shadow: 0 0 20px rgba(0, 255, 100, 0.3);
        }

        .faq-question {
          padding: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          font-size: 18px;
          transition: color 0.3s ease;
        }

        .faq-question:hover {
          color: #00ff66;
        }

        .chevron {
          transition: transform 0.3s ease;
        }

        .chevron.open {
          transform: rotate(180deg);
        }

        .faq-answer {
          padding: 15px 20px;
          background-color: #000;
          animation: fadeIn 0.3s ease forwards;
        }

        .faq-answer p {
          font-size: 16px;
          color: #00ff66;
          line-height: 1.6;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

export default Questions;
