import { useState } from "react";

const Carousel = ({slides}) => {

    const [slideIndex,setSlideIndex] = useState(0);

    const nextSlide = () =>{
        if(slides.length === slideIndex+1){
            setSlideIndex(0);
        }else{
            setSlideIndex(slideIndex+1);
        }
    }
    const prevSlide = () =>{
        if(slideIndex-1 < 0){
            setSlideIndex(slides.length-1);
        }
        else{
            setSlideIndex(slideIndex-1);
        }
    }

    return ( 
        <div className="carousel" style={{backgroundImage : `url(${slides[slideIndex].url})`}}>
            <div className="arrow" onClick={nextSlide}>&larr;</div>
            <div className="title-container"> 
                <h1 className="slide-title">{slides[slideIndex].title}</h1>
                <button className="title-button">LEARN MORE</button>
            </div>
            <div className="arrow" onClick={prevSlide}>&rarr;</div>
        </div>
     );
}
 
export default Carousel;