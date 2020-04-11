import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";

// Website Layout Components
import Nav from "./components/global/Nav";
//_______________________________________________________________________________
// ========HOME========
import Home from "./components/pages/home/Home.jsx";
import OurStory from "./components/pages/home/OurStory.jsx";
import Calendar from "./components/pages/home/Calendar.jsx";
import Team from "./components/pages/home/Team.jsx";

// (To be removed asap)
import Partners from "./components/pages/events/JxSingapore2019/Partners";
import Registration from "./components/pages//events/JxSingapore2019/Registration";
import Track from "../src/components/pages/events/JxSingapore2019/Track";
import Schedule from "../src/components/pages/events/JxSingapore2019/Schedule";
import Venue from "../src/components/pages/events/JxSingapore2019/Venue";
import Prize from "./components/pages/Prize";

//_______________________________________________________________________________
// ========EVENTS========
import JxAsia2020 from "./components/pages/events/JxAsia2020/JxAsia2020"
import JxSingapore2019 from "./components/pages/events/JxSingapore2019/JxSingapore2019"

// Event Day (To be removed asap)
import Submission from "../src/components/pages/events/JxSingapore2019/Submission";
import Rules from "./components/pages/Rules";
import Hiring from "./components/pages/Hiring";

import Rakuten from "./components/pages/events/JxSingapore2019/tracks/Rakuten";
import Shopee from "./components/tracks/Shopee";
import Kaspersky from "./components/tracks/Kaspersky";

//_______________________________________________________________________________
// ========COMMUNITY========
import OurPartners from "./components/pages/community/OurPartners.jsx"
import ForPartners from "./components/pages/community/ForPartners.jsx"
import ForParticipants from "./components/pages/community/ForParticipants.jsx"
import ForVolunteers from "./components/pages/community/ForVolunteers.jsx"

//_______________________________________________________________________________
// ========OTHERS========
import Blog from "./components/pages/others/Blog.jsx"
import SocialMedia from "./components/pages/others/SocialMedia.jsx"




class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
        <div>
        <Nav />
          <div className="content">
            {/* HOME */}
              <Route exact path="/" component={Home} />
              <Route exact path="/ourstory" component={OurStory} />
              <Route exact path="/calendar" component={Calendar} />
              {/* to be removed soon*/}
              <Route exact path="/partners" component={Partners} />
              <Route exact path="/register" component={Registration} />
              <Route exact path="/tracks" component={Track} />
              <Route exact path="/schedule" component={Schedule} />
              <Route exact path="/venue" component={Venue} />
              <Route exact path="/prize" component={Prize} />

            {/* EVENTS */}
              <Route exact path="/junctionxasia2020" component={JxAsia2020} />
              <Route exact path="/junctionxsingapore2020" component={JxSingapore2019} />
              {/* to be removed soon*/}
              <Route exact path="/submission" component={Submission} />
              <Route exact path="/rules" component={Rules} />
              <Route exact path="/hiring" component={Hiring} />
              <Route exact path="/team" component={Team} />
              <Route exact path="/rakuten" component={Rakuten} />
              <Route exact path="/shopee" component={Shopee} />
              <Route exact path="/kaspersky" component={Kaspersky} />

            {/* COMMUNITY */}
              <Route exact path="/ourpartners" component={OurPartners} />
              <Route exact path="/forpartners" component={ForPartners} />
              <Route exact path="/forparticipants" component={ForParticipants} />
              <Route exact path="/forvolunteers" component={ForVolunteers} />

            {/* OTHERS */}
              <Route exact path="/blog" component={Blog} />
              <Route exact path="/socialmedia" component={SocialMedia} />

          </div>
        </div>
        </BrowserRouter>
      </div>
        
    );
  }
}

export default App;
