import React, { Component } from "react";
import './JxSingapore2019Stats.css'
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
        <div style={{padding: 5+ 'px'}}>

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
        	{
          	data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          }
        </Pie>

        <Legend align="center"/>
        <Tooltip/>
      </PieChart>
      </div>
    )
}



// INFO COMPONENT - comprises of a large top element and a smaller bottom element
const TopBigLetter = styled.div`
  font-size: 100px;
  fontwight: 900;
  text-align: center;
  line-height: 100px;
`

const BottomSmallLetter = styled.div`
  font-size: 20px;
  fontwight: 200;
  text-align: center;
`



const infoComponent = styled.div`
  
`
const InfoComponent = ({topWord, bottomWord})=>{
    return (
    <infoComponent style={{padding: 20+ 'px'}}>
        <TopBigLetter>{topWord}</TopBigLetter>
        <BottomSmallLetter>{bottomWord}</BottomSmallLetter>
    </infoComponent>
    )
}



class JxSingapore2019Stats extends Component {
  render() {
    return (
        <div class = "containerHiring"> 

            <div className="flexbox">
            <div className="flexbox-left">JunctionX Singapore 2019 stats</div>
              {/* <div style={{width:20+'px'}}></div> */}
              <div className="flexbox-right">
                <InfoComponent topWord="10+" bottomWord="partners"/>
                <InfoComponent topWord="40+" bottomWord="projects"/>
                <InfoComponent topWord="120+" bottomWord="participants"/>
                <InfoComponent topWord="20+" bottomWord="countries"/>
              </div>
            </div>


            <div style={{'padding': 50+'px'}}></div>


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