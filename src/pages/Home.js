import "./Home.css";
// import heykel from "./assets/heykel.jpeg";
import logo from "../assets/logo.svg";
import NestedGrid from "../components/NestedGrid";
import { BsSearch } from "react-icons/bs";

function Home() {
  return (
    <div className="App">
      {/* <img src={heykel} className="heykel" alt="heykel" /> */}
      <div className="heykel">
        <img src={logo} className="logo" />
        <p className="az">AZ</p>
        <a href="#" class="hamburger">
          <div class="one"></div>
          <div class="two"></div>
          <div class="three"></div>
        </a>
      </div>
      <div className="responsive">
        <p className="rayonlar">Ana səhifə / Rayonlar</p>
        <div className="search-div">
          <p className="sub-rayonlar">Rayonlar</p>
          {/* <button className="responsive-search">
            <BsSearch size={20}/>
          </button> */}
        </div>
        <div className="grid">
          <NestedGrid />
        </div>
      </div>
    </div>
  );
}

export default Home;
