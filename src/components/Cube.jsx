import { useState, useRef, useEffect } from 'react';
import '../assets/styles/Cube.css';

function Cube({ cube }) {
    const addImg = useRef();
    const [addImgState, setAddImgState] = useState(false);

    useEffect(() => {
        addImg.current?.style.top = (addImgState ? '0%' : '-50%');
    }, [addImgState]);

    return (
        <div className="cube-frame" onMouseEnter={() => setAddImgState(true)} onMouseLeave={() => setAddImgState(false)}>
            <img className='add-img' ref={addImg} src={cube.srcadd} alt='Pic'></img>
            <img className="cube-img" src={cube.src} alt="Pic"></img>
            <div className="cube-text">{cube.text}</div>
        </div>
    ); 
}

export default Cube;