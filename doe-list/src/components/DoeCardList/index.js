import { Col, Container, Row } from "react-bootstrap";
import { does } from "../../mock/does";
import DoeCard from "../DoeCard";

function DoeCardList() {
  return (
    <Container>
      <h3 className="mt-4 text-start">People of Interest</h3>
      <Row xs={4} className="d-flex justify-content-center">
        {does.map((doe) => (
          <div>
            <DoeCard doe={doe}></DoeCard>
          </div>
        ))}
      </Row>
    </Container>
  );
}

export default DoeCardList;
