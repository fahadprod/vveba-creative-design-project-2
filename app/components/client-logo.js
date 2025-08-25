// components/AnimatedClientLogoCarousel.js
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const AnimatedClientLogoCarousel = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Using actual company logos from trusted sources
  const clients = [
    {
      id: 1,
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1024px-Google_2015_logo.svg.png"
    },
    {
      id: 2,
      name: "Facebook",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png"
    },
    {
      id: 3,
      name: "Slack",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/1024px-Slack_icon_2019.svg.png"
    },
    {
      id: 4,
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png"
    },
    {
      id: 5,
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
    },
    {
      id: 6,
      name: "Apple",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1024px-Apple_logo_black.svg.png"
    },
    {
      id: 7,
      name: "Netflix",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png"
    },
    {
      id: 8,
      name: "Twitter",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/X_logo_2023.svg/260px-X_logo_2023.svg.png"
    },
    {
      id: 9,
      name: "Adobe Photoshop",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/330px-Adobe_Photoshop_CC_icon.svg.png"
    }
  ];

  // Group clients into sets of 3 for each slide
  const groupedClients = [];
  for (let i = 0; i < clients.length; i += 3) {
    groupedClients.push(clients.slice(i, i + 3));
  }

  if (!isMounted) {
    return <div className="animated-client-logo-carousel-loading">Loading...</div>;
  }

  return (
    <div className="animated-client-logo-carousel">
      <h1 className="section-heading">Our Clients</h1>
      
      <div className="animated-client-logo-carousel-container">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={1000}
          className="animated-client-logo-carousel-swiper"
        >
          {groupedClients.map((clientGroup, index) => (
            <SwiperSlide key={index} className="animated-client-logo-carousel-slide">
              <div className="animated-client-logo-carousel-group">
                {clientGroup.map((client) => (
                  <div key={client.id} className="animated-client-logo-carousel-item">
                    <div className="animated-client-logo-carousel-image-container">
                      <img 
                        src={client.logo} 
                        alt={client.name}
                        className="animated-client-logo-carousel-image"
                      />
                    </div>
                    <p className="animated-client-logo-carousel-name">{client.name}</p>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default AnimatedClientLogoCarousel;