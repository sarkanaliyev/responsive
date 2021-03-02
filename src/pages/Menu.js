import "./Menu.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

export default function Menu() {
  return (
    <div className="menu">
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
    </div>
  );
}
