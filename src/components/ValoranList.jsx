import React, { useEffect, useState } from "react";

const API_URL = "https://valorant-api.com/v1/buddies";

export default function ValorantList() {
  const [buddies, setBuddies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setBuddies(data.data);  // acessando o array correto
      })
      .catch((err) => console.error("Erro ao buscar dados:", err));
  }, []);

  return (
    <ul style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {buddies.map((buddy) => (
        <li
          key={buddy.uuid}
          style={{
            listStyle: "none",
            padding: "10px",
            background: "#fff",
            borderRadius: "8px",
            textAlign: "center",
            width: "150px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          <img
            src={buddy.displayIcon}
            alt={buddy.displayName}
            style={{ width: "100%", borderRadius: "4px" }}
          />
          <p style={{ marginTop: "10px", textTransform: "capitalize" }}>
            {buddy.displayName}
          </p>
        </li>
      ))}
    </ul>
  );
}
