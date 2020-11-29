import React from 'react';
import '../App.css';
import { Button } from './Buttons/Button';
import { Button2 } from './Buttons/Button2';
import './MainSection.css';
import vidbg from './vids/vid-bg.mp4';

function MainSection() {
    return (
        <div className='main-container' id='home'>
            <video src={vidbg} autoPlay loop />
                <h1> 25K MAGIC </h1>
                <p> Gather and share latest information with ease. </p>
            <div className='main-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    SIGN-IN 
                </Button>
                <Button2 className='btns2' buttonStyle='btn--primary' buttonSize='btn--large'>
                    SIGN-UP
                </Button2>
            </div>
        </div>
    );
}

export default MainSection;