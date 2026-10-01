import NavBar from '../component/NavBar'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Stack from 'react-bootstrap/Stack';

import TabEpi from '../component/PetitTableauEpisode';
import Table from 'react-bootstrap/Table';


export default function App() {
    
    var {search} = useLocation();
    let id =search.substring(1);
    
    let [fetchedData, updateFetchedData] = useState([]);
    let [error, setError] = useState('');
    
    
    let api = `https://rickandmortyapi.com/api/character/${id}`;
    
    useEffect(() => {
        let isActive = true;

        (async function () {
            try {
                const response = await fetch(api);
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}`);
                }
                const data = await response.json();
                if (isActive) {
                    updateFetchedData(data);
                }
            } catch (requestError) {
                if (isActive) {
                    setError(`Impossible de charger ce personnage (${requestError.message}).`);
                }
            }
        })();

        return () => {
            isActive = false;
        };
    }, [api]);
    
    let {origin=[],episode=[]}=fetchedData;
    return (
        <div>
            <NavBar />
            {error && <p className="alert alert-danger">{error}</p>}
            <Stack gap={3}>
                <img
                    src={fetchedData.image}
                    className="rounded mx-auto d-block"
                    alt={fetchedData.name || 'Personnage'}
                />
                <div className="bg-light border">Nom : {fetchedData.name}</div>
                <div className="bg-light border">Statut : {fetchedData.status}</div>
                <div className="bg-light border">Sexe : {fetchedData.gender}</div>
                <div className="bg-light border">Type : {fetchedData.type}</div>
                <div className="bg-light border">Origine : {origin.name}</div>
                <div className="bg-light border">Liste des episodes : </div>
                <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Code</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                {episode.map((ep)=>(
                    <TabEpi key={ep} url={ep}></TabEpi>
                    ))}
                </tbody>
                </Table>
            </Stack>
        </div>
    )
}
