import react from 'react';
import { Switch, Route } from 'react-router-dom';

import Deashboard from '../pages/Deashboard/index';
import Repository from '../pages/Repository/index';
import React from 'react';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Deashboard} />
        <Route path="/repository" exact component={Repository} />
    </Switch>
);

export default Routes;
