import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">

        {/* Top row: Logos + Title */}
        <div className="hero-top-row">
          <div className="hero-logo-left">
            <img src="/logo/tpgit_logo.png" className="hero-logo" alt="TPGIT Logo" />
          </div>

          <div className="hero-title-container">
            <h1 className="hero-title">
              <span className="gradient-text">Hackathon</span>
              <span className="gradient-text italic">2.0</span>
            </h1>
            <p className="hero-subtitle">Intra College Hackathon</p>
          </div>

          <div className="hero-logo-right">
            <img src="/logo/csealogo.png" className="hero-logo" alt="CSE Logo" />
          </div>
        </div>

        <div className="hero-date">
          <p>October 30</p>
        </div>

        <div className="hero-actions">
        
          <Link to="/signup">
            <button className="hero-button">Register Now</button>
          </Link>
        </div>
      </div>

      {/* Inline CSS */}
      <style>{`
        .hero-section {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          overflow: hidden;
          padding: 4rem 1rem;
        }

        .hero-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 3rem;
          width: 100%;
          max-width: 1200px;
        }

        .hero-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .hero-logo-left,
        .hero-logo-right {
          display: flex;
          align-items: center;
        }

        .hero-logo {
          width: 56px;
          height: 56px;
        }

        @media (min-width: 640px) {
          .hero-logo {
            width: 112px;
            height: 112px;
          }
        }

        .hero-title-container {
          text-align: center;
        }

        .hero-title {
          font-size: 2.5rem;
          font-weight: bold;
          line-height: 1.1;
        }

        @media (min-width: 768px) {
          .hero-title {
            font-size: 4rem;
          }
        }

        .gradient-text {
          background: linear-gradient(90deg, #f87171, #fb923c, #facc15);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-right: 0.5rem;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: rgba(255, 99, 71, 0.8);
          margin-top: 0.5rem;
        }

        .hero-date {
          background-color: rgba(253, 230, 138, 0.1);
          backdrop-filter: blur(6px);
          padding: 0.5rem 1.5rem;
          border-radius: 9999px;
          border: 1px solid rgba(251, 145, 36, 0.5);
        }

        .hero-date p {
          color: #facc15;
          font-size: 1rem;
          font-weight: 500;
        }

        .hero-actions {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3rem;
        }

        .hero-button {
          cursor: pointer;
          width: 12em;
          height: 3em;
          font-size: 1rem;
          font-weight: 600;
          color: #fff;
          background: linear-gradient(90deg, #facc15, #fb923c, #f87171);
          border-radius: 9999px;
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
          border: none;
          transition: all 0.3s ease-in-out;
        }

        .hero-button:hover {
          transform: scale(1.05);
        }

        @media (min-width: 640px) {
          .hero-button {
            width: 16em;
            font-size: 1.125rem;
          }
        }

        @media (min-width: 768px) {
          .hero-button {
            width: 18em;
            font-size: 1.25rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
