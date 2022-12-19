import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import SongCard from "./components/SongCard";
import { Col, Row } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Col>
        <SongCard query={"kendrick"} />
      </Col>
    </div>
  );
}

export default App;
