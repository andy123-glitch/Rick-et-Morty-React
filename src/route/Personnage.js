import NavBar from '../component/NavBar'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Stack from 'react-bootstrap/Stack';

import TabEpi from '../component/PetitTableauEpisode';
import Table from 'react-bootstrap/esm/Table';


export default function App(props) {
    
    var {search} = useLocation();
    let id =search.substring(1);
    
    let [fetchedData, updateFetchedData] = useState([]);
    
    
    let api = `https://rickandmortyapi.com/api/character/${id}`;
    
    useEffect(() => {
        (async function () {
            let data = await fetch(api).then((res) => res.json());
            updateFetchedData(data);
        })();
    }, [api]);
    
    let {origin=[],episode=[]}=fetchedData;
    console.log(fetchedData)
    return (
        <div>
            <NavBar />
            <Stack gap={3}>
                <img src={fetchedData.image} class="  rounded mx-auto d-block" ></img>
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
                    <TabEpi url={ep}></TabEpi>
                    ))}
                </tbody>
                </Table>
            </Stack>
        </div>
    )
}