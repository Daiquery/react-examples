import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";

const ITUNES_API_ENDPOINT = "https://itunes.apple.com/search";

function SongCard({ song }) {
  const [currentSong, setCurrentSong] = useState(null);

  const handlePlay = (song) => {
    setCurrentSong(song);
  };

  return (
    <div>
      {currentSong && <audio src={currentSong.previewUrl} controls />}
      <Card key={song.trackId} className="w-25 m-3">
        <Card.Img variant="top" src={song.artworkUrl100} />
        <Card.Body>
          <Card.Title>{song.trackName}</Card.Title>
          <Card.Subtitle>{song.artistName}</Card.Subtitle>
          <Button onClick={() => handlePlay(song)}>Play</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SongCard;
