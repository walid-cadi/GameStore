import { Route, Routes } from "react-router-dom";
import { To_do_list } from "./exo/to_do_list";
import Home from "./pages/home";
import { NavBar } from "./layouts/NavBar";
import { ErrorPage } from "./pages/Errors/Error";
import { UseEffect } from "./components/useEffect";
import { Games } from "./pages/games/Games";
import { MyProvider } from "./context";
import { GameDetails } from "./pages/games/GameDetails";

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <MyProvider>
        <Routes>
          <Route path="/*" element={<ErrorPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<To_do_list />} />
          <Route path="/games" element={<Games />} />
          <Route path="/gameDetails/:title" element={<GameDetails />} />
        </Routes>
      </MyProvider>
      {/* <UseEffect/> */}
    </>
  );
}

export default App;
