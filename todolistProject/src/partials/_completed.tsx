import { Key, useEffect, useState } from "react";
import {  useNavigate } from 'react-router-dom';
export default function Completed( props: { message: any; }) {

    const { message } = props;
    let navigate = useNavigate() 
    function handelete(id:any){
    
        navigate('edit/' + id)
  
       }
    const [resToDo, setResToDo] = useState([]);
    useEffect(() => {
       //Runs only on the first render
    
         
       async function fetchData() {
           try {
               const response = await fetch('http://localhost:3000/todo');
               const datas = await response.json(); 
               if (datas) {
                   setResToDo(datas);

               }
           } catch (err) {
               setResToDo([]);
           }
       }
    fetchData();
   

         
 
    }, []);
    console.log(resToDo)
    return (
        <>
          <div className="flex  flex-row gap-5 px-5 py-10 ml-38 pl-28">
          
            <div className="flex flex-row  min-h-screen gap-5 px-5 py-20 bg-gray-100 flex-wrap ml-38 pl-28">
    
                {resToDo.map((data: { id: Key | null | undefined, title: string, date: string, desc: string, priority: string, status: string })  =>
                    data.status === message ? (
                        <div
                        key={data.id}
                        className="w-full max-w-md p-5 text-center bg-white border rounded-lg shadow-md border-neutral-300">
                            <h4 className="mb-2 text-xl font-semibold text-gray-800">
                                {data.title}
                            </h4>
                            <h3 className="mb-1 text-gray-600 text-md"> {data.date}</h3>
                                <h3 className="text-gray-600 text-md">Description: {data.desc}</h3>
                                <h3 className="text-gray-600 text-md">Priority: {data.priority}</h3>
                                <h3 className="text-gray-600 text-md">Status: {data.status}</h3>
                                <div className="flex mt-4 md:mt-6">
                    <button onClick={()=>handelete(data.id)}  className="text-center inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit</button>
                </div>        
                        </div>
                    ) : null
                )}
                </div>
            </div>
        </>
    )
}