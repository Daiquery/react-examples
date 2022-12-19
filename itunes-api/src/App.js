import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import SongCard from "./components/SongCard";
import { Col, Row } from "react-bootstrap";
import SongSearch from "./components/SongSearch";
import SongContainer from "./components/SongContainer";

function App() {
  return (
    <div className="App">
      <SongContainer />
    </div>
  );
}

export default App;
