import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { DownloadButton } from './DownloadButton';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-1.mp4' autoPlay loop muted />
            <h1>Passionate Programmer and Lifelong Learner</h1>
            <p>My name is Joshua Yellowley</p>
            <p>Welcome to my website</p>
            <div className='hero-btns'>

                <DownloadButton
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                // link='/about'
                >
                    RESUME
                </DownloadButton>

                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    link='/contact'
                >
                    CONTACT ME
                </Button>
            </div>
        </div >
    );
}

export default HeroSection;