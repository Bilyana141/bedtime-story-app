import { requestFactory } from "./requester";
const baseUrl = 'http://localhost:3030/data/likes';

export const likeServiceFactory =(token)=>{
    const request =requestFactory(token);

    const addLike = async({ userId,storyId })=>{
        const whereQuery = encodeURIComponent(`postId=${storyId}`)
        const result = await request.post(`${baseUrl}?where=${whereQuery}`,{
            _ownerId:userId,
            postId:storyId,
            
        })
       
        return result
    };

    const getLikesForPost =async(storyId)=>{
       
        const result= await request.get(`${baseUrl}?postId=${storyId}`)
        return result;
    };



    return {
        addLike,
        getLikesForPost,
    }
}