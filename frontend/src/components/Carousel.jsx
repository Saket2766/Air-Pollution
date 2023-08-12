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

    const jumpToSilde = (index) => {
        setSlideIndex(index);
    }

    return ( 
        <div className="carousel" style={{backgroundImage : `url(${slides[slideIndex].url})`}}>
            <div className="slide">
                <div className="arrow" onClick={prevSlide}><img src="/ArrowLeft.png" alt="left arrow" /></div>
                <div className="title-container"> 
                    <h1 className="slide-title">{slides[slideIndex].title}</h1>
                    <button className="title-button">LEARN MORE</button>
                </div>
                <div className="arrow" onClick={nextSlide}><img src="/ArrowRight.png" alt="right arrow" /></div>
                <div className="dot-container">
                    {slides.map( (slide,idx) => (
                        <div key={idx} className="dot" onClick={() => jumpToSilde(idx)}>&#9679;</div>
                    ) )}
                </div>
            </div>
        </div>
     );
}
 
export default Carousel;