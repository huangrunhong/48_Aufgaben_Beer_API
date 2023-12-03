import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Button from "../components/Button";

const BierList = () => {
  const [bierData, setBierData] = useState("");
  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => response.json())
      .then((data) => setBierData(data))
      .catch((error) => console.error(error));
  }, []);
  console.log(bierData);
  return (
    <>
      <section className="listPage">
        {bierData ? (
          <div>
            {bierData.map((singleBeer, index) => (
              <article key={index}>
                <img src={singleBeer.image_url} alt={singleBeer.name} />

                <div>
                  <h2>{singleBeer.name} </h2>
                  <h3>{singleBeer.tagline} </h3>
                  <p>Created by {singleBeer.name}</p>
                  <Link to={`/dynamic-router/${singleBeer._id}`}>
                    <Button name={"Details"} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p>Beer....</p>
        )}
      </section>
      <Link to="/">
        <Nav />
      </Link>
    </>
  );
};

export default BierList;
