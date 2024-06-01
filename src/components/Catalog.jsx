import '../assets/styles/Catalog.css';
import { createPortal } from 'react-dom';
import { useState, useEffect } from 'react';
import catalogbutton from '../assets/images/catalogbutton.png';
import closecatalogbutton from '../assets/images/catalogclosebutton.png';
import CatalogMenu from './CatalogMenu.jsx';

function Catalog({ controlPanel }) {
    const [isCatalogOpen, setIsCatalogOpen] = useState(false);

    const handleOutsideClick = (e) => {
        if (e.target.closest('.catalog') || e.target.closest('.catalog-button')) {
            return;
        }
        setIsCatalogOpen(false);
    }

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    return (
        <div className='catalog-container'>
            <button className='catalog-button' onClick={() => setIsCatalogOpen(isCatalogOpen => !isCatalogOpen)}>
                <img src={isCatalogOpen ? closecatalogbutton : catalogbutton} alt='Pic' className='catalog-button-img'></img>
            </button>
            {isCatalogOpen && createPortal(
                <div className='catalog'>
                    <CatalogMenu />
                </div>,
                controlPanel.current
            )}
            {isCatalogOpen && createPortal(
                <div className='catalog-backdrop' />,
                document.body
            )}
        </div>
    );
};

export default Catalog;