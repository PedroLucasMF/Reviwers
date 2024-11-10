"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "react-bootstrap";
import Pagina from "@/app/components/Pagina";
import { useRouter, usePathname } from "next/navigation"; // Importando usePathname para capturar o ID da URL

const validationSchema = Yup.object({
  nome: Yup.string().required("Nome é obrigatório"),
  capa: Yup.string().url("Insira uma URL válida").required("Capa é obrigatória"),
  descricao: Yup.string().required("Descrição é obrigatória"),
  nota: Yup.number()
    .min(0, "A nota mínima é 0")
    .max(5, "A nota máxima é 5")
    .required("Nota é obrigatória"),
  comentario: Yup.string().required("Comentário é obrigatório"),
});

export default function Page() {
  const router = useRouter();
  const pathname = usePathname(); // Captura o caminho da URL
  const serieId = pathname.split("/")[2]; // Extrai o ID da série, anime ou HQ da URL

  // Função para verificar o tipo de item
  const verificarTipo = (id) => {
    // Verifica se é uma série, anime ou HQ no localStorage
    const seriesSalvas = JSON.parse(localStorage.getItem("series")) || [];
    const animesSalvos = JSON.parse(localStorage.getItem("animes")) || [];
    const hqsSalvas = JSON.parse(localStorage.getItem("hqs")) || [];

    // Verifica se o ID corresponde a algum item salvo
    const serie = seriesSalvas.find((s) => s.id === parseInt(id));
    const anime = animesSalvos.find((a) => a.id === parseInt(id));
    const hq = hqsSalvas.find((h) => h.id === parseInt(id));

    // Retorna o tipo de item encontrado
    if (serie) return { tipo: "serie", item: serie };
    if (anime) return { tipo: "anime", item: anime };
    if (hq) return { tipo: "hq", item: hq };
    return null;
  };

  return (
    <Pagina>
      <h1>Formulário de Episódio</h1>
      <Formik
        initialValues={{ nome: "", capa: "", descricao: "", nota: "", comentario: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          // Verifica o tipo de item (série, anime ou HQ)
          const resultado = verificarTipo(serieId);

          if (!resultado) {
            alert("Item não encontrado!");
            return;
          }

          const { tipo, item } = resultado;

          // Cria o novo episódio com um ID único
          const novoEpisodio = { id: Date.now(), ...values };

          // Salva o episódio no localStorage de episódios
          const episodiosSalvos = JSON.parse(localStorage.getItem("episodios")) || [];
          episodiosSalvos.push(novoEpisodio);
          localStorage.setItem("episodios", JSON.stringify(episodiosSalvos));

          // Adiciona o novo episódio ao item específico (série, anime ou HQ)
          item.episodios = item.episodios || [];
          item.episodios.push(novoEpisodio);

          // Atualiza o item no localStorage
          let itemsAtualizados;
          if (tipo === "serie") {
            itemsAtualizados = JSON.parse(localStorage.getItem("series")) || [];
            itemsAtualizados = itemsAtualizados.map((s) => (s.id === parseInt(serieId) ? item : s));
            localStorage.setItem("series", JSON.stringify(itemsAtualizados));
          } else if (tipo === "anime") {
            itemsAtualizados = JSON.parse(localStorage.getItem("animes")) || [];
            itemsAtualizados = itemsAtualizados.map((a) => (a.id === parseInt(serieId) ? item : a));
            localStorage.setItem("animes", JSON.stringify(itemsAtualizados));
          } else if (tipo === "hq") {
            itemsAtualizados = JSON.parse(localStorage.getItem("hqs")) || [];
            itemsAtualizados = itemsAtualizados.map((h) => (h.id === parseInt(serieId) ? item : h));
            localStorage.setItem("hqs", JSON.stringify(itemsAtualizados));
          }

          console.log("Episódio salvo e adicionado ao item!", novoEpisodio);

          // Reseta o formulário
          resetForm();

          // Retorna à página anterior
          router.back();
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            {/* Campo Nome */}
            <div className="form-group">
              <label htmlFor="nome">Nome</label>
              <Field type="text" name="nome" className="form-control" />
              <ErrorMessage name="nome" component="div" className="text-danger" />
            </div>

            {/* Campo Capa */}
            <div className="form-group">
              <label htmlFor="capa">Capa (URL da Imagem)</label>
              <Field type="text" name="capa" className="form-control" />
              <ErrorMessage name="capa" component="div" className="text-danger" />
            </div>

            {/* Campo Descrição */}
            <div className="form-group">
              <label htmlFor="descricao">Descrição</label>
              <Field as="textarea" name="descricao" className="form-control" />
              <ErrorMessage name="descricao" component="div" className="text-danger" />
            </div>

            {/* Campo Nota */}
            <div className="form-group">
              <label htmlFor="nota">Nota (de 0 a 5)</label>
              <Field type="number" name="nota" className="form-control" />
              <ErrorMessage name="nota" component="div" className="text-danger" />
            </div>

            {/* Campo Comentário */}
            <div className="form-group">
              <label htmlFor="comentario">Comentário</label>
              <Field type="text" name="comentario" className="form-control" />
              <ErrorMessage name="comentario" component="div" className="text-danger" />
            </div>

            {/* Botão de Envio */}
            <Button type="submit" disabled={isSubmitting}>
              Enviar
            </Button>
          </Form>
        )}
      </Formik>
    </Pagina>
  );
}