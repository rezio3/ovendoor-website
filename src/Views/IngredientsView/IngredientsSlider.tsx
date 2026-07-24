import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Slide1 from "../../media/ingredientsSlide1.png";
import Slide2 from "../../media/ingredientsSlide2.png";
import Slide3 from "../../media/ingredientsSlide3.png";

const SLIDES = [
  {
    img: Slide2,
    txt: "Najwyższej jakości oliwa z oliwek najwyższego chainsu z pierwszego tłoczenia na zimno. Cechuje się głębokim, lekko owocowym aromatem i zrównoważonym smakiem, który idealnie podkreśla chrupkość ciasta oraz wykańcza kompozycję śródziemnomorskich składników.",
  },
  {
    img: Slide3,
    txt: "Serce i fundament prawdziwego ciasta. Profesjonalna, włoska mąka pszenna Le 5 Stagioni Superiore Typ 00. Działa cuda podczas długiego wyrastania ciasta – to właśnie dzięki niej brzegi naszej pizzy są niesamowicie wyrośnięte, lekkie i chrupiące.",
  },
  {
    img: Slide1,
    txt: "Całe, obierane pomidory włoskie La Regina to serce naszego sosu do pizzy. Dojrzewające we włoskim słońcu, charakteryzują się wyjątkowo słodkim smakiem, naturalnym aromatem i niską kwasowością. Zero zbędnych dodatków – tylko czysta, włoska natura.",
  },
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
            <div className="p-5 text-center d-flex flex-column align-items-center gap-2 justify-content-center">
              <img src={slide.img} alt="mąka" height={100} />
              <span style={{ fontSize: 14 }}>{slide.txt}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default IngredientsSlider;
