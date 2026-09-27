import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const slides = [
  {
    image: "/images/girl-drink-bad-water.png",
    title: "Unsafe water creates daily health risks",
  },
  {
    image: "/images/girl-get's-ill.png",
    title: "Contaminated tanks can affect the whole family",
  },
  {
    image: "/images/mother-call-nirvaan.png",
    title: "Professional cleaning restores hygiene and confidence",
  },
  {
    image: "/images/nirvaan-cleans-tank.png",
    title: "Mechanized cleaning removes sludge and buildup",
  },
  {
    image: "/images/mother-thank-nirvaan.png",
    title: "Clean tanks support safer everyday living",
  },
  {
    image: "/images/girl-drink-safe-water.png",
    title: "Pure water starts with a properly cleaned tank",
  },
];

const PhotoSlider = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, EffectCoverflow, Pagination]}
        effect="coverflow"
        centeredSlides
        loop
        grabCursor
        slidesPerView={1.15}
        spaceBetween={14}
        speed={900}
        autoplay={{
          delay: 2800,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 70,
          modifier: 1.3,
          scale: 0.92,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1.4, spaceBetween: 18 },
          1024: { slidesPerView: 1.9, spaceBetween: 24 },
        }}
        className="story-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.image + index}>
            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-slate-950 shadow-2xl shadow-slate-950/20">
              <img
                src={slide.image}
                alt={slide.title}
                className="h-[300px] w-full object-cover sm:h-[360px] lg:h-[420px]"
              />
              <div className="border-t border-white/10 bg-slate-950/95 px-5 py-4">
                <p className="text-sm font-medium leading-6 text-slate-100">
                  {slide.title}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PhotoSlider;
