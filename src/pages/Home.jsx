import React, {Component, useEffect} from 'react';
i

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: JSON.parse(localStorage.getItem("loginResponse")),

        }
    }

    render() {
        return (
        <div>
             Hello, {this.state.user.name}
         </div>
        );
    }

};
export default Home;

