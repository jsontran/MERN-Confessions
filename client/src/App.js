function App() {
  return (
    <div className="App">
      <h1>Confession App</h1>
      <h4>Confessions</h4>

      <div className="confessions">

        <div className="confession">
          <div className="checkbox"></div>
          <div className="text">
            text
          </div>
          <div className="delete-confession">x</div>
        </div>

        <div className="confession is-complete">

          <div className="checkbox"></div>
          <div className="text">
            text
          </div>
          <div className="delete-confession">x</div>

        </div>

      </div>

    </div>
  );
}

export default App;
