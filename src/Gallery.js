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
            <p>
              Our dispatch operations are carried out daily from our warehouse, which also serves as a storage facility for our tools, deliverables, and customer items. Additionally, we have a designated area within our warehouse where we separate and recycle any cleanouts from our jobs into cardboard, trash, and steel. Our warehouse is located in Southbridge, MA, a convenient and central location in Massachusetts.
</p>
        </div>
           <div className="service">
          <h2>Inventory</h2>
          <p>  Are you in need of a specific piece of equipment or perhaps an excess of ordered equipment for your job? Have you mistakenly ordered the wrong type or size of a part? If so, don't hesitate to contact us! At our company, we specialize in recycling unused pieces of equipment that might have been discarded at one job site and repurposing them to assist technicians in need at another job site. We offer a wide range of equipment, from large-scale super structures and cable-racks to small, individual pieces. Our experience in this field has enabled us to tailor our services exclusively for Verizon customers
            </p>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
