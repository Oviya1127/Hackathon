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

      <style jsx>{`
        .faculty-card {
          background-color: #111;
          border: 2px solid #333; /* default border */
          border-radius: 15px;
          padding: 20px;
          width: 220px;
          text-align: center;
          color: #fff;
          box-shadow: 0 0 5px #000; /* no glow by default */
          transition: transform 0.3s, box-shadow 0.3s, border 0.3s;
          margin: 10px;
          cursor: pointer;
        }

        /* Neon glow on hover or tap */
        .faculty-card:hover,
        .faculty-card:active {
          transform: translateY(-5px);
          border: 2px solid #ffcc00; /* neon yellow/orange */
          box-shadow: 0 0 15px #ffcc00, 0 0 30px #ffcc00, 0 0 45px #ffcc00;
        }

        .avatar {
          width: 120px;
          height: 120px;
          margin: 0 auto 15px auto;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid #333; /* default border */
          transition: border 0.3s, box-shadow 0.3s;
        }

        .faculty-card:hover .avatar,
        .faculty-card:active .avatar {
          border: 4px solid #ffcc00;
          box-shadow: 0 0 10px #ffcc00, 0 0 20px #ffcc00;
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
          color: #fff;
          transition: color 0.3s, text-shadow 0.3s;
        }

        .faculty-card:hover .name,
        .faculty-card:active .name {
          color: #ffcc00;
          text-shadow: 0 0 5px #ffcc00, 0 0 10px #ffcc00;
        }

        .qualification, .title, .role {
          font-size: 14px;
          margin: 2px 0;
          color: #fff;
        }

        .role {
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default FacultyCard;
