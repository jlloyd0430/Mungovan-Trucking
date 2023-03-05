import Photo from "./Photo";

function Gallery() {
  return (
    <div className="col-12">
      <h1>Services</h1>
      <div className="services-container">
        <div className="service">
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
          <h2>Warehousing</h2>
            <p>Our warehouse is where we store tools,deliverables and customer items and where we dispatch from.</p>
        </div>
        <div className="service">
          <h2>Recycling</h2>
          <p> when we cleanout trash or anything on any job, we seperate and recycle it all from cardboard, trash and steel right at our warehouse in Southbridge Ma. a convienient location in central Massachusetts</p>
        </div>
           <div className="service">
          <h2>Verizon</h2>
          <p> Looking for a certain peice part? did the engineer under order equipment for the job? maybe order the wrong type or size part? give us a call! we have been recycling peice parts saving the goods that may be thrown away at one job and being able to help out a tech in need at another job. we have anything from super structure and cable rack all the way to small peice parts. this part of our service comes with years of experience and being able to identify any part the customer may need exclusivly tailord for verizon customers.  </p>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
