import React,{Component} from 'react';

class DeveloperQuotes extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            quotes: [],
         }
    }
    componentDidMount(){
        this.loadData();
    }

    loadData= async()=>{
        const response = await fetch('https://programming-quotes-api.herokuapp.com/quotes');
        const json = await response.json();
        console.table(json)
        this.setState(
            {
                quotes:json
            }
        )
    }

    render() { 
        return ( 
            <div>
                <h1>Developer Quotes</h1>
                {
                    this.state.quotes.map((quote) =>{
                        return(
                            <div key={quote._id}>
                                <p>Author: {quote.author}</p>
                                <p>Quote: {quote.en}</p>
                            </div>
                        )
                    }

                    )
                }
            </div>
         );
    }
}
 
export default DeveloperQuotes;