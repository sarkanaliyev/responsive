import "./Detal.css";
import logo from "../assets/logo.svg";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import FullWidthGrid from "../components/FullWidthGrid";
import FullWidthGrid2 from "../components/FullWidthGrid2";
import hmbrgr from "../assets/hmbrgr.png";
import karvansaray from "../assets/karvansaray.JPG";
import karvansaraysonra from "../assets/karvansaray-sonra.jpeg";
import karvansarayarxiv from "../assets/karvansaray-arxiv.jpeg";
import { useState } from "react";

export default function Detal() {
  const isgalarray = [
    { name: "Işğaldan Əvvəl", img: karvansarayarxiv },
    { name: "Işğaldan Sonra", img: karvansaray },
    { name: "Böyük Qayıdışdan Sonra", img: karvansaraysonra },
  ];
  let [isgalindex, setIsgalIndex] = useState(1);
  const [isgaltext, setIsgaltext] = useState(isgalarray[isgalindex].name);

  const handleİsgaltext = (i) => {
    setIsgaltext(i);
  };
  function handleIsgal() {
    isgalindex += 1;

    setIsgaltext(isgalarray[isgalindex].name);
    document.querySelector(
      ".left"
    ).style.backgroundImage = `url(${isgalarray[isgalindex].img})`;
  }
  function handleIsgalNext() {
    if (isgalindex !== 0) {
      isgalindex -= 1;
    }
    setIsgaltext(isgalarray[isgalindex].name);
    document.querySelector(
      ".left"
    ).style.backgroundImage = `url(${isgalarray[isgalindex].img})`;
  }

  return (
    <div>
      <div className="left">
        <img src={logo} className="detal-logo" />
        {isgalarray.length === 3 ? (
          <>
            <p className="isgal-sonra">{isgaltext}</p>
            <BsArrowLeft
              size={30}
              color={"white"}
              className="isgal-ox"
              onClick={handleIsgalNext}
            />
            <BsArrowRight
              size={30}
              color={"white"}
              className="isgal-ox-sag"
              onClick={handleIsgal}
            />
          </>
        ) : null}
      </div>
      <div className="right">
        <div className="up">
          <p className="detal-az">AZ</p>
          <a href="#" class="detal-hamburger">
            <div class="detal-one"></div>
            <div class="detal-two"></div>
            <div class="detal-three"></div>
          </a>
          {/* <img src={hmbrgr} className="hmbrgr" /> */}
        </div>
        <div className="main-div">
          <BsArrowLeft size={"1.78125vw"} />
          <p className="detal-rayon">Fuzuli</p>
          <p className="detal-abide">Karvansaray, XVII əsr, Qarğabazar kəndi</p>
          <div className="fwg">
            <FullWidthGrid />
            {/* <FullWidthGrid2/> */}
          </div>
          <p className="detal-melumat">
            Karvansara kəndin mərkəzində çox da hündür olmayan təpənin döşündə
            (eni 23,67, uzunu 34,70) inşa olunmuşdur. Elmi mənbələrdə onun
            tikilmə tarixi 1681-ci il göstərilsə də, karvansaranın memarı məlum
            deyil. Füzuli rayonundakı Qarğabazar kəndinin mərkəzində Karvansara
            tikildiyi kəndin adına uyğun olaraq adlandırılsa da, bu tarixi
            abidəyə bəzən Şah Abbas karvansarası da deyirlər.<br></br>
            <br></br> Giriş fraqmentdən göründüyü kimi, karvansaranın partalının
            birinci yarımdairə tağbənd ilə ondan nisbətən böyük olan ikinci
            oxvari tağbəndləri arasında xüsusi şəkildə yerləşdirilmiş üç ədəd
            kvadrat formalı daşlardan kənardakılar üzərində zoomorf və həndəsi
            ornamentlər işlənmişdir. Həmin daşların arasındakı nisbətən böyük
            daşın üzərində isə karvansara memarının adı və tikilmə tarixi həkk
            olunduğu güman edilir.<br></br>
            <br></br> Lakin orada tədqiqat işləri aparanda heç bir yazı nümunəsi
            qalmamışdır. Bu məsələ ilə əlaqədar yerli yaşlı sakinlərin dediyinə
            görə burada doğrudan da əski əlifba ilə yazılmış yazı nümunəsi
            olmuşdur.
          </p>
          <p className="qalereya">Qalereya</p>
          <FullWidthGrid2 />
        </div>
      </div>
    </div>
  );
}
