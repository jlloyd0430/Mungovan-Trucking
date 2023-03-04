import React, { useEffect } from "react";
import Photo from "./Photo";
import Spinner from "./Spinner/Spinner";
import useAxios from "./hooks/useAxios";

function Gallery() {
  const [setUrl, data, loading, setLoading] = useAxios();

  // useEffect(() => {
  //   setUrl(
  //     "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=Lc6mCmy8pmn55pfWyTeOUCytfdZvsJsUqRhtowWL"
  //   );
  //   setLoading(true);
  // }, []);

  return (
    <div className="col-12">
      <h1>Services</h1>
      <h2>Trucking</h2>
      <p>
        We operate 26ft straight trucks/ box trucks because they provide ample
        capacity while being small enough to deliver to most location in the
        tight spaces of New England cities. Typically 12 standard pallets fit on
        our trucks which are equipped with liftgates for ground deliveries.
      </p>
      <h2>Warehousing</h2>
      <p></p>
      <h2>Recycling</h2>
      <p></p>
      <h2></h2>
      <div className="row">
        {!loading && data ? (
          data.photos.map((photo) => <Photo key={photo.id} photo={photo} />)
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
}

export default Gallery;
