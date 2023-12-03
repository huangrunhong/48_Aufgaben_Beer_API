import { Link } from "react-router-dom";
import Back from "../components/Back";
import Nav from "../components/Nav";
import { useEffect, useState } from "react";

const RandomBeer = () => {
  const [bier, setBier] = useState([]);

  // fetch api数据
  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => response.json())
      .then((data) => setBier(data))
      .catch((err) => console.error(err));
  }, []);

  const randomBeer = bier[Math.floor(Math.random() * bier.length)];

  return (
    <section className="bierDetailPage">
      {randomBeer ? (
        <article>
          <img src={randomBeer.image_url} alt={randomBeer.name} />
          <div>
            <h4>{randomBeer.name} </h4>
            <h3>{randomBeer.tagline} </h3>
          </div>
          <div>
            <div>
              <p>First brewed:</p>
              <p>{randomBeer.first_brewed} </p>
            </div>
            <div>
              <p>Attenuation level:</p>
              <p>{randomBeer.attenuation_level}</p>
            </div>
            <p>{randomBeer.description}</p>
          </div>
          <Link to="/ ">
            <Back />
          </Link>
        </article>
      ) : (
        <p>random beer is comming</p>
      )}
      <Link to="/">
        <Nav />
      </Link>
    </section>
  );
};

export default RandomBeer;
