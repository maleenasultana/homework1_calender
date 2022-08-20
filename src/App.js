import React, { Component, useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);


  
async function fetchUsersData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    setUsers(data);
    setIsLoaded(true);
  } catch (error) {
    console.log(error);
  }
}

useEffect(() => {
  fetchUsersData();
}, []);

if (!isLoaded)
  return (
    <div>
      <h1>Please wait for some time....</h1>
    </div>
  );

return (
  <div className="App">
    <h1>Fetch data in react function component</h1>
    {users.map((user) => {
      const { id, username, name, email } = user;
      return (
        <div key={id} className="col-6">
          <div className="card">
            <div className="container">
              <h4>
                <b>User Name: {username} </b>
              </h4>
              <p>Full Name: {name}</p>
              <p>User_email {email} </p>
            </div>
          </div>
        </div>
      );
    })}
  </div>
);
}

export default App;