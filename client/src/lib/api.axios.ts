export const fetchFromBackend=async(endpoint:string,options:RequestInit={})=>{
    const baseUrl='http://localhost:8000';

    const response=await fetch (`${baseUrl}${endpoint}`,{
         ...options,
         headers:{
            'Content-Type':'application/json',
            ...options.headers,
         }
    })
   

      if (!response.ok) {
        throw new Error('Failed to fetch');
      }


      return response.json();
    



}