import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Weather search</h2>
        <Search />
        <a
          className="App-link"
          href="https://github.com/AndreaRolM?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          Take a look to GitHub repository
        </a>
      </header>
    </div>
  );
}

export default App;
