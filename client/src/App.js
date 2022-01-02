import "./App.scss";
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [listOfThoughts, setListOfThoughts] = useState([]);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [TW, setTW] = useState(false);

  const [createMenu, setCreateMenu] = useState(false);
  const [about, setAbout] = useState(false);

  useEffect(() => {
    Axios.get("http://localhost:3001/getThoughts").then((response) => {
      setListOfThoughts(response.data);
    });
  }, [listOfThoughts]);

  const createThoughts = () => {
    Axios.post("http://localhost:3001/createThoughts", {
      title,
      text,
      TW,
    }).then((response) => {
      setListOfThoughts([
        ...listOfThoughts,
        {
          title,
          text,
          TW,
        },
      ]);
    });
  };

  return (
    <div className="App">
      <div className="header">
        <div className="left">
          <a
            href="https://jsontran.github.io/PersonalWebsite/"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            J.T
          </a>
        </div>
        <div className="middle">VOID</div>
        <div className="right" onClick={() => setAbout(!about)}>
          About
        </div>
      </div>

      <div className="content">
        <div className={"about " + (about && "active")}>AMONG US</div>
        <div className="wrapper">
          <div className={"thoughtsDisplay " + (createMenu && "active")}>
            {listOfThoughts
              .map((thought) => {
                return (
                  <div className="post">
                    <div className="title">{thought.title}</div>
                    <div className="body">{thought.text}</div>
                  </div>
                );
              })
              .reverse()}
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
              placeholder="What is on your mind?"
              onChange={(event) => {
                setText(event.target.value);
              }}
            />
            <input
              type="checkbox"
              id="TW"
              name="TW"
              value=""
              onClick={() => {
                if (document.getElementById("TW").checked == true) {
                  setTW(true);
                } else if (document.getElementById("TW").checked == false) {
                  setTW(false);
                }
              }}
            ></input>

            <button
              onClick={() => {
                setCreateMenu(!createMenu);
                createThoughts();
                document.getElementById("TW").checked = false;
              }}
            >
              {" "}
              Send to Void{" "}
            </button>
          </div>
        </div>
      </div>

      <div className={"createButton " + (createMenu && "active")}>
        <div
          className="button"
          onClick={() => {
            setCreateMenu(!createMenu);
          }}
        >
          +
        </div>
      </div>
    </div>
  );
}

export default App;
