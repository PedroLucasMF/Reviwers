"use client";

import Pagina from "@/app/components/Pagina";
import { Button } from "react-bootstrap";

export default function Page({ params }) {
  const { id } = params; // Captura o ID do filme a partir dos parâmetros da URL
  const filmes = JSON.parse(localStorage.getItem('filmes')) || [];

  // Busca o filme correspondente ao ID
  const filme = filmes.find(f => String(f.id) === String(id)); // Garante que ambos sejam do tipo string

  const buttonStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: 1000,
    backgroundColor: '#007bff',
    color: 'white',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '24px',
    border: 'none',
  };

  const hoverStyle = {
    backgroundColor: '#0056b3',
  };

  return (
    <Pagina>
      <Button 
        href="/filmes" 
        style={buttonStyle} 
        onMouseEnter={(e) => e.target.style.backgroundColor = hoverStyle.backgroundColor}
        onMouseLeave={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
      >
        Editar
      </Button>

      <div>
        <h1>Detalhes do Filme</h1>
        {filme ? (
          <div>
            <h2>{filme.nome}</h2>
            <img src={filme.capa} alt={filme.nome} style={{ width: '100px' }} />
            <p>Descrição: {filme.descricao}</p>
            <p>Nota: {filme.nota}</p>
            <p>Diretor: {filme.diretor}</p>
          </div>
        ) : (
          <p>Filme não encontrado.</p>
        )}
      </div>
    </Pagina>
  );
}