import { useState, useEffect } from "react";
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
    const interval = setInterval(() => {
      setCurrentImg((currentImg + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [currentImg]);

  return (
    <>
      <div id="text-wrapper2">
        {images.map((image, index) => (
          <img
            className="home-img"
            key={index}
            src={image.src}
            alt={image.alt}
            style={{ display: currentImg === index ? "block" : "none" }}
          />
        ))}
      </div>

      <h2>Mungovan Trucking .llc</h2>

      <div className="text-wrapper">
        <p></p>
        <p>
          Mungovan.land is an application made by Mungovan Trucking employees
          exclusivley for employees with the primary purpose of
          providing resources and tools to make the day to day job a little bit
          easier.
        </p>
        <p className="price">Beta version1.0</p>

        <p className="disc">
          Disclosure: This application is still under construction, if
          you wish to make an inquiry just message me at 7748135597
        </p>
      </div>
    </>
  );
}

export default Contact;
