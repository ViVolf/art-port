import '../assets/styles/MainPage.css';
import PromoSlider from './PromoSlider';
import PromoCubes from './PromoCubes';
import MenuRects from './MenuRects';
import PromoLots from './PromoLots';
import ControlPanel from './ControlPanel';
import Banner from './Banner';
import { cubes } from '../assets/serv/cubes';
import { lots } from '../assets/serv/lots';
import { rects } from '../assets/serv/rects';

function MainPage() {
    return (
        <div className='main-container'>
            <Banner />
            <ControlPanel />
            <PromoSlider />
            <PromoCubes cubes={cubes} />
            <MenuRects rects={rects}/>
            <PromoLots lots={lots} />
        </div>
    );
}

export default MainPage;
