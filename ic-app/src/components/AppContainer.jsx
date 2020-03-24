import React,{Component, Fragment} from 'react';
import DeveloperQuotes from './DeveloperQuotes';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
                <h1>React Routes IC</h1>
                <Router>
                    <Link to="/" className='links'>Home</Link>
                    <Link to="/quotes" className='links'>Quotes</Link>
                    <Route path="/quotes">
                        <DeveloperQuotes/>
                    </Route>
                </Router>
                
            </Fragment>
         );
    }
}
 
export default AppContainer;