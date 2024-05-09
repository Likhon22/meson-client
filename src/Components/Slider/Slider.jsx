// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from "../../assets/slider6.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Container from "../Container/Container";

const Slider = () => {
  return (
    <div className="py-16">
      <Container>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          loop={true}
        >
          <SwiperSlide>
            <img className="w-full h-[600px]" src={slider1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-[600px]" src={slider1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-[600px]" src={slider1} alt="" />
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
};

export default Slider;
