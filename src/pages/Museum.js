import "./Museum.css";
// import "../src/style/Menu.css";
// import "../src/style/Manset.css";

import frame1 from "../assets/frame-1.png";
import logo from "../assets/medeniyyet-nazirliyi-logo.png";
import { Power2, TimelineLite } from "gsap";
import { Timeline } from "gsap/gsap-core";
import govheraga from "../assets/govher-aga.jpg";
import screenimg from "../assets/screen.jpg";
import { TweenMax } from "gsap";
import { useEffect, useRef, useState } from "react";
import { CgInfinity } from "react-icons/cg";

export default function Museum() {
  let twm;
  useEffect(() => {
    // twm = TweenMax.to(".images-container", { duration: 20, x: 300 });
  });

  function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }

  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }

  // Manset
  const tl = new Timeline({ paused: true });
  const tl2 = new Timeline({ paused: true });
  const tl3 = new Timeline({ paused: true });

  const handleClick = () => {
    tl.to(".manset-sekil", 1, {
      width: "60%",
      opacity: 1,
      ease: Power2.easeOut,
    }).to(
      ".manset",
      2,
      {
        width: "40%",
        opacity: 1,
        ease: Power2.easeOut,
      },
      "-= 0.5"
    );
    tl.play();
  };
  function handleClick2(e) {
    // handlePic(screenimg);
    tl2
      .to(".manset-sekil2", 1, {
        width: "60%",
        opacity: 1,
        ease: Power2.easeOut,
      })
      .to(
        ".manset2",
        2,
        {
          width: "40%",
          opacity: 1,
          ease: Power2.easeOut,
        },
        "-= 0.5"
      );
    tl2.play();
  }
  function handleClick3(e) {
    // handlePic(screenimg);
    tl3
      .to(".manset-sekil3", 1, {
        width: "60%",
        opacity: 1,
        ease: Power2.easeOut,
      })
      .to(
        ".manset3",
        2,
        {
          width: "40%",
          opacity: 1,
          ease: Power2.easeOut,
        },
        "-= 0.5"
      );
    tl3.play();
  }
  function handleReverse(e) {
    tl.reverse();
  }
  function handleReverse2(e) {
    tl2.reverse();
  }
  function handleReverse3(e) {
    tl3.reverse();
  }
  return (
    <>
      <div className="contain">
        <img src={govheraga} className="manset-sekil" />
        <div className="manset" onClick={handleReverse}>
          <div>
            <p className="manset-rayon">Şuşa</p>
            <p className="manset-abide">Yuxarı Gövhər ağa məscidi</p>
            <p className="manset-melumat">
              Yuxarı Gövhər ağa məscidi Azərbaycan Respublikasının Nazirlər
              Kabinetinin 2 avqust 2001-ci il tarixli 132 nömrəli Qərarı ilə
              ölkə əhəmiyyətli memarlıq abidəsi kimi (inventar № 344, tarixi-
              1768—1769-cu illər) dövlət qeydiyyatına alınmışdır. Qarabağ
              xanlığının mərkəzini Şahbulaq qalasından Şuşaya köçürməyə qərar
              verən Pənahəli xan yeni şəhər və infrastruktur tikililərini inşa
              etməyə rəvac verir. 1750–ci illərdə onun göstərişi ilə Şuşa
              qalası, qala daxilində xan ailəsi üzvləri üçün malikanə və
              saraylar, o cümlədən məscid də inşa edilir. Şuşada həmin dövrdə
              bütün tikililər kimi “Yuxarı Gövhər ağa” məscidi də ilkin olaraq
              kiçik həcmdə inşa edilmişdir. Həmin məscidin memarlıq
              xüsusiyyətləri haqqında heç nə məlum deyil.
            </p>
          </div>
        </div>

        <img src={screenimg} className="manset-sekil2" />
        <div className="manset2" onClick={handleReverse2}>
          <div>
            <p className="manset-rayon2">Şuşa</p>
            <p className="manset-abide2">Yuxarı Gövhər ağa məscidi</p>
            <p className="manset-melumat2">
              Yuxarı Gövhər ağa məscidi Azərbaycan Respublikasının Nazirlər
              Kabinetinin 2 avqust 2001-ci il tarixli 132 nömrəli Qərarı ilə
              ölkə əhəmiyyətli memarlıq abidəsi kimi (inventar № 344, tarixi-
              1768—1769-cu illər) dövlət qeydiyyatına alınmışdır. Qarabağ
              xanlığının mərkəzini Şahbulaq qalasından Şuşaya köçürməyə qərar
              verən Pənahəli xan yeni şəhər və infrastruktur tikililərini inşa
              etməyə rəvac verir. 1750–ci illərdə onun göstərişi ilə Şuşa
              qalası, qala daxilində xan ailəsi üzvləri üçün malikanə və
              saraylar, o cümlədən məscid də inşa edilir. Şuşada həmin dövrdə
              bütün tikililər kimi “Yuxarı Gövhər ağa” məscidi də ilkin olaraq
              kiçik həcmdə inşa edilmişdir. Həmin məscidin memarlıq
              xüsusiyyətləri haqqında heç nə məlum deyil.
            </p>
          </div>
        </div>

        <img src={govheraga} className="manset-sekil3" />
        <div className="manset3" onClick={handleReverse3}>
          <div>
            <p className="manset-rayon3">Şuşa</p>
            <p className="manset-abide3">Yuxarı Gövhər ağa məscidi</p>
            <p className="manset-melumat3">
              Yuxarı Gövhər ağa məscidi Azərbaycan Respublikasının Nazirlər
              Kabinetinin 2 avqust 2001-ci il tarixli 132 nömrəli Qərarı ilə
              ölkə əhəmiyyətli memarlıq abidəsi kimi (inventar № 344, tarixi-
              1768—1769-cu illər) dövlət qeydiyyatına alınmışdır. Qarabağ
              xanlığının mərkəzini Şahbulaq qalasından Şuşaya köçürməyə qərar
              verən Pənahəli xan yeni şəhər və infrastruktur tikililərini inşa
              etməyə rəvac verir. 1750–ci illərdə onun göstərişi ilə Şuşa
              qalası, qala daxilində xan ailəsi üzvləri üçün malikanə və
              saraylar, o cümlədən məscid də inşa edilir. Şuşada həmin dövrdə
              bütün tikililər kimi “Yuxarı Gövhər ağa” məscidi də ilkin olaraq
              kiçik həcmdə inşa edilmişdir. Həmin məscidin memarlıq
              xüsusiyyətləri haqqında heç nə məlum deyil.
            </p>
          </div>
        </div>
        {/* Image Container */}
        <div className="images-container">
          <img src={frame1} className="frame1" />
          <img src={frame1} className="frame2" />
          <img src={frame1} className="frame3" />
          <img src={frame1} className="frame4" />
          <img src={frame1} className="frame5" />
          <img src={frame1} className="frame6" />
          <img src={frame1} className="frame7" />
          <img src={frame1} className="frame8" />
          <img src={frame1} className="frame9" />
          <img src={frame1} className="frame10" />
          <img src={frame1} className="frame11" />
          <img src={frame1} className="frame12" />
          <img src={frame1} className="frame13" />
          <img src={frame1} className="frame14" />
          <img src={frame1} className="frame15" />
          <img src={frame1} className="frame16" />
        </div>
      </div>

      {/* Image Container */}

      {/* Menu */}
      <div id="myNav" className="menu" onClick={closeNav}>
        <div className="menu-container">
          <ul>
            <div>
              <h1>Ana Səhifə</h1>
              <p>Xerite</p>
            </div>
            <div>
              <h1>Məramımız</h1>
              <p>Məlumat</p>
            </div>
            <div>
              <h1>Rayonlar</h1>
              <p>Ağdam</p>
              <p>Cəbrayıl</p>
              <p>Füzuli</p>
              <p>Xankəndi</p>
              <p>Xocalı</p>
              <p>Xocavənd</p>
              <p>Kəlbəcər</p>
            </div>
            <div>
              <h1>Əhəmiyyət dərəcəsi üzrə</h1>
              <p>Dünya əhəmiyyətli abidələr</p>
              <p>Ölkə əhəmiyyətli abidələr</p>
              <p>Yerli əhəmiyyətli abidələr</p>
            </div>
            <div>
              <h1>Növ üzrə</h1>
              <p>Məscid</p>
              <p>Hamam</p>
              <p>İnzibati bina</p>
              <p>Yaşayış yeri</p>
              <p>Kurqan</p>
              <p>Türbə</p>
              <p>Körpü</p>
            </div>
          </ul>
        </div>
        <a className="closebtn" onClick={closeNav}>
          &times;
        </a>
        {/*
        <a className="ana">Ana səhifə</a>
        <a className="rayonlar" href="/rayonlar">
          Rayonlar
        </a>
        <a className="ehemiyyet" href="/abideler-x">
          Əhəmiyyət dərəcəsi üzrə
        </a>
        <a className="nov">Növ üzrə</a>
        <a className="meqsed" href="/missiya">
          Missiyamız
        </a>

        <a className="xerite">Xerite</a>

        <a className="Xocavənd">Xocavənd</a>
        <a className="Xocalı">Xocalı</a>
        <a className="Cəbrayıl">Cəbrayıl</a>
        <a className="Xankəndi">Xankəndi</a>
        <a className="Kəlbəcər">Kəlbəcər</a>
        <a className="Ağdam">Ağdam</a>
        <a className="Füzuli">Füzuli</a>

        <a className="dunya">Dünya əhəmiyyətli abidələr</a>
        <a className="olke">Ölkə əhəmiyyətli abidələr</a>
        <a className="yerli">Yerli əhəmiyyətli abidələr</a>

        <a className="mescid">Məscid</a>
        <a className="hamam">Hamam</a>
        <a className="inzibati">İnzibati Bina</a>
        <a className="yasayis">Yaşayış yeri</a>
        <a className="kurqan">Kurqan</a>
        <a className="turbe">Türbə</a>
        <a className="korpu">Körpü</a>

        <a className="melumat">Məlumat</a> */}
      </div>
      {/* Menu */}
      <a href="/home">
        <img className="responsive-logo" src={logo} />
      </a>

      <p className="home-az">AZ</p>

      <a href="#" class="home-hamburger" onClick={openNav}>
        <div class="home-one"></div>
        <div class="home-two"></div>
        <div class="home-three"></div>
      </a>

      <ul className="home-numbers-ul">
        <li>
          <a className="number-1-home" onClick={handleClick}>
            01
          </a>
        </li>
        <li>
          <a className="number-2-home" onClick={handleClick2}>
            02
          </a>
        </li>
        <li>
          <a className="number-3-home" onClick={handleClick3}>
            03
          </a>
        </li>
        <li>
          <a className="number-4-home">
            {/* <CgInfinity /> */}
            04
          </a>
        </li>
      </ul>

      <button className="home-button">
        <span className="home-button-span">XƏRİTƏDƏ GÖSTƏR</span>
      </button>
    </>
  );
}
