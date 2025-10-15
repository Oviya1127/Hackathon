'use client';
import Marquee from 'react-fast-marquee';

const ImageGallery = () => {
  const images = [
    'gallery/img1.jpg',
    'gallery/img3.jpg',
    'gallery/img4.jpg',
    'gallery/img5.jpg',
    'gallery/img6.jpg',
    'gallery/img7.jpg',
    'gallery/img8.jpg',
    'gallery/img9.jpg',
  ];

  return (
    <section className="image-gallery">
      <h2 className="gallery-title">Hackathon Gallery</h2>
      <Marquee pauseOnHover speed={100} gradient={false} className="marquee">
        {images.map((url, index) => (
          <div key={index} className="image-card">
            <img src={url} alt={`Gallery Image ${index + 1}`} />
            <div className="overlay">
              <span>{`Gallery Image ${index + 1}`}</span>
            </div>
          </div>
        ))}
      </Marquee>

      {/* Inline CSS */}
      <style jsx>{`
        .image-gallery {
          padding: 40px 0;
          background-color: #000;
          text-align: center;
          color: #fff;
        }

        .gallery-title {
          font-size: 36px;
          margin-bottom: 30px;
          color: #ffcc00;
          text-shadow: 2px 2px 5px #000;
        }

        .marquee {
          display: flex;
          align-items: center;
        }

        .image-card {
          position: relative;
          width: 250px;
          height: 180px;
          margin: 0 15px;
          flex-shrink: 0;
          overflow: hidden;
          border-radius: 15px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .image-card:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 25px rgba(255, 204, 0, 0.6);
        }

        .image-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 10px;
          background: rgba(0, 0, 0, 0.6);
          color: #fff;
          opacity: 0;
          transition: opacity 0.3s ease;
          text-align: center;
        }

        .image-card:hover .overlay {
          opacity: 1;
        }

        .overlay span {
          font-size: 14px;
        }
      `}</style>
    </section>
  );
};

export default ImageGallery;
