import '../assets/styles/Banner.css';
import bannerback from '../assets/images/bannerback.png';
import banneradd from '../assets/images/banneradd.png';
import bannerimg from '../assets/images/bannerimg.png';
import bannerhidebutton from '../assets/images/bannerhidebutton.png';
import { useRef } from 'react';

function Banner() {
    const bannerContainer = useRef();

    return (
        <div ref={bannerContainer} className='banner-container'>
            <img src={bannerback} alt='Pic' className='banner-back'></img>
            <div className='banner'>
                <img src={banneradd} alt='Pic' className='banner-add'></img>
                <img src={bannerimg} alt='Pic' className='banner-img'></img>
                <div className='banner-service'>
                    <div className='banner-text'>Распродажа товаров</div>
                    <button className='banner-button'>Посмотреть</button>
                </div>
            </div>
            <button className='banner-hide-button' onClick={() => bannerContainer.current?.style.display = 'none'}>
                <img className='banner-hide-img' src={bannerhidebutton} alt='Pic'></img>
            </button>
        </div>
    );
};

export default Banner;