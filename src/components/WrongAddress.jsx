import { Link, useLocation } from "react-router-dom";

export const WrongAddress = () => {
  const { pathname } = useLocation();
  const path = pathname.split('/')
    .slice(2)
    .map(() => '../')
    .join('');
  return (
    <div className="inner-wrapper wrong-address">
      <Link to='/'><img src={path + 'images/wrong-url.jpg'} alt="wrong address" /></Link>
    </div>
  );
};