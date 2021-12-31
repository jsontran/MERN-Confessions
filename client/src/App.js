import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";


function App() {
  
  const [listOfThoughts, setListOfThoughts] = useState([]);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [timestamp, setTimestamp] = useState("");

  
  useEffect(() => {
    Axios.get("http://localhost:3001/getThoughts").then((response) => {
      setListOfThoughts(response.data);
    });
  }, []);

  const createThoughts = () => {
    Axios.post("http://localhost:3001/createThoughts", {
      title,
      text,
      timestamp,
    }).then((response) => {
      setListOfUsers([
        ...listOfUsers,
        {
          title,
          text,
          timestamp,
        },
      ]);
    });
  };
  
  return (
    <div className="App">
      <div className="thoughtsDisplay">
        {listOfThoughts.map((user) => {
          return (
            <div>
              <h1>Name: {user.name}</h1>
              <h1>Age: {user.age}</h1>
              <h1>Username: {user.username}</h1>
            </div>
          );
        })}
      </div>

      <div>
        <input
          type="text"
          placeholder="Title..."
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Text..."
          onChange={(event) => {
            setText(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Timestsamp..."
          onChange={(event) => {
            setTimestamp(event.target.value);
          }}
        />
        <button onClick={createUser}> Create User </button>
      </div>
    </div>
  );
}

export default App;
