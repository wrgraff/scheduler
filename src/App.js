import React from 'react';
import Header from './components/Header';
import DaysList from './components/DaysList';
import SessionAdd from './components/SessionAdd';
import SessionEdit from './components/SessionEdit';
import SessionDelete from './components/SessionDelete';
import Settings from './components/Settings';
import SettingsEdit from './components/SettingsEdit';
import { Router, Route } from 'react-router-dom';
import history from './history';

const App = () => {
    return (
        <Router history={history}>
            <Header />
            <main>
                <Route path="/" component={DaysList} />
                <Route path="/sessions/add" exact component={SessionAdd} />
                <Route path="/sessions/edit/:id" exact component={SessionEdit} />
                <Route path="/sessions/delete/:id" exact component={SessionDelete} />
                <Route path="/settings" exact component={Settings} />
                <Route path="/settings/edit/:list" exact component={SettingsEdit} />
            </main>
        </Router>
    );
};

export default App;
