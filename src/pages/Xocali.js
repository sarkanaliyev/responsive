import "./Abideler.css";
// import heykel from "./assets/heykel.jpeg";
import logo from "../assets/logo.svg";
import NestedGrid from "../components/NestedGrid";
import FullWidthGrid3 from "../components/FullWidthGrid3";
import { BsArrowLeft } from "react-icons/bs";
import search from "../assets/search.png";
import AbidelerGrid from "../components/AbidelerGrid";
import { BsSearch } from "react-icons/bs";
import AbidelerGrid2 from "../components/AbidelerGrid2";
import { useState } from "react";
export default function Xocali() {
  const [toggle2, setToggle2] = useState(false);
  const handleToggle2 = () => {
    document.querySelector(".button-2").style.background = "black";
    setToggle2(true);
  };
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
          <BsArrowLeft size={"2.6525198938992043vh"} />
        </div>
        <p className="abide-rayonlar">Ana səhifə / Rayonlar / Xocalı</p>
        <p className="abide-sub-rayonlar">Abidələr</p>
        <div className="grid-wrap">
          <button className="button-1">
            <span>MEMARLIQ ABİDƏLƏRİ</span>
          </button>
          <button className="button-2" onClick={handleToggle2}>
            <span>BAĞ-PARK,MONOMENTAL VƏ XATİRƏ ABİDƏLƏRİ</span>
          </button>
          <button className="button-3">
            <span>ARXEOLOJİ ABİBƏLƏR</span>
          </button>
          <button className="button-4">
            <span>DEKORATİV-TƏTBİQİ SƏNƏT NÜMUNƏLƏRİ</span>
          </button>
          <button className="search-button">
            <BsSearch />
          </button>
        </div>
        <div className="abide-grid">
          {toggle2 ? <AbidelerGrid2 /> : <AbidelerGrid />}
          {/* <NestedGrid /> */}
        </div>
      </div>
    </div>
  );
}


