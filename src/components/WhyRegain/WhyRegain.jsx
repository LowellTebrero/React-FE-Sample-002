import "./WhyRegain.css";
import why_regain_1 from '../../assets/why-regain-1.png'
import why_regain_2 from '../../assets/why-regain-2.png'
import why_regain_3 from '../../assets/why-regain-3.png'

const WhyRegain = () => {
  return (
    <div className="why-regain">
      <div className="why-regain-info">
        <h1 className="why-regain-info-title">Why Regain Pro?</h1>
        <p className="why-regain-info-details">
          Regain Pro is more than a game engine. Unlock your team’s potential
          with professional tools to create across game devices and platforms.
          With access to closed platforms and priority support paired with
          enhanced physics and AR tools, your team can more efficiently
          prototype, design, and launch with the leading royalty-free engine.
        </p>

        <div className="why-regain-box">
          
          <div className="why-regain-box-info">
            <img src={why_regain_1} alt="" />
            <div>
              <h1>Leveling up your games</h1>
              <p>
                Unity Pro is more than a game engine. Unlock your team’s
                potential with professional tools to create across game
                devices and platforms. With access to closed platforms and
                priority support paired with enhanced physics and AR tools,
                your team can more efficiently prototype, design, and launch
                with the leading royalty-free engine.
              </p>
            </div>
          </div>
        
          <div className="why-regain-box-info">
            <img src={why_regain_2} alt="" />
            <div>
              <h1>Improve your coding</h1>
              <p>
                Unity Pro is more than a game engine. Unlock your team’s
                potential with professional tools to create across game
                devices and platforms. With access to closed platforms and
                priority support paired with enhanced physics and AR tools,
                your team can more efficiently prototype, design, and launch
                with the leading royalty-free engine.
              </p>
            </div>
          </div>
      
          <div className="why-regain-box-info">
            <img src={why_regain_3} alt="" />
            <div>
              <h1>Learn from Pro</h1>
              <p>
                Unity Pro is more than a game engine. Unlock your team’s
                potential with professional tools to create across game
                devices and platforms. With access to closed platforms and
                priority support paired with enhanced physics and AR tools,
                your team can more efficiently prototype, design, and launch
                with the leading royalty-free engine.
              </p>
            </div>
          </div>
           
        </div>
      </div>
    </div>
  );
};

export default WhyRegain;
