import profile from '../images/andreea.jpg';
import '../pages/Despre.css'

export default function Despre(){
    return(
        <div>
        <h1>Despre</h1>
        <img src={profile} className="despreimg"></img>
        <div className='despretext'>
            <h2>Buna !</h2>
        <p>Numele meu este <span className='andreea'>Andreea</span>,
         am 24 de ani și sunt pasionată de realizarea unghiilor
          cu gel, manichiură semipermanentă , pedichiură semipermanentă ,cu o experiența de peste 6 ani.
          </p>
          <p>Ca și tehnici folosite de mine sunt: combi manicure( adică curățarea cuticulei cu freza și forfecuța), tehnica fără pilire pe unghiile scurte,
            ridicarea bordului liber
            la unghiile cu tendința de creștere in jos,
            Construcție pe șablon sau tipsuri Smart.
            Cel mai important pentru mine este sa ofer calitate si o experienta minunată.
            </p>
            <p>
                Daca vrei sa faci o schimbare te aștept la mine cu drag !
            </p>
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
        </div>
    )
}