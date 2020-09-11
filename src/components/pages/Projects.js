import React from 'react';
import ProjectCards from '../ProjectCards';
import '../../App.css';
//import Cards from '../Cards';

function Projects() {
    return (
        <>
            <h1 className='projects'>
                PROJECTS
            </h1>
            <p className='page_description'>
                The below cards have links to some of my prior projects available on my Github.
                The topics span all different aspects of computer programming, from Web Development to navigating Data Structures using Algorithms.
                Feel free to explore the code I have written.
            <p className='languages'>
                    Programming Language Experience: Python, Javascript, ReactJS, C, C++, Java, Verilog, SystemVerilog, Assembly
            </p>

            </p>
            <ProjectCards />
        </>
    );
}

export default Projects;