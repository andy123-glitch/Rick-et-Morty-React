// import { useState } from "react";
// import { Card, FloatingLabel, Form, Button } from "react-bootstrap";


// export default async function App() {
//     const [email, SetEmail] = useState();
//     const [password, SetPassword] = useState();
    
//     return (
//         <div>
//             <Card className="mx-auto my-5 p-3 w-50 h-25">
//                 <Card.Title>Inscription</Card.Title>
//                 <Card.Body>
//                     <Form.Label htmlFor="inputPassword5">Email</Form.Label>
//                     <Form.Control
//                         type="email"
//                         id="inputemail5"
//                         onChange={(e) => (SetEmail(e.target.value))}
//                         value={email}
//                     />
//                     <Form.Label htmlFor="inputPassword5">Password</Form.Label>
//                     <Form.Control
//                         type="password"
//                         id="inputPassword5"
//                         aria-describedby="passwordHelpBlock"
//                         onChange={(e) => (SetPassword(e.target.value))}
//                         value={password}
//                     />
//                     <Button variant="primary"onClick={console.log()}>S'inscrire</Button>
//                 </Card.Body>
//             </Card>
//         </div>
//     );
// }

// function verifEmail(email) {
//     if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) return true;
//     return false;
// }

import React from "react";
import { connect } from "react-redux";
import Button from "react-bootstrap/esm/Button";


class Profil extends React.Component {
	render(){
		return (
			<div>        <Button variant="light" className='float-end' >❤️</Button>

        {this.props.user === null ? 'Not logged' : this.props.user.username}
      </div>
		)
	}
}

const mapStateToProps = state => {
  const { user } = state;
  console.log(state);
  return { user };
};

export default connect(mapStateToProps)(Profil);