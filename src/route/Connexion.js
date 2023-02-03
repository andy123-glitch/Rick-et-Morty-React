import React from "react";
import { connect } from "react-redux";
import store from './../redux/store';
import { changeUser } from "../redux/action/user";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: "erty" };
        //const state = store.getState();
        //console.log(state);
    }

    updateInput = email => {
        this.setState({ email });
    };

    handleLogin = () => {
        // On imagine un call Ajax pour check le user et récupérer les infos
        let user = {
            password: 'this.state.password',
            email: 'this.state.email',
            token: 'token'
        }
        this.props.changeUser(user);
        this.setState({ email: "" });
    };

    render() {
        return (
            <div>
                <input
                    onChange={e => this.updateInput(e.target.value)}
                    value={this.state.email}
                />
                <button onClick={this.handleLogin}>
                    Login
                </button>
            </div>
        );
    }
}

export default connect(
    null,
    { changeUser }
)(Login);

