import  React, {useState } from 'react';

const Dashboard:React.FC=()=>{

      const [input,setInput]=useState<null|number>(null);



      const handleupload=(e:React.ChangeEvent<HTMLInputElement>)=>{

          console.log(e.target.value);
          
        console.log(e.target.files?.length);
          setInput(1);

      }

      const handleSubmit=()=>{

          

      }

    
    return (
       

          <div className='w-ful min-h-screen bg-slate-500 flex items-center flex-col'>

              
                <div>

                    <h2 className='text-2xl font-serif font-bold text-slate-800 pb-4'>We are here you can upload Anything </h2>
                </div>

                <div>
        <input type="file" onChange={(e)=>handleupload(e)} className='bg-zinc-700 text-white' />
        <div className='mt-10 flex justify-center gap-10 items-center'>
        {/* <button className={`${!input?"hidden":"bg-yellow-500 pl-3 pr-3 pt-1 pb-1 hover:bg-yellow-600 font-serif rounded-xl text-gray-800 font-bold"}`}>Change</button> */}
        <button onClick={handleSubmit} className={`${!input?"hidden":"bg-green-700 pl-3 pr-3 pt-1 pb-1 hover:bg-green-900 font-serif rounded-xl text-white font-bold"}`}>Upload</button>
        </div>
    </div>



          </div>


        
    )



}

export default Dashboard;