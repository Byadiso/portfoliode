import React from 'react';
import { Switch, Route} from 'react-router-dom';

import landingPage from './landingpage';
import AboutMe from './about';
import Contacts from './contact';
import Projects from './projects';
import Resume from './resume';

const Main = () => (
    <Switch >
        <Route exact path = "/" component = {landingPage}/>
        <Route  path = "/aboutme" component = {AboutMe}/>
        <Route  path = "/contact" component = {Contacts}/>
        <Route  path = "/projects" component = {Projects}/>
        <Route  path = "/resume" component = {Resume}/>
    </Switch>
)

export default Main ;