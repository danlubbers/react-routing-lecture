import React from 'react';
import axios from 'axios';

export default class Results extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cars: []
        };
    }
    componentDidMount() {
        axios.get('https://joes-autos.herokuapp.com/api/vehicles?color=' + this.props.match.params.color).then( res => {
            console.log(res)
            this.setState({
                cars: res.data
            })
        })
    }


    render() {
        return(
            <div>
                <h3>Here are the Results:</h3>
                    {/* Found match.params.color in console log under props */}
                    {/* params is an object */}
                    url parameter value is: {this.props.match.params.color}
                    <hr />
                    {/* for debugging, to show the object as a string in console */}
                    {JSON.stringify(this.state.cars, null, 2)}
            </div>
        )
    }
}
  