import * as request from './requester'
const baseUrl = 'http://localhost:3030/jsonstore/stories'

export const getAll =async()=>{
    const result= await request.get(baseUrl)
    const stories= Object.values(result)
    return stories
 
 }