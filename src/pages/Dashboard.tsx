import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Users, Phone } from 'lucide-react';
import AnimatedBackground from '../components/ui/AnimatedBackground';
import CountdownTimer from '../components/CountdownTimer';
import EventCard from '../components/ProblemStatementCard';
import FacultyCard from '../components/FacultyCard';
import { PROBLEM_STATEMENTS } from "../data/problemStatements";
import SponsorCard from '../components/SponsorCard';
import Navbar from '../components/Navbar';
import FaqAccordion from '../components/ui/FaqAccordion';
import ImageGallery from '../components/ImageGallery';
import Questions from '../components/FAQ';
import Hero from '../components/Hero';
import AlumniSponsor from '../components/AlumniSponsor';

// Faculty Section reusable component
const FacultySection = ({ title, staff }) => (
  <section className="py-20 px-4 relative">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent drop-shadow-md">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 justify-center items-center">
        {staff.map((member, index) => (
          <FacultyCard key={index} {...member} />
        ))}
      </div>
    </div>
  </section>
);

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState<any>({});
  const targetDate = new Date('October 30, 2025 00:00:00');

  // Faculty data
  const headFaculty = [
    {
      name: 'Dr.P.K.Palani',
      qualification: 'B.E.(HONS),M.E.,Ph.D.',
      title: 'Principal',
      role: '',
      image: '/faculty/2.png'
    },
    {
      name: 'Dr.S.LETITIA',
      qualification: 'M.E.,Ph.D.',
      title: 'Head of the Department',
      role: '',
      image: '/faculty/3.jpg'
    },
    {
      name: 'Dr.N.Jagadeeswari',
      qualification: 'M.E.,Ph.D.',
      title: 'Assistant Professor',
      role: 'Treasurer & Event Coordinator',
      image: '/faculty/1.png'
    },
    {
      name: 'Prof.B.Jothi',
      qualification: 'M.E.',
      title: 'Associate Professor',
      role: '',
      image: '/faculty/4.png'
    },
    {
      name: 'Dr.K.Saraswathi',
      qualification: 'M.E.,Ph.D.',
      title: 'Assistant Professor',
      role: '',
      image: '/faculty/5.png'
    }
  ];

  const teachingStaff = [
    {
      name: 'Mr.K.Thirunavukkarasu',
      qualification: 'M.E.',
      title: 'Assistant Professor',
      role: '',
      image: '/faculty/10.jpeg'
    },
    {
      name: 'Mrs.N.Naveena Begum',
      qualification: 'M.E.',
      title: 'Assistant Professor',
      role: '',
      image: '/faculty/11.jpeg'
    },
    {
      name: 'Mrs.D.Ramya',
      qualification: 'M.Tech',
      title: 'Assistant Professor',
      role: '',
      image: '/faculty/7.jpg'
    },
    {
      name: 'Mrs.S.Vanathi',
      qualification: 'M.E.',
      title: 'Assistant Professor',
      role: '',
      image: '/faculty/6.jpeg'
    },
    {
      name: 'Mrs.A.Priyangaa',
      qualification: 'M.E.',
      title: 'Assistant Professor',
      role: '',
      image: '/faculty/8.jpg'
    },
    {
      name: 'Mrs.P.Vijayalakshmi',
      qualification: 'M.E.',
      title: 'Assistant Professor',
      role: '',
      image: '/faculty/9.jpg'
    }
  ];

  const nonTeachingStaff = [
    {
      name: 'Mr.C.Govindaraj',
      qualification: 'Diploma',
      title: 'Lab Assistant',
      role: '',
      image: '/faculty/12.jpeg'
    },
    {
      name: 'Ms.S.Megala',
      qualification: 'B.Sc.',
      title: 'Lab Assistant',
      role: '',
      image: '/faculty/13.png'
    }
  ];

  const sponsors = [
    { name: 'QSpiders', image: '/sponsor/qspider.png' },
    { name: 'T.K.T', image: '/sponsor/tkt.png' }
  ];

  useEffect(() => {
    const getEvents = async () => {
      const eventsData = await fetchEvents();
      setEvents(eventsData);
    };
    getEvents();
  }, []);

  const techEvents = Object.entries(events)
    .filter(([_, e]: [string, any]) => e.type === 'technical')
    .map(([id, e]: [string, any]) => ({
      id,
      ...e,
      image: '/' + e.image || '/default-tech.png'
    }));

  const nonTechEvents = Object.entries(events)
    .filter(([_, e]: [string, any]) => e.type === 'non-technical')
    .map(([id, e]: [string, any]) => ({
      id,
      ...e,
      image: '/' + e.image || '/default-tech.png'
    }));

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white z-30">
      <Navbar />
      <AnimatedBackground />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
            About Hackathon 2.0
          </h2>

          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-center text-yellow-400 font-sharetech">
              Intra College Hackathon
            </h3>

            <p className="text-gray-300 leading-tight text-base sm:text-lg sm:leading-relaxed max-w-4xl mx-auto text-justify font-sharetech">
              Hackathon 2025, organized by the Department of Computer Science and Engineering at Thanthai Periyar Government Institute of Technology (TPGIT), Vellore, is an Intra-College Hackathon designed to ignite creativity, collaboration, and problem-solving among students.
              This edition, Hackathon 2.0, provides an inspiring platform where innovative minds come together to build real-world solutions using cutting-edge technologies.
              Hackathon 2.0 isn’t just a competition — it’s a celebration of innovation, teamwork, and learning.
            </p>
          </div>
          <ImageGallery />
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="sm:py-20 px-4 relative">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
      Problem Statements
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {PROBLEM_STATEMENTS.map((ps) => (
        <EventCard key={ps.id} item={ps} />
      ))}
    </div>
  </div>
</section>


      

      {/* Faculty Sections */}
      <FacultySection title="Meet Our Head" staff={headFaculty} />
      <FacultySection title="Meet Our Teaching Staff" staff={teachingStaff} />
      <FacultySection title="Meet Our Technical Staff" staff={nonTeachingStaff} />

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
            Contact & Location
          </h2>

          <div className="flex flex-col items-center justify-center space-y-8">
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div className="bg-gray-900 bg-opacity-80 p-4 rounded-lg border border-yellow-500 flex items-center space-x-4 hover:shadow-[0_0_20px_rgba(255,200,0,0.5)] transition-all">
                <Users size={24} className="text-yellow-400" />
                <div>
                  <p className="text-yellow-400 font-medium">Student 1</p>
                  <p className="text-gray-300">26363636362</p>
                </div>
              </div>

              <div className="bg-gray-900 bg-opacity-80 p-4 rounded-lg border border-yellow-500 flex items-center space-x-4 hover:shadow-[0_0_20px_rgba(255,200,0,0.5)] transition-all">
                <Users size={24} className="text-yellow-400" />
                <div>
                  <p className="text-yellow-400 font-medium">Student 2</p>
                  <p className="text-gray-300">37373773774</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 bg-opacity-80 p-4 rounded-lg border border-red-500 flex items-center space-x-4 hover:shadow-[0_0_20px_rgba(255,100,0,0.6)] transition-all">
              <MapPin size={24} className="text-red-500" />
              <div>
                <p className="text-red-400 font-medium">
                  Venue: Department of Computer Science Seminar Hall
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <Questions />

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800 bg-gradient-to-r from-yellow-700 via-orange-800 to-red-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-200 mb-4">
            © Thanthai Periyar Government Institute of Technology Hackathon 2.0
          </p>
          <div className="text-sm text-gray-100">
            <p>🔥 Made with Passion by CSE Department</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
