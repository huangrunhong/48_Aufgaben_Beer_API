import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import Nav from "../components/Nav";
import beers from "../data/beers.json";
import Back from "../components/Back";

const BierDetail = () => {
  const beerParams = useParams();
  console.log(beerParams);

  console.log(beers[0]);
  const detailBeer = beers.filter(
    (beer) => beer._id.toString() === beerParams.beers
  );
  console.log(detailBeer);
  return (
    <section className="bierDetailPage">
      <Link to="/">
        <Nav />
      </Link>
      <article>
        <img src={detailBeer[0].image_url} alt={detailBeer[0].name} />
        <div>
          <h4>{detailBeer[0].name}</h4>
          <h3>{detailBeer[0].tagline}</h3>
        </div>
        <div>
          <div>
            <p>First brewed:</p>
            <p>{detailBeer[0].first_brewed}</p>
          </div>
          <div>
            <p>Attenuation level:</p>
            <p>{detailBeer[0].attenuation_level}</p>
          </div>
          <p>{detailBeer[0].description}</p>
        </div>
        <Link to="/bierlist ">
          <Back />
        </Link>
      </article>
    </section>
  );
};

export default BierDetail;
