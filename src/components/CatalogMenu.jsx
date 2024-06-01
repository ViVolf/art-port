import '../assets/styles/CatalogMenu.css';
import { catalog } from '../assets/serv/catalog.js';

function CatalogMenu() {
    return (
        <div className='catalog-menu'>
            <ul className='catalog-list'>
                {catalog.map((item, index) => {
                return (<li key={index} className='category'>
                            <a href='#' className='category-button'>{item.category}</a>
                            {item.subcategories && <ul className='subcategories'>
                            {item.subcategories.map((name, i) => <li className='subcategory' key={i}>
                                                                    <a href='#' className='subcategory-button'>{name}</a>
                                                                 </li>)}
                                                   </ul>}
                        </li>)
                })}
            </ul>
        </div>
    );
};

export default CatalogMenu;