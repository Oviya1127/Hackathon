import React, { useState } from "react";
import NeonCard from "./ui/NeonCard";
import Modal from "./ui/Modal";
import { Link } from "react-router-dom";

export interface ProblemStatement {
  id: string;
  title: string;
  background: string;
  description: string;
  keyParameters: string; 
  expectedSolution: string; 
  image?: string;
  registrationOpen?: boolean;
}

const ProblemStatementCard: React.FC<{ item: ProblemStatement }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <NeonCard
        className="problem-card"
        onClick={() => setIsOpen(true)}
      >
        <div className="problem-card-image">
          {item.image ? (
            <img src={item.image} alt={item.title} />
          ) : (
            <div className="problem-card-placeholder">
              <h3>{item.title}</h3>
            </div>
          )}
        </div>

        <div className="problem-card-content">
          <h3>{item.title}</h3>
          <p>{item.background}</p>
          <button onClick={() => setIsOpen(true)}>Explore</button>
        </div>
      </NeonCard>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title={item.title}>
        <div className="problem-modal-content">
          {item.image && <img src={item.image} alt={item.title} />}
          <section>
            <h4>Background</h4>
            <p>{item.background}</p>
          </section>
          <section>
            <h4>Description</h4>
            <p>{item.description}</p>
          </section>
          <section>
            <h4>Key Parameters</h4>
            <p>{item.keyParameters}</p>
          </section>
          <section>
            <h4>Expected Solution</h4>
            <p>{item.expectedSolution}</p>
          </section>
          <div className="registration">
            <span>Registration: </span>
            <span className={item.registrationOpen ? "open" : "closed"}>
              {item.registrationOpen ? "Open" : "Closed"}
            </span>
            <Link to="/signup">Register</Link>
          </div>
        </div>
      </Modal>

      <style>{`
        .problem-card {
          cursor: pointer;
          display: flex;
          flex-direction: column;
          transition: transform 0.2s;
          background-color: #1a1a1a;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 0 10px rgba(255,204,0,0.3);
        }

        .problem-card:hover {
          transform: scale(1.02);
          box-shadow: 0 0 20px rgba(255,204,0,0.6);
        }

        .problem-card-image img {
          width: 100%;
          height: 160px;
          object-fit: cover;
          transition: transform 0.3s;
        }

        .problem-card-image img:hover {
          transform: scale(1.05);
        }

        .problem-card-placeholder {
          width: 100%;
          height: 160px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(90deg, #facc15, #f97316, #ef4444);
        }

        .problem-card-placeholder h3 {
          color: black;
          text-align: center;
          padding: 0 8px;
        }

        .problem-card-content {
          padding: 16px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .problem-card-content h3 {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 8px;
          color: #ffcc00;
        }

        .problem-card-content p {
          font-size: 0.875rem;
          color: #ccc;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          margin-bottom: 12px;
        }

        .problem-card-content button {
          padding: 8px 16px;
          background-color: #333;
          color: #facc15;
          border-radius: 9999px;
          font-weight: 500;
          border: none;
          cursor: pointer;
          transition: opacity 0.2s;
        }

        .problem-card-content button:hover {
          opacity: 0.9;
        }

        .problem-modal-content img {
          width: 100%;
          height: 224px;
          object-fit: cover;
          border-radius: 6px;
          margin-bottom: 16px;
        }

        .problem-modal-content section {
          margin-bottom: 16px;
        }

        .problem-modal-content section h4 {
          font-size: 1rem;
          font-weight: 600;
          color: #facc15;
          margin-bottom: 4px;
        }

        .problem-modal-content section p {
          font-size: 0.875rem;
          color: #d1d5db;
          white-space: pre-line;
        }

        .registration {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid #374151;
          padding-top: 12px;
        }

        .registration span {
          font-size: 0.875rem;
        }

        .registration .open {
          color: #4ade80;
          margin-left: 4px;
        }

        .registration .closed {
          color: #f87171;
          margin-left: 4px;
        }

        .registration a {
          padding: 8px 12px;
          background-color: #facc15;
          color: black;
          border-radius: 6px;
          text-decoration: none;
          transition: filter 0.2s;
        }

        .registration a:hover {
          filter: brightness(0.95);
        }
      `}</style>
    </>
  );
};

export default ProblemStatementCard;
