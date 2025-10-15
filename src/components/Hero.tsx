
import { Link } from 'react-router-dom';
import Timer from './sub/Timer';

const Hero = () => {
  return (
    <section className='relative flex flex-col items-center justify-center min-h-screen overflow-hidden '>
      <div className='flex flex-col items-center justify-center w-full px-4 py-16 sm:py-20 space-y-12'>

        {/* Top row: Logos + Title */}
        <div className="w-full max-w-6xl flex items-center justify-between">
          <div className="flex justify-start items-center">
            <img src="/logo/tpgit_logo.png" className="w-14 h-14 sm:w-28 sm:h-28" alt="TPGIT Logo" />
          </div>

          <div className="flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase leading-tight text-center">
  <span className='mr-3 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent'>
    Hackathon
  </span>
  <span className="italic bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
    2.0
  </span>
</h1>

            <p className='text-xl sm:text-2xl md:text-3xl text-red-300/80 font-medium mt-2 text-center'>
              Intra College Hackathon
            </p>
          </div>

          <div className="flex justify-end items-center">
            <img src="/logo/csealogo.png" className="w-16 h-16 sm:w-32 sm:h-32" alt="CSE Logo" />
          </div>
        </div>

        <div className='bg-yellow-500/10 backdrop-blur-md rounded-full px-6 py-2 border border-red-400/50'>
          <p className='text-yellow-400 text-base sm:text-lg md:text-xl font-medium tracking-wider'>
            October 30
          </p>
        </div>

        <div className='flex flex-col items-center space-y-16'>
          <Timer />

          <Link to="/signup">
            <button
              className="mt-6 cursor-pointer w-[12em] sm:w-[16em] md:w-[18em] h-[3em] text-white font-semibold text-sm sm:text-base md:text-lg bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-[length:400%] rounded-full shadow-lg transition-all duration-300 ease-in-out hover:bg-[length:200%] focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 active:scale-95"
              style={{ zIndex: 0 }}
            >
              Register Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
