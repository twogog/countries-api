import { Header } from "./Header";
import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { WrongAddress } from "../pages/WrongAddress";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={
          <>
            <Header wrongAdress/>
            <WrongAddress />
          </>
        } />
        <Route path='/' element={
          <>
            <Header />
            <Home />
          </>
        } />
        <Route path='country/:countryEl' element={
          <>
            <Header />
            <Details />
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
};
