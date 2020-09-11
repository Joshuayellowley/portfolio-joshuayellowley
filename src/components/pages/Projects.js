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
                This is where a description about myself will go.  I am a big programmer and a even bigger beast.  Watch out everyone a Beast is coming through.
            </p>
            <ProjectCards />
        </>
    );
}

export default Projects;