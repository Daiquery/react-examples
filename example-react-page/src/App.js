import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LimelightHeader from "./components/LimelightHeader";
import guitar from "./assets/guitarguy.jpeg";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { Container } from "react-bootstrap";
import TalentSearch from "./components/TalentSearch";

function App() {
  return (
    <div className="App">
      <LimelightHeader></LimelightHeader>
      <Container>
        <div className="imgholder">
          <img className="img-fluid" src={guitar} />
        </div>
        <h1 className="intro mt-2 mb-5">Booking musicians is as easy as 1-2-3!</h1>
        <div className="align-items-center justify-content-center">
          <TalentSearch />
        </div>
      </Container>
    </div>
  );
}

export default App;
