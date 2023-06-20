
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Footercomponent from './component/Footercomponent';
import Headercomponent from './component/Headercomponent';
import Listwallet from './component/Listwallet';
import AddWallet from './component/AddWallet';
function App() {
  return (
    <div>
      <Router>
      <Headercomponent/>
      <div className='container'>
        <Routes>
          <Route exact path='/' component={Listwallet}></Route>
          <Route path='/wallets' component={Listwallet}></Route>
          <Route path='/addwallet' component={AddWallet}></Route>
          <Route path='/edit-wallet/:id' component={AddWallet}></Route>
          </Routes>
      <Listwallet/>  
      </div>
      <Footercomponent/>
      </Router>
    </div>
  );
}

export default App;
