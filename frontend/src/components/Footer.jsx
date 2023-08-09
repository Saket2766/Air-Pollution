import Yt from "../Images/Yt.jpeg";
import FB from "../Images/FB.png";
import Insta from "../Images/Insta.png";
import Twitter from "../Images/Twitter.png";
import LinkedIn from "../Images/LinkedIn.png";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="copyright">
        <h3>CompanyName @202X. All Rights reserved.</h3>
      </div>
      <div className="logos">
        <a href="">
          <img src={Yt} alt="Youtube Logo"></img>
        </a>
        <a href="">
          <img src={FB} alt="FaceBook Logo"></img>
        </a>
        <a href="">
          <img src={Twitter} alt="Twitter Logo"></img>
        </a>
        <a href="">
          <img src={Insta} alt="Instagram Logo"></img>
        </a>
        <a href="">
          <img src={LinkedIn} alt="LinkedIn Logo"></img>
        </a>
      </div>
    </footer>
  );
};
export default Footer;
