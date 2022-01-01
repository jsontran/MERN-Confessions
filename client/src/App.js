import './App.scss';
import { useState, useEffect } from "react";
import Axios from "axios";


function App() {
  
  const [listOfThoughts, setListOfThoughts] = useState([]);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [createdat, setCreatedAt] = useState("");

  const [createMenu, setCreateMenu] 

  
  useEffect(() => {
    Axios.get("http://localhost:3001/getThoughts").then((response) => {
      setListOfThoughts(response.data);
    });
  }, [listOfThoughts]);

  const createThoughts = () => {
    Axios.post("http://localhost:3001/createThoughts", {
      title,
      text,
      createdat,
    }).then((response) => {
      setListOfThoughts([
        ...listOfThoughts,
        {
          title,
          text,
          createdat,
        },
      ]);
    });
  };
  
  return (
    <div className="App">
      <div className="thoughtsDisplay">
        {listOfThoughts.map((thought) => {
          return (
            <div>
              <h1>Title: {thought.title}</h1>
              <h1>Text: {thought.text}</h1>
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
            setCreatedAt(event.target.value);
          }}
        />
        <button onClick={createThoughts}> Create Thought </button>
      </div>
    </div>
  );
}

export default App;
