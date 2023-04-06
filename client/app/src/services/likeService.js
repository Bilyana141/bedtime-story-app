import { requestFactory } from "./requester";
const baseUrl = 'http://localhost:3030/data/likes';

export const likeServiceFactory =(token)=>{
    const request =requestFactory(token);

    const addLike = async({userId,storyId})=>{
        const result = await request.post(`${baseUrl}`,{
            _ownerId:userId,
            postId:storyId,
            
        })
        return result
    };

    const getLikesForPost =async(storyId)=>{
       
        const result= await request.get(`${baseUrl}?postId=${storyId}`)
        return result;
    };

    const addDislike = async({userId,storyId})=>{
        const result = await request.post(`${baseUrl}`,{
            _ownerId:userId,
            postId:storyId,
            _isDislike:true
        })
        return result
    };

  

    return {
        addLike,
        getLikesForPost,
        addDislike,
        
    }
}