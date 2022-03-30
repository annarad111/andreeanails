import nails1 from '../images/nails1.jpg';
import nails2 from '../images/nails2.jpg';
import nails3 from '../images/nails5.jpg';
import { Link } from "react-router-dom";
import '../pages/Homepage.css';
import 'animate.css';

export default function Homepage(){


    return(<div>
    
                <div className='homepage'>
                    <img src={nails1} className="animate__animated animate__backInLeft homepageimg"></img>
                    <p>Servicii full de manichiură,pedichiură,construcție cu gel, întreținere gel, modelul este inclus în preț! 💅🏻</p>
                    
                    <img src={nails2} className="animate__animated animate__fadeIn homepageimg"></img>
                        <div className='suna'>
                            <p className='programari'> Pentru programări :</p>

                            <a href="tel:+40762727555" className='holeheart'>
                                <span class="button-link">
                                <svg class="heart" viewBox="0 0 32 29.6" width="100" height="100">
                                    <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
                                    c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
                                </svg>
                                <h3 className='telefon'>Suna</h3>
                                </span>
                                
                                </a>
                        </div>
                    <p>Detaliile întotdeauna fac diferența! Totul este în mâinile tale,🤲 ai grijă de ele! 💅🏻</p>
                    
                    <img src={nails3} className="animate__animated animate__backInRight homepageimg"></img>
                    <div className='lista'>
                    <Link className='listalink' to='/servicii' color='inherit'>
                    Acceseaza lista de servicii
                    </Link>
                    </div>
        
        
                </div>
       
            </div>
    )
}