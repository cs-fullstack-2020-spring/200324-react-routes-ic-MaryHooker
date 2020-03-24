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
                <h2>Developer Quotes</h2>
                {
                    this.state.quotes.map((quote) =>{
                        return(
                            <div key={quote._id}>
                                <p><span>Author:</span> {quote.author}</p>
                                <p><span>Quote:</span> {quote.en}</p>
                                <hr/>
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