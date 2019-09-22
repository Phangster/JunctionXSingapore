import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Nav from "./components/global/Nav";
import Home from "./components/pages/Home";
import Partners from "./components/pages/Partners";
import Registration from "./components/pages/Registration";
import Track from "./components/pages/Track";
import Schedule from "./components/pages/Schedule";
import Venue from "./components/pages/Venue";
import Submission from "./components/pages/Submission";
import Rules from "./components/pages/Rules";
import Prize from "./components/pages/Prize";
import Hiring from "./components/pages/Hiring";
import Team from "./components/pages/Team";


import ApiHack from "./components/tracks/ApiHack";
import SmartNationHack from "./components/tracks/SmartNationHack";
import MysteryHack from "./components/tracks/MysteryHack";




class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
        <div>
        <Nav />
          <div className="content">
              <Route exact path="/" component={Home} />
              <Route exact path="/partners" component={Partners} />
              <Route exact path="/register" component={Registration} />
              <Route exact path="/tracks" component={Track} />
              <Route exact path="/schedule" component={Schedule} />
              <Route exact path="/venue" component={Venue} />
              <Route exact path="/submission" component={Submission} />
              <Route exact path="/rules" component={Rules} />
              <Route exact path="/prize" component={Prize} />
              <Route exact path="/hiring" component={Hiring} />
              <Route exact path="/team" component={Team} />
              
              <Route exact path="/rakuten" component={ApiHack} />
              <Route exact path="/shopee" component={SmartNationHack} />
              <Route exact path="/kaspersky" component={MysteryHack} />
          </div>
        </div>
        </BrowserRouter>
      </div>
        
    );
  }
}

export default App;
