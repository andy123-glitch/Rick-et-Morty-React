import React from "react";
import { connect } from "react-redux";
import Button from "react-bootstrap/esm/Button";
import store from './../redux/store';
import {addFavorite,delFavorite} from '../redux/action/Favorites';

class App extends React.Component {
    constructor(props){
        super(props); 
    }
    
    toggle=true;
    handle = () => {
        if (this.toggle) {
            this.props.addFavorite(this.props.id)  
        }else this.props.delFavorite(this.props.id)
        this.toggle=!this.toggle
        console.log(this.props.state)
    };

    render() {
        return (
            <div>
                <Button variant="light" className='float-end'
                    onClick={this.handle} > {this.toggle?'♡':'❤️'}</Button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { favorites } = state;
    return { favorites };
};

export default connect(mapStateToProps,    
    {addFavorite,delFavorite})(App);