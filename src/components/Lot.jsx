import '../assets/styles/Lot.css';

function Lot({ lot }) {
    return (
        <div className="lot-frame">
            <img className="lot-img" src={lot.src} alt="Pic"></img>
            <div className="lot-price">{lot.cost} &#8381;</div>
            <div className="lot-text">{lot.name}</div>
            <button className='lot-button'>В корзину</button>
        </div>
    );
};

export default Lot;