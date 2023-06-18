import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">

        <h6 className="mb-0 mt-3">Costi</h6>
        <p className="section__description">Client multumit</p>
        <p className="section__description">
          Oamenii sunt de încredere,  masinile sunt in stare perfecte, eu recomand 1000%
          Am achiziționat un Golf 6 R , si masima merge perfect.
          arata perfect,etc
        </p>


      </div>

      <div className="testimonial py-4 px-3">

        <h6 className="mb-0 mt-3">Mihai</h6>
        <p className="section__description">Client multumit</p>

        <p className="section__description">
          Super baietii! Au o gama variata de masini la preturi accesibile ! Recomand cu incredere oricui !!!
        </p>
      </div>

      <div className="testimonial py-4 px-3">

        <h6 className="mb-0 mt-3">Alexandra</h6>
        <p className="section__description">Client multumit</p>
        <p className="section__description">
          Am achizitionat un Volkswagen Yetta  și sunt foarte, foarte mulțumită! Mulțumesc pentru promptitudine și seriozitate! Totul a decurs intr-un timp scurt, o persoană întocmește actele, altă persoană ridică numerele roșii. Iar în caz de nevoie se prezintă la RAR si Poliție. Vă mulțumesc pentru tot!
        </p>
      </div>

      <div className="testimonial py-4 px-3">

        <h6 className="mb-0 mt-3">Claudiu</h6>
        <p className="section__description">Client multumit</p>

        <p className="section__description">
          Mi-am cumpărat prima mașina de la ei. Totul a decurs fără probleme
          Super mulțumit!
        </p>


      </div>
    </Slider>
  );
};

export default Testimonial;
