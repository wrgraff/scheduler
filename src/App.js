import React from 'react';
import Header from './components/Header'
import Button from './components/Button';

const App = () => {
    return (
        <>
            <main>
                <h2>Button</h2>
                <Button type="button">Basic button</Button>
                <br />
                <br />
                <Button type="button" modificator="primary">Primary button</Button>
                <br />
                <br />
                <Button type="button" modificator="white">White button</Button>
                <br />
                <br />
                <Button type="button" modificator="primary" ico="add">Button with icon</Button>
                <h2>Small button</h2>
                <Button type="button" ico="add" label="Label text"></Button>
            </main>
        </>
    );
};

export default App;
