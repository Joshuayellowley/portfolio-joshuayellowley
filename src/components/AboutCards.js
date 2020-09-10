import React from 'react';
import './ProjectCards.css';
import CardItem from './CardItem';

function ProjectCards() {
    return (

        <div className='cards'>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/python.jpg'
                            text='Royal Conservatory of Music Gr.10 Piano'
                            label='Music'
                            path='/about'
                        />
                        <CardItem
                            src='images/img-4.jpg'
                            text='Hack-a-Thons'
                            label='Coding'
                            path='/about'
                        />
                        <CardItem
                            src='images/graph.jpg'
                            text='Video-Games'
                            label='Social'
                            path='/about'
                        />
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default ProjectCards;