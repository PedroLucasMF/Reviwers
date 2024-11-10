"use client";

import { Button, Card, Col, Row } from "react-bootstrap";
import Pagina from "../components/Pagina";

export default function Page() {
  const series = JSON.parse(localStorage.getItem("series")) || [];

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
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    transition: "background-color 0.3s, transform 0.2s",
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

  const hoverStyle = {
    backgroundColor: "#899499",
  };

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
    backgroundColor: "#D3D3D3", // Define o background do card para #D3D3D3
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

  console.log(series);

  return (
    <Pagina style={pageStyle}>
      <Button
        href="series/create"
        style={buttonStyle}
        onMouseEnter={(e) =>
          (e.target.style.backgroundColor = hoverStyle.backgroundColor)
        }
        onMouseLeave={(e) =>
          (e.target.style.backgroundColor = buttonStyle.backgroundColor)
        }
      >
        +
      </Button>

      <div>
        <h1 style={sectionHeaderStyle}>Mais Recentes</h1>
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
                        <Card.Title style={cardTitleStyle}>{item.nome}</Card.Title>
                        <Button style={buttonDet}>
                          <a
                            href={`series/${item.id}`}
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