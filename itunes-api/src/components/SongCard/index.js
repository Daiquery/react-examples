import React, { useState, useEffect } from "react";
import { Card, Button, Image, Row } from "react-bootstrap";

const ITUNES_API_ENDPOINT = "https://itunes.apple.com/search";

function SongCard({ query }) {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${ITUNES_API_ENDPOINT}?term=${query}`);
      const data = await response.json();
      setSongs(data.results);
    }
    fetchData();
  }, [query]);

  const handlePlay = (song) => {
    setCurrentSong(song);
  };

  return (
    <div>
      <Row>
        {songs.map((song) => (
          <Card style={{ width: "20%" }} key={song.trackId}>
            <Card.Img variant="top" src={song.artworkUrl100} />
            <Card.Body>
              <Card.Title>{song.trackName}</Card.Title>
              <Card.Subtitle>{song.artistName}</Card.Subtitle>
              <Button onClick={() => handlePlay(song)}>Play</Button>
            </Card.Body>
          </Card>
        ))}
        {currentSong && <audio src={currentSong.previewUrl} controls />}
      </Row>
    </div>
  );
}

export default SongCard;
