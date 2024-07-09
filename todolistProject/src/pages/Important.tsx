import { Key, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Menu from "../components/menu";

export default function Important() {
   

   
    const [resToDo, setResToDo] = useState([]);
    let compteur = 1;
  
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
  
        
  return (<>
      <NavBar />
        <Menu />
        
        <h1 className="text-center">Welcome to Important Tasks </h1>
        <div className="flex  flex-col gap-5 px-5 py-10 ">
          
          <div className="flex flex-row items-center justify-center min-h-screen gap-5 px-5 py-20 pl-20 ml-38 bg-gray-100 flex-wrap">
  
            {resToDo.map((data: { id: Key | null | undefined, title: string, date: string, desc: string, priority: string, status: string })  =>
                data.priority === 'high' ? (
                   
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
                                               <h2> { compteur++}</h2>

                    </div>
                   
                ) : null
              )}
            </div>
            </div>
    </>)
}