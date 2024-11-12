"use client";

import Pagina from "@/app/components/Pagina";
import { Button } from "react-bootstrap";
import { FaPencilAlt, FaStar, FaHeart, FaChevronDown, FaTrashAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Importa useRouter

export default function Page({ params }) {
  const router = useRouter(); // Inicializa useRouter

  const hqs = JSON.parse(localStorage.getItem("hqs")) || [];
  const animes = JSON.parse(localStorage.getItem("animes")) || [];
  const series = JSON.parse(localStorage.getItem("series")) || [];
  const filmes = JSON.parse(localStorage.getItem("filmes")) || [];
  const jogos = JSON.parse(localStorage.getItem("jogos")) || [];

  const dados =
    hqs.find((item) => item.id == params.id) ||
    animes.find((item) => item.id == params.id) ||
    series.find((item) => item.id == params.id) ||
    filmes.find((item) => item.id == params.id) ||
    jogos.find((item) => item.id == params.id);

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

  const [episodiosVisiveis, setEpisodiosVisiveis] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleEpisodios = () => setEpisodiosVisiveis(!episodiosVisiveis);

  useEffect(() => {
    // Verifica se o item já está nos favoritos ao carregar a página
    const favoritos = JSON.parse(localStorage.getItem("favoritos") || "[]");
    const itemFavorito = favoritos.some(
      (item) => item.id === dados.id && item.categoria === categoria
    );
    setIsFavorited(itemFavorito);
  }, [dados, categoria]);

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

  const hoverStyle = {
    backgroundColor: "#0056b3",
  };

  const addToFavorites = () => {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    if (!favoritos.some((item) => item.id === dados.id && item.categoria === categoria)) {
      const novoFavorito = { ...dados, categoria, link: `/${categoria}/${dados.id}` };
      favoritos.push(novoFavorito);
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
      setIsFavorited(true); // Atualiza o estado para refletir a mudança
      alert("Adicionado aos favoritos!");
    } else {
      alert("Este item já está nos favoritos.");
    }
  };

  const removeFromFavorites = () => {
    const favoritos = JSON.parse(localStorage.getItem("favoritos") || "[]");
    const favoritosAtualizados = favoritos.filter(
      (item) => item.id !== dados.id || item.categoria !== categoria
    );
    localStorage.setItem("favoritos", JSON.stringify(favoritosAtualizados));
    setIsFavorited(false); // Atualiza o estado para refletir a mudança
    alert("Removido dos favoritos!");
  };

  function excluir() {
    if (confirm("Deseja realmente excluir o registro?")) {
      const dadosAtualizados = JSON.parse(localStorage.getItem(categoria) || "[]").filter(
        (item) => item.id != params.id
      );
      localStorage.setItem(categoria, JSON.stringify(dadosAtualizados));

      removeFromFavorites();

      alert("Registro excluído com sucesso!");
      router.back();
    }
  }

  // Função para excluir um episódio específico
  const excluirEpisodio = (episodioId) => {
    if (confirm("Deseja realmente excluir este episódio?")) {
      const dadosAtualizados = dados.episodios.filter((episodio) => episodio.id !== episodioId);
      const dadosComEpisodiosAtualizados = { ...dados, episodios: dadosAtualizados };

      // Atualiza a categoria no localStorage com o episódio excluído
      const categoriaAtualizada = JSON.parse(localStorage.getItem(categoria) || "[]").map((item) =>
        item.id === dados.id ? dadosComEpisodiosAtualizados : item
      );
      localStorage.setItem(categoria, JSON.stringify(categoriaAtualizada));

      alert("Episódio excluído com sucesso!");
    }
  };

  return (
    <Pagina>
      <Button
        href={`/${categoria}/${dados.id}/episodio`}
        style={buttonStyle}
        onMouseEnter={(e) =>
          (e.target.style.backgroundColor = hoverStyle.backgroundColor)
        }
        onMouseLeave={(e) =>
          (e.target.style.backgroundColor = buttonStyle.backgroundColor)
        }
      >
        <FaPencilAlt />
      </Button>

      <div style={styles.container}>
        <div style={styles.content}>
          <div style={styles.imageContainer}>
            <img src={dados.capa} alt="Capa" style={styles.image} />
          </div>
          <div style={styles.details}>
            <h2 style={styles.title}>{dados.nome}</h2>
            <p>{dados.descricao}</p>
            <p>{dados.comentario}</p>
            <div style={styles.rating}>
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  color={index < dados.nota ? "#ffc107" : "#e4e5e9"}
                  size={24}
                />
              ))}
            </div>

            {/* Botão de Adicionar ou Remover dos Favoritos */}
            {!isFavorited ? (
              <Button onClick={addToFavorites} variant="danger" style={{ marginTop: "10px" }}>
                <FaHeart style={{ marginRight: "5px" }} /> Adicionar aos Favoritos
              </Button>
            ) : (
              <Button onClick={removeFromFavorites} variant="danger" style={{ marginTop: "10px" }}>
                <FaHeart style={{ marginRight: "5px" }} /> Remover dos Favoritos
              </Button>
            )}

            <Button onClick={excluir} variant="secondary" style={{ marginTop: "10px" }}>
              <FaTrashAlt style={{ marginRight: "5px" }} /> Excluir
            </Button>

            {/* Seção de episódios */}
            {dados.episodios && dados.episodios.length > 0 && (
              <div style={{ marginTop: "20px" }}>
                <Button variant="secondary" onClick={toggleEpisodios}>
                  Episódios <FaChevronDown />
                </Button>
                {episodiosVisiveis && (
                  <div style={styles.episodeList}>
                    {dados.episodios.map((episodio) => (
                      <div key={episodio.id} style={styles.episodeItem}>
                        <img src={episodio.capa} alt={`Capa do Episódio ${episodio.numero}`} style={styles.episodeImage} />
                        <div style={styles.episodeContent}>
                          <h4 style={styles.episodeTitle}>Episódio {episodio.numero}: {episodio.nome}</h4>
                          <p style={styles.episodeDescription}>{episodio.descricao}</p>
                          <p style={styles.episodeComment}>{episodio.comentario}</p>
                          <div style={styles.episodeRating}>
                            {[...Array(5)].map((_, i) => (
                              <FaStar
                                key={i}
                                color={i < episodio.nota ? "#ffc107" : "#e4e5e9"}
                                size={20}
                              />
                            ))}
                          </div>
                          {/* Botão de excluir episódio */}
                          <Button
                            variant="danger"
                            size="sm"
                            onClick={() => excluirEpisodio(episodio.id)}
                            style={{ marginTop: "10px" }}
                          >
                            <FaTrashAlt style={{ marginRight: "5px" }} /> Excluir
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </Pagina>
  );
}

const styles = {
  container: {
    backgroundColor: "#899499",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  content: {
    backgroundColor: "#D3D3D3",
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
    backgroundColor: "#D3D3D3",
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
  episodeList: {
    marginTop: "10px",
    backgroundColor: "#E0E0E0",
    padding: "15px",
    borderRadius: "8px",
  },
  episodeItem: {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "10px",
    padding: "10px",
    backgroundColor: "#F5F5F5",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  episodeImage: {
    width: "80px",
    height: "auto",
    borderRadius: "4px",
    marginRight: "15px",
  },
  episodeContent: {
    display: "flex",
    flexDirection: "column",
  },
  episodeTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  episodeDescription: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "5px",
  },
  episodeComment: {
    fontSize: "14px",
    color: "#888",
    marginBottom: "5px",
  },
  episodeRating: {
    display: "flex",
    gap: "5px",
  },
};