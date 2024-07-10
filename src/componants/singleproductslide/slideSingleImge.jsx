import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import { Navigation, Thumbs, Zoom } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/zoom';

const SLiderSIngrlProduct = (props) => {
  const imges = props.Imges
  const [thumbsSwiper, setThumbsSwiper] = useState();
  const [ClintX, setClintX] = useState();
  const [ClintY, setClintY] = useState();
  const Handelclint = (e) => {
    if (e.clientX > 550 && e.clientX < 790){
      setClintX(e.clientX)
      setClintY(e.clientY)
    }
  }
return (
    <>
      <Swiper
      style={{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }}
      spaceBetween={10}
      navigation={true}
      thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
      modules={[Navigation, Thumbs, Zoom]}
      className="mySwiper2"
      rewind={true}
      zoom={true}
    >
      {
        imges.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-zoom-container">
              <img src={img} alt="prudactImge" style={{ "--transformX": `${ClintX}px`, "--transy": `${ClintY}px` }} onMouseMove={Handelclint}  />
            </div>
          </SwiperSlide>
        ))}
      
        
      </Swiper>
      <Swiper
        spaceBetween={0}
        slidesPerView={4}
        watchSlidesProgress={true}
        modules={[Navigation, Thumbs]}
        className="mySwiper"
      onSwiper={setThumbsSwiper}
      rewind={true}
      >
        {
        imges.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt="prudactImge" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );


}

export default SLiderSIngrlProduct;