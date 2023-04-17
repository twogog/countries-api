import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeTheme } from '../features/theme/themeSlice';
import { useEffect } from 'react';

export const Header = ({ wrongAdress }) => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const toggleTheme = () => {
    theme === 'dark'
      ? dispatch(changeTheme('light'))
      : dispatch(changeTheme('dark'));
  };

  useEffect(() => {
    document.body.setAttribute('theme', theme);
  }, [theme]);

  return (
    <header className='header'>
      <div className='inner-wrapper header__inner-wrapper'>
        <Link to='/'><h3>Where in the World?</h3></Link>
        {!wrongAdress && 
        (<button onClick={toggleTheme} className='theme-changer'>
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>)}
      </div>
    </header>
  );
};