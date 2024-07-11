import { NavLink } from "react-router-dom";

export default function Menu() {
    return (

        <div className="p-4 sm:ml-64">
    <button className="text-white bg-gradient-to-r from-red-400 via-orange-500 to-yellow-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
    <span className="">
    <NavLink to="/add" className="text-white">AJOUTER UNE TÂCHE</NavLink> 

        </span>
    </button>
    <button className="text-white bg-gradient-to-r from-red-400 via-orange-500 to-yellow-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
        <span className="">
        <NavLink to="/" className="text-white">VOIR TOUTES MES TÂCHES  </NavLink> 

        </span>
    </button>
   
    <button className="text-white bg-gradient-to-r from-red-400 via-orange-500 to-yellow-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
    <span className="">
    <NavLink to="/important" className="text-white">TÂCHES IMPORTANTES</NavLink> 
        </span>
    </button>
    <button className="text-white bg-gradient-to-r from-red-400 via-orange-500 to-yellow-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
    <span className="">
           <NavLink to="/completed" className="text-white"> TÂCHE EFFECTUÉES </NavLink> 
        </span>
    </button>
</div>

    );
  }