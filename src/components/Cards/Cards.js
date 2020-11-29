import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Transportation from '../imgs/Transportation.png';
import Geo_data_Analysis from '../imgs/Geo-data_Analysis.png';
import QR_Code_Utilization from '../imgs/QR-Code_Utilization.png';
import Map from '../imgs/Map.gif';

function Cards() {
    return (
        <div className='cards' id='services'>
            <h1> Services </h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem src={Transportation} text='Quick Response codes will be served as a ticket for a contactless and orderly transaction with only the use of web and mobile devices.' label='Transportation' path='/services'/>
                        <CardItem src={Geo_data_Analysis} text='With Quick Response codes, it will be easier to conduct contract tracing because the application will determine one’s location.' label='Geo-data Analysis' path='/services'/>
                        <CardItem src={QR_Code_Utilization} text='Quick Response codes are used to store data such as health information and personal information.  It will be easier to collect and present data by just scanning QR codes.' label='QR Code Utilization' path='/services'/>
                    </ul>
                    <ul className='cards__items'>
                        <CardItem src={Map} text='GOOGLE MAP (TEMP) - PUT [API KEY] HERE /src/components/Cards.js' label='Google Map' path='/map'/>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
