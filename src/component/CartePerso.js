import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';

export default function CartePersonage(props) {

  let [fetchedData, updateFetchedData] = useState([]);
  
  let api = `https://rickandmortyapi.com/api/character/${props.id}`;
  
  useEffect(() => {
  (async function () {
          let data = await fetch(api).then((res) => res.json());
          updateFetchedData(data);
      })();
  }, [api]);

console.log(fetchedData);

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={fetchedData.image} />
      <Card.Body>
        <Card.Link href={'/Personnage?'+props.id}>{fetchedData.name}</Card.Link>
        <div className="vr"/><Button variant="light">❤️</Button>
      </Card.Body>
    </Card>
  );
}