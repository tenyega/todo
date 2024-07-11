import { Key, useEffect, useState } from 'react';
import { useParams } from "react-router-dom"

import {  useNavigate } from 'react-router-dom';

interface Data {
    id: number;
    title: string;
    date: Date;
    desc: string;
    priority: string;
    status: string;
}
interface Datas {
datas: Data[];
}


 function ToDoList() {
    let navigate = useNavigate() 
    let params = useParams() ;


     const [resToDo, setResToDo] = useState([]);
     const [shouldFetch, setShouldFetch] = useState(false);
     const [searchTxt, setSearchTxt] = useState('');
     const [datas, setDatas] = useState<Datas | any>();



     useEffect(() => {
        //this code runs only when shouldFetch is true (false by default) which means we have typed something in our search bar        
          async function fetchData() {
              try {
                  const response = await fetch('https://json-server-vercel-two-kappa.vercel.app/todo');
                  setDatas(await response.json()) ; 
                  if (datas) {
                      setResToDo(datas);
  
                  }
              } catch (err) {
                  setResToDo([]);
              }
          }
           fetchData();
           //Sets the shouldFetch to false after each fetch data. 
           if (shouldFetch) {
              fetchData();
              setShouldFetch(false);
          }
      },[datas] );
      
    
    
     
     function handelete(id:any){
    
      navigate('edit/'+id)

     }
     useEffect(() => {
        if (datas) {
            console.log('SearchtedString is ' + searchTxt)
            if (searchTxt) {
            const filtered = datas.filter((item: { title: string; }) => item.title.toLowerCase().includes(searchTxt));
            setResToDo(filtered);
            console.log(resToDo)
            }
         
        }
    },[datas]);

    const handleChange = async(e: { target: { name: any; value: any; }; }) => {
        const value = e.target.value;
        setSearchTxt(value)
        setShouldFetch(true);
      
    }

    

    const submit = async (e:any) => {
        e.preventDefault();        try {
            const response = await fetch('http://localhost:3000/todo/'+params.id,{
                method: 'DELETE',
                body: JSON.stringify(resToDo),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const datas = await response.json(); 
            if (datas) {
                setResToDo(datas);
                

            }
        } catch (err) {
            setResToDo([]);
        }
    }

    
        

  return (
      <>
      

         <div className="p-4 sm:ml-64 ">
        
         <h4 className="mb-4 text-base font-semibold text-gray-700 md:text-4xl dark:text-black   p-6 ">
   MES  TÂCHES 
    </h4>
         <div className="flex items-center space-x-2 sm-2 p-6  ">
         <input  type="text"  id="title"
            name="title"
            placeholder="Recherche de tache "
            onChange={handleChange}
            className="w-full   max-w-3xl  p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"

           
            />
             <button  className="inline-flex items-center px-6 l  p-2  text-sm font-bold text-center text-gray bg-blue-100 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-blue-800">
                FILTRE
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
</svg>

                        </button>  </div>
           <div className="w-full max-w-5xl p-4 bg-white sm:p-6 dark:bg-white-800 dark:border-white-100">
          

                  <ul className="my-4 space-y-3 flex flex-col">
    {resToDo.map((data: { id: Key | null | undefined, title: string, date: string, desc:string, priority:number,status:string}) => (
        data.title!='' &&

        <li   key={data.id}>
            <div className="w-full max-w-4xl p-6 font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-100 dark:hover:bg-gray-200 dark:text-black">
                <h5 className="mb-2 text-left text-2xl font-bold tracking-tight text-gray-900 dark:text-black">  {data.title}</h5>
                <p className="mb-3 text-left font-normal text-gray-700 dark:text-gray-400"> {data.desc}</p>
                <div className="flex mt-4 md:mt-6">
                    <button onClick={()=>handelete(data.id)}  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit</button>
                    </div>
                    <div className="flex mt-4 md:mt-6">
                    <button onClick={()=>submit}  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Delete</button>
                </div>
            </div>
        </li>
    ))}
</ul>

    </div></div>
        </>
    );
}
export default ToDoList;