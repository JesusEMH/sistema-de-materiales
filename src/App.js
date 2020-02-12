import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Login from "./pages/login";
import Error from "./pages/Error";
import Mantenimiento from "./pages/Mantenimiento";
import Eventos from "./pages/Eventos";
import Transporte from "./pages/Transporte";

export default function App() {
  return (
    <header>
        <Router>
            <Switch>
              <Route path="/" exact={true}>
                <Login/>
              </Route>
              <Route path="/mantenimiento" exact={true}>
                <Mantenimiento />
              </Route>
              <Route path="/transporte" exact={true}>
                <Transporte/>
              </Route>
              <Route path="/eventos" exact={true}>
                <Eventos/>
              </Route>
              <Route path="*" exact={true}>
                <Error/>
              </Route>
            </Switch>
        </Router>
    </header>
  );
}


