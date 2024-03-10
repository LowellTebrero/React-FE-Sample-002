import "./TopUp.css";
import top_up_img from "../../assets/top-up-img.png";
import top_up_play from "../../assets/top-up-play-circle.png";

const TopUp = ({SetPlayState}) => {
  return (
    <div className="top-up">
      <h1 className="top-up-title">
        Some of the highest-quality and best-performing games out there were
        created with Regain.
      </h1>

        <div className="top-up-wrapper">
          <div className="top-up-details">
            <h1>15%</h1>
            <p>platforms run Regain creations</p>
            <span className="top-up-details-span-1"></span>
          </div>
       
          <div className="top-up-details">
            <h1>30%</h1>
            <p>of games (average PC/console/mobile)</p>
            <span className="top-up-details-span-2"></span>
          </div>
      
          <div className="top-up-details">
            <h1>50%</h1>
            <p>
              of the 1,000 top-grossing mobile games.
            </p>
            <span className="top-up-details-span-3"></span>
          </div>
        </div>

      <div className="top-up-videos">
        <div className="top-up-videos-details">
          <h1>Our plan solutions</h1>
          <p>
            Game developers are propelling their creations into the future with
            the power of interactive, real-time 3D. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Explicabo debitis soluta qui
            excepturi? Temporibus, atque eos beatae laboriosam ipsa adipisci
            iusto! Quaerat sed dolores maxime assumenda dolorem doloribus at
            consequuntur.
          </p>
        </div>
        <div className="top-up-video">
          <img src={top_up_img} alt="" className="top-up-img" />
          <h3>Regain</h3>
          <h4>Learn more to earn more</h4>
          <img src={top_up_play} alt="" className="top-up-play" onClick={()=> {SetPlayState(true)}} />
          <h2>Spotlight</h2>
          <h1>Experience the VRQuest</h1>
          
        </div>
      </div>
    </div>
  );
};

export default TopUp;
