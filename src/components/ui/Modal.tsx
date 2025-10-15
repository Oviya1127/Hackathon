import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 rounded-xl p-6 max-w-lg w-full shadow-[0_0_25px_rgba(255,165,0,0.6)]"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        {children}
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-orange-500 text-black font-semibold rounded hover:bg-orange-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
