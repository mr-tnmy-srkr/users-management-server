import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleAddUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);

    // server side e data pathabo

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("inside post response", data);

        const newUsers = [...users, data];
        setUsers(newUsers);

        form.reset();
      });
  };

  return (
    <>
      <h1>Users Management System</h1>
      <h3>Numbers of users : {users.length}</h3>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" />
        <input type="email" name="email" id="" />
        <input type="submit" value="Add User" />
      </form>
      <div>
        {users.map((user, index) => {
          return (
            <p key={index}>
              {user.id}:{user.name}:{user.email}{" "}
            </p>
          );
        })}
      </div>
    </>
  );
}

export default App;
