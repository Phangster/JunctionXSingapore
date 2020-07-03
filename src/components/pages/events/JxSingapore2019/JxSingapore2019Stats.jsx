import React, { Component } from "react";
import './css/JxSingapore2019Stats.css'
import styled from 'styled-components';
import { PieChart, Pie, Sector, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';

// PIECHART from recharts
const data = [
    {name: 'Singaporean Undergrad', value: 72}, 
    {name: 'Singaporean Professionals', value: 13},
    {name: 'Other parts of Asia', value: 22}, 
    {name: 'Others', value: 13}
];
const COLORS = ['#333333', '#4F4F4F', '#828282', '#BDBDBD'];
const RADIAN = Math.PI / 180;    


const ParticipantsPieChart = ()=>{
    return (
      <PieChart width={800} height={400}  align="center">
        <Pie
          data={data} 
          cx={400} 
          cy={200} 
          innerRadius={110}
          outerRadius={140} 
          fill="#8884d8"
          paddingAngle={5}
          label          
        >
        {data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)}
        </Pie>
        <Legend align="center"/>
      <Tooltip/>
    </PieChart>
  )
}


/*InfoComponent*/
const NumbersFrame = styled.div`
  padding: 20px;
`

const TopBigLetter = styled.div`
  font-size: 100px;
  font-weight: 400;
  text-align: center;
  line-height: 100px;
`

const BottomSmallLetter = styled.div`
  font-size: 20px;
  fontwight: 200;
  text-align: center;
`


const InfoComponent = ({topWord, bottomWord})=>{
  return (
    <NumbersFrame>
      <TopBigLetter>{topWord}</TopBigLetter>
      <BottomSmallLetter>{bottomWord}</BottomSmallLetter>
    </NumbersFrame>
  )
}



class JxSingapore2019Stats extends Component {
  render() {
    return (
      <div> 
        <div className="flexContainer-stats">
          <h2 className="flexItem-left-stats">
            JunctionX Singapore 2019 stats
          </h2>
          <div className="flexItem-right-stats">
            <div>
            <InfoComponent topWord="10+" bottomWord="partners"/>
            <InfoComponent topWord="40+" bottomWord="projects"/>
            </div>
            <div>
            <InfoComponent topWord="120+" bottomWord="participants"/>
            <InfoComponent topWord="20+" bottomWord="countries"/>
            </div>
          </div>
        </div>
        {/* <div className="flexbox">
        <div className="flexbox-left">
            Diverse group of participants
        </div>
          <ParticipantsPieChart/>
        </div> */}
      </div>
    );
  }
}

export default JxSingapore2019Stats;