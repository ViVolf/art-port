import '../assets/styles/MenuRects.css';
import Rect from './Rect';

function MenuRects({ rects }) {
  return (
    <div className="menu-rects">
      {rects.map((item, index) => (
        <Rect key={index} rect={item} />
      ))}
    </div>
  );
}

export default MenuRects;
