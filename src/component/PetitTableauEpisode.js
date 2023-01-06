import Table from "react-bootstrap/esm/Table";
import { useEffect, useState } from 'react'


export default function App(props) {
    let [fetchedData, updateFetchedData] = useState([]);


    let api = props.url;

    
    useEffect(() => {
        (async function () {
            let data = await fetch(api).then((res) => res.json());
            updateFetchedData(data);
        })();
    }, [api]);

    return (
       
            <tr>
                <td>{fetchedData.name}</td>
                <td>{fetchedData.episode}</td>
                <td>{fetchedData.air_date}</td>
            </tr>
      
    )

}