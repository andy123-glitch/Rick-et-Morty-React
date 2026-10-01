import CartePersonage from '../component/CartePerso';
import NavBar from '../component/NavBar'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useMemo } from 'react';


export default function App() {
    const characterIds = useMemo(
        () => Array.from({ length: 5 }, () => Math.floor(Math.random() * 826) + 1),
        []
    );

    return (
        <div>
            <NavBar />
            <div className="bg-light border text-center">5 personnages aléatoires :</div>
            <Row>
                {characterIds.map((id, index) => (
                    <Col key={`${id}-${index}`}>
                        <CartePersonage id={id} />
                    </Col>
                ))}
            </Row>
        </div>
    );
}
