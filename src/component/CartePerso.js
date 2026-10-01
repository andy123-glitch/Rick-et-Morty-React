import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import BoutonFav from './BoutonFav'

export default function CartePersonage(props) {

  let [fetchedData, updateFetchedData] = useState([]);
  let [error, setError] = useState('');
  
  let api = `https://rickandmortyapi.com/api/character/${props.id}`;
  
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
          setError(`Personnage indisponible (${requestError.message})`);
        }
      }
    })();

    return () => {
      isActive = false;
    };
  }, [api]);

  if (error) {
    return <Card body>{error}</Card>;
  }

  return (
    <Card >
      <Card.Img variant="top" src={fetchedData.image} />
      <Card.Body>
        <Card.Link href={'/Personnage?'+props.id}>{fetchedData.name}</Card.Link>
        <BoutonFav id={props.id}/>
      </Card.Body>
    </Card>
  );
}
