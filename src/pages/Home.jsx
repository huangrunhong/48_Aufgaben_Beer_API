import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section className="homePage">
      <article>
        <div className="imageContainer">
          <img
            className="fittingImage"
            src="https://s3-alpha-sig.figma.com/img/1a80/7b0d/4b3d9d897635e6bee2e3d13b091eae75?Expires=1702252800&Signature=cObBGeI3zo-QfpbBDW3UvXBqIv49BXKiFadL0WiMh-y4HgKSKsjDhGu3cEfj~rob9VdCD7-OUARmC0z1UBob36wNv35tBsO5ct41akGOpu4mj-asf~RJFAnx0hMzJT5rRIvl8ueLRWtzhNyhChERnjh9Qd2FE0Y~4Vo89sCxPGqZzvCgiaimsR1B7jpVfDtU-IoD8CZQ8thXiCa8RszPWaEp2fX19YuSfkPzV7-SbsAre2WTNobvxJPmu3IOteCnSRYeff9w~QuN0PAbujlaMJVcpSa8M98rb7l8wYt2LI3NvaoNz~gkXiYK~OzLxSMJZPYfTscd1lXOjZgVDaqTRg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          ></img>
          <Link to="/bierlist">
            <h1>All Beers</h1>
          </Link>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a,
          eleifend vitae varius venenatis.{" "}
        </p>
      </article>
      <article>
        <div className="imageContainer">
          <img
            className="fittingImage"
            src="https://s3-alpha-sig.figma.com/img/9aca/8045/03186034af98542d2dedf365985e6e66?Expires=1702252800&Signature=NS3-6IFmnA41-vjuD9hBAlk912ocmd5IWKs8I9eZ1LwDRHkVjz42FZYNxMlZGSF~-dn2Ef7IYEIGxMhNzJFYl8NEeSUuRdEYq6Oj17Ds1CDaiXgznzk9SIYy~eLQj1oFi5oqdjzJCftw7MzcorTdIAPhgmbEs3qUVaPW1xIa0kuJePkTVSZQukQ~TpbMh0t9pMkEXC5z-UTkuixEabN9GLI0zorg83ja8OLGf8s2n8oCKb6zRCguG4w9nHqZ53vHAJHm8ecW4J7Q4ciHe~irL1zfD7dVyTln0y0AzEBNQzT~KguAXnPt3e3vJzCayQTcyqQiDL2j34Kg4Ps~qfPe1Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          ></img>
          <Link to="/randombeer">
            <h1>Random Beer</h1>
          </Link>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a,
          eleifend vitae varius venenatis.{" "}
        </p>
      </article>
    </section>
  );
};

export default Home;
