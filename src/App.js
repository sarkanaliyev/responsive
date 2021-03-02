import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../src/pages/Home";
import Detal from "./pages/Detal";
import Detal2 from "./pages/Detal2";
import Abideler from "./pages/Abideler";
import Meramimiz from "./pages/Meramimiz";
import Menu from "./pages/Menu";
import Xerite from "./pages/Xerite";
import Derece from "./pages/Derece";
import Museum from "./pages/Museum";
import Xocali from "./pages/Xocali";
import Agdam from "./pages/Agdam";
import Cebrayil from "./pages/Cebrayil";
import Xocavend from "./pages/Xocavend";
import Kelbecer from "./pages/Kelbecer";
import Qubadli from "./pages/Qubadli";
import Qazax from "./pages/Qazax";
import Lacin from "./pages/Lacin";
import Susa from "./pages/Susa";
import Zengilan from "./pages/Zengilan";
import Natavan from "../src/pages/Natavan";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={Museum} />
        <Route exact path="/detal" component={Detal} />
        <Route exact path="/detal2" component={Detal2} />
        <Route exact path="/abideler" component={Abideler} />
        <Route exact path="/meramimiz" component={Meramimiz} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/xerite" component={Xerite} />
        <Route exact path="/derece" component={Derece} />

        <Route exact path="/xocali" component={Xocali} />
        <Route exact path="/agdam" component={Agdam} />
        <Route exact path="/cebrayil" component={Cebrayil} />
        <Route exact path="/xocavend" component={Xocavend} />
        <Route exact path="/kelbecer" component={Kelbecer} />
        <Route exact path="/qubadli" component={Qubadli} />
        <Route exact path="/qazax" component={Qazax} />
        <Route exact path="/lacin" component={Lacin} />
        <Route exact path="/susa" component={Susa} />
        <Route exact path="/zengilan" component={Zengilan} />

        <Route exact path="/natavan" component={Natavan} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
