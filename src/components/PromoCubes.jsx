//import { useState, useEffect, useRef } from "react";
import '../assets/styles/PromoCubes.css';
import Cube from './Cube';

function PromoCubes({ cubes }) {
    return (
        <div className="promo-cubes">
            <div className="cubes-header-phrase">Выгодные предложения</div>
            <div className="cubes-variant-phrase">Больше вариантов</div>
            <div className="cubes">
                {cubes.map((item, index) => (
                    <Cube key={index} cube={item}/>
                ))}
            </div>
        </div>
    );
}

export default PromoCubes;