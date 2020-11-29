import React, { Component } from 'react';
import './pageStyles/UserProfile.css';

import profilePic from '../imgs/Group 12.svg';
import qrCode from '../imgs/image 1.png';
import cellphone from '../imgs/Group_49.png';
import qrScanner from '../imgs/QR Scanner.png';

export default class userProfile extends Component {
    render() {
        const healthInfoStr = "December 07, 2020: Summary of Health Status";

        return (
            <React.Fragment>
                <img id="profile-pic" src={profilePic} alt="Profile"/>
                <h1 id="user-full-name">Allyza Maureen Catura</h1>
                <div className="static-info">
                    Age: 19 years old <br/>
                    Birthdate: December 30, 2000 <br/>
                    Location: Caloocan City, Metro Manila <br/>
                </div>
                <img id="users-qr-code" src={qrCode} alt="QR Code"/>
                <img id="cellphone" src={cellphone} alt="cellphone"/>
                <img id="qrScanner" src={qrScanner} alt="QR Scanner"/>

                <div class="control-panel">
                    <h4>Control Panel</h4>
                        
                    
                    <div class="button-group">
                        <button 
                            type="button" 
                            class="ctrl-panel-btn" 
                        >LOG</button>

                        <button 
                            type="button" 
                            class="ctrl-panel-btn active"    
                        >SCAN</button>

                        <button 
                            type="button" 
                            class="ctrl-panel-btn" 
                        >LOCATE</button>

                        <button 
                            type="button" 
                            class="ctrl-panel-btn"    
                        >TRANSPO</button>
                        
                        <button 
                            type="button" 
                            class="ctrl-panel-btn"    
                        >UPDATE</button>

                        <button 
                            type="button" 
                            class="ctrl-panel-btn"  
                        >REBOOT</button>
                    </div>
                </div>

                <div class="info-btn-group">
                    <h4 class="info-btn active" id="health">Health Information</h4>
                    <h4 class="info-btn" id="tickets">My Tickets</h4>
                    <h4 class="info-btn" id="transaction">Transaction</h4>
                </div>

                <div class="information-panel">
                         <p>▶ {healthInfoStr} <button type="button" className="getqr-btn">GetQR</button></p>
                         <p>▶ {healthInfoStr} <button type="button" className="getqr-btn">GetQR</button></p> 
                         <p>▶ {healthInfoStr} <button type="button" className="getqr-btn">GetQR</button></p> 
                         <p>▶ {healthInfoStr} <button type="button" className="getqr-btn">GetQR</button></p> 
                         <p>▶ {healthInfoStr} <button type="button" className="getqr-btn">GetQR</button></p> 
                         <p>▶ {healthInfoStr} <button type="button" className="getqr-btn">GetQR</button></p> 
                         <p>▶ {healthInfoStr} <button type="button" className="getqr-btn">GetQR</button></p> 
                         <p>▶ {healthInfoStr} <button type="button" className="getqr-btn">GetQR</button></p>     
                </div>

                
            </React.Fragment>
        )
    }
}
