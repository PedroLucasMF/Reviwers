"use client";

import Pagina from "@/app/components/Pagina";


export default function Page({ params }) {

  const filmes = JSON.parse(localStorage.getItem('filmes')) || []
  const dados = filmes.find(item => item.id == params.id)

  console.log(dados);

  return (
    <Pagina>
      
      



    </Pagina>
  );
}