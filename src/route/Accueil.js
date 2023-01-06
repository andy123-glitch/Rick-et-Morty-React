import CartePersonage from '../component/CartePerso';
import NavBar from '../component/NavBar'
import Stack from 'react-bootstrap/Stack';

export default function App(){
    var min=1; 
    var max=826;  
    
    return(
        <div>
            <NavBar/>
            <div className="bg-light border text-center">5 personnage aleatiore : </div>
            
            <Stack direction="horizontal" gap={3}>
                <CartePersonage id={Math.floor(Math.random() * (max - min)) + min}/>
                <CartePersonage id={Math.floor(Math.random() * (max - min)) + min}/>
                <CartePersonage id={Math.floor(Math.random() * (max - min)) + min}/>
                <CartePersonage id={Math.floor(Math.random() * (max - min)) + min}/>
                <CartePersonage id={Math.floor(Math.random() * (max - min)) + min}/>
            </Stack>
            <div className="bg-light border text-center">Les 5 favoris</div>
        </div>
            
    )
}