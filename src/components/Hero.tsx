import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">

        {/* Logos + College Name */}
        <div className="hero-top-row">
          <img src="/logo/tpgit_logo.png" className="hero-logo" alt="TPGIT Logo" />

          <div className="hero-college-container">
            <h2 className="hero-college-line1 gradient-text-college">Thanthai Periyar</h2>
            <h3 className="hero-college-line2 gradient-text-college">
              Government Institute of Technology, Vellore
            </h3>
          </div>

          <img src="/logo/csealogo.png" className="hero-logo" alt="CSE Logo" />
        </div>

        {/* Hackathon Info */}
        <div className="hero-main">
          <p className="hero-department gradient-text-department">
            Department of Computer Science & Engineering
          </p>
          <h1 className="hero-title">
            <span className="gradient-text-hackathon">Hackathon</span>
            <span className="gradient-text-italic"> 2.0</span>
          </h1>
          <p className="hero-dates">
            Event Date: <strong>30 Oct 2025</strong> | Last Registration: <strong>23 Oct 2025</strong>
          </p>
        </div>

        {/* Button */}
        <div className="hero-actions">
          <Link to="/signup">
            <button className="hero-button">Register Now</button>
          </Link>
        </div>
      </div>

      <style>{`
        .hero-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 3rem 1rem;
          background: rgba(0,0,0,0.6);
        }

        .hero-container {
          width: 100%;
          max-width: 1200px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }

        /* Top row: Logos + College */
        .hero-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          flex-wrap: nowrap;
        }

        .hero-logo {
          width: 70px;
          height: 70px;
          flex-shrink: 0;
        }

        @media (min-width: 640px) {
          .hero-logo {
            width: 100px;
            height: 100px;
          }
        }

        .hero-college-container {
          flex: 1;
          text-align: center;
        }

        .hero-college-line1 {
          font-size: 2rem;
          font-weight: 900;
          margin: 0;
          line-height: 1.1;
        }

        .hero-college-line2 {
          font-size: 1.2rem;
          font-weight: 700;
          margin: 0;
          line-height: 1.1;
        }

        @media (min-width: 640px) {
          .hero-college-line1 {
            font-size: 2.8rem;
          }
          .hero-college-line2 {
            font-size: 1.6rem;
          }
        }

        @media (min-width: 768px) {
          .hero-college-line1 {
            font-size: 3rem;
          }
          .hero-college-line2 {
            font-size: 1.8rem;
          }
        }

        .gradient-text-college {
          background: linear-gradient(90deg, #facc15, #fb923c, #f87171);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Main hackathon info */
        .hero-main {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
          text-align: center;
        }

        .hero-department {
          font-size: 1rem;
          font-weight: 600;
        }

        .gradient-text-department {
          background: linear-gradient(90deg, #3b82f6, #06b6d4, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-title {
          font-size: 2rem;
          font-weight: 900;
        }

        .gradient-text-hackathon {
          background: linear-gradient(90deg, #f87171, #fb923c, #facc15);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .gradient-text-italic {
          font-style: italic;
          background: linear-gradient(90deg, #34d399, #3b82f6, #9333ea);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-dates {
          font-size: 0.95rem;
          color: #facc15;
          font-weight: 500;
        }

        /* Button */
        .hero-actions {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 1rem;
        }

        .hero-button {
          cursor: pointer;
          width: 12em;
          height: 2.8em;
          font-size: 1rem;
          font-weight: 600;
          color: #fff;
          background: linear-gradient(90deg, #facc15, #fb923c, #f87171);
          border-radius: 9999px;
          box-shadow: 0 8px 12px rgba(0,0,0,0.25);
          border: none;
          transition: all 0.3s ease-in-out;
        }

        .hero-button:hover {
          transform: scale(1.05);
        }

      `}</style>
    </section>
  );
};

export default Hero;
