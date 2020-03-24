import React,{Component} from 'react';
import DeveloperQuotes from './DeveloperQuotes';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h1>React Routes IC</h1>
                <DeveloperQuotes/>
            </div>
         );
    }
}
 
export default AppContainer;