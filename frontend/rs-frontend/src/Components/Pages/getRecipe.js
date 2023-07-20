import React from "react";

export class GetRecipe extends React.Component{
   
    constructor(props) {
    super(props);
    this.state = {apiResponse: ""};
    }

    callAPI(){
        fetch("http://localhost:9000/getRecipe")
        .then(res => res.text())
        .then(res => this.setState({apiResponse: res}))
        .catch(err => err);
        }

    componentDidMount(){
        this.callAPI();
    }
    
    render(){
        return(
            <div className="App">
                <header className="App-header">
                    <p className="App-intro">{this.state.apiResponse}</p>
                </header>
            </div>
        )
    }
    }