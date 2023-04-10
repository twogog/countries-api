import { SearchForm } from "./SearchForm";
import { Countries } from "./Countries";
import { useSelector } from "react-redux";

export const Home = () => {
  const theme = useSelector((state) => state.theme);
  const { textColor } = theme;
  return (
    <main className="homepage" style={{ color: textColor }}>
      <div className='inner-wrapper'>
        <SearchForm />
        <Countries />
      </div>
    </main>
  );
};