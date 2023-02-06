import React from "react";
import { useContext, useRef, useState } from "react";
import { connect } from "react-redux";
import store from './../redux/store';
import { changeUser } from "../redux/action/user";
import { addFavorite, delFavorite } from '../redux/action/Favorites';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import app from "../redux/reducer/user";

import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged
} from 'firebase/auth';
import { auth } from '../firebase-config';

export default function App() {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <input  type="email" placeholder="Enter email" name="email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label >Password</Form.Label>
                <input  type="password" placeholder="Password" />
            </Form.Group>
            <p className="text-danger mt-1"></p>
            <Button variant="primary" type="submit">
                Se connecter
            </Button>
            <Button href="/" className="m-2" variant="primary" type="submit">
                Retour
            </Button>
        </Form>
    )
}


// const mapStateToProps = state => {
//     const { user } = state;
//     const { favorites } = state;
//     return { user, favorites };
// };


// export default connect(
//     mapStateToProps,
//     { changeUser, addFavorite, delFavorite }
// )(Login);

