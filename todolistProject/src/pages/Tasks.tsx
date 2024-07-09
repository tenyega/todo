import { SetStateAction, useState } from "react";
import Completed from "../partials/_completed";
import ToDoList from "../components/TodoList";
import NavBar from "../components/NavBar";
import Menu from "../components/menu";

export default function Tasks() {

   
const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e: { target: { value: SetStateAction<string>; }; }) => {
      setSelectedOption(e.target.value);

  };
        
  return (<>
    <NavBar />
    <Menu />
    <div className="text-center flex flex-col flex-wrap gap-20 pl-20">
      <div className="flex flex-row gap-20 pl-20 ml-28">
            <div className="flex flex-row items-center mb-4 text-center">
                <input
                type="radio"
                id="completed"
                name="completed"
                value="completed"
                checked={selectedOption === 'completed'}
                onChange={handleOptionChange}
                className="form-radio text-indigo-600 h-4 w-4"
                />
                <label htmlFor="completed" className="ml-2 text-gray-700">
                Completed
                </label>
            </div>
            <div className="flex items-center mb-4 text-center">
                <input
                type="radio"
                id="pending"
                name="pending"
                value="pending"
                checked={selectedOption === 'pending'}
                onChange={handleOptionChange}
                className="form-radio text-indigo-600 h-4 w-4"
                />
                <label htmlFor="pending" className="ml-2 text-gray-700">
                Pending
                </label>
            </div>
          </div>
            <div className="mt-4 flex flex-col flex-wrap">
            {selectedOption ? <Completed  message={selectedOption} />  : <ToDoList/>}

        </div>
        </div>
    </>)
}