import { Link } from "react-router-dom";

export const WrongAddress = () => (
  <div className="inner-wrapper wrong-address">
    <Link to='/'><img src="images/wrong-url.jpg" alt="wrong address" /></Link>
  </div>
);