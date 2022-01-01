import "./App.scss";
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [listOfThoughts, setListOfThoughts] = useState([]);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [createdat, setCreatedAt] = useState("");

  const [createMenu, setCreateMenu] = useState(false);
  const [createPrompt, setCreatePrompt] = useState(false);

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
      <div className="header">Void</div>
      <div className="content">
        <div className="wrapper">
          <div className={"thoughtsDisplay " + (createMenu && "active")}>
            {listOfThoughts.map((thought) => {
              return (
                <div>
                  <h1>{thought.title}</h1>
                  <h1>{thought.text}</h1>
                </div>
              );
            })}
          </div>

          <div className={"createPrompt " + (createMenu && "active")}>
            <input
              name="title"
              type="text"
              placeholder="Title"
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
            <textarea
              name="body"
              cols="50"
              rows="5"
              onChange={(event) => {
                setText(event.target.value);
              }}
            />
            <button onClick={createThoughts}> Send to Void </button>
          </div>
        </div>
      </div>

      <div className={"createButton " + (createMenu && "active")}>
        <div className="button" onClick={() => setCreateMenu(!createMenu)}>
          +
        </div>
      </div>
    </div>
  );
}

export default App;
