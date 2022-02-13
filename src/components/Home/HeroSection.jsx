import Slider from "react-slick";

const HeroSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 750,
    arrows: false,
    autoplaySpeed: 2000,
  };
  return (
    <Slider {...settings}>
      <div className="w-full h-60 md:h-96 outline-none">
        <img
          className="md:w-full h-full w-full object-cover"
          alt="Slider1"
          src="https://firebasestorage.googleapis.com/v0/b/randevum-5d873.appspot.com/o/SliderImages%2FSlider1.svg?alt=media&token=94f25ffa-f8c6-48d3-b42a-692cc0e21a14"
        />
      </div>
      <div className="w-full h-60 md:h-96 outline-none">
        <img
          className="w-full h-full object-cover"
          alt="Slider1"
          src="https://firebasestorage.googleapis.com/v0/b/randevum-5d873.appspot.com/o/SliderImages%2FSlider2.svg?alt=media&token=aee2dfce-f7d1-4221-ad9b-3f1a5143cb03"
        />
      </div>
      <div className="w-full h-60 md:h-96 outline-none">
        <img
          className="w-full h-full object-cover"
          alt="Slider1"
          src="https://firebasestorage.googleapis.com/v0/b/randevum-5d873.appspot.com/o/SliderImages%2FSlider3.svg?alt=media&token=f55b3ed7-3c00-4174-9b03-c124c750e5c4"
        />
      </div>
    </Slider>
  );
};
export default HeroSection;
