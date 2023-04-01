import { useEffect, useState } from 'react';
import { Routes,Route,useNavigate } from 'react-router-dom';

import * as storyService from './services/storyService';
import { AuthContext } from './context/AuthContext';


import { About } from './components/About/About';
import { Create } from './components/Create/Create';
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Publications } from './components/Publications/Publications';
import { Register } from './components/Register/Register';
import { Details } from './components/Details/Details';
import { StoryContent } from './components/StoryContent/StoryContent';

function App() {
  const navigate=useNavigate()
  const [stories,setStories] = useState([]);
  const [auth, setAuth]=useState({})
  useEffect(()=>{
    storyService.getAll()
    .then(result=>{
      setStories(result)
    })
  },[])

  const onCreateStorySubmit = async(data)=>{
    const newStory = await storyService.create(data)
    setStories(state=>[...state,newStory])
    navigate('/publication')
  };
  const contextValue={
    
  }

  return (
    <AuthContext.Provider value={contextValue}>
   <div id="App">
      <Header/>
       <main id="main-content"> 
         <Routes> 
         <Route path='/' element={<Home/>}/>
         <Route path='/register' element={<Register/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/create' element={<Create onCreateStorySubmit={onCreateStorySubmit}/>}/>
         <Route path='/publication' element={<Publications stories={stories} />}/>
         <Route path='/publication/:storyId' element={<Details/>}/>
         <Route path='/publication/read/:storyId' element={<StoryContent/>}/>
         <Route path='/about' element={<About/>} />
         </Routes> 
       </main> 
      <Footer/>
      
    </div>
    </AuthContext.Provider>
 
  );
}

export default App;
