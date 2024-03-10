import "./Footer.css";
import facebook from '../../assets/facebook.png'
import github from '../../assets/github.png'
import google from '../../assets/google.png'
import linkedin from '../../assets/linkedin.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-details">
        <div className="footer-details-1">
          <h1>Copyright © 2024 Regain Technologies</h1>
          <ul>
            <li>Legal</li>
            <li>Privacy Policy</li>
            <li>Cookies</li>
            <li>Do not sell My Personal Information</li>
            <li>Contact Me</li>
          </ul>
          <p>
            &quot; Regain &quot;, Regain logos, and other Regain trademarks are trademarks
            or registered trademarks of Unity Technologies or its affiliates in
            the U.S. and elsewhere (more info here). Other names or brands are
            trademarks of their respective owners.
          </p>
          <h4>Documentation licensed under CC BY 4.0.</h4>
        </div>
        <div className="footer-details-2">
            <h1>Messages us</h1>
            <input type="text" />
            <div>
                <h5>Social Media</h5>
                <img src={facebook} alt="" />
                <img src={github} alt="" />
                <img src={google} alt="" />
                <img src={linkedin} alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
