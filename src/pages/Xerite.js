import "./Xerite.css";
import logo from "../assets/logo.svg";
import { BsArrowLeft } from "react-icons/bs";

import { BsFillPlusCircleFill } from "react-icons/bs";
export default function Xerite() {
  return (
    <div>
      <div className="xerite-left">
        <img src={logo} className="xerite-logo" />
        <div className="left-plus">
          <BsFillPlusCircleFill
            className="plus-1"
            size={40}
            color={"#E19462"}
          />
          <p className="rayon-ag">Ağdam</p>
          <BsFillPlusCircleFill
            className="plus-2"
            size={40}
            color={"#E19462"}
          />
          <BsFillPlusCircleFill
            className="plus-3"
            size={40}
            color={"#E19462"}
          />
          <BsFillPlusCircleFill
            className="plus-4"
            size={40}
            color={"#E19462"}
          />
          <BsFillPlusCircleFill
            className="plus-5"
            size={40}
            color={"#E19462"}
          />
          <BsFillPlusCircleFill
            className="plus-6"
            size={40}
            color={"#E19462"}
          />
          <BsFillPlusCircleFill
            className="plus-7"
            size={40}
            color={"#E19462"}
          />
          <BsFillPlusCircleFill
            className="plus-8"
            size={40}
            color={"#E19462"}
          />
          <BsFillPlusCircleFill
            className="plus-9"
            size={40}
            color={"#E19462"}
          />
          <BsFillPlusCircleFill
            className="plus-10"
            size={40}
            color={"#E19462"}
          />
          <BsFillPlusCircleFill
            className="plus-11"
            size={40}
            color={"#E19462"}
          />
          
        </div>
      </div>
      <div className="xerite-right">
        <div className="up">
          <p className="detal-az">AZ</p>
          <a href="#" class="detal-hamburger">
            <div class="detal-one"></div>
            <div class="detal-two"></div>
            <div class="detal-three"></div>
          </a>
        </div>
        <div className="main-div">
          <BsArrowLeft size={30} />
          <p className="detal-rayon">Fuzuli</p>
          <p className="detal-abide">Karvansaray, XVII əsr, Qarğabazar kəndi</p>

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
          <button className="btn">
            <p className="btn-p">DAHA ƏTRAFLI</p>
          </button>
        </div>
      </div>
    </div>
  );
}
