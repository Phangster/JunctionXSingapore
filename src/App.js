import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

// Website Layout Components
import Nav from "./components/global/Nav";
//_______________________________________________________________________________
// ========HOME========
import Home from "./components/pages/home/Home.jsx";
import OurStory from "./components/pages/home/OurStory.jsx";
import Calendar from "./components/pages/home/Calendar.jsx";
import Team from "./components/pages/team/Team.jsx";
import Team2019 from "./components/pages/team/Team2019.jsx";


// (To be removed asap)
import Registration from "./components/pages//events/JxSingapore2019/Registration";
import Track from "./components/pages/events/JxSingapore2019/Track";
import Schedule from "../src/components/pages/events/JxSingapore2019/Schedule";
import Venue from "../src/components/pages/events/JxSingapore2019/Venue";
import Prizes from "../src/components/pages/events/JxSingapore2019/Prizes";

//_______________________________________________________________________________
// ========EVENTS========
import JxAsia2020 from "./components/pages/events/JxAsia2020/JxAsia2020"
import JxSingapore2019 from "./components/pages/events/JxSingapore2019/JxSingapore2019"

// Event Day (To be removed asap)
import Submission from "../src/components/pages/events/JxSingapore2019/Submission";
import Rules from "./components/pages/events/JxSingapore2019/Rules";

import Rakuten from "./components/pages/events/JxSingapore2019/Rakuten";
import Shopee from "./components/pages/events/JxSingapore2019/Shopee";
import Kaspersky from "./components/pages/events/JxSingapore2019/Kaspersky";

//_______________________________________________________________________________
// ========COMMUNITY========
import OurPartners from "./components/pages/community/OurPartners.jsx"
import ForPartners from "./components/pages/community/ForPartners.jsx"
import ForParticipants from "./components/pages/community/ForParticipants.jsx"
import ForVolunteers from "./components/pages/community/ForVolunteers.jsx"

//_______________________________________________________________________________
// ========OTHERS========
import Blog from "./components/pages/others/Blog.jsx"
import ContactUs from "./components/pages/others/ContactUs.jsx"
import Page404 from "./components/pages/others/Page404.jsx"
import JxSingapore2019Stats from "./components/pages/events/JxSingapore2019/JxSingapore2019Stats";
import Gallery from "./components/pages/others/Gallery.jsx";




class App extends Component {
    render() {
        return ( 
            <div>
                <BrowserRouter>
                    <div>
                        <Nav/>
                        <div className = "content" >
                            <Switch> 

                            { /* HOME */ } 
                            <Route exact path = "/" component = { Home }/> 
                            <Route exact path = "/ourstory" component = { OurStory }/> 
                            <Route exact path = "/calendar" component = { Calendar }/> 
                            <Route exact path = "/team" component = { Team }/> 
                            <Route exact path = "/team2019" component = { Team2019 }/> { /* to be removed soon*/ } 
                            <Route exact path = "/register" component = { Registration }/> 
                            <Route exact path = "/tracks" component = { Track }/> 
                            <Route exact path = "/schedule" component = { Schedule }/> 
                            <Route exact path = "/venue" component = { Venue }/> 
                            <Route exact path = "/prizes" component = { Prizes }/>

                            { /* EVENTS */ } 
                            <Route exact path = "/junctionxasia2020" component = { JxAsia2020 }/> 
                            <Route exact path = "/junctionxsingapore2019" component = { JxSingapore2019 }/> 
                            <Route exact path = "/junctionxsingapore2019/stats" component = { JxSingapore2019Stats }/> { /* to be removed soon*/ } 
                            <Route exact path = "/submission" component = { Submission }/> 
                            <Route exact path = "/rules" component = { Rules }/> 
                            <Route exact path = "/rakuten" component = { Rakuten }/> 
                            <Route exact path = "/shopee"component = { Shopee }/> 
                            <Route exact path = "/kaspersky"component = { Kaspersky }/>

                            { /* COMMUNITY */ } 
                            <Route exact path = "/ourpartners" component = { OurPartners }/> 
                            <Route exact path = "/forpartners" component = { ForPartners }/> 
                            <Route exact path = "/forparticipants" component = { ForParticipants }/> 
                            <Route exact path = "/forvolunteers" component = { ForVolunteers }/>

                            { /* OTHERS */ } 
                            <Route exact path = "/blog" component = { Blog }/> 
                            <Route exact path = "/contactus" component = { ContactUs }/> 
                            <Route exact path = "/gallery" component = { Gallery }/> 
                            <Route path = "*" component = { Page404 }/> 
                            </Switch>

                        </div>

                    </div>
                </BrowserRouter> 
            </div>

        );
    }
}

export default App;