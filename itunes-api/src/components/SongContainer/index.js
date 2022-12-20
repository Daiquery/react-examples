import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SongSearch from "../SongSearch";
import SongCard from "../SongCard";

function SongContainer() {
  const [songs, setSongs] = useState([]);

  const handleSearch = (searchQuery) => {
    setSongs(searchQuery);
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <SongSearch onSearch={handleSearch} className="w-100" />
        </Col>
      </Row>
      <Row className="justify-content-center mt-3">
        <Col>
          <div className="d-flex flex-wrap justify-content-center">
            {songs.map((song) => (
              <SongCard song={song} />
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SongContainer;
