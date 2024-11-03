"use client";

import Pagina from "@/app/components/Pagina";
import { Button } from "react-bootstrap";
import { FaPencilAlt, FaStar } from "react-icons/fa";


export default function Page({ params }) {

  const jogos = JSON.parse(localStorage.getItem('jogos')) || []
  const dados = jogos.find(item => item.id == params.id)

  console.log(dados);

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

  return (
    <Pagina>

<Button
  href="filmes/create"
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
            <img src={dados.capa} alt="Capa do Jogo" style={styles.image} />
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
          </div>
        </div>
      </div>
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