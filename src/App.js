import React from 'react';
import DaysList from './components/DaysList';
import DayAdd from './components/DayAdd';
import { Router, Route } from 'react-router-dom';
import history from './history';

const App = () => {
    return (
        <Router history={history}>
            <main>
                <Route path="/" component={DaysList} />
                <Route path="/add" exact component={DayAdd} />
            </main>
        </Router>
    );
};

export default App;
