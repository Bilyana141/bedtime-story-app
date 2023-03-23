import { useEffect, useState } from 'react';
import { Routes,Route,useNavigate } from 'react-router-dom';
import * as storyService from './services/storyService'
import { About } from './components/About/About';
import { Create } from './components/Create/Create';
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Publications } from './components/Publications/Publications';
import { Register } from './components/Register/Register';

function App() {
  const navigate=useNavigate()
  const [story,setStories] = useState([])
  useEffect(()=>{
    storyService.getAll()
    .then(result=>{
      setStories(result)
    })
  },[])

  const onCreateStorySubmit = async(data)=>{
    const newStory = await storyService.create(data)
    setStories(state=>[...state,newStory])
    navigate('/publications')

  }

  return (
    <div id="App">
      <Header/>
       <main id="main-content"> 
         <Routes> 
         <Route path='/' element={<Home/>}/>
         <Route path='/register' element={<Register/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/create' element={<Create onCreateStorySubmit={onCreateStorySubmit}/>}/>
         <Route path='/publication' element={<Publications/>}/>
         <Route path='/about' element={<About/>} />
         </Routes> 
       </main> 
      <Footer/>
      
    </div>
  );
}

export default App;
