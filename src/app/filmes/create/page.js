"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "react-bootstrap";
import Pagina from "@/app/components/Pagina";
import { useRouter } from "next/navigation"; // Importando useRouter

const validationSchema = Yup.object({
  nome: Yup.string().required("Nome é obrigatório"),
  capa: Yup.string().url("Insira uma URL válida").required("Capa é obrigatória"),
  descricao: Yup.string().required("Descrição é obrigatória"),
  nota: Yup.number()
    .min(0, "A nota mínima é 0")
    .max(5, "A nota máxima é 5")
    .required("Nota é obrigatória"),
  diretor: Yup.string().required("Diretor é obrigatório"),
});

export default function Page() {
  const router = useRouter(); // Criando a instância do roteador

  return (
    <Pagina>
      <h1>Formulário de Filme</h1>
      <Formik
        initialValues={{ nome: "", capa: "", descricao: "", nota: "", diretor: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          // Salvando os valores no localStorage
          const filmesSalvos = JSON.parse(localStorage.getItem("filmes")) || [];
          const novoFilme = { id: Date.now(), ...values }; // Gera um ID único usando o timestamp
          filmesSalvos.push(novoFilme);
          localStorage.setItem("filmes", JSON.stringify(filmesSalvos));

          console.log("Formulário enviado e salvo no localStorage!", novoFilme);

          // Reseta o formulário
          resetForm();

          // Retorna à página anterior
          router.back(); // Redireciona para a página anterior
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

            {/* Campo Diretor */}
            <div className="form-group">
              <label htmlFor="diretor">Diretor</label>
              <Field type="text" name="diretor" className="form-control" />
              <ErrorMessage name="diretor" component="div" className="text-danger" />
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