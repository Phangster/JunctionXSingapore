/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from "react";
import Footer from "../../global/Footer";
import OurPartnersCoverImg from '../../../images/junction_img/OurPartnersCoverImg.jpg'

import './OurPartners.css'

// Imported JSX Components
import JxSingapore2019Stats from '../events/JxSingapore2019/JxSingapore2019Stats'
import Partners from '../events/JxSingapore2019/Partners' //to be removed

// Company Photos
import RakutenImg from '../../../images/JxSingapore2019/partners_img/Rakuten.png'
import ShopeeImg from '../../../images/JxSingapore2019/partners_img/Shopee.png'
import KasperskyAcademyImg from '../../../images/JxSingapore2019/partners_img/kaspersky.academy.png'
import RakutenRapidApiImg from '../../../images/JxSingapore2019/partners_img/RakutenRapidAPI.png'
import RedBullImg from '../../../images/JxSingapore2019/partners_img/Redbull_logo.png'
import StartupXImg from '../../../images/JxSingapore2019/partners_img/startupx1.jpeg'
import TribeTheoryImg from '../../../images/JxSingapore2019/partners_img/Tribe_logo.png'
import KickstartImg from '../../../images/JxSingapore2019/partners_img/kickstart.jpg'
import ReassembleImg from '../../../images/JxSingapore2019/partners_img/Reassemble.jpeg'
import SalesforceImg from '../../../images/JxSingapore2019/partners_img/Salesforce.png'
import CirclesLifeImg from '../../../images/JxSingapore2019/partners_img/circles_life.png'
import AmbidextrImg from '../../../images/JxSingapore2019/partners_img/ambidextr.png'


import {Link} from 'react-router-dom'


class OurPartners extends Component {


  render() {

    return (
      <div>

        
    <div className = "container">
        <div className = "wrapper1">
            <img src={OurPartnersCoverImg} className="coverPhotoTag"></img>
          <div className = "coverContainer">
            <p className = "headerLogoCommunity">Our Partners</p>
            <div id="header2LogoCommunity">
                JunctionX Singapore is a non-profit volunteer led hackathon, 
                so we are glad to be have companies who believe in this hackathon and collaborate with us to make this happen.
            </div>
            {/* <div style={{fontSize: 15 +"px"}} className = "textTwo color">
            We organize hackathons, speaker events, coding workshops and other tech events around the year. We have something for every skill set and interest: take on new challenges, explore, and gain new experiences in Junction events!
            </div> */}
          </div>
        </div>


        <div className = "wrapper2 wrapper">
        {/*______________________________________________________________ */}

          {/* <div style={{'margin-bottom': 60+'px'}}></div> */}
          <div className="flexbox1 flexbox">
            <div className="wrapperTwo-flexbox1-left">
                <div>Gold Partners</div>
            </div>
              {/* <div style={{width:20+'px'}}></div> */}
            <div className="wrapperTwo-flexbox1-right">

                <div></div> 

            </div>

          </div>

          <div style={{'margin-bottom': 60+'px'}}></div>


          <div className="flexbox1 flexbox-ourpartners">
            <div className="wrapperTwo-flexbox1-left">
                <img className="ourpartners-img" src={ShopeeImg} style={{height:150+'px'}}/>
            </div>
              {/* <div style={{width:20+'px'}}></div> */}
            <div className="wrapperTwo-flexbox1-right">
                <div>
                    Shopee is a Singaporean e-commerce platform headquartered under the Sea Group, which was founded in 2015.
                    It has since expanded and is now the largest e-commerce platform in SEA and Taiwan.
                </div> 
            </div>

          </div>
          <div style={{'margin-bottom': 60+'px'}}></div>

          <div className="flexbox1 flexbox-ourpartners">
            <div className="wrapperTwo-flexbox1-left">
                <img className="ourpartners-img" src={RakutenImg} style={{height:150+'px'}}/>
            </div>
              {/* <div style={{width:20+'px'}}></div> */}
            <div className="wrapperTwo-flexbox1-right">
                <div>
                    Shopee is a Singaporean e-commerce platform headquartered under the Sea Group, which was founded in 2015.
                    It has since expanded and is now the largest e-commerce platform in SEA and Taiwan.
                </div> 
            </div>

          </div>
          {/*______________________________________________________________ */}


          {/*______________________________________________________________ */}

          <div style={{'margin-bottom': 80+'px'}}></div>
          <div className="flexbox1 flexbox">
            <div className="wrapperTwo-flexbox1-left">
                <div>Silver Partners</div>
            </div>
              {/* <div style={{width:20+'px'}}></div> */}
            <div className="wrapperTwo-flexbox1-right">

                <div></div> 

            </div>

          </div>

          <div style={{'margin-bottom': 60+'px'}}></div>


          <div className="flexbox1 flexbox-ourpartners">
            <div className="wrapperTwo-flexbox1-left">
                <img className="ourpartners-img" src={KasperskyAcademyImg} style={{height:150+'px'}}/>
            </div>
              {/* <div style={{width:20+'px'}}></div> */}
            <div className="wrapperTwo-flexbox1-right">
                <div>
                    Shopee is a Singaporean e-commerce platform headquartered under the Sea Group, which was founded in 2015.
                    It has since expanded and is now the largest e-commerce platform in SEA and Taiwan.
                </div> 
            </div>



          </div>
          {/*______________________________________________________________ */}

          {/*______________________________________________________________ */}

          <div style={{'margin-bottom': 80+'px'}}></div>
          <div className="flexbox1 flexbox">
            <div className="wrapperTwo-flexbox1-left">
                <div>Bronze Partners</div>
            </div>
              {/* <div style={{width:20+'px'}}></div> */}
            <div className="wrapperTwo-flexbox1-right">

                <div></div> 

            </div>

          </div>

          <div style={{'margin-bottom': 60+'px'}}></div>


          <div className="flexbox1 flexbox-ourpartners">
            <div className="wrapperTwo-flexbox1-left">
                <img className="ourpartners-img" src={RakutenRapidApiImg} style={{height:150+'px'}}/>
            </div>
              {/* <div style={{width:20+'px'}}></div> */}
            <div className="wrapperTwo-flexbox1-right">
                <div>
                    Shopee is a Singaporean e-commerce platform headquartered under the Sea Group, which was founded in 2015.
                    It has since expanded and is now the largest e-commerce platform in SEA and Taiwan.
                </div> 
            </div>

        
          </div>

          <div style={{'margin-bottom': 60+'px'}}></div>

          <div className="flexbox1 flexbox-ourpartners">
            <div className="wrapperTwo-flexbox1-left">
                <img id="ourpartners-img" src={RedBullImg} style={{height:150+'px'}}/>
            </div>
              {/* <div style={{width:20+'px'}}></div> */}
            <div className="wrapperTwo-flexbox1-right">
                <div>
                    Shopee is a Singaporean e-commerce platform headquartered under the Sea Group, which was founded in 2015.
                    It has since expanded and is now the largest e-commerce platform in SEA and Taiwan.
                </div> 
            </div>

        
          </div>
          {/*______________________________________________________________ */}

          {/*______________________________________________________________ */}

          <div style={{'margin-bottom': 80+'px'}}></div>
          <div className="flexbox1 flexbox">
            <div className="wrapperTwo-flexbox1-left">
                <div>Community Partners</div>
            </div>
              {/* <div style={{width:20+'px'}}></div> */}
            <div className="wrapperTwo-flexbox1-right">

                <div></div> 

            </div>

          </div>

          <div style={{'margin-bottom': 60+'px'}}></div>


          <div className="flexbox1 flexbox-ourpartners">
            <div className="wrapperTwo-flexbox1-left">
                <img className="ourpartners-img" src={StartupXImg} style={{height:150+'px'}}/>
            </div>
              {/* <div style={{width:20+'px'}}></div> */}
            <div className="wrapperTwo-flexbox1-right">
                <div>
                    Shopee is a Singaporean e-commerce platform headquartered under the Sea Group, which was founded in 2015.
                    It has since expanded and is now the largest e-commerce platform in SEA and Taiwan.
                </div> 
            </div>

        
          </div>

          <div style={{'margin-bottom': 60+'px'}}></div>

          <div className="flexbox1 flexbox-ourpartners">
            <div className="wrapperTwo-flexbox1-left">
                <img id="ourpartners-img" src={TribeTheoryImg} style={{height:150+'px'}}/>
            </div>
              {/* <div style={{width:20+'px'}}></div> */}
            <div className="wrapperTwo-flexbox1-right">
                <div>
                    Shopee is a Singaporean e-commerce platform headquartered under the Sea Group, which was founded in 2015.
                    It has since expanded and is now the largest e-commerce platform in SEA and Taiwan.
                </div> 
            </div>

        
          </div>

          <div style={{'margin-bottom': 60+'px'}}></div>

          <div className="flexbox1 flexbox-ourpartners">
            <div className="wrapperTwo-flexbox1-left">
                <img id="ourpartners-img" src={KickstartImg} style={{height:150+'px'}}/>
            </div>
              {/* <div style={{width:20+'px'}}></div> */}
            <div className="wrapperTwo-flexbox1-right">
                <div>
                    Shopee is a Singaporean e-commerce platform headquartered under the Sea Group, which was founded in 2015.
                    It has since expanded and is now the largest e-commerce platform in SEA and Taiwan.
                </div> 
            </div>

        
          </div>
          {/*______________________________________________________________ */}

          {/*______________________________________________________________ */}

          <div style={{'margin-bottom': 80+'px'}}></div>
          <div className="flexbox1 flexbox">
            <div className="wrapperTwo-flexbox1-left">
                <div>Supporting Partners</div>
            </div>
              {/* <div style={{width:20+'px'}}></div> */}
            <div className="wrapperTwo-flexbox1-right">

                <div></div> 

            </div>

          </div>

          <div style={{'margin-bottom': 60+'px'}}></div>


          <div className="flexbox1 flexbox-ourpartners">
            <div className="wrapperTwo-flexbox1-left">
                <img className="ourpartners-img" src={ReassembleImg} style={{height:150+'px'}}/>
            </div>
              {/* <div style={{width:20+'px'}}></div> */}
            <div className="wrapperTwo-flexbox1-right">
                <div>
                    Shopee is a Singaporean e-commerce platform headquartered under the Sea Group, which was founded in 2015.
                    It has since expanded and is now the largest e-commerce platform in SEA and Taiwan.
                </div> 
            </div>

        
          </div>

          <div style={{'margin-bottom': 60+'px'}}></div>

          <div className="flexbox1 flexbox-ourpartners">
            <div className="wrapperTwo-flexbox1-left">
                <img id="ourpartners-img" src={SalesforceImg} style={{height:150+'px'}}/>
            </div>
              {/* <div style={{width:20+'px'}}></div> */}
            <div className="wrapperTwo-flexbox1-right">
                <div>
                    Shopee is a Singaporean e-commerce platform headquartered under the Sea Group, which was founded in 2015.
                    It has since expanded and is now the largest e-commerce platform in SEA and Taiwan.
                </div> 
            </div>

        
          </div>

          <div style={{'margin-bottom': 60+'px'}}></div>

          <div className="flexbox1 flexbox-ourpartners">
            <div className="wrapperTwo-flexbox1-left">
                <img id="ourpartners-img" src={CirclesLifeImg} style={{height:150+'px'}}/>
            </div>
              {/* <div style={{width:20+'px'}}></div> */}
            <div className="wrapperTwo-flexbox1-right">
                <div>
                    Shopee is a Singaporean e-commerce platform headquartered under the Sea Group, which was founded in 2015.
                    It has since expanded and is now the largest e-commerce platform in SEA and Taiwan.
                </div> 
            </div>

        
          </div>
          {/*______________________________________________________________ */}

          {/*______________________________________________________________ */}

          <div style={{'margin-bottom': 80+'px'}}></div>
          <div className="flexbox1 flexbox">
            <div className="wrapperTwo-flexbox1-left">
                <div>Community Partners</div>
            </div>
              {/* <div style={{width:20+'px'}}></div> */}
            <div className="wrapperTwo-flexbox1-right">

                <div></div> 

            </div>

          </div>

          <div style={{'margin-bottom': 60+'px'}}></div>


          <div className="flexbox1 flexbox-ourpartners">
            <div className="wrapperTwo-flexbox1-left">
                <img className="ourpartners-img" src={AmbidextrImg} style={{height:150+'px'}}/>
            </div>
              {/* <div style={{width:20+'px'}}></div> */}
            <div className="wrapperTwo-flexbox1-right">
                <div>
                    Shopee is a Singaporean e-commerce platform headquartered under the Sea Group, which was founded in 2015.
                    It has since expanded and is now the largest e-commerce platform in SEA and Taiwan.
                </div> 
            </div>

        
  
        
          </div>
          {/*______________________________________________________________ */}

          

        </div>

        <div className = "wrapper3 wrapper">
            {/* <div className = "containerThree">
            asdsa
            </div> */}
            
        </div>


        

     
        <Footer />
    </div>
 
  </div>
    );
  }
  
}

export default OurPartners;

