"use client";

import Pagina from "@/app/components/Pagina";
import { Button } from "react-bootstrap";
import { FaPencilAlt, FaStar, FaHeart } from "react-icons/fa";
import { useEffect } from "react";

export default function Page({ params }) {
  const hqs = JSON.parse(localStorage.getItem("hqs")) || [];
  const animes = JSON.parse(localStorage.getItem("animes")) || [];
  const series = JSON.parse(localStorage.getItem("series")) || [];
  const filmes = JSON.parse(localStorage.getItem("filmes")) || [];
  const jogos = JSON.parse(localStorage.getItem("jogos")) || [];

  // Encontrar o item em qualquer um dos local storages
  const dados =
    hqs.find((item) => item.id == params.id) ||
    animes.find((item) => item.id == params.id) ||
    series.find((item) => item.id == params.id) ||
    filmes.find((item) => item.id == params.id) ||
    jogos.find((item) => item.id == params.id);

  // Determinar a categoria com base na origem do item
  const categoria =
    hqs.find((item) => item.id == params.id)
      ? "hqs"
      : animes.find((item) => item.id == params.id)
      ? "animes"
      : series.find((item) => item.id == params.id)
      ? "series"
      : filmes.find((item) => item.id == params.id)
      ? "filmes"
      : "jogos";

  const buttonStyle = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: 1000,
    backgroundColor: "#007bff",
    color: "white",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "24px",
    border: "none",
  };

  // Função para adicionar o item aos favoritos no Local Storage
  const addToFavorites = () => {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    // Verifica se o item já está nos favoritos para evitar duplicação
    if (!favoritos.some((item) => item.id === dados.id && item.categoria === categoria)) {
      const novoFavorito = { ...dados, categoria, link: `/${categoria}/${dados.id}` };
      favoritos.push(novoFavorito);
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
      alert("Adicionado aos favoritos!");
    } else {
      alert("Este item já está nos favoritos.");
    }
  };

  console.log(categoria);

  return (
    <Pagina>
      <p>ahhhh</p>
    </Pagina>
  );
}

const styles = {
  container: {
    backgroundColor: "#899499", // fundo roxo claro
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  content: {
    backgroundColor: "#D3D3D3", // fundo branco para o conteúdo principal
    borderRadius: "8px",
    display: "flex",
    maxWidth: "800px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  imageContainer: {
    flex: "1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D3D3D3", // continua no fundo roxo claro para a imagem
    padding: "20px",
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "8px",
  },
  details: {
    flex: "2",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "10px",
  },
  rating: {
    display: "flex",
    gap: "5px",
    marginTop: "10px",
  },
};