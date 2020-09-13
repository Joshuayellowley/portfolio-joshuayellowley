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
                            src='images/todo.png'
                            text='To-Do List Utilizing MERN Full Stack'
                            label='MongoDB, ReactJS, NodeJS'
                            path='https://github.com/joshuayellowley'
                        />
                        <CardItem
                            src='images/react.png'
                            text='Personal Website'
                            label='ReactJS'
                            path='https://github.com/Joshuayellowley/portfolio-joshuayellowley'
                        />
                        <CardItem
                            src='images/graph.jpg'
                            text='Graph Theory Path-Finding Game'
                            label='Java'
                            path='https://github.com/Joshuayellowley/CPEN-221-Kamino-Game'
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
                            src='images/cards.jpg'
                            text='5-Card Poker Game'
                            label='Java'
                            path='https://github.com/Joshuayellowley'
                        />
                        <CardItem
                            src='images/grocery.png'
                            text='Stock-Stalker'
                            label='ReactJS / Django / MongoDB'
                            path='https://github.com/cowmanjoe/stock-watcher'
                        />
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default ProjectCards;