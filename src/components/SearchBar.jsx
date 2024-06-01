import '../assets/styles/SearchBar.css';
import searchicon from '../assets/images/searchicon.png'
import inputclearimg from '../assets/images/catalogclosebutton.png'
import { useState, useEffect, useRef } from 'react';

function SearchBar() {
    const inputClear = useRef();
    const [isInputFocused, setInputFocused] = useState(false);

    useEffect(() => {
        inputClear.current?.style.opacity = isInputFocused ? 1 : 0;
    }, [isInputFocused]);

    return (
        <div className='search-bar'>
            <form className='form-search'>
                <button className='submit-search' type='submit'>
                    <img className='search-img' src={searchicon} alt='Pic' />
                </button>
                <input onFocus={() => setInputFocused(true)} onBlur={() => setInputFocused(false)} 
                       className='input-search' type='search' name='search' placeholder='Поиск' autoComplete='off' ></input>
                <button ref={inputClear} className='input-clear' type='reset'>
                    <img className='input-clear-img' src={inputclearimg} alt='Pic' />
                </button>
            </form>
        </div>
    );
};

export default SearchBar;