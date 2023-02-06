import NavBar from '../component/NavBar'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { connect } from "react-redux";
import Col from 'react-bootstrap/Col';
import React from 'react'
import CartePersonage from './../component/CartePerso';

class Favorites extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <NavBar />
                <Container>
                    <Row>
                        {this.props.favorites.map((id) => (
                            <Col>
                                <CartePersonage id={id} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </>
        );
    }
}



const mapStateToProps = state => {
    const { user } = state;
    const { favorites } = state;
    return { user, favorites };
};


export default connect(
    mapStateToProps,
)(Favorites);

