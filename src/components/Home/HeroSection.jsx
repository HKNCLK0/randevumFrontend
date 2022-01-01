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
      <div className="w-full h-60 md:h-96 flex items-center justify-center bg-pink-300">
        <h1>Slider 1</h1>
      </div>
      <div className="w-full h-60 md:h-96 flex items-center justify-center bg-pink-200">
        <h1>Slider 2</h1>
      </div>
      <div className="w-full h-60 md:h-96 flex items-center justify-center bg-pink-100">
        <h1>Slider 3</h1>
      </div>
    </Slider>
  );
};
export default HeroSection;
