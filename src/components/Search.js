import React, { useState } from "react";
import axios from "axios";

function Search() {
  const [country, setCountry] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const res = await axios.get(`http://localhost:5000/api/production/${country}`);
    setResults(res.data);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter country name"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {results.map(record => (
          <li key={record._id}>
            {record.type} - {record.name}: {record.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;