import "./App.css";
import Homepage from "./pages/Homepage";
import Favorites from "./pages/Favorites";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
function App() {
  return (
    <div>
        <NavBar/>
    <main>
      <Routes>
        <Route path="/home" Component={Homepage} />
        <Route path="/" Component={Homepage} />
        <Route path="/favorites" Component={Favorites} />
      </Routes>
    </main>
    </div>
  );
}

export default App;
