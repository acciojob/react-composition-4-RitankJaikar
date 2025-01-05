import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  })

  function handleSubmit(e) {
    e.preventDefault();

    console.log(data);
  }
  
  return (
    <div>
        <form id="form" className="form" onSubmit={handleSubmit} >
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" className="name" value={data.name} onChange={e => setData({...data, name: e.target.value})} required />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" className="email" value={data.email} onChange={e => setData({...data, email: e.target.value})} required />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className="password" value={data.password} onChange={e => setData({...data, password: e.target.value})} required />
          </div>
          <button type="submit" id="submit" className="submit">Submit</button>
        </form>
    </div>
  )
}

export default App;