import './App.css';
import ReactGA from "react-ga4";
import Header from "./sections/Header";
import Beranda from "./sections/Beranda";
import WhyFeeder from "./sections/WhyFeeder";
import Sewa from "./sections/Sewa";
import Footer from "./sections/Footer";

function App() {
  ReactGA.initialize("G-6P5FPLJB0P");
  ReactGA.send("pageview");

  return (
    <div className="App">
      <Header/>
      <Beranda/>
      <WhyFeeder/>
      <Sewa/>
      <Footer/>
    </div>
  );
}

export default App;
