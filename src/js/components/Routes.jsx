import React from 'react'
import { Switch, Route } from 'react-router-dom'

import AboutMe from '../pages/AboutMe';
import MyProjects from '../pages/MyProjects';

export default function Routes() {
    return (
        <Switch>
            <Route exact  path='/' component={AboutMe} />
            <Route path='/myprojects' component={MyProjects} />
        </Switch>
    )
}
