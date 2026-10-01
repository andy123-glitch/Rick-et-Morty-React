import { useEffect, useState } from 'react'


export default function App(props) {
    let [fetchedData, updateFetchedData] = useState([]);
    let [error, setError] = useState('');

    let api = props.url;
    
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
                    setError(`Épisode indisponible (${requestError.message})`);
                }
            }
        })();

        return () => {
            isActive = false;
        };
    }, [api]);

    return (
            <tr>
                {error ? (
                    <td colSpan="3">{error}</td>
                ) : (
                    <>
                        <td>{fetchedData.name}</td>
                        <td>{fetchedData.episode}</td>
                        <td>{fetchedData.air_date}</td>
                    </>
                )}
            </tr>
    )
}
