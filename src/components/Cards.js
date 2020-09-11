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
                            path='https://github.com/joshuayellowley'
                        />
                        <CardItem
                            src='images/linkedin.jpg'
                            text='LinkedIn Profile'
                            label='About Me'
                            path='/'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/wiki.png'
                            text='Wikipedia Data Server'
                            label='Java'
                            path='https://github.com/Joshuayellowley/CPEN-221-Wikipedia_Mediator'
                        />
                        <CardItem
                            src='images/grocery.png'
                            text='Stock-Stalker'
                            label='ReactJS / Python'
                            path='https://github.com/cowmanjoe/stock-watcher'
                        />
                        <CardItem
                            src='images/graph.jpg'
                            text='Graph Theory Path-Finding Game'
                            label='Java'
                            path='https://github.com/Joshuayellowley/CPEN-221-Kamino-Game'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;