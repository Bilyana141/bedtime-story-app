import { useEffect, useState } from 'react';
import { Routes,Route,useNavigate } from 'react-router-dom';

import { storyServiceFact } from './services/storyService';
import { authServiceFac } from './services/authService'
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
import { Error } from './components/Error/Error';
import { Edit } from './components/Edit/Edit';

function App() {
  const navigate=useNavigate()
  const [stories,setStories] = useState([]);
  const [auth, setAuth]=useState({})
  const [error,setError] = useState(null)
  const storyService=storyServiceFact(auth.accessToken);
  const authService = authServiceFac(auth.accessToken)
  
  useEffect(()=>{
    storyService.getAll()
    .then(result=>{
      setStories(result)
    })
    .catch(error=>{
      setError('Failed to get story. Please try again later.')
    })
  },[])
 
  const onCreateStorySubmit = async(data)=>{
    try {
      const newStory = await storyService.create(data, auth.accessToken)
    setStories(state=>[...state,newStory])
    navigate('/publication')
    } catch (error) {
      setError('Failed to create new story.Please try again later')
    }
    
  };

  const onLoginSubmit =async(data)=>{
    try{
    const result = await authService.login(data)
    console.log(result);
    setAuth(result)
    
    navigate('/')
    }catch(error){
      setError('Failed to log in. Please check your email and password.');
    }
  };
  const onRegisterSubmit = async (values) => {
    const { confirmPassword, ...data } = values;
    if (confirmPassword !== data.password) {
      setError('Password dont match!')
        return;
    }

    try {
        const result = await authService.register(data);
        setAuth(result);
        navigate('/');
    } catch (error) {
      setError('Failed to register. Please try again.');
    }
};

const onLogout = async () => {
  try {
    await authService.logout();
    setAuth({});
  } catch (error) {
    setError('Failed to log out.Please try again!')

  }

};

const onEditPost = async(data)=>{
  try {
    const result = await storyService.edit(data._id,data);
    setStories(state=>state.map(story=>story._id === data._id ? result: story));
    navigate(`/publication/${data._id}`)
  } catch (error) {
    setError('Failed to edit this story.Please try again later.')
  }
}

const closeError =()=>{
  setError(null)
}

  const contextValue={
    onLoginSubmit,
    onRegisterSubmit,
    onCreateStorySubmit,
    onEditPost,
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
       {error && ( <Error message={error} closeError={closeError}/>)} 
        <Routes> 
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/logout' element={<Logout />} />
        <Route path='/create' element={<Create />}/>
        <Route path='/publication/edit/:storyId' element={<Edit/>}/>
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
