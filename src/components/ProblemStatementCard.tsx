import React, { useState } from "react";
import NeonCard from "./ui/NeonCard";
import Modal from "./ui/Modal";
import { Link } from "react-router-dom";

export interface ProblemStatement {
  id: string;
  title: string;
  background: string;
  description: string;
  keyParameters: string; // can be long multi-line text
  expectedSolution: string; // can be long multi-line text
  image?: string;
  registrationOpen?: boolean;
}

const ProblemStatementCard: React.FC<{ item: ProblemStatement }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <NeonCard
        type="tech"
        className="cursor-pointer h-full flex flex-col transition-transform hover:scale-[1.02]"
        onClick={() => setIsOpen(true)}
      >
        <div className="relative overflow-hidden">
          {item.image ? (
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover object-center transition-transform hover:scale-105"
            />
          ) : (
            <div className="w-full h-40 bg-gradient-to-r from-yellow-400 via-orange-300 to-red-400 flex items-center justify-center">
              <h3 className="text-xl font-bold text-black px-4 text-center">{item.title}</h3>
            </div>
          )}
        </div>

        <div className="p-4 flex-1 flex flex-col">
          <h3 className="text-lg font-semibold mb-2 text-black">{item.title}</h3>
          <p className="text-sm text-gray-700 line-clamp-3 mb-4">{item.background}</p>

          <div className="mt-auto">
            <button
              className="px-4 py-2 bg-black text-yellow-400 rounded-full shadow hover:opacity-90 transition"
              onClick={() => setIsOpen(true)}
            >
              Explore
            </button>
          </div>
        </div>
      </NeonCard>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title={item.title}>
        <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
          {item.image && (
            <img src={item.image} alt={item.title} className="w-full h-56 object-cover rounded" />
          )}

          <section>
            <h4 className="text-lg font-semibold text-yellow-400">Background</h4>
            <p className="text-gray-300 whitespace-pre-line">{item.background}</p>
          </section>

          <section>
            <h4 className="text-lg font-semibold text-yellow-400">Description</h4>
            <p className="text-gray-300 whitespace-pre-line">{item.description}</p>
          </section>

          <section>
            <h4 className="text-lg font-semibold text-yellow-400">Key Parameters</h4>
            <p className="text-gray-300 whitespace-pre-line">{item.keyParameters}</p>
          </section>

          <section>
            <h4 className="text-lg font-semibold text-yellow-400">Expected Solution</h4>
            <p className="text-gray-300 whitespace-pre-line">{item.expectedSolution}</p>
          </section>

          <div className="pt-4 border-t border-gray-700 flex justify-between items-center">
            <div className="text-sm text-gray-400">
              Registration:
              <span className={`ml-2 ${item.registrationOpen ? "text-green-400" : "text-red-400"}`}>
                {item.registrationOpen ? "Open" : "Closed"}
              </span>
            </div>

            <Link
              to="/signup"
              className="px-4 py-2 bg-yellow-400 text-black rounded hover:brightness-95 transition"
            >
              Register
            </Link>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProblemStatementCard;
