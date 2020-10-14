import React from 'react';
import DaysList from './components/DaysList';
import SessionAdd from './components/SessionAdd';
import { Router, Route } from 'react-router-dom';
import history from './history';

const App = () => {
    return (
        <Router history={history}>
            <main>
                <Route path="/" component={DaysList} />
                <Route path="/add-session" exact component={SessionAdd} />
            </main>
        </Router>
    );
};

export default App;
