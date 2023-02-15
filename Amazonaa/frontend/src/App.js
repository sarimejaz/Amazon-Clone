import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Navv from './Components/Navv';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Signin from './Components/Signin';
import Cart from './Components/Cart';
import Returnit from './Components/Returns';
import Banner from './Components/Banner';
import { CartProvider } from './CartContext';
import { useState } from 'react';


function App() {

  const [user,setUser] = useState("Sign in");

  return (
    <CartProvider>
    <Router>
      <div className="App">
          <Routes>
            <Route path='/' element={
              <div>
                <Navv user={user}/>
                <Banner />
              </div>
            }/>

            <Route path='/user' element={
              <div>
                <Signin user={user} setUser={setUser}/>
              </div>
            }/>

            <Route path='/returnsandorders' element={
              <div>
                  <Navv user={user}/>
                <Returnit />
              </div> 
              
            }/>

            <Route path='/cart' element={
              <div>
                <Navv user={user}/>
                <Cart />
              </div>
              
            }/>
          </Routes>
      </div>
    </Router>
    </CartProvider>

  );
}

export default App;
