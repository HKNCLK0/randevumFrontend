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
      <div className="w-full h-60 md:h-96">
        <img
          className="w-full h-full bg-red-400 object-cover"
          alt="Slider1"
          src="https://firebasestorage.googleapis.com/v0/b/randevum-5d873.appspot.com/o/SliderImages%2FDenemesss.svg?alt=media&token=1b3f64db-bfe7-48b6-9104-e7c4447f1cba"
        />
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
