import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Details } from "./components/Details";
import { WrongAddress } from "./components/WrongAddress";
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
