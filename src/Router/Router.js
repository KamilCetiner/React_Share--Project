import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


import Signup from '../pages/Signup';
import Signin from '../pages/Signin';
import Navbar from '../components/Navbar';

function AppRouter () {
    return(
        <Router>
            <Navbar />
            <Switch>
                <Router path='/register' component={Signup} />
                <Router path='/login' component={Signin} />
            </Switch>
        </Router>
    )
}

export default AppRouter;

