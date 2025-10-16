import React, { useEffect, useRef, useState } from 'react';

interface FacultyCardProps {
  name: string;
  title: string;
  qualification: string;
  role: string;
  image: string;
}

const FacultyCard: React.FC<FacultyCardProps> = ({
  name,
  title,
  qualification,
  role,
  image,
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`faculty-card ${isVisible ? 'glow' : ''}`}
    >
      <div className="avatar">
        <img src={image} alt={name} />
      </div>
      <h3 className="name">{name}</h3>
      <p className="qualification">{qualification}</p>
      <p className="title">{title}</p>
      <p className="role">{role}</p>

      <style>{`
        .faculty-card {
          background-color: #111;
          border: 2px solid #333;
          border-radius: 15px;
          padding: 20px;
          width: 220px;
          text-align: center;
          color: #fff;
          margin: 10px;
          cursor: pointer;
          box-shadow: none;
          transition: transform 0.3s, box-shadow 0.5s ease-in-out;
        }

        .faculty-card.glow {
          box-shadow: 0 0 10px #ffcc00, 0 0 20px #ffcc00;
          animation: neonPulse 2s infinite alternate;
        }

        .avatar {
          width: 120px;
          height: 120px;
          margin: 0 auto 15px auto;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid #ffcc00;
          box-shadow: none;
          transition: box-shadow 0.5s ease-in-out;
        }

        .faculty-card.glow .avatar {
          box-shadow: 0 0 15px #ffcc00, 0 0 30px #ffcc00;
          animation: neonPulse 2s infinite alternate;
        }

        .avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .name {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 5px;
          color: #ffcc00;
          text-shadow: none;
          transition: text-shadow 0.5s ease-in-out;
        }

        .faculty-card.glow .name {
          text-shadow: 0 0 5px #ffcc00, 0 0 15px #ffcc00;
          animation: neonText 2s infinite alternate;
        }

        .qualification, .title, .role {
          font-size: 14px;
          margin: 2px 0;
          color: #fff;
        }

        .role {
          font-weight: bold;
        }

        @keyframes neonPulse {
          0% { box-shadow: 0 0 10px #ffcc00, 0 0 20px #ffcc00; }
          50% { box-shadow: 0 0 20px #ffcc00, 0 0 40px #ffcc00; }
          100% { box-shadow: 0 0 15px #ffcc00, 0 0 30px #ffcc00; }
        }

        @keyframes neonText {
          0% { text-shadow: 0 0 5px #ffcc00, 0 0 10px #ffcc00; }
          50% { text-shadow: 0 0 10px #ffcc00, 0 0 20px #ffcc00; }
          100% { text-shadow: 0 0 7px #ffcc00, 0 0 15px #ffcc00; }
        }

        .faculty-card:hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default FacultyCard;
