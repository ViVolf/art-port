import '../assets/styles/Rect.css';

function Rect({ rect }) {
    return (
        <div className="rect">
            <div className='rect-text'>{rect.text}</div>
            <img src={rect.src} alt="Pic" className="rect-img"></img>
        </div>
    );
};

export default Rect;