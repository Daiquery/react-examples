import logo from "./logo.svg";
import "./App.css";
import SiteNav from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import DoeShowcase from "./components/DoeShowcase";
import DoeCardList from "./components/DoeCardList";
import { Container } from "react-bootstrap";
import HomeSectionMain from "./components/HomeSectionMain";

function App() {
  return (
    <div className="App">
      <SiteNav></SiteNav>
      <HomeSectionMain></HomeSectionMain>
      <Container>
        <DoeShowcase></DoeShowcase>
        <DoeCardList></DoeCardList>
      </Container>
    </div>
  );
}

export default App;
