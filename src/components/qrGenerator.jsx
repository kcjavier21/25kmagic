import React, { Component } from 'react';
import { getProfiles } from '../infoStorage/sampleProfiles';


//import qrCodeDefault from '../assets/default.png';

export default class qrGenerator extends Component {
    // ===== STATE for single source of truth=====
    state = {
        profiles: getProfiles(),
        input: {
            qrcode: '',
            qrtext: '',
            qrimage: ''
        }
    };

    // ==== For Handling the change in textarea ======
    handleChange = event => {
        const input = {...this.state.input};
        input.qrtext = event.currentTarget.value;
        this.setState({ input });
        return;
    };

    // ===== For Handling the Submit Process ========
    handleSubmit = event => {
        event.preventDefault();
        console.log('all good');
        
        console.log('Handle Submit: ' + this.state.input.qrtext);

        const input = {...this.state.input};
        input.qrcode = input.qrtext;

        this.setState({ input });
        return;
    };

    generateQR = value => {  
        let size = "500x500";
        let baseURL = "http://api.qrserver.com/v1/create-qr-code";
        let data = `Enter Data`;
        let url = `${baseURL}?data=${data}&size=${size}`;

        if(value === '') return url;  
        // if parameter value is empty, it will return the function immediately

        let profiles = [...this.state.profiles];
        let selectedProfile = profiles.filter(p => p._id === value);

        console.log("TYPEOF");
        console.log(selectedProfile);

        if (selectedProfile.length <= 0) {   // If SELECTED PROFILE is empty, it will notify and return the function immediately
            data = "No profile with given ID is found.";
            url = `${baseURL}?data=${data}&size=${size}`;
            
            console.log(data);
          
            return url;
        }

        console.log("ID value " + value);
        console.log('SELECTED PROFILE: ');
        console.log(selectedProfile[0].name);

    
        data = `${selectedProfile[0].name} ${selectedProfile[0].age} ${selectedProfile[0].address}`;
        
        url = `${baseURL}?data=${data}&size=${size}`;

        console.log('URL: ' + url);

        return url;
    };


    render() {

        // ===== STYLINGS ======
       const textAreaStyle = {
            outline: 'none',
            height: '12px',
            padding: '1rem',
            border: '2px solid #bada55',
            borderRadius: '0.5rem',
            gridColumn: '1 / -1'
        }
    
        const buttonStyle = {
            fontSize: '1rem',
            border: 'none',
            outline: 'none',
            backgroundColor: '#bada55',
            padding: '0.5rem 1rem',
            borderRadius: '2rem',
            transition: 'backgroundColor 0.2s',

            "&:hover": {
                backgroundColor: '#a4be4b'
            }
        }
        // =========================================

        // ====== VARIABLE to store the QR Image ======
        // const qrCodeImage = this.generateQR(this.state.input.qrcode);

        
        return (
        <React.Fragment>
            <img 
                style={{height: '500px', width: '500px'}} 
                src={ this.generateQR(this.state.input.qrcode) } 
                alt="qrcode"
            />

            <form onSubmit={this.handleSubmit}>
                <textarea
                    name="" 
                    value={this.state.input.qrtext}
                    id="qrtext" 
                    cols="30" 
                    rows="10" 
                    style={textAreaStyle}
                    onChange={this.handleChange}
                    placeholder="Type Here"
                />

                <button style={buttonStyle}>
                    Generate QR Code
                </button>

            </form>
            
        </React.Fragment>
        )
    }
}
