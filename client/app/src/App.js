import { useEffect, useState } from 'react';
import { Routes,Route,useNavigate } from 'react-router-dom';

import * as storyService from './services/storyService';
import * as authService from './services/authService'
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
import { Logout } from './components/Logout/Logout';

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
 
  const onCreateStorySubmit = async(data,token)=>{
    const newStory = await storyService.create(data,token)
    setStories(state=>[...state,newStory])
    navigate('/publication')
  };

  const onLoginSubmit =async(data)=>{
    try{
    const result = await authService.login(data)
    console.log(result);
    setAuth(result)
    
    navigate('/')
    }catch(error){
      //to do error
      console.log('Problem');
    }
  };
  const onRegisterSubmit = async (values) => {
    const { confirmPassword, ...data } = values;
    if (confirmPassword !== data.password) {
        return;
    }

    try {
        const result = await authService.register(data);
        setAuth(result);
        navigate('/');
    } catch (error) {
      //to do error 
        console.log('Problem');
    }
};

const onLogout = async () => {
  await authService.logout();

  setAuth({});
};

  const contextValue={
    onLoginSubmit,
    onRegisterSubmit,
    onCreateStorySubmit,
    onLogout,
    userId: auth._id,
    token:auth.accessToken,
    username:auth.username,
    email:auth.email,
    isAuthenticated: !!auth.accessToken,
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
         <Route path='/logout' element={<Logout />} />
         <Route path='/create' element={<Create />}/>
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
