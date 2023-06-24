import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header, Home, Footer, FiltPlace, MainDH} from './components/index';
import './css/all.min.css';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import './css/normalize.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/create-account' element={<Home />}/>
        <Route path='/login' element= {<FiltPlace />}/>
        <Route  path='/dashboard' element={<MainDH />}/>
      </Routes>
       <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
