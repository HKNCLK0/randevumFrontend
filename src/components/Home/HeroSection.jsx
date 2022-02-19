import Slider from "react-slick";

const HeroSection = () => {
  const width = window.innerWidth;

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 750,
    arrows: false,
    autoplaySpeed: 3000,
  };
  return (
    <Slider {...settings}>
      <div className="w-full h-72 md:h-96 outline-none">
        <img
          className="h-full w-full object-cover"
          alt="Slider1"
          src={
            width <= 500
              ? "https://firebasestorage.googleapis.com/v0/b/randevum-5d873.appspot.com/o/SliderImages%2Fresponsive%2FResponsiveSlider1.svg?alt=media&token=e8eb1ef1-b523-4647-a490-b57750934362"
              : "https://firebasestorage.googleapis.com/v0/b/randevum-5d873.appspot.com/o/SliderImages%2FSlider1.svg?alt=media&token=94f25ffa-f8c6-48d3-b42a-692cc0e21a14"
          }
        />
      </div>
      <div className="w-full h-72 md:h-96 outline-none">
        <img
          className="w-full h-full object-cover"
          alt="Slider1"
          src={
            width <= 500
              ? "https://firebasestorage.googleapis.com/v0/b/randevum-5d873.appspot.com/o/SliderImages%2Fresponsive%2FResponsiveSlider2.svg?alt=media&token=76ecdfad-7e15-47f0-81ad-e982489dc64e"
              : "https://firebasestorage.googleapis.com/v0/b/randevum-5d873.appspot.com/o/SliderImages%2FSlider2.svg?alt=media&token=aee2dfce-f7d1-4221-ad9b-3f1a5143cb03"
          }
        />
      </div>
    </Slider>
  );
};
export default HeroSection;
