import React, { Component } from 'react';
//import qrCodeDefault from '../assets/default.png';

export default class qrGenerator extends Component {
    state = {
        input: {
            qrcode: '',
            qrtext: '',
            qrimage: ''
        }
    };

    handleChange = event => {
        const input = {...this.state.input};
        input.qrtext = event.currentTarget.value;
        this.setState({ input });
    };

    handleSubmit = event => {
        event.preventDefault();
        console.log('all good');
        
        console.log('Handle Submit: ' + this.state.input.qrtext);

        const input = {...this.state.input};
        input.qrcode = input.qrtext;

        this.setState({ input });

       // this.generateQR(this.state.input.qrtext);
    };

    generateQR = (value) => {  
            let size = "1000x1000";
            let data = value;
            let baseURL = "http://api.qrserver.com/v1/create-qr-code";
            let url = `${baseURL}?data=${data}&size=${size}`;

            console.log('URL: ' + url);

            return url;
    };


    render() {
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


        const qrCodeImage = this.generateQR(this.state.input.qrcode);

        
        return (
        <React.Fragment>
            <img 
                style={{height: '500px', width: '500px'}} 
                src={ qrCodeImage } 
                alt="qrcode"
            />

            <form onSubmit={this.handleSubmit}>
                <input
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
