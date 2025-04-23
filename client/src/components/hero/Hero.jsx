import "./hero.css";
import Search from "../search/Search.jsx"

function Hero() {
  return (
    <div className="hero">
      <div className="heroContent">
        <h1 className="heroTitle">
          Unpack <br />
          the feeling of home
        </h1>
        <p className="heroDesc">
          Choose from houses, chalets, villas, and more
        </p>
        <button className="heroBtn">Sign in / Register</button>
      </div>
      <div className="search"></div>
      <img
        className="heroImg"
        src="https://r-xx.bstatic.com/xdata/images/xphoto/720x217/494555314.jpeg?k=1f633b0c5d2f95a79e2b8a44dca04e401d5875864ee1940b968fdda5a550323f&o="
        alt="Hotel view"
      />
      <Search></Search>
    </div>
  );
}

export default Hero;
