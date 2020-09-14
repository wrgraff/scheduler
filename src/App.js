import React from 'react';
import Header from './components/Header';
import Button from './components/Button';
import Toggler from './components/Toggler';
import Day from './components/Day';
import SessionItem from './components/SessionItem';

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
            </main>
        </>
    );
};

export default App;
