import React, { useState, useEffect } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

const ITUNES_API_ENDPOINT = "https://itunes.apple.com/search";

function SongSearch({ onSearch }) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${ITUNES_API_ENDPOINT}?term=${query}`);
      const data = await response.json();
      setSuggestions(data.results);
    }
    if (query) {
      fetchData();
    }
  }, [query]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormControl
        type="text"
        placeholder="Search for songs"
        value={query}
        onChange={handleChange}
        list="suggestions"
      />
      <datalist id="suggestions">
        {suggestions.map((song) => (
          <option key={song.trackId} value={song.trackName} />
        ))}
      </datalist>
      <Button type="submit">Search</Button>
    </Form>
  );
}

export default SongSearch;
