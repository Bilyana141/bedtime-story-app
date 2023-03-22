import { Routes,Route } from 'react-router-dom';
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from './components/Home/Home';
import { Register } from './components/Register/Register';

function App() {
  return (
    <div id="App">
      <Header/>
       <main id="main-content"> 
         <Routes> 
         <Route path='/' element={<Home/>}/>
         <Route path='/register' element={<Register/>}/>
         </Routes> 
       </main> 
      <Footer/>
      
    </div>
  );
}

export default App;
