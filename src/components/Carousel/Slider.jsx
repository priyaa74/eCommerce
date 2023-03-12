import React from "react";
import ImageSlider from "./ImageSlider";
import './slider.css';

export default function Slider() {
  

  const slides = [
    { url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg", title: "image1" },
    { url: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg", title: "image2" },
    { url: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg", title: "image3" },
    { url: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg", title: "image4" },
  ];

  const containerStyles = {
    width: "80%",
    height: "300px",
    margin: "0 auto",
  };

  return (
    <div>
      <div style={containerStyles} className="slider-wrapper">
        <ImageSlider slides={slides} parentWidth={1550} />
      </div>
    </div>
  );
}