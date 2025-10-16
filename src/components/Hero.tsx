import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">

        {/* Logos and College Name */}
        <div className="hero-top-row">
          <img src="/logo/tpgit_logo.png" className="hero-logo-left" alt="TPGIT Logo" />
          
          <div className="hero-college-container">
            <h2 className="hero-college gradient-text-college">
              Thanthai Periyar Government Institute of Technology, Vellore
            </h2>
          </div>

          <img src="/logo/csealogo.png" className="hero-logo-right" alt="CSE Logo" />
        </div>

        {/* Hackathon, Department, Dates in one compact div */}
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

        {/* Register Button */}
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
          padding: 4rem 1rem;
          background: rgba(0,0,0,0.6);
        }

        .hero-container {
          width: 100%;
          max-width: 1200px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }

        /* Top row: Logos + College Name */
        .hero-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .hero-logo-left, .hero-logo-right {
          width: 80px;
          height: 80px;
        }

        @media (min-width: 640px) {
          .hero-logo-left, .hero-logo-right {
            width: 112px;
            height: 112px;
          }
        }

        .hero-college-container {
          flex: 1;
          display: flex;
          justify-content: center;
        }

        .hero-college {
          font-size: 2.5rem;
          font-weight: 900;
          text-align: center;
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
          font-size: 1.2rem;
          font-weight: 600;
          line-height: 1.1;
        }

        .gradient-text-department {
          background: linear-gradient(90deg, #3b82f6, #06b6d4, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-title {
          font-size: 2rem;
          font-weight: 900;
          line-height: 1.1;
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
          font-size: 1rem;
          color: #facc15;
          margin-top: 0.25rem;
          font-weight: 500;
        }

        /* Register button */
        .hero-actions {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 2rem;
        }

        .hero-button {
          cursor: pointer;
          width: 14em;
          height: 3em;
          font-size: 1.125rem;
          font-weight: 600;
          color: #fff;
          background: linear-gradient(90deg, #facc15, #fb923c, #f87171);
          border-radius: 9999px;
          box-shadow: 0 10px 15px rgba(0,0,0,0.2);
          border: none;
          transition: all 0.3s ease-in-out;
        }

        .hero-button:hover {
          transform: scale(1.05);
        }

        @media (min-width: 640px) {
          .hero-college {
            font-size: 3rem;
          }
          .hero-title {
            font-size: 2.5rem;
          }
          .hero-department {
            font-size: 1.5rem;
          }
        }

        @media (min-width: 768px) {
          .hero-college {
            font-size: 3.5rem;
          }
          .hero-title {
            font-size: 3rem;
          }
          .hero-department {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
