import React from 'react';
import Nav from './components/Nav';
import Day from './components/Day';
import SessionItem from './components/SessionItem';

const menuItems = [
    {
        id: '03-08-20',
        text: '3 августа'
    },
    {
        id: '04-08-20',
        text: '4 августа'
    },
    {
        id: '05-08-20',
        text: '5 августа'
    },
    {
        id: '06-08-20',
        text: '6 августа'
    },
    {
        id: '07-08-20',
        text: '7 августа'
    },
    {
        id: '08-08-20',
        text: '8 августа'
    },
    {
        id: '09-08-20',
        text: '9 августа'
    },
    {
        id: '10-08-20',
        text: '10 августа'
    },
];

const App = () => {
    return (
        <>
            <main>
                <Day>
                    <ul className="day__session-list session-list">
                        <SessionItem />
                        <SessionItem />
                        <SessionItem />
                    </ul>
                </Day>

                <Nav items={menuItems} activeItem='04-08-20'></Nav>
            </main>
        </>
    );
};

export default App;
