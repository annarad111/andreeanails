import Navbar from '../src/components/Navbar';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Homepage from './pages/Homepage';
import Servicii from './pages/Servicii';
import Galerie from './pages/Galerie';
import Despre from './pages/Despre';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
       <Switch>
        <Route exact path='/' component={Homepage}></Route>
        <Route exact path='/despre' component={Despre}></Route>
        <Route exact path='/contact' component={Contact}></Route>
        <Route exact path='/servicii' component={Servicii}></Route>
        <Route exact path='/galerie' component={Galerie}></Route>
        </Switch>
        <Footer/>
    </div>
  );
}

export default App;
