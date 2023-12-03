import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import Nav from "../components/Nav";
import Back from "../components/Back";
import { useEffect, useState } from "react";

const BierDetail = () => {
  const beerParams = useParams();
  console.log(beerParams);

  const [bierDetail, setBierDetail] = useState([]);

  useEffect(() => {
    fetch(`https://ih-beers-api2.herokuapp.com/beers/${beerParams.beers}`)
      .then((response) => response.json())
      .then((data) => setBierDetail(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <section className="bierDetailPage">
      <Link to="/">
        <Nav />
      </Link>
      {bierDetail ? (
        <article>
          <img src={bierDetail.image_url} alt={bierDetail.name} />
          <div>
            <h4>{bierDetail.name}</h4>
            <h3>{bierDetail.tagline}</h3>
          </div>
          <div>
            <div>
              <p>First brewed:</p>
              <p>{bierDetail.first_brewed}</p>
            </div>
            <div>
              <p>Attenuation level:</p>
              <p>{bierDetail.attenuation_level}</p>
            </div>
            <p>{bierDetail.description}</p>
          </div>
          <Link to="/bierlist ">
            <Back />
          </Link>
        </article>
      ) : (
        <p>Detail is comming</p>
      )}
    </section>
  );
};

export default BierDetail;
