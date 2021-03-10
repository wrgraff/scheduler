import React from 'react';
import DaysList from './components/DaysList';
import SessionAdd from './components/SessionAdd';
import SessionEdit from './components/SessionEdit';
import SessionDelete from './components/SessionDelete';
import { Router, Route } from 'react-router-dom';
import history from './history';

const App = () => {
    return (
        <Router history={history}>
            <main>
                <Route path="/" component={DaysList} />
                <Route path="/sessions/add" exact component={SessionAdd} />
                <Route path="/sessions/edit/:id" exact component={SessionEdit} />
                <Route path="/sessions/delete/:id" exact component={SessionDelete} />
            </main>
        </Router>
    );
};

export default App;
