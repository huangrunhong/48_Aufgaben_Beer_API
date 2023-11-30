import { Link } from "react-router-dom";
import Back from "../components/Back";
import Nav from "../components/Nav";
const RandomBeer = () => {
  return (
    <section className="bierDetailPage">
      <article>
        <img
          src="https://s3-alpha-sig.figma.com/img/1f2f/5612/21efaa66c5a6671ec77715c85854ae44?Expires=1702252800&Signature=g7Nzw3h3eLPuB~Je61~jGbZ2JHBdYRzfJbxzuITYb2P9kHcIqu2G3KAi0maMPkfTPW8LVKj5lTzYBXbigtvDUmmVSwHmWK7tkDAfSvliFt6Usu1CWrnX2um4hk8X~Vp6KNDUcfzGwMH5lne6QjY-mFLM990AQWLwAjLORfn21zahnB8WeDv5YWH03ThZQWxRpc9XUKtR6agbOFbYKtOoXw9dtde32iu5V1OmZUptZkdGAmj4ofDHJC46OeUiOIyOt~oV7FJeOXbiKyq267JRsiKMQp40~7jzXRuxRONaO9O3wR0MzLZOd5HHJcJbn27s2sUdEeQmMYzGkwUCeSIglw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="Avery Brown 
          Dredge"
        />
        <div>
          <h4>Avery Brown Dredge</h4>
          <h3>Bloggers' Imperial Pilsner.</h3>
        </div>
        <div>
          <div>
            <p>First brewed:</p>
            <p> 09/2007</p>
          </div>
          <div>
            <p>Attenuation level:</p>
            <p>76</p>
          </div>
          <p>
            An Imperial Pilsner in collaboration with beer writers. Tradition.
            Homage. Revolution. We wanted to showcase the awesome backbone of
            the Czech brewing tradition, the noble Saaz hop, and also tip our
            hats to the modern beers that rock our world, and the people who
            make them.
          </p>
        </div>
        <Link to="/ ">
          <Back />
        </Link>
      </article>
      <Link to="/">
        <Nav />
      </Link>
    </section>
  );
};

export default RandomBeer;
