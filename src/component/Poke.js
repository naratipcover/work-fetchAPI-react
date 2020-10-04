import React, { useState, useEffect } from "react";

async function fetchData() {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
  return response.json();
}

function Poke() {
  const [repoData, setRepoData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const handleFetch = async () => {
    setLoading(true);
    try {
      const pokeRepo = await fetchData();
      setRepoData(pokeRepo);
    } catch {
      setError("Error ดึง api ไอ้ออก!! ");
    }
    setLoading(false);
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div className="poke-container">
      {!isLoading && repoData && (
        <div>
          {repoData.results.map((item) => (
            <div className="poke-list">{item.name}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Poke;
