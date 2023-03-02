  function Contact() {
  const [currentImg, setCurrentImg] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

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
    { src: img1, alt: "Image 1" }, // duplicate of image 1
    { src: img2, alt: "Image 2" }, // duplicate of image 2
  ];

  useEffect(() => {
    // Clear the previous interval before starting a new one
    clearInterval(intervalId);

    // Start a new interval to cycle through the images
    const id = setInterval(() => {
      setCurrentImg((currentImg + 1) % images.length);
    }, 2500);
    setIntervalId(id);

    // Clear the interval when the component unmounts
    return () => clearInterval(id);
  }, [currentImg, images.length, intervalId]);

  return (
    <>
      <div id="carousel">
        {images.map((image, index) => (
          <LazyLoadImage
            className="home-img"
            key={index}
            src={image.src}
            alt={image.alt}
            style={{
              transform: `translateX(-${
                (currentImg % images.length) * (100 / images.length)
              }%)`,
            }}
            effect="blur"
          />
        ))}
      </div>
      <h2>Mungovan Trucking .llc</h2>
      <div className="text-wrapper">
        <p></p>
        <p>
          Mungovan.land is an application made by Mungovan Trucking employees
          and affiliates exclusivley with the primary purpose of providing
          resources and tools to make the day to day job a little bit easier.
        </p>
        <p className="price">Beta version1.0</p>

        <p className="disc">
          Disclosure: This application is still under construction, if you wish to make an inquiry just message me at 7748135597
        </p>
      </div>
    </>
  );
}
export default Contact;