import React from 'react';
import './ProjectCards.css';
import CardItem from './CardItem';

function ProjectCards() {
    return (

        <div className='cards'>
            <h1>Check out some of my Past Projects!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/python.jpg'
                            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            label='Python'
                            path='/projects'
                        />
                        <CardItem
                            src='images/img-4.jpg'
                            text='Personal Website'
                            label='ReactJS'
                            path='/home'
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
                            src='images/grocery.jpg'
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