import React from 'react';
import '../../App.css';
import ContactCards from '../ContactCards'

export default function Contact() {
    return (
        <>
            <h1 className="contact">
                CONTACT INFORMATION
            </h1>
            <p className='page_description'>
                <p>
                    Email: Joshuayellowley@gmail.com
                </p>
                <p>
                    Phone: 604 988 7726
                </p>

            </p>
            <ContactCards />
        </>
    );
}