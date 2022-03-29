import { Navbar } from '../src/components/Navbar';
import './App.css';

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
    </div>
  );
}

export default App;
