import React from 'react';
import Header from './components/Header'
import Button from './components/Button';
import Toggler from './components/Toggler';

const App = () => {
    return (
        <>
            <main>
                <h2>Button</h2>
                <Button type="button">Basic button</Button>
                <br /><br />
                <Button type="button" modificator="primary">Primary button</Button>
                <br /><br />
                <Button type="button" modificator="white">White button</Button>
                <br /><br />
                <Button type="button" modificator="primary" ico="add">Button with icon</Button>
                <h3>Small button</h3>
                <Button type="button" ico="add" label="Label text"></Button>

                <h2>Toggler</h2>
                <Toggler>Basic toggler</Toggler>
                <br /><br />
                <Toggler modificator="white">White toggler</Toggler>
                <br /><br />
                <Toggler pressed="true">Pressed toggler</Toggler>
                <h3>Small toggler</h3>
                <Toggler label="Label text"></Toggler>
            </main>
        </>
    );
};

export default App;
