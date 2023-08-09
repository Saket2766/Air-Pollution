import Carousel from "../components/Carousel"
import "../styles/home.css"
const Home = () => {

    const slides = [
        {url:"/Slide1.png" ,title: "Air Pollution"},
        {url:"/Slide1.png" ,title: "Water Pollution"},
        {url:"/Slide1.png" ,title: "Land Pollution"}
    ]

    return (
        <>
            <Carousel slides={slides}/>
            <div className="about">
                
            </div>
        </> 
     );
}
 
export default Home;