import Carousel from "../components/Carousel"
import AboutMe from "../components/AboutMe";
import ProjectInfo from "../components/ProjectInfo";
import "../styles/home.css"
import AboutProject from "../components/AboutProject";
const Home = () => {

    const slides = [
        {url:"/Slide1.png" ,title: "AIR\nPOLLUTION"},
        {url:"/Slide1.png" ,title: "WATER\nPOLLUTION"},
        {url:"/Slide1.png" ,title: "NOISE\nPOLLUTION"}
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