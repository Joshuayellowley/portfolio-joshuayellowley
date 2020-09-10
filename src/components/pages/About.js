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
                This is where a description about myself will go.  I am a big programmer and a even bigger beast.  Watch out everyone a Beast is coming through.
            </p>
            <AboutCards />
        </>
    );
}