import { requestFactory } from './requester'
const baseUrl = 'http://localhost:3030/data/stories';

export const storyServiceFact =(token)=>{
   const request =requestFactory(token);

   const getAll =async()=>{
      const result= await request.get(baseUrl)
      const stories= Object.values(result)
      return stories
   
   };
  
 const getOne = async(storyId)=>{
      const result = await request.get(`${baseUrl}/${storyId}`)
      return result
   };
  
   const create = async (data,token)=>{
     console.log(token);
      const result=await request.post(baseUrl,data,token)
      return result
   };

   return{
      getAll,
      getOne,
      create,
   }

}

