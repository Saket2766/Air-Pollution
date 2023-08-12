import Carousel from "../components/Carousel"
import AboutMe from "../components/AboutMe";
import ProjectInfo from "../components/ProjectInfo";
import "../styles/home.css"
import AboutProject from "../components/AboutProject";
const Home = () => {

    const slides = [
        {url:"/Slide1.png" ,title: "AIR POLLUTION"},
        {url:"/Slide1.png" ,title: "WATER POLLUTION"},
        {url:"/Slide1.png" ,title: "NOISE POLLUTION"}
    ]

    return (
        <>
            <Carousel slides={slides}/>
            <AboutProject/>
            <ProjectInfo />
            <AboutMe />
        </> 
     );
}
 
export default Home;