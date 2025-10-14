import React, { useEffect, useState } from "react";

const API_URL = "https://dragonball-api.com/api/planets";

export default function PlanetsDBList() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setPlanets(data);
      })
      .catch((err) => console.error("Erro ao buscar dados:", err));
  }, []);

  return (
    <ul style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {planets.map((planet, index) => (
        <li
          key={index}
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
          {/* Sem imagem, só o nome */}
          <p style={{ marginTop: "10px", textTransform: "capitalize" }}>
            {planet.name}
          </p>
        </li>
      ))}
    </ul>
  );
}
