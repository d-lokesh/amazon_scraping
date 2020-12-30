import logo from './logo.svg';
import './App.css';
import home from "./components/home"
import down from "./components/scrap"
import { Route } from "react-router-dom";
import CSV from "./components/samplecsv"
function App() {
  return (
    <div className="App">
      <Route path="/" exact component={home}></Route>
      <Route path="/downloadcsv" component={down} />
      <Route path="/csv" component={CSV} />


    </div>
  );
}

export default App;
