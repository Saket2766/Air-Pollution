import "../styles/AboutMe.css";
import Anikeit from "../Images/AnikeitSaxena.jpeg";
const AboutMe = () => {
  return (
    <div className="AboutMe">
      <img src={Anikeit} alt="Picture of Anikeit Saxena"></img>
      <div className="AboutMeContent">
        <h1>About Me</h1>
        <p>
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic mollitia modi quibusdam assumenda corporis, quas enim ratione asperiores eveniet quisquam, molestias eius. Temporibus deleniti ipsam, nulla enim voluptatum eos quae.
        </p>
        <a href="">Learn More</a>
      </div>
    </div>
  );
};
export default AboutMe;
