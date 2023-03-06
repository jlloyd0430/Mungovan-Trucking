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
          <h2>Warehousing/Recycling</h2>
            <p>Our warehouse is where we 
dispatch from each day, we store  our tools,deliverables and customer items here, Aswell as seperate and recycle any cleanouts from jobs into cardboard, trash and steel right at our warehouse in Southbridge Ma. a convienient location in central Massachusetts.
</p>
        </div>
           <div className="service">
          <h2>Verizon</h2>
          <p> Looking for a certain peice part?Maybe under or over orderd equipment for the job? maybe order the wrong type or size part? give us a call! we recycle peice parts saving goods that may be thrown away at one job and being able to help out techs in need at another jobsite. we have anything from super structure, cable, cable-rack all the way to small peice parts. this part of our service comes from years of experience and is exclusivly tailord for verizon customers.  </p>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
