import { SearchForm } from "../components/SearchForm";
import { Countries } from "../components/Countries";
import { useSelector } from "react-redux";

export const Home = () => {
  return (
    <main className="homepage">
      <div className='inner-wrapper'>
        <SearchForm />
        <Countries />
      </div>
    </main>
  );
};