import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import slide1 from "../../assets/success.jpg";
import slide2 from "../../assets/success1.jpg";
import slide3 from "../../assets/success2.jpg";
import slide4 from "../../assets/success3.jpg";
import slide5 from "../../assets/success4.jpg";
import slide6 from "../../assets/success5.jpg";
import Container from "../Container/Container";

const SuccessStory = () => {
  return (
    <Container>
      <div className="">
        <div>
          <h3 className="md:text-3xl text-2xl text-center font-bold mb-9 text-[#3E1B99]">
            Success History
          </h3>
        </div>
        <Swiper
          effect={"coverflow"}
          slidesPerView={3}
          grabCursor={true}
          centeredSlides={true}
          spaceBetween={20}
          loop={true}
          pagination={{
            clickable: true,
          }}
          coverflowEffect={{
            rotate: 4,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: false,
          }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[Pagination, EffectCoverflow, Navigation, Autoplay]}
          onAutoplay={true}
          className="mySwiper "
        >
          <SwiperSlide>
            <img className="rounded-xl shadow-2xl" src={slide1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="rounded-xl shadow-2xl" src={slide2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="rounded-xl shadow-2xl" src={slide3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="rounded-xl shadow-2xl" src={slide4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="rounded-xl shadow-2xl" src={slide5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="rounded-xl shadow-2xl" src={slide6} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </Container>
  );
};

export default SuccessStory;
