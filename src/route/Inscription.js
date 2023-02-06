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
    const inputs = useRef([])
    const formRef = useRef()
    const addInputs = el => {
        if (el && !inputs.current.includes(el)) {
            inputs.current.push(el)
            
        }
    }

    const [currentUser, setCurrentUser] = useState();
    const [loadingData, setLoadingData] = useState(true);

    const signIn = (email, pwd) => createUserWithEmailAndPassword(auth, email, pwd)

    


    const handleForm = async (e) => {
        
        try {
            const cred = await signIn(
              inputs.current[0].value,
              inputs.current[1].value
            );
            // à tester
            formRef.current.reset();
            console.log(cred);
          } catch {
          }
        };
    

    return (
        <Form>
            <Form.Group ref={formRef} onSubmit={handleForm} className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <input ref={addInputs} type="email" placeholder="Enter email" name="email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label >Password</Form.Label>
                <input ref={addInputs} type="password" placeholder="Password" />
            </Form.Group>
            <p className="text-danger mt-1"></p>
            <Button variant="primary" type="submit">
                S'incrire
            </Button>
            <Button href="/" className="m-2" variant="primary" type="submit">
                Retour
            </Button>
            
        </Form>
    )
}


