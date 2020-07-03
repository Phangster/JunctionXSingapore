import React, { Component } from "react";
import './css/track.css';
import Footer from '../../../global/Footer.js'
import ShopeeImg from '../../../../images/JxSingapore2019/partners_img/Shopee.png'

class Shopee extends Component {
  render() {
    return (
      <div>
        <div className = "containerTrackOne">
          <div className= "track-css">
            <h1>The future of Ecommerce</h1>
            <div className="partner_block" >
              <img className="partner_img" src={ShopeeImg} alt="Shopee" />
            </div>
              <h1>The Challenge</h1>
              <p className="textsmaller">Shopee is the leading e-commerce platform in Southeast Asia and Taiwan. We are always striving towards the goal of bringing the best shopping experience to our buyers and sellers. Services like search, recommendation, payment and transportation all need to be personalized and optimized. Imagine you have access to all the data in the world. We challenge your creativity to design and develop a brand-new feature, or API to drive the ecommerce business. You may consider one of the following perspectives:</p>
              <p className="textsmaller">1. Provide a better personalized shopping experience for consumers,</p>
              <p className="textsmaller">2. Improve operational efficiency for the business,</p>
              <p className="textsmaller">3. Better understanding of market demand for sellers,</p>
              <p>Together, let's create the e-commerce platform of the future!</p>
              <h1>Criteria</h1>
              <p className="textsmaller">● Propose a service that you think is suitable for the ‘future ecommerce’ era.</p> 
              <p className="textsmaller">● Please define the necessary data and technologies for the proposed service.</p>
              <p className="textsmaller">● Please rationally derive the essential value and MVP (Minimum Viable Product or Prototype) of the service.</p>
              <p className="textsmaller"><b>Creativity</b> - Is your idea distinctive ?</p>
              <p className="textsmaller"><b>Feasibility</b> - Is your idea technically viable and backed by logical reason?</p>
              <p className="textsmaller"><b>Business Impact</b> - How significant is the proposed service towards ecommerce?</p>
              <h1>About the company</h1>
              <p className="textsmaller"> Shopee is the leading e-commerce platform in Southeast Asia and Taiwan. Launched in 2015, it is a platform tailored for the region, providing customers with an easy, secure and fast online shopping experience through strong payment and fulfillment support. We believe online shopping should be accessible, easy and enjoyable. This is the vision Shopee aspires to deliver on the platform, every single day. </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Shopee;