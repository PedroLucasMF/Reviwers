"use client";

import { Card, Col, Container, Row, Button } from "react-bootstrap";
import Pagina from "@/app/components/Pagina";

export default function Page() {
  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  const series = JSON.parse(localStorage.getItem("series")) || [];
  const animes = JSON.parse(localStorage.getItem("animes")) || [];
  const jogos = JSON.parse(localStorage.getItem("jogos")) || [];
  const hqs = JSON.parse(localStorage.getItem("hqs")) || [];
  const filmes = JSON.parse(localStorage.getItem("filmes")) || [];

  const pageStyle = {
    backgroundColor: "#899499",
    minHeight: "100vh",
    padding: "20px",
    color: "white",
  };

  const sectionHeaderStyle = {
    borderBottom: "2px solid #5D3FD3",
    paddingBottom: "10px",
    marginBottom: "20px",
  };

  const cardStyle = {
    width: "10rem",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    overflow: "hidden",
    backgroundColor: "#D3D3D3",
    color: "#333",
  };

  const cardTitleStyle = {
    wordWrap: "break-word",
    overflowWrap: "break-word",
    whiteSpace: "normal",
    fontSize: "16px",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: "10px",
  };

  const buttonDet = {
    backgroundColor: "#5D3FD3",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "16px",
    border: "none",
    padding: "8px 12px",
    borderRadius: "5px",
    transition: "background-color 0.3s",
  };

  // Função para encontrar a categoria correspondente ao item com base no ID
  const getItemCategory = (id) => {
    if (filmes.some(item => item.id === id)) return "filmes";
    if (series.some(item => item.id === id)) return "series";
    if (jogos.some(item => item.id === id)) return "jogos";
    if (animes.some(item => item.id === id)) return "animes";
    if (hqs.some(item => item.id === id)) return "hqs";
    if (favoritos.some(item => item.id === id)) return "favoritos";
    return "default-category";
  };

  console.log(favoritos);
  console.log(filmes);

  return (
    <Pagina style={pageStyle}>
      <div>
        <h1 style={sectionHeaderStyle}>Filmes</h1>
        <Row md={1}>
          <Col>
            <div
              style={{
                overflowX: "auto",
                whiteSpace: "nowrap",
                padding: "1rem 0",
              }}
            >
              <Row style={{ display: "inline-flex" }}>
                {filmes.map((item, index) => (
                  <Col
                    key={index}
                    style={{ display: "inline-block", marginRight: "1rem" }}
                  >
                    <Card style={cardStyle}>
                      <Card.Img variant="cover" src={item.capa} />
                      <Card.Body>
                        <Card.Title style={cardTitleStyle}>
                          {item.nome}
                        </Card.Title>
                        <Button style={buttonDet}>
                          <a
                            href={`/${
                              getItemCategory(item.id)
                            }/${item.id}`}
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            Detalhes
                          </a>
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </div>

      <div>
        <h1 style={sectionHeaderStyle}>Séries</h1>
        <Row md={1}>
          <Col>
            <div
              style={{
                overflowX: "auto",
                whiteSpace: "nowrap",
                padding: "1rem 0",
              }}
            >
              <Row style={{ display: "inline-flex" }}>
                {series.map((item, index) => (
                  <Col
                    key={index}
                    style={{ display: "inline-block", marginRight: "1rem" }}
                  >
                    <Card style={cardStyle}>
                      <Card.Img variant="cover" src={item.capa} />
                      <Card.Body>
                        <Card.Title style={cardTitleStyle}>
                          {item.nome}
                        </Card.Title>
                        <Button style={buttonDet}>
                          <a
                            href={`/${
                              getItemCategory(item.id)
                            }/${item.id}`}
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            Detalhes
                          </a>
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </div>

      <div>
        <h1 style={sectionHeaderStyle}>Jogos</h1>
        <Row md={1}>
          <Col>
            <div
              style={{
                overflowX: "auto",
                whiteSpace: "nowrap",
                padding: "1rem 0",
              }}
            >
              <Row style={{ display: "inline-flex" }}>
                {jogos.map((item, index) => (
                  <Col
                    key={index}
                    style={{ display: "inline-block", marginRight: "1rem" }}
                  >
                    <Card style={cardStyle}>
                      <Card.Img variant="cover" src={item.capa} />
                      <Card.Body>
                        <Card.Title style={cardTitleStyle}>
                          {item.nome}
                        </Card.Title>
                        <Button style={buttonDet}>
                          <a
                            href={`/${
                              getItemCategory(item.id)
                            }/${item.id}`}
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            Detalhes
                          </a>
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </div>

      <div>
        <h1 style={sectionHeaderStyle}>Animes</h1>
        <Row md={1}>
          <Col>
            <div
              style={{
                overflowX: "auto",
                whiteSpace: "nowrap",
                padding: "1rem 0",
              }}
            >
              <Row style={{ display: "inline-flex" }}>
                {animes.map((item, index) => (
                  <Col
                    key={index}
                    style={{ display: "inline-block", marginRight: "1rem" }}
                  >
                    <Card style={cardStyle}>
                      <Card.Img variant="cover" src={item.capa} />
                      <Card.Body>
                        <Card.Title style={cardTitleStyle}>
                          {item.nome}
                        </Card.Title>
                        <Button style={buttonDet}>
                          <a
                            href={`/${
                              getItemCategory(item.id)
                            }/${item.id}`}
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            Detalhes
                          </a>
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </div>

      <div>
        <h1 style={sectionHeaderStyle}>HQs</h1>
        <Row md={1}>
          <Col>
            <div
              style={{
                overflowX: "auto",
                whiteSpace: "nowrap",
                padding: "1rem 0",
              }}
            >
              <Row style={{ display: "inline-flex" }}>
                {hqs.map((item, index) => (
                  <Col
                    key={index}
                    style={{ display: "inline-block", marginRight: "1rem" }}
                  >
                    <Card style={cardStyle}>
                      <Card.Img variant="cover" src={item.capa} />
                      <Card.Body>
                        <Card.Title style={cardTitleStyle}>
                          {item.nome}
                        </Card.Title>
                        <Button style={buttonDet}>
                          <a
                            href={`/${
                              getItemCategory(item.id)
                            }/${item.id}`}
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            Detalhes
                          </a>
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </div>

      <div>
        <h1 style={sectionHeaderStyle}>Favoritos do Usuário</h1>
        <Row md={1}>
          <Col>
            <div
              style={{
                overflowX: "auto",
                whiteSpace: "nowrap",
                padding: "1rem 0",
              }}
            >
              <Row style={{ display: "inline-flex" }}>
                {favoritos.map((item, index) => (
                  <Col
                    key={index}
                    style={{ display: "inline-block", marginRight: "1rem" }}
                  >
                    <Card style={cardStyle}>
                      <Card.Img variant="cover" src={item.capa} />
                      <Card.Body>
                        <Card.Title style={cardTitleStyle}>
                          {item.nome}
                        </Card.Title>
                        <Button style={buttonDet}>
                          <a
                            href={`/${
                              getItemCategory(item.id)
                            }/${item.id}`}
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            Detalhes
                          </a>
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </Pagina>
  );
}