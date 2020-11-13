import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";
import BubblePage from './components/BubblePage'
import PrivateRoute from './components/PrivateRoute'


function App() {
  const [colorList, setColorList] = useState([]);

  return (
    <Router>
      <div className="App">
          <Route exact-path="/" component={Login} />
          <PrivateRoute exact-path='/api/bubble-page'>
            <BubblePage colorList={colorList} setColorList={setColorList}/>
          </PrivateRoute>
      </div>
    </Router>
  );
}

export default App;
