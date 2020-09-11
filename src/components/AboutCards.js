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
                            src='images/rcm.png'
                            text='Royal Conservatory of Music Gr.10 Piano'
                            label='Music'
                            path='https://www.rcmusic.com/'
                        />
                        <CardItem
                            src='images/calhacks.png'
                            text='Hack-a-Thons'
                            label='Coding'
                            path='https://calhacks.io/'
                        />
                        <CardItem
                            src='images/games.png'
                            text='Video Games'
                            label='Social'
                            path='https://store.steampowered.com/'
                        />
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default ProjectCards;