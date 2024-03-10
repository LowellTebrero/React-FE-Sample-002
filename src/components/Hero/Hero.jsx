import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero container" id="hero">
      <div className="hero-text">
        <h2><i>discovering ideas of classics</i></h2>
        <h1>LEAVE YOUR WEARY, FIGHT YOUR BATTLES</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
          mollitia in quaerat cum eos deserunt molestias nostrum ipsum, incidunt
          enim, odio hic delectus fugiat quos quia sed minus, blanditiis
          temporibus porro architecto commodi. Harum et dicta nam nobis animi,
          corporis tenetur? Architecto provident cum perspiciatis odio adipisci
          soluta nostrum iste.
        </p>
        <div className="hero-button">
          <button className="hero-button-learn">Learn more</button>
          <button className="hero-button-earn">Tap to earn</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
