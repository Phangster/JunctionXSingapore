import React, { Component } from "react";
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import './UpcomingEventsComponent.css';

//Calendar Photos
import JxAsiaCalendarImg from "../../../../images/JxAsia2020/JxAsiaCalendarImg.png";
import onlineWebinarImg from "../../../../images/junction_img/onlineWebinarImg.jpg";



const ImageFrame = styled.div`
    width: 600px;
    height: 300px;
    z-index: 3;
`

const ImageBox = styled.div`
  width: 600px;
  height: 300px;
  object-fit: cover;
  overflow: hidden;
  border-radius: 50px;
`

const TextOverlay = styled.div`
col
    position: relative;
    width: 50%;
    left: 0%;
    z-index: 3;
    margin-top: -15rem;
    padding: 30px;
`

const DateText = styled.div`
    font-family: Montserrat, sans-serif;
    font-size: 22px;
    font-weight: 800;
`

const TitleText = styled.div`
    font-family: Montserrat, sans-serif;
    font-size: 30px;
    font-weight: 800;
    padding-top: 20px;
    padding-bottom: 20px;
`

const LocationText = styled.div`
    font-family: Montserrat, sans-serif;
    font-size: 22px; 
    font-weight: 600;
`


const EventComponent = ({image, date, title, location})=>{
  return (
    <ImageFrame>
      <ImageBox>
        <img src={image}/>
      </ImageBox>
      <TextOverlay>
          <DateText>{date}</DateText>
          <TitleText>{title}</TitleText>
          <LocationText>{location}</LocationText>
      </TextOverlay>
    </ImageFrame>
  )
}


class UpcomingEventsComponent extends Component {
  render() {
    return (
        <div className="containerMain-upcomingEvents"> 
          <div className="flexContainer-upcomingEvents">
            <div className="flexItem-left-upcomingEvents">
              Upcoming events
            </div>
            <div className="flexItem-right-upcomingEvents">
              <div className="eventComponent-upcomingEvents">
                <Link to="/junctionxasia2020">
                  <EventComponent image={JxAsiaCalendarImg} date="18.-23.6.2020" title="JunctionX Asia" location="Asia, Online"/>
                </Link>
              </div>
              <br/>
              <div className="eventComponent-upcomingEvents">
                <EventComponent image={onlineWebinarImg} date="Coming soon..." title="Online Webinar" location="Singapore, Online"/>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default UpcomingEventsComponent;