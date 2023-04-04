import { createContext,useState,useContext,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { storyServiceFact } from '../services/storyService';
import { ErrorContext } from'./ErrorContext';
import { AuthContext } from './AuthContext';

export const StoryContext =createContext();

export const StoryProvider=({children})=>{
    const { error, setError, closeError } = useContext(ErrorContext);
    const [stories,setStories] = useState([]);
    const navigate=useNavigate();
    const authContext=useContext(AuthContext);
    const storyService=storyServiceFact(authContext.token);

    useEffect(()=>{
        storyService.getAll()
        .then(result=>{
          setStories(result)
        })
        .catch(error=>{
          setError('Failed to get story. Please try again later.')
        })
      },[]);

      const onCreateStorySubmit = async(data)=>{
        try {
          const newStory = await storyService.create(data, authContext.token)
        setStories(state=>[...state,newStory])
        navigate('/publication')
        } catch (error) {
          setError('Failed to create new story.Please try again later')
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
    const contextValue={
        onCreateStorySubmit,
        onEditPost,
        stories
    } ;
    return(
        <>
        <StoryContext.Provider value={contextValue}>
            {children}
        </StoryContext.Provider>
        </>
    )    

}