import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          Created by{" "}
          <a
            href="https://www.linkedin.com/in/andrea-rold%C3%A1n-mohedano-242461158/"
            target="_blank"
          >
            Andrea Roldán
          </a>
          , open-sourced on{" "}
          <a href="https://github.com/AndreaRolM/weather-react" target="_blank">
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a href="https://clever-lamarr-1c94b2.netlify.app/" target="_blank">
            Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
