import React from 'react';
import '../css/Modal.css';
import RakutenRapidApi from '../../images/partners_img/RakutenRapidAPI.png';
import JunctionX from '../../images/junction_img/JunctionX_nav.png';


const modal = (props) => {
    return (
        <div>
            <div className="modal-wrapper"
                style={{
                    transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                <div className="modal-body">
                <div className="close-modal-btn" onClick={props.close}>×</div>
                    <p className="black">
                        Join us for a JunctionXRakutenRapidAPI Webinar!
                        <h1>10th September 2019 at 7:00pm SGT</h1>
                    </p>
                    <div className = "wrapper-modal">
                        <img className = "logoSizeModal" src={JunctionX} alt= "JunctionXSingapore"/>
                        <img className = "logoSizeModal logo-height" src={RakutenRapidApi} alt= "RakutenRapidApi"/>
                    </div>
                </div>
                <div className="modal-footer">
                    {/* <button className="btn-cancel" onClick={props.close}>CLOSE</button> */}
                    <a href='https://www.facebook.com/events/704092956683803/'><button className="btn-continue">Click here for more information</button></a>
                </div>
            </div>
        </div>
    )
}

export default modal;