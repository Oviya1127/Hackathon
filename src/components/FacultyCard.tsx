import React from 'react';

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
  image
}) => {
  return (
    <div className="faculty-card">
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
          box-shadow: 0 0 10px #ffcc00, 0 0 20px #ffcc00; /* initial glow */
          animation: neonPulse 2s infinite alternate;
          transition: transform 0.3s;
        }

        .avatar {
          width: 120px;
          height: 120px;
          margin: 0 auto 15px auto;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid #ffcc00;
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
      `}</style>
    </div>
  );
};

export default FacultyCard;
