import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";

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
      {currentSong && <audio src={currentSong.previewUrl} controls />}

      <div className="d-flex flex-wrap justify-content-center">
        {songs.map((song) => (
          <Card key={song.trackId} className="w-25 m-3">
            <Card.Img variant="top" src={song.artworkUrl100} />
            <Card.Body>
              <Card.Title>{song.trackName}</Card.Title>
              <Card.Subtitle>{song.artistName}</Card.Subtitle>
              <Button onClick={() => handlePlay(song)}>Play</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default SongCard;
