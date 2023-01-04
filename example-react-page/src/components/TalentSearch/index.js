import { Container } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./styles.css";

function TalentSearch() {
  var options = [
    "Singer",
    "Background Singer",
    "Ghost / Song Writer",
    "Rapper",
    "Publicist",
    "Blogger",
    "Graphic Designer",
    "Producer",
    "Drummer",
    "Bassist",
    "Guitarist",
    "Keyboardist / Pianist",
    "Social Media Marketing",
    "Photographer",
    "Videographer",
    "Security",
    "Event Production",
    "Dance / Choreography",
    "DJ",
    "Host",
    "Public Relations Specialist",
    "Street Team Promotion",
    "Printing Specialist",
    "Stylist / Barber / MUA",
    "Cover / Jam Band",
    "Sound Engineer",
  ];
  return (
    <Container>
      <Form className="talentsearch">
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Location
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="location" placeholder="Start typing..." />
          </Col>
        </Form.Group>

        <Row>
          <Col>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalPassword"
            >
              <Form.Label column sm={2}>
                From
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="date" placeholder="" />
              </Col>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalPassword"
            >
              <Form.Label column sm={2}>
                To
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="date" placeholder="" />
              </Col>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalPassword"
            >
              <Form.Label column sm={2}>
                Rate
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="date" placeholder="" />
              </Col>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalPassword"
            >
              <Form.Label column sm={2}>
                Skills
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  as={Typeahead}
                  id="music-tag-search"
                  labelKey="food"
                  multiple
                  onChange={null}
                  options={options}
                  placeholder=""
                  selected={null}
                />
              </Col>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Search</Button>
          </Col>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default TalentSearch;
