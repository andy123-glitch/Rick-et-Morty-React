import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import BoutonFav from './BoutonFav'

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
    <Card >
      <Card.Img variant="top" src={fetchedData.image} />
      <Card.Body>
        <Card.Link href={'/Personnage?'+props.id}>{fetchedData.name}</Card.Link>
        <BoutonFav/>
      </Card.Body>
    </Card>
  );
}