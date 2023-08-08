import { useState } from "react";

const Carousel = ({slides}) => {

    const [slideIndex,setSlideIndex] = useState(1);

    return ( 
        <div className="carousel" style={{backgroundImage : `url(${slides[slideIndex-1].url})`}}>
            <h1 className="slide-title">{slides[slideIndex-1].title}</h1>
        </div>
     );
}
 
export default Carousel;