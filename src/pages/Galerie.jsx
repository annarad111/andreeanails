import Carousel from '../components/Carousel';
import nails1 from '../images/nails1.jpg';
import '../pages/Galerie.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function Galerie(){
    return(
        <>
        <h1 className='titlugalerie'>Galerie</h1>
        <Carousel></Carousel>
        <div className='galerielinks'>
            <a href="https://www.facebook.com/AndreeaNailsNr1/?ref=page_internal" target="_blank" className='galeriea'><FavoriteBorderIcon/>Facebook</a>
            <a href="https://wa.me/+40762727555" target="_blank" className='galeriea'><FavoriteBorderIcon/>WhatsApp</a>
            <a href="tel:+40762727555" target="_blank" className='galeriea'><FavoriteBorderIcon/>Telefon</a>

        </div>
        
        </>
    )
}