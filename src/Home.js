import { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./App.css";

import img1 from "./images/img1.JPG";
import img2 from "./images/img2.JPG";
import img3 from "./images/img3.JPG";
import img4 from "./images/img4.JPG";
import img5 from "./images/img5.JPG";
import img6 from "./images/img6.JPG";
import img7 from "./images/img7.JPG";
import img8 from "./images/img8.JPG";
import img9 from "./images/img9.JPG";
import img10 from "./images/img10.JPG";
import img11 from "./images/img11.JPG";

function Contact() {
  const [currentImg, setCurrentImg] = useState(0);

  const images = [
    { src: img1, alt: "Image 1" },
    { src: img2, alt: "Image 2" },
    { src: img3, alt: "Image 3" },
    { src: img4, alt: "Image 4" },
    { src: img5, alt: "Image 5" },
    { src: img6, alt: "Image 6" },
    { src: img7, alt: "Image 7" },
    { src: img8, alt: "Image 8" },
    { src: img9, alt: "Image 9" },
    { src: img10, alt: "Image 10" },
    { src: img11, alt: "Image 11" },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImg((currentImg + 1) % images.length);
    }, 100);

    return () => clearInterval(intervalId);
  }, [currentImg, images.length]);

  const carouselStyle = {
    width: `${(images.length + 1) * 100}%`,
    transform: `translateX(-${currentImg * (100 / (images.length + 1))}%)`,
    transition: "transform 95s ease-out",
  };

  return (
    <>
      <div className="carousel-wrapper">
        <div id="carousel" style={carouselStyle}>
          {images.map((image, index) => (
            <LazyLoadImage
              className="home-img"
              key={index}
              src={image.src}
              alt={image.alt}
              effect="blur"
            />
          ))}
          {/* Duplicate the first image to the end to create the infinite loop */}
          <LazyLoadImage
            className="home-img"
            key={-1}
            src={images[0].src}
            alt={images[0].alt}
            effect="blur"
          />
        </div>
      </div>
      <h2>Mungovan Trucking .llc</h2>
      <div className="text-wrapper">
        <p></p>
        <p>
          Mungovan Trucking LLC has served New England since 1947, building long lasting relationships and experience as proffesionals in Logistics.
        </p>
        <p className="price">Beta version1.0</p>

        <p className="disc">
          Disclosure: This application is still under construction, if you wish
          to request a feature just message me at 7748135597
        </p>
      </div>
    </>
  );
}

export default Contact;
