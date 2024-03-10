import "./Offer.css";
import offer_1 from "../../assets/offer-1.jpg";
import offer_2 from "../../assets/offer-2.jpg";
import offer_3 from "../../assets/offer-3.jpg";
import offer_4 from "../../assets/offer-4.jpg";
import white_arrow from "../../assets/white-arrow.png";

const Offer = () => {
  return (
    <div className="offer">
        <div className="offer-wrapper">

          <div className="offer-card-info">
            <img src={offer_1} />
            <div className="offer-card-details">
              <h3>Archeticture</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
                consectetur adipisci quo, natus pariatur odit tempore magni
                deleniti maxime consequuntur. Magni possimus totam quas
                veritatis et deleniti vitae quisquam quos.
              </p>
            </div>
          </div>
       
          <div className="offer-card-info">
            <img src={offer_2} />
            <div className="offer-card-details">
              <h3>Games</h3>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
                consectetur adipisci quo, natus pariatur odit tempore magni
                deleniti maxime consequuntur. Magni possimus totam quas
                veritatis et deleniti vitae quisquam quos.
              </p>
            </div>
          </div>
       
          <div className="offer-card-info">
            <img src={offer_3} alt="" />
            <div className="offer-card-details">
              <h3>Building</h3>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
                consectetur adipisci quo, natus pariatur odit tempore magni
                deleniti maxime consequuntur. Magni possimus totam quas
                veritatis et deleniti vitae quisquam quos.
              </p>
            </div>
          </div>
        
          <div className="offer-card-info">
            <img src={offer_4} alt="" />
            <div className="offer-card-details">
              <h3>Sports</h3>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
                consectetur adipisci quo, natus pariatur odit tempore magni
                deleniti maxime consequuntur. Magni possimus totam quas
                veritatis et deleniti vitae quisquam quos.
              </p>
            </div>
          </div>
        </div>

      <button>
        Learn more <img src={white_arrow} alt="" className="white-arrow" />
      </button>
    </div>
  );
};

export default Offer;
