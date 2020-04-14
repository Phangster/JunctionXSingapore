import React, { Component } from "react";
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import './UpcomingEventsComponent.css'



//Calendar Photos
import JxAsiaCalendarImg from "../../../../images/JxAsia2020/JxAsiaCalendarImg.png"
import onlineWebinarImg from "../../../../images/junction_img/onlineWebinarImg.jpg"


// INFO COMPONENT - comprises of a large top element and a smaller bottom element
const ImageBox = styled.div`
  width: 600px;
  height: 300px;
  object-fit:cover;
  overflow: hidden;
  border-radius:50px;
`

const Tooltip = styled.div`
  width: 600px;
  height: 300px;
  `


const TextOverlay = styled.div`
col
    position:relative;
    z-index:3;
    margin-top:-15rem;
    padding:30px;
`

const DateText = styled.div`
    font-size:22px;
`

const TitleText = styled.div`
    font-size:40px;
    font-weight: 800;
    padding-top: 20px;
    padding-bottom: 20px;
`

const LocationText = styled.div`
    font-size:22px; 
    font-weight:600;
`

const imgFrame = styled.img`
    width: 600px;
    height: 300px;
    z-index:3;
`


const EventComponent = ({image, date, title, location})=>{
    return (
        <div>
        <ImageBox><img src={image}/></ImageBox>
        <TextOverlay>
            <DateText>{date}</DateText>
            <TitleText>{title}</TitleText>
            <LocationText>{location}</LocationText>
        </TextOverlay>
        </div>

    )
}



class UpcomingEventsComponent extends Component {
  render() {
    return (
        <div class = "containerHiring"> 

            <div className="flexbox-upcomingevents">
            <div className="flexbox-left-upcomingevents">Upcoming Events</div>
              {/* <div style={{width:20+'px'}}></div> */}
              <div className="flexbox-right-upcomingevents">
                <Link to="/junctionxasia2020"><EventComponent image={JxAsiaCalendarImg} date="4.-7.6.20" title="JunctionX Asia" location="Asia, Online"/></Link>

                <div style={{margin:5+'rem'}}></div>

                <EventComponent image={onlineWebinarImg} date="Coming soon in Aug..." title="Online Webinar" location="Singapore, Online"/>
              </div>
            </div>


            <div style={{'padding': 50+'px'}}></div>


            

        </div>
    );
  }
}

export default UpcomingEventsComponent;