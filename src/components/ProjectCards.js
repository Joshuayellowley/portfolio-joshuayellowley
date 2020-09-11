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
                            text='Python Conversion Scripts'
                            label='Python'
                            path='/projects'
                        />
                        <CardItem
                            src='images/img-4.jpg'
                            text='Personal Website'
                            label='ReactJS'
                            path='/'
                        />
                        <CardItem
                            src='images/graph.jpg'
                            text='Graph Theory Path-Finding Game'
                            label='Java'
                            path='/projects'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/wiki.png'
                            text='Wikipedia Data Server'
                            label='Java'
                            path='/projects'
                        />
                        <CardItem
                            src='images/cards.jpg'
                            text='5-Card Poker Game'
                            label='Java'
                            path='/projects'
                        />
                        <CardItem
                            src='images/grocery.png'
                            text='Stock-Stalker'
                            label='ReactJS / Django / MongoDB'
                            path='/projects'
                        />
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default ProjectCards;