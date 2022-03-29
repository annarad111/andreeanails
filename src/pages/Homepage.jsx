import nails1 from '../images/nails1.jpg';
import nails2 from '../images/nails2.jpg';
import nails3 from '../images/nails5.jpg';
import '../pages/Homepage.css';
import 'animate.css';

export default function Homepage(){


    return(<div>
    
    <div className='homepage'>
        <img src={nails1} className="animate__animated animate__backInLeft homepageimg"></img>
        <img src={nails2} className="animate__animated animate__fadeIn homepageimg"></img>
        <img src={nails3} className="animate__animated animate__backInRight homepageimg"></img>
        
    </div>
       
        </div>
    )
}