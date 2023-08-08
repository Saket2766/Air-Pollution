import { useState } from "react";

const Carousel = () => {

    const [slideIndex,setSlideIndex] = useState(1);

    return ( 
        <div className="carousel">
            <div className="slide">
                <img src="Slide1.png" width={"100%"}/>
                <h1 className="slide-title">Air Pollution</h1>
            </div>
        </div>
     );
}
 
export default Carousel;