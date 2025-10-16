import React from 'react';
import EventCard from '../components/ProblemStatementCard';
import FacultyCard from '../components/FacultyCard';
import { PROBLEM_STATEMENTS } from "../data/ProblemStatements";
import Navbar from '../components/Navbar';
import ImageGallery from '../components/ImageGallery';
import Questions from '../components/FAQ';
import Hero from '../components/Hero';
import ParticleBackground from '../components/ParticleBackground';

interface Faculty {
  name: string;
  title: string;
  qualification: string;
  role: string;
  image: string;
}

interface FacultySectionProps {
  title: string;
  staff: Faculty[];
}

const FacultySection: React.FC<FacultySectionProps> = ({ title, staff }) => {
  return (
    <section className="faculty-section">
      {title && <h2 className="section-title">{title}</h2>}
      <div className="faculty-container">
        {staff.map((member, index) => (
          <FacultyCard key={index} {...member} />
        ))}
      </div>

      <style>{`
        .faculty-section {
          padding: 40px 20px; /* reduced from 60px */
          background: transparent;
          color: #fff;
          text-align: center;
        }

        .section-title {
          font-size: 28px;
          font-weight: bold;
          margin-bottom: 30px; /* reduced space */
          color: #ffcc00;
        }

        .faculty-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
        }

        @media (max-width: 768px) {
          .faculty-container {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
};

const HomePage: React.FC = () => {
  const headFaculty: Faculty[] = [
    { name: 'Dr.S.LETITIA', qualification: 'M.E.,Ph.D.', title: 'Principal', role: '', image: '/faculty/3.jpg' },
    { name: 'Dr.N.Jagadeeswari', qualification: 'M.E.,Ph.D.', title: 'Assistant Professor', role: 'Faculty Coordinator', image: '/faculty/1.png' },
    { name: 'Dr.K.Saraswathi', qualification: 'M.E.,Ph.D.', title: 'Assistant Professor', role: '', image: '/faculty/5.png' },
    { name: 'Prof.B.Jothi', qualification: 'M.E.', title: 'Associate Professor', role: '', image: '/faculty/4.png' },
  ];

  const teachingStaff: Faculty[] = [
    { name: 'Dr.N.Thirugnanasambandan', qualification: 'M.E.,Ph.D.', title: 'Assistant Professor', role: '', image: '/faculty/img18.jpg' },
    { name: 'Dr.S.P.Vijayanand', qualification: 'M.E.,Ph.D.', title: 'Assistant Professor', role: '', image: '/faculty/img19.jpg' },
    { name: 'Dr.K.Narayanan', qualification: 'M.E.,Ph.D.', title: 'Assistant Professor', role: '', image: '/faculty/img15.jpg' },
    { name: 'Mr.K.Thirunavukkarasu', qualification: 'M.E.', title: 'Assistant Professor', role: '', image: '/faculty/10.jpeg' },
    { name: 'Mrs.N.Naveena Begum', qualification: 'M.E.', title: 'Assistant Professor', role: '', image: '/faculty/11.jpeg' },
    { name: 'Mrs.S.Vanathi', qualification: 'M.E.', title: 'Assistant Professor', role: '', image: '/faculty/6.jpeg' },
    { name: 'Mrs.A.Priyangaa', qualification: 'M.E.', title: 'Assistant Professor', role: '', image: '/faculty/8.jpg' },
  ];

  const nonTeachingStaff: Faculty[] = [
    { name: 'Mr.C.Govindaraj', qualification: 'Diploma', title: 'Lab Assistant', role: '', image: '/faculty/12.jpeg' },
    { name: 'Ms.S.Megala', qualification: 'B.Sc.', title: 'Lab Assistant', role: '', image: '/faculty/13.png' },
  ];

  return (
    <div className="homepage-wrapper">
     
     

      <div className="homepage">
      <ParticleBackground />
      <Navbar />
      <Hero />
        {/* About Section */}
        <section id="about" className="about-section">
          <h2>About Hackathon 2.0</h2>
          <p>
            Hackathon 2025, organized by the Department of Computer Science and Engineering at TPGIT, Vellore, is an Intra-College Hackathon designed to ignite creativity, collaboration, and problem-solving among students.
          </p>
          <ImageGallery />
        </section>

        {/* Events Section */}
        <section id="events" className="events-section">
          <h2>Problem Statements</h2>
          <div className="events-container">
            {PROBLEM_STATEMENTS.map((ps) => (
              <EventCard key={ps.id} item={ps} />
            ))}
          </div>
        </section>

        {/* Faculty Sections */}
        <FacultySection title="" staff={headFaculty} />
        <FacultySection title="Meet Our Teaching Staff" staff={teachingStaff} />
        <FacultySection title="Meet Our Technical Staff" staff={nonTeachingStaff} />

        {/* FAQ Section */}
        <Questions />

        {/* Footer */}
        <footer className="footer">
          <p>© Thanthai Periyar Government Institute of Technology Hackathon 2.0</p>
          <p>🔥 Made with Passion by CSE Department</p>
        </footer>
      </div>

      <style>{`
        .homepage {
          position: relative;
          z-index: 1;
          color: #fff;
          font-family: sans-serif;
          background: transparent;
        }

        section {
          padding: 40px 20px; /* reduced vertical padding for all sections */
          margin-top: 10px;
          text-align: center;
        }

        .about-section h2,
        .events-section h2 {
          color: #ffcc00;
          margin-bottom: 15px; /* smaller gap */
        }

        .about-section p {
          max-width: 700px;
          margin: 0 auto 25px;
          font-size: 18px;
          color: #ccc;
        }

        .events-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
        }

        .footer {
          padding: 30px 20px; /* smaller padding */
          background: transparent;
        }

        .footer p:first-child {
          color: #ffcc00;
          margin-bottom: 5px;
        }

        .footer p:last-child {
          color: #ffa500;
          font-size: 14px;
        }

        @media (max-width: 768px) {
          section {
            padding: 30px 10px;
          }
          .about-section p {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;
