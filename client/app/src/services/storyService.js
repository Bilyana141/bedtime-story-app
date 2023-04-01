import * as request from './requester'
const baseUrl = 'http://localhost:3030/jsonstore/stories'

export const getAll =async()=>{
    const result= await request.get(baseUrl)
    const stories= Object.values(result)
    return stories
 
 }

 export const getOne = async(storyId)=>{
    const result = await request.get(`${baseUrl}/${storyId}`)
    return result
 }

 export const create = async (data,token)=>{
    const result=await request.post(baseUrl,data,token)
    return result
 }