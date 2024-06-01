import '../assets/styles/MainNav.css';
import profile from '../assets/images/profile.png';
import favourite from '../assets/images/favourite.png';
import busket from '../assets/images/busket.png';

function MainNav() {
    return (
        <div className='main-nav'>
            <a href='#' className='main-nav-button'>
                <img src={profile} alt='Pic' className='main-nav-img'></img>
                <div>Профиль</div>
            </a>
            <a href='#' className='main-nav-button'>
                <img src={favourite} alt='Pic' className='main-nav-img'></img>
                <div>Избранное</div>
            </a>
            <a href='#' className='main-nav-button'>
                <img src={busket} alt='Pic' className='main-nav-img'></img>
                <div>Корзина</div>
            </a>
        </div>
    );
};

export default MainNav;