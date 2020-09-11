import React from 'react';
import '../../App.css';
import AboutCards from "../AboutCards";

export default function About() {
    return (
        <>
            <h1 className='about'>
                ABOUT ME
            </h1>

            <p className='page_description'>
                My name is Joshua Yellowley, and I am a Third Year Computer Engineering Student at the University of British Columbia.
                As a passionate technology user and avid programmer, I am a driven individual who loves to explore new technology, tackle complex problems, and collaborate to produce high-quality products and results.
                Outside of work, I love to interact with others, whether that be outside enjoying the weather with friends or playing video games with friends.
                Some of my personal interests and hobbies are shown below!
            </p>
            <AboutCards />
        </>
    );
}