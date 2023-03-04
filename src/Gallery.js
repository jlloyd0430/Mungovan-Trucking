import Photo from "./Photo";
import truckingImg from "./trucking.jpg";
import warehousingImg from "./warehousing.jpg";
import recyclingImg from "./recycling.jpg";
import "./Gallery.css";

function Gallery() {
  return (
    <div className="col-12">
      <h1>Services</h1>
      <div className="services-container">
        <div className="service">
          <img src={truckingImg} alt="trucking" />
          <h2>Trucking</h2>
          <p>
            We operate 26ft straight trucks/ box trucks because they provide
            ample capacity while being small enough to deliver to most location
            in the tight spaces of New England cities. Typically 12 standard
            pallets fit on our trucks which are equipped with liftgates for
            ground deliveries.
          </p>
        </div>
        <div className="service">
          <img src={warehousingImg} alt="warehousing" />
          <h2>Warehousing</h2>
          <p>Our warehousing services are top-notch.</p>
        </div>
        <div className="service">
          <img src={recyclingImg} alt="recycling" />
          <h2>Recycling</h2>
          <p>We offer recycling services for all types of waste.steel cardboard and trash</p>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
