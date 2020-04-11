import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Nav from "./components/global/Nav";
import Home from "./components/pages/home/Home.jsx";
import Partners from "./components/pages/events/JxSingapore2019/Partners";
import Registration from "./components/pages//events/JxSingapore2019/Registration";
import Track from "../src/components/pages/events/JxSingapore2019/Track";
import Schedule from "../src/components/pages/events/JxSingapore2019/Schedule";
import Venue from "../src/components/pages/events/JxSingapore2019/Venue";
import Submission from "../src/components/pages/events/JxSingapore2019/Submission";
import Rules from "./components/pages/Rules";
import Prize from "./components/pages/Prize";
import Hiring from "./components/pages/Hiring";
import Team from "./components/pages/home/Team.jsx";


import Rakuten from "./components/pages/events/JxSingapore2019/tracks/Rakuten";
import Shopee from "./components/tracks/Shopee";
import Kaspersky from "./components/tracks/Kaspersky";

import JxSingapore2019 from "./components/pages/events/JxSingapore2019/JxSingapore2019"



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
              <Route exact path="/rakuten" component={Rakuten} />
              <Route exact path="/shopee" component={Shopee} />
              <Route exact path="/kaspersky" component={Kaspersky} />
              <Route exact path="/junctionxsingapore2019" component={JxSingapore2019} />
          </div>
        </div>
        </BrowserRouter>
      </div>
        
    );
  }
}

export default App;
