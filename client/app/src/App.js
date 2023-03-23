import { Routes,Route } from 'react-router-dom';
import { About } from './components/About/About';
import { Create } from './components/Create/Create';
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Publications } from './components/Publications/Publications';
import { Register } from './components/Register/Register';

function App() {
  return (
    <div id="App">
      <Header/>
       <main id="main-content"> 
         <Routes> 
         <Route path='/' element={<Home/>}/>
         <Route path='/register' element={<Register/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/create' element={<Create/>}/>
         <Route path='/publication' element={<Publications/>}/>
         <Route path='/about' element={<About/>} />
         </Routes> 
       </main> 
      <Footer/>
      
    </div>
  );
}

export default App;
