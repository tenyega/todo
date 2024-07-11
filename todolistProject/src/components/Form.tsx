import  { useState } from 'react';

export default function MyForm() {
  
  const [msg, setMsg] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    date: '',
      desc: '',
      priority: '',
     status:''
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

 


  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const response = await fetch('https://json-server-vercel-two-kappa.vercel.app/todo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setMsg('Form data submitted successfully');
      console.log('Form data submitted successfully');
      setFormData({   title: '',
        date: '',
          desc: '',
          priority: '',
         status:''});
    } else {
      
      console.error('Form data submission failed');
    }
    console.log('Form data submitted:', formData);
  };

    return (
      <>
      <h2 className="mb-9 text-base font-semibold text-gray-900 md:text-5xl dark:text-black">
        ADD NEW TASK 
            </h2>
           <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="message">Description</label>
            <textarea
              id="desc"
              name="desc"
              value={formData.desc}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
         </div>
          <div className='flex flex-row gap-5'>
        
            <label className="block text-sm font-medium text-gray-700" htmlFor="priority">Priority</label>
            <select
              id="priority"
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            >
              <option value=""></option>
              <option value="Low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
           
                  </select>
                  <div className='w-1/2'>
                <label className="block text-sm font-medium text-gray-700" htmlFor="date">Status</label>
                      <input
                        
                  type="status"
                  id="status"
                  name="status"
                  value="pending"
                  className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      
                        disabled
                />
          </div>
    
          
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
              </button>
              {msg}
        </form>
      
            </>
  );
};


