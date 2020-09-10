import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out some of my Past Projects!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/github.png'
                            text='Access past projects on my GitHub'
                            label='About Me'
                            path='/github'
                        />
                        <CardItem
                            src='images/clipboard.jpg'
                            text='Download my Resume'
                            label='About Me'
                            path='/clipboard'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/wiki.png'
                            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            label='Mystery'
                            path='/projects'
                        />
                        <CardItem
                            src='images/grocery.png'
                            text='Experience Football on Top of the Himilayan Mountains'
                            label='Adventure'
                            path='/projects'
                        />
                        <CardItem
                            src='images/python.jpg'
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Adrenaline'
                            path='/projects'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;