import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeTheme } from '../features/theme/themeSlice';
import { useEffect } from 'react';

export const Header = ({ wrongAdress }) => {
  const theme = useSelector((state) => state.theme);
  const { elementBg, textColor } = theme;
  const dispatch = useDispatch();
  const toggleTheme = () => {
    theme.status === 'dark'
      ? dispatch(changeTheme('light'))
      : dispatch(changeTheme('dark'));
  };

  useEffect(() => {
    document.body.style.backgroundColor = theme.bodyBg;
  }, [theme]);

  return (
    <header className='header' style={{ background: elementBg }}>
      <div className='inner-wrapper header__inner-wrapper'>
        <Link to='/'><h3 style={{ color: textColor }}>Where in the World?</h3></Link>
        {!wrongAdress && 
        (<button style={{ color: textColor }} onClick={toggleTheme} className='theme-changer'>
          {theme.status === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>)}
      </div>
    </header>
  );
};