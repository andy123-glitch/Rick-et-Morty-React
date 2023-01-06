import NavBar from '../component/NavBar'
import Table from 'react-bootstrap/Table'
import { useEffect, useState } from 'react'
import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

export default function App() {
    let [pageNumber, setpageNumber] = useState(1);
    let [fetchedData, updateFetchedData] = useState([]);
    let {results = [] } = fetchedData;

    console.log(results);
    let api = `https://rickandmortyapi.com/api/episode?page=${pageNumber}`;

    useEffect(() => {
        (async function () {
            let data = await fetch(api).then((res) => res.json());
            updateFetchedData(data);
        })();
    }, [api]);

    return (
        <div>
            <NavBar />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Code</th>
                        <th>Date</th>
                        <th>Liste des personnages</th>
                    </tr>
                </thead>

                <tbody>
                    {results.map((result) => (
                        <tr>
                            <td>{result.name}</td>
                            <td>{result.episode}</td>
                            <td>{result.air_date}</td>
                            <td>personnage</td>
                        </tr>
                    ))}
                </tbody>

            </Table>
            
            <ToggleButtonGroup type="radio" name="Page" defaultValue={1}>
                <ToggleButton id="tbg-radio-1" value={1} onChange={(e)=>setpageNumber(1)}>
                   1 
                </ToggleButton>
                <ToggleButton id="tbg-radio-2" value={2} onChange={(e)=>setpageNumber(2)}>
                    2
                </ToggleButton>
                <ToggleButton id="tbg-radio-3" value={3} onChange={(e)=>setpageNumber(3)}>
                    3
                </ToggleButton>
            </ToggleButtonGroup>
        </div>)
}
