import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>Created by Andrea Roldán, open-sourced on GitHub</footer>
      </div>
    </div>
  );
}
