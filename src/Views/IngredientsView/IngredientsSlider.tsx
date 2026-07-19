import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Slide1 from "../../media/flour.jpg";
import Slide2 from "../../media/tomatos.jfif";
import Slide3 from "../../media/cheese.jpg";

const SLIDES = [
  { img: Slide1, txt: "Śnieżny okraszacz pizzy" },
  { img: Slide2, txt: "Czerwone pomidory prosto z włoskiego krzaka" },
  { img: Slide3, txt: "Koza płakała jak dawała" },
];

const IngredientsSlider = () => {
  return (
    <div
      style={
        {
          width: "100%",
          maxWidth: "500px",
          "--swiper-navigation-color": "rgb(99, 130, 75)",
          "--swiper-pagination-color": "rgb(99, 130, 75)",
          "--swiper-navigation-size": "24px",
        } as React.CSSProperties
      }
    >
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {SLIDES.map((slide) => (
          <SwiperSlide>
            <div className="p-5 text-center d-flex flex-column flex-md-row align-items-center gap-2 justify-content-center">
              <img src={slide.img} alt="mąka" height={100} />
              <span>{slide.txt}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default IngredientsSlider;
