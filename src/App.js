import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

// Website Layout Components
import Nav from "./components/global/Nav";
//_______________________________________________________________________________
// ========HOME========
import Home from "./components/pages/home/Home.jsx"; 
import Home1 from "./components/pages/home/Home1.jsx"; //temporary to be removed
import OurStory from "./components/pages/home/OurStory.jsx";
import Calendar from "./components/pages/home/Calendar.jsx";
import Team from "./components/pages/home/Team.jsx";


//_______________________________________________________________________________
// ========EVENTS========
import JxAsia2020 from "./components/pages/events/JxAsia2020/JxAsia2020"
import JxSingapore2019 from "./components/pages/events/JxSingapore2019/JxSingapore2019"
import JxSingapore2019Stats from "./components/pages/events/JxSingapore2019/JxSingapore2019Stats" //toremove

// Event Day (To be removed asap)
import Submission from "../src/components/pages/events/JxSingapore2019/Submission";
import Rules from "./components/pages/Rules";
import Hiring from "./components/pages/Hiring";

import Rakuten from "./components/pages/events/JxSingapore2019/tracks/Rakuten";
import Shopee from "./components/pages/events/JxSingapore2019/tracks/Shopee";
import Kaspersky from "./components/pages/events/JxSingapore2019/tracks/Kaspersky";

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
import Page404 from "./components/pages/others/Page404.jsx"




class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
        <div>
        <Nav />
          <div className="content">
            <Switch>
            {/* HOME */}
              <Route exact path="/" component={Home} />
              <Route exact path="/home1" component={Home1} /> {/* to remove*/}
              <Route exact path="/junctionxsingapore2019/stats" component={JxSingapore2019Stats} /> {/* to remove*/}
              <Route exact path="/ourstory" component={OurStory} />
              <Route exact path="/calendar" component={Calendar} />
              <Route exact path="/team" component={Team} />

            {/* EVENTS */}
              <Route exact path="/junctionxasia2020" component={JxAsia2020} />
              <Route exact path="/junctionxsingapore2019" component={JxSingapore2019} />
              {/* to be removed soon*/}
              <Route exact path="/submission" component={Submission} />
              <Route exact path="/rules" component={Rules} />
              <Route exact path="/hiring" component={Hiring} />
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
              
              <Route path="*" component={Page404} />
          </Switch>

          </div>
        </div>
        </BrowserRouter>
      </div>
        
    );
  }
}

export default App;
