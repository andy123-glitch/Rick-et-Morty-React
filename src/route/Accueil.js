import CartePersonage from '../component/CartePerso';
import NavBar from '../component/NavBar'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Provider } from 'react-redux';
import store from '../component/store/index'
import { useEffect, useState } from 'react'
import Test from '../component/test';


export default function App() {
    var min = 1;
    var max = 826;

    return (
            <div>
                <NavBar />
                <div className="bg-light border text-center">5 personnages aleatiores : </div>
                <Row >
                    <Col>
                        <CartePersonage id={Math.floor(Math.random() * (max - min)) + min} />
                    </Col>
                    <Col>
                        <CartePersonage id={Math.floor(Math.random() * (max - min)) + min} />
                    </Col>
                    <Col>
                        <CartePersonage id={Math.floor(Math.random() * (max - min)) + min} />
                    </Col>
                    <Col>
                        <CartePersonage id={Math.floor(Math.random() * (max - min)) + min} />
                    </Col>
                    <Col>
                        <CartePersonage id={Math.floor(Math.random() * (max - min)) + min} />
                    </Col>
                </Row>
            </div> 
        
    )
}

