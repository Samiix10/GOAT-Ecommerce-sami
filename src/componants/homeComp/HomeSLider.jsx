import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import CardHome from "./CardHomeSliders";

const HomeSlider = () => {
  const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://dummyjson.com/products/category/mens-shirts")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.products));
  //   fetch("https://dummyjson.com/products/category/womens-dresses")
  //     .then((res) => res.json())
  //     .then((data) => { setData((olddata) => [...olddata, ...data.products]);  console.log(...data.products)});
  //   fetch("https://fakestoreapi.com/products/category/men's%20clothing")
  //     .then((res) => res.json())
  //     .then((data) => setData((olddata) => [...olddata, ...data]));
  //   fetch("https://fakestoreapi.com/products/category/women's%20clothing")
  //     .then((res) => res.json())
  //     .then((data) => setData((olddata) => [...olddata, ...data]));
  // }, []);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/mens-shirts")
      .then((res) => res.json())
      .then((data) => setData(data.products))
      .then(
        fetch("https://dummyjson.com/products/category/womens-dresses")
          .then((res) => res.json())
          .then((data) => setData((olddata) => [...olddata, ...data.products]))
          .then(
            fetch("https://dummyjson.com/products/category/tops")
              .then((res) => res.json())
              .then((data) => setData((olddata) => [...olddata, ...data.products]))
              
          )
      );
  }, []);

  return (
    <>
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={5}
        slidesPerView={"auto"}
        navigation
        loop={true}
        loopAdditionalSlides={true}
        rewind={true}
        loopAddBlankSlides={false}
        centeredSlides={true}
        centeredSlidesBounds={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
      >
        {data.map((product, index) => (
          <SwiperSlide key={index}>
            <CardHome item={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HomeSlider;
