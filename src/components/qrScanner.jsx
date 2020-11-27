import React, { Component } from 'react'
//import image from 'https://uploads.sitepoint.com/wp-content/uploads/2017/07/1499401426qr_icon.svg';

export default class qrScanner extends Component {
    render() {
        const bodyStyle = {
            fontFamily: 'sans-serif',
            padding: '0 10px',
            height: '100%',
            background: 'black',
            margin: '0',
            textAlign: 'center'
        };

        const qrCanvasStyle = {
            margin: 'auto',
            width: 'calc(100% - 20px)',
            maxWidth: '400px'
        };

        const qrResult = {
            fontSize: '1.2em',
            margin: '20px auto',
            padding: '20px',
            maxWidth: '700px',
            backgroundColor: 'white'
        }

        let image = 'https://uploads.sitepoint.com/wp-content/uploads/2017/07/1499401426qr_icon.svg';
        

        return (
            <React.Fragment>
                <div style={bodyStyle}>
                    <h1 style={{
                        color: 'white',
                        margin: '0',
                        padding: '15px'
                    }}>
                        QR Code Scanner
                    </h1>
        
                    <a id="btn-scan-qr" style={{
                        cursor: 'pointer'
                    }}>
                        <img src={image}
                            style={{
                                height: '10em',
                                padding: '15px',
                                margin: '15px',
                                background: 'white'
                        }}/>
                    </a>

                    <canvas hidden="" style={qrCanvasStyle}></canvas>

                    <div style={qrResult} hidden="">
                        <b>Data:</b> <span id="outputData"></span>
                    </div>
                </div>
            </React.Fragment>
        )
        
    }
}
