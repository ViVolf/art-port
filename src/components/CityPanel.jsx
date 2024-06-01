import '../assets/styles/CityPanel.css';
import Modal from './Modal';
import { useState } from 'react';

function CityPanel() {
    const [isCityOpen, setIsCityOpen] = useState(false);

    return (
        <div className="city-panel">
            <button className='city-button' onClick={() => setIsCityOpen(true)}>
                <img src='' alt='' className=''></img>
                Город
            </button>
            <Modal isOpen={isCityOpen} setIsOpen={setIsCityOpen}>
                <div className='city-modal'>
                    
                </div>
            </Modal> 
        </div>
    );
};

export default CityPanel;