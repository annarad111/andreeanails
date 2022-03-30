import './Servicii.css';
import servicii from '../images/servicii.jpg';
import FavoriteIcon from '@mui/icons-material/Favorite';


export default function Servicii(){
    return(
        <div className='over'>
        <h1>Servicii</h1>
        <div className='divservicii'>
        
        <div className="servicii">
            
            <img src={servicii} className="imgservicii"></img>
            
            <div className='serviciitext'>
            <h1 className='serviciitext'>Preturi</h1>
            <FavoriteIcon></FavoriteIcon><p>Constructie gel 90 lei</p>
            <p>Întreținere gel 70 lei</p>
            <p>Gel pe unghia naturală 70 lei</p>
            <p>Manichiura semipermanenta 50 lei</p>
            <p>Manichiura semipermanenta cu apex 60 lei</p>
            <p>Reparație unghiuta rupta 5 lei</p>
            <p>Demontare gel (curățare cuticula + lac incolor) 35 lei</p>
            <p>Modelul este inclus in preț </p>
            <p>Parafina mâini / picioare 40 lei </p>
           <p> Pedichiura semipermanenta 60 lei</p>
           
        </div>
            
            </div>
            </div>
            
        
        
        </div>
    )
}