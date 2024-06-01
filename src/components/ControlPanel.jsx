import '../assets/styles/ControlPanel.css';
import CityPanel from './CityPanel';
import SearchBar from './SearchBar';
import TopNav from './TopNav';
import MainNav from './MainNav';
import Catalog from './Catalog';
import logo_art_port from '../assets/images/logo_art_port.png';
import { useRef } from 'react';

function ControlPanel() {
    const controlPanel = useRef();

    return (
        <div ref={controlPanel} className='control-panel'>
            <div className='top-control'>
                <CityPanel />
                <TopNav />
            </div>
            <div className='bot-control'>
                <a href='#' className='logo-main'><img src={logo_art_port} alt='Pic' className='logo-img'></img></a>
                <Catalog controlPanel={controlPanel}/>
                <SearchBar />
                <MainNav />
            </div>
        </div>
    );
}

export default ControlPanel;