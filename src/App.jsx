import "./App.css";
import Main from "../src/Components/MainPage/Main.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Hero from "./Components/Second_2nd/Hero.jsx";
import Third from "./Components/Third_3rd/Third.jsx"
import Fourth from "./Components/Fourth_4th/Fourth.jsx";

// import Navbar from "../src/Components/Navbar/Nav.jsx"

function App() {
  return (
    <>
    {/* <Navbar/> */}
      <Main />
      <Hero/>
      <Third/>
      <Fourth/>
    </>
  );
}

export default App;
