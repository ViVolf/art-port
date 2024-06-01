import { useState, useEffect, useRef } from "react";
import '../assets/styles/PromoLots.css';
import Lot from './Lot';

function PromoLots({ lots }) {

    const lotRef = useRef(null);
    const leftButton = useRef(null);
    const rightButton = useRef(null);

    const [navButtonState, setNavButtonState] = useState(false);
    const [lotState, setLot] = useState(0);

    useEffect(() => {
        lotRef.current?.style.marginLeft = `-${(lotState) * 20.42}%`;
    }, [lotState]);

    useEffect(() => {
        leftButton.current?.style.left = (navButtonState ? '1%' : '-2%');
        rightButton.current?.style.right = (navButtonState ? '1%' : '-2%');
    }, [navButtonState]);

    return (
        <div className='promo-lots'>
            <div className="lots-phrase-container">
                <div className="lots-header-phrase">Популярные товары</div>
                <div className="lots-variant-phrase">Больше вариантов</div>
            </div>
            <div className='lot-slider' onMouseEnter={() => setNavButtonState(true)} onMouseLeave={() => setNavButtonState(false)}>
                <button className="lot-button-left nav-button" ref={leftButton} onClick={() => setLot((lotState + 5) % 6)}>&#10094;</button>
                <div className='lots' ref={lotRef}>
                    {lots.map((item, index) => (
                        <Lot key={index} lot={item} />
                    ))}
                </div>
                <button className="lot-button-right nav-button" ref={rightButton} onClick={() => setLot((lotState + 1) % 6)}>&#10095;</button>
            </div>
        </div >
    );
}

export default PromoLots;