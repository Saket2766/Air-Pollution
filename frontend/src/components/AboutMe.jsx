import "../styles/AboutMe.css";
import Anikeit from "../Images/AnikeitSaxena.jpeg";
const AboutMe = () => {
  return (
    <div className="AboutMe">
      <img src={Anikeit} alt="Picture of Anikeit Saxena"></img>
      <div className="AboutMeContent">
        <h1>About Me</h1>
        <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab unde praesentium quisquam error repellendus ratione, tempore eum ex qui totam provident voluptate quibusdam accusamus animi accusantium! At quidem quis omnis autem nesciunt amet nam ea reprehenderit molestias unde, ipsam deserunt soluta veritatis, veniam itaque delectus est, in aperiam similique velit vel labore vero commodi dolore. Magni vero expedita dolorum consequatur amet doloremque ipsam, officia aliquid repellendus animi quidem earum. Voluptate magni blanditiis sunt! Mollitia, culpa!
        </p>
        <a href="">Learn More</a>
      </div>
    </div>
  );
};
export default AboutMe;
