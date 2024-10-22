"use client";

import { Button, Card, Col, Row } from "react-bootstrap";
import Pagina from "../components/Pagina";
import Link from "next/link";

export default function Page() {
  const filmes = JSON.parse(localStorage.getItem('filmes')) || [];

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
        href="filmes/create" 
        style={buttonStyle} 
        onMouseEnter={(e) => e.target.style.backgroundColor = hoverStyle.backgroundColor}
        onMouseLeave={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
      >
        +
      </Button>
      
      <div>
        <h1>Mais Recentes</h1>
        <Row md={1}>
          <Col>
            {/* Container para permitir scroll horizontal */}
            <div
              style={{
                overflowX: "auto",
                whiteSpace: "nowrap",
                padding: "1rem 0",
              }}
            >
              <Row style={{ display: 'inline-flex' }}>
                {filmes.map((item, index) => (
                  <Col key={index} style={{ display: 'inline-block', marginRight: '1rem' }}>
                    <Link href={`filmes/${item.id}`}>
                      <Card style={{ width: "10rem" }}>
                        <Card.Img
                          variant="cover"
                          src={item.capa}
                        />
                        <Card.Body>
                          <Card.Title style={{ wordWrap: 'break-word', overflowWrap: 'break-word', whiteSpace: 'normal' }}>
                            {item.nome}
                          </Card.Title>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </div>

      <div>
        <h1>Maiores Notas</h1>
        <Row md={1}>
          <Col>
            {/* Container para permitir scroll horizontal */}
            <div
              style={{
                overflowX: "auto",
                whiteSpace: "nowrap",
                padding: "1rem 0",
              }}
            >
              <Row style={{ display: 'inline-flex' }}>
                <Col style={{ display: 'inline-block', marginRight: '1rem' }}>
                  
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>

      <div>
        <h1>Favoritos do Usuário</h1>
        <Row md={1}>
          <Col>
            {/* Container para permitir scroll horizontal */}
            <div
              style={{
                overflowX: "auto",
                whiteSpace: "nowrap",
                padding: "1rem 0",
              }}
            >
              <Row style={{ display: 'inline-flex' }}>
                <Col style={{ display: 'inline-block', marginRight: '1rem' }}>
                  
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </Pagina>
  );
}