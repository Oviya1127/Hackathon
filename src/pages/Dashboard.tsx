import React from 'react';
import AnimatedBackground from '../components/ui/AnimatedBackground';
import EventCard from '../components/ProblemStatementCard';
import FacultyCard from '../components/FacultyCard';
import { PROBLEM_STATEMENTS } from "../data/ProblemStatements";
import Navbar from '../components/Navbar';
import ImageGallery from '../components/ImageGallery';
import Questions from '../components/FAQ';
import Hero from '../components/Hero';

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
      <h2 className="section-title">{title}</h2>
      <div className="faculty-container">
        {staff.map((member, index) => (
          <FacultyCard key={index} {...member} />
        ))}
      </div>

      <style jsx>{`
        .faculty-section {
          padding: 60px 20px;
          background: linear-gradient(to right, #1a1a1a, #000, #1a1a1a);
          color: #fff;
          text-align: center;
        }

        .section-title {
          font-size: 32px;
          font-weight: bold;
          margin-bottom: 40px;
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
    { name: 'Dr.N.Jagadeeswari', qualification: 'M.E.,Ph.D.', title: 'Assistant Professor', role: 'Treasurer & Event Coordinator', image: '/faculty/1.png' },
    { name: 'Dr.K.Saraswathi', qualification: 'M.E.,Ph.D.', title: 'Assistant Professor', role: '', image: '/faculty/5.png' },
    { name: 'Prof.B.Jothi', qualification: 'M.E.', title: 'Associate Professor', role: '', image: '/faculty/4.png' },
  ];

  const teachingStaff: Faculty[] = [
    { name: 'Mr.K.Thirunavukkarasu', qualification: 'M.E.', title: 'Assistant Professor', role: '', image: '/faculty/10.jpeg' },
    { name: 'Mrs.N.Naveena Begum', qualification: 'M.E.', title: 'Assistant Professor', role: '', image: '/faculty/11.jpeg' },
    { name: 'Mrs.S.Vanathi', qualification: 'M.E.', title: 'Assistant Professor', role: '', image: '/faculty/6.jpeg' },
    { name: 'Mrs.A.Priyangaa', qualification: 'M.E.', title: 'Assistant Professor', role: '', image: '/faculty/8.jpg' },
    { name: 'Dr .K.Narayanan', qualification: 'M.E.,Ph.D.', title: 'Assistant Professor', role: '', image: '/faculty/img15.jpg' },
    { name: 'Dr .S.P.Vijayanand', qualification: 'M.E.,Ph.D.', title: 'Assistant Professor', role: '', image: '/faculty/img18.jpg' },
    { name: 'Dr.N.Thirugnanasambandan', qualification: 'M.E.,Ph.D.', title: 'Assistant Professor', role: '', image: '/faculty/img19.jpg' },
  ];

  const nonTeachingStaff: Faculty[] = [
    { name: 'Mr.C.Govindaraj', qualification: 'Diploma', title: 'Lab Assistant', role: '', image: '/faculty/12.jpeg' },
    { name: 'Ms.S.Megala', qualification: 'B.Sc.', title: 'Lab Assistant', role: '', image: '/faculty/13.png' },
  ];

  return (
    <div className="homepage">
      <Navbar />
      <AnimatedBackground />

      {/* Hero Section */}
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
      <FacultySection title="Meet Our Head" staff={headFaculty} />
      <FacultySection title="Meet Our Teaching Staff" staff={teachingStaff} />
      <FacultySection title="Meet Our Technical Staff" staff={nonTeachingStaff} />

      {/* FAQ Section */}
      <Questions />

      {/* Footer */}
      <footer className="footer">
        <p>© Thanthai Periyar Government Institute of Technology Hackathon 2.0</p>
        <p>🔥 Made with Passion by CSE Department</p>
      </footer>

      <style jsx>{`
        .homepage {
          background-color: #000;
          color: #fff;
          font-family: sans-serif;
        }

        .about-section {
          padding: 60px 20px;
          text-align: center;
          background: linear-gradient(to bottom, #1a1a1a, #000);
        }

        .about-section h2 {
          font-size: 40px;
          color: #ffcc00;
          margin-bottom: 20px;
        }

        .about-section h3 {
          font-size: 28px;
          color: #ffa500;
          margin-bottom: 20px;
        }

        .about-section p {
          max-width: 700px;
          margin: 0 auto 40px;
          font-size: 18px;
          color: #ccc;
        }

        .events-section {
          padding: 60px 20px;
          text-align: center;
          background-color: #111;
        }

        .events-section h2 {
          font-size: 40px;
          color: #ffcc00;
          margin-bottom: 40px;
        }

        .events-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
        }

        .footer {
          padding: 40px 20px;
          text-align: center;
          background-color: #111;
        }

        .footer p:first-child {
          color: #ffcc00;
          margin-bottom: 10px;
        }

        .footer p:last-child {
          color: #ffa500;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
