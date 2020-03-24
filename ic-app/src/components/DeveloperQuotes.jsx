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
                                <p>{quote.en}</p>
                                <p><span>By:</span> {quote.author}</p>
                                
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