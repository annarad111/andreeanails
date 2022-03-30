import profile from '../images/profile2.jpg';
import '../pages/Despre.css'

export default function Despre(){
    return(
        <div>
        <h1>Despre</h1>
        <img src={profile} className="despreimg"></img>
        </div>
    )
}