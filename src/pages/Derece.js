import "./Derece.css";
// import heykel from "./assets/heykel.jpeg";
import logo from "../assets/logo.svg";
import NestedGrid from "../components/NestedGrid";
import FullWidthGrid3 from "../components/FullWidthGrid3";
import { BsArrowLeft } from "react-icons/bs";
import search from "../assets/search.png";
import AbidelerGrid from "../components/AbidelerGrid";
import { BsSearch } from "react-icons/bs";

function Abideler() {
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

      <div className="abide-responsive">
        <div className="arrow">
          <BsArrowLeft size={30} />
        </div>
        <p className="abide-rayonlar">Ana səhifə / Rayonlar / Fuzuli</p>
        <p className="abide-sub-rayonlar">Abidələr</p>
        <div className="grid-wrap">
          <button className="derece-button-1">
            <span>NÖV ÜZRƏ</span>
          </button>
          <button className="button-2">
            <span>DÜNYA ƏHƏMİYYƏTLİ</span>
          </button>
          <button className="button-3">
            <span>ÖLKƏ ƏHƏMİYYƏTLİ</span>
          </button>
          <button className="button-4">
            <span>YERLİ ƏHƏMİYYƏTLİ</span>
          </button>
          <button className="search-button">
            <BsSearch />
          </button>
        </div>
        <div className="abide-grid">
          <AbidelerGrid />
        </div>
      </div>
    </div>
  );
}

export default Abideler;
