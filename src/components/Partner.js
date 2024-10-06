import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axiosApi from "../api/api";
export default function Partner() {
  var settingslogo = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [partner, setPartner] = useState([]);
  useEffect(() => {
    getPartner();
  }, []);
  const getPartner = async () => {
    const resp = await axiosApi.get("Partners");
    setPartner(resp.data);
  };
  const elementPartner = partner.map((partner)=>{
    return (
      <img className="w-95" src={`${partner.logo}`} alt="" />
    );
  })

  return (
    <div className="container my-5 partner">
      <div className="title fade-in-box">
        <h3>đối tác</h3>
      </div>
      <div className="dt_logo fade-in-box">
        <Slider {...settingslogo}>
        {elementPartner}
        </Slider>
        {/* <img src="../AnhCat/dt-sunrise-sapa.jpg" alt=""> */}
      </div>
    </div>
  );
}
