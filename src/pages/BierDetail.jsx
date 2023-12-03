import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import Nav from "../components/Nav";
import Back from "../components/Back";
import { useEffect, useState } from "react";

const BierDetail = () => {
  const beerParams = useParams();

  const [beers, setBeers] = useState([]);

  // hier ist andere Lösung, klar und kurzer
  // const [bierDetail, setBierDetail]
  // useEffect(() => {
  //   fetch(`https://ih-beers-api2.herokuapp.com/beers/${beerParams.beers}`)
  //     .then((response) => response.json())
  //     .then((data) => setBierDetail(data))
  //     .catch((error) => console.error(error));
  // }, []);

  // fetch API
  useEffect(() => {
    fetch(`https://ih-beers-api2.herokuapp.com/beers`)
      .then((response) => response.json())
      .then((data) => setBeers(data))
      .catch((error) => console.error(error));
  }, []);

  //  finde das ausgewahlte Bier
  const beerDetail = beers.find((beer) => beer._id === beerParams.beers);

  // hier unter ist das HTML
  return (
    <section className="bierDetailPage">
      <Link to="/">
        <Nav />
      </Link>

      {beerDetail ? ( //这里判断一下beerDetail里是否有数据
        <article>
          <img src={beerDetail.image_url} alt={beerDetail.name} />
          <div>
            <h4>{beerDetail.name}</h4>
            <h3>{beerDetail.tagline}</h3>
          </div>
          <div>
            <div>
              <p>First brewed:</p>
              <p>{beerDetail.first_brewed}</p>
            </div>
            <div>
              <p>Attenuation level:</p>
              <p>{beerDetail.attenuation_level}</p>
            </div>
            <p>{beerDetail.description}</p>
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
