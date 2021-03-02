import "./Detal.css";
import "./Natavan.css";
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

export default function Natavan() {
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
      <div className="natavan-left">
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
          {/* <p className="detal-az">AZ</p> */}
          <a href="#" class="detal-hamburger">
            <div class="detal-one"></div>
            <div class="detal-two"></div>
            <div class="detal-three"></div>
          </a>
          {/* <img src={hmbrgr} className="hmbrgr" /> */}
        </div>
        <div className="main-div">
          <BsArrowLeft size={"1.78125vw"} />
          <p className="detal-rayon">Şuşa</p>
          <p className="detal-abide">X.Natəvanın evi</p>
          <div className="fwg">
            <FullWidthGrid />
            {/* <FullWidthGrid2/> */}
          </div>
          <p className="detal-melumat">
            X.Natəvanın evi Azərbaycan Respublikasının Nazirlər Kabinetinin 2
            avqust 2001-ci il tarixli 132 nömrəli Qərarı ilə ölkə əhəmiyyətli
            memarlıq abidəsi kimi (inventar № 342, tarixi- XVIII əsr) dövlət
            qeydiyyatına alınmışdır. Xurşidbanu Natəvanın evi Şuşanın ilkin inşa
            edilmiş mülklərindən biridir. Sifarişçisi Xan qızı olan sarayın
            tikilmə tarixi və kim tərəfindən inşa olunduğu haqqında dəqiq
            məlumat yoxdur. XIX əsrə aid olunur. Saray böyük bir ərazini əhatə
            edən həyətdən ibarətdir. Bu həyətdə Natəvanın özünün evi, ata mülkü
            Mehdiqulu xanın imarəti, böyük buzxana, boyuk düzbucaqlı formada
            hovuz və muxtəlif xidməti tikililər olmuşdur. Xurşidbanu ailənin
            yeganə övladı, həm də Qarabağ xanlığının sоnuncu vərəsəsi оlduğu
            ücün оnu sarayda “Durru yeкta” (Təк inci), el arasında isə “Xan
            qızı” cağırırdılar. Zəmanəsinin görkəmli şəxsiyyətlərindən olub,
            təkcə Azərbaycanda deyil, bütün Zaqafqaziyada xeyirxahlığı və
            mesenatlığı ilə tanınmışdı. O, kasıblara əl tutmuş, Şuşaya su
            cəkdirmişdi. Cəkdirdiyi bulaq “Xan qızı bulağı”adı ilə məşhur idi.
            Xurşidbanu Natəvan 1897-ci il oktyabrın 1-də vəfat etmişdir və
            məzarı Ağdamın “İmarət” qəbiristanlığındadır. Təssüflə qeyd etmək
            yerinə düşər ki, “Xan qızı”nın məzarı da məhv edilərək erməni
            vandalizminin qurbanına çevrilmişdir. Sovet donəmində Bülbülün
            təşəbbüsü ilə Azərbaycan SSR Xalq Maarif Komissarlığının 10 oktyabr
            1932-ci il tarixli Qərarına əsasən rəsmi olaraq Şuşa Musiqi Məktəbi
            yaradılmışdır (bu həm də Azərbaycanda yaradılan ilk uşaq musiqi
            məktəbi idi). Məktəb Xan qızı Natəvanın evi olmuş binada fəaliyyətə
            başlamışdır. Ata mülkünün binasında isə uşaq sanatoriyası
            yerləşdirilmişdir. 1987-ci ildə musiqi məktəbi digər binaya
            köcürülərək binada bərpa işləri aparıldıqdan sonra Nizami Gəncəvi
            adına Milli Azərbaycan Ədəbiyyatı Muzeyinin filialı olan Xurşidbanu
            Natəvanın evi ev-muzeyi kimi fəaliyyətə başlamışdır. 8 may 1992-ci
            ildə Şuşa şəhəri Ermənistan silahlı qüvvələri tərəfindən işğal
            olunduqdan sonra saray kompleksi də dağıntıya məruz qalmışdır. Bu
            abidə iki evdən ibarətdir ki, hazırda hər iki evin yalnız
            divarlarının bir hissəsi qalmışdır. İşğaldan sonra ermənilər
            tərəfindən dam örtüyü tamamilə, eləcə də divarlarının bir hissəsi
            uçurulmuş, tikililərin hər ikisinin ilkin görkəminə ciddi xələl
            dəymişdir.
          </p>
          <p className="qalereya">Qalereya</p>
          <FullWidthGrid2 />
        </div>
      </div>
    </div>
  );
}
