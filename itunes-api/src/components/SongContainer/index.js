import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SongSearch from "../SongSearch";
import SongCard from "../SongCard";

function SongContainer() {
  const [query, setQuery] = useState("");

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <SongSearch onSearch={handleSearch} className="w-100" />
        </Col>
      </Row>
      <Row className="justify-content-center mt-3">
        <Col xs={12} md={8}>
          <SongCard query={query} />
        </Col>
      </Row>
    </Container>
  );
}

export default SongContainer;
