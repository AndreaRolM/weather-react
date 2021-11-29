import "./App.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Weather search</h2>
        <Search />
      </header>
      <footer>
        This project was coded by Andrea Roldán and it is{" "}
        <a
          className="App-link"
          href="https://github.com/AndreaRolM?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          className="App-link"
          href="https://clever-lamarr-1c94b2.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
