import React, { useEffect, useState } from 'react'

import {fetchFromBackend} from './lib/api.axios'

type UserData={
id: number,
first_name:string,
last_name?: string,
email:string,
gender?: string
photo_url?: string

}
const App:React.FC= () => {

  const [user,setUser]=useState<UserData[]|null>(null);
  


   useEffect(()=>{

        const fetchdata=async()=>{

            try{

              const response=await fetchFromBackend('/api/user');
              setUser(response);
              console.log(response);

            }
            catch(err){
              console.error('Error fetching data:', err);

            }

        }
        fetchdata();
        return;

        


   },[])


  return (


    <>

        <table>

          <thead>

            <tr>
              <th>index</th>
              <th> Name </th>
              <th> Last Name</th>
              <th> Email </th>
              <th> Gender </th>
              <th> Images </th>
              <th> Select User</th>
            </tr>

          </thead>

          <tbody>

            
              {
              user?.map((item)=>(
              <tr> 

              <td>${item.id}</td>
              <td>{item?.first_name} </td>
              <td>{item?.last_name} </td>
              <td>{item?.email} </td>
              <td>{item?.gender} </td>
              <td> <img className='w-28 h-28' src={item?.photo_url?.replace(/\/x(\d+)/, `/$1x$1`)} alt="N image" /> </td>
              <td><button> Slected details </button></td>


              </tr>
              ))
              }

              
              



           
            
            
           
              



     </tbody>

          

           

           

          
        </table>

      
    </>

  )









}

   
  

export default App