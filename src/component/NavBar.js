import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function App(){
    return(<Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand > Rick Et Morty</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Acceuil</Nav.Link>
            <Nav.Link href="Episode">Episode</Nav.Link>
            <Nav.Link href="Favoris">Favoris</Nav.Link>
          </Nav>
        </Container>
      </Navbar>)
}

