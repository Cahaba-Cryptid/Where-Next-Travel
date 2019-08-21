import * as React from 'react'
import './scss/app';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from '../client/Components/Footer';

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login';
import Blogs from './Components/Blogs';
import Instagram from './Components/SocialMedia';
import TravelForm from './Components/TravelForm';
import AboutMe from './Components/AboutMe';


export interface AppProps {

}

const App: React.SFC<AppProps> = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/aboutme' component={AboutMe} />
                <Route exact path='/travelform' component={TravelForm} />
                <Route exact path='/blogs' component={Blogs} />
                <Route exact path='/instagram' component={Instagram} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;