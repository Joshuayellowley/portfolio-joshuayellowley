import React from 'react';
import './ContactCards.css';
import CardItem from './CardItem';

function ContactCards() {
    return (
        <div className='cards'>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/linkedin.jpg'
                            text='LinkedIn Profile'
                            label='Social'
                            path='https://www.linkedin.com/in/joshua-yellowley-3739b5141/'
                        />
                        {/* <CardItem
                            src='images/clipboard.jpg'
                            text='Resume'
                            label='Resume'
                            path='/'
                        /> */}
                        <CardItem
                            src='images/facebook.png'
                            text='Facebook Profile'
                            label='Social'
                            path='https://www.facebook.com/joshua.yellowley/'
                        />
                        <CardItem
                            src='images/twitter.png'
                            text='Twitter Profile'
                            label='Social'
                            path='https://twitter.com/JoshuaYellowley'
                        />
                        <CardItem
                            src='images/instagram.jpg'
                            text='Instagram Profile'
                            label='Social'
                            path='https://www.instagram.com/joshua_yellowley/?hl=en'
                        />
                    </ul>

                </div>
            </div>
        </div>

    );
}

export default ContactCards;