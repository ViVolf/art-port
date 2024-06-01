import { useState, useEffect, useRef } from "react";
import "../assets/styles/PromoSlider.css";
import slide1 from '../assets/images/slide1.png';
import slide2 from '../assets/images/slide2.png';
import slide3 from '../assets/images/slide3.png';
import slide4 from '../assets/images/slide4.png';

function PromoSlider() {

    const slideRef = useRef(null);
    const [slideState, setSlide] = useState(0);

    useEffect(() => {
        slideRef.current?.style.marginLeft = `-${(slideState) * 25}%`;
    }, [slideState]);

    return (
        <div className="promo-slider">
            <div className="slider">
                <button className="button-left nav-button" onClick={() => setSlide((slideState + 3) % 4)}>&#10094;</button>
                <div className="slides">
                    <div className="slide" ref={slideRef}><img src={slide1} alt="kek" /></div>
                    <div className="slide"><img src={slide2} alt="kek" /></div>
                    <div className="slide"><img src={slide3} alt="kek" /></div>
                    <div className="slide"><img src={slide4} alt="kek" /></div>
                </div>
                <button className="button-right nav-button" onClick={() => setSlide((slideState + 1) % 4)}>&#10095;</button>
            </div>

            <div className="navigation-dots">
                <button className="button-dot" onClick={() => setSlide(0)}></button>
                <button className="button-dot" onClick={() => setSlide(1)}></button>
                <button className="button-dot" onClick={() => setSlide(2)}></button>
                <button className="button-dot" onClick={() => setSlide(3)}></button>
            </div>
        </div>
    )
}

export default PromoSlider;