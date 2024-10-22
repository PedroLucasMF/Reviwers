"use client";

import { Card, Col, Row } from "react-bootstrap";
import Pagina from "../components/Pagina";


export default function Page() {
  return (
    <Pagina>
        <div>
        <h1>Mais Recentes</h1>
        <Row md={1}>
          <Col>
            {/* Container para permitir scroll horizontal */}
            <div style={{ overflowX: "auto", whiteSpace: "nowrap", padding: "1rem 0" }}>
              <Card style={{ width: "10rem", marginRight: "1rem" }}>
                <Card.Img
                  variant="cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7KHfGTX5y4tFHQ2lvPhmxaDXa4bloh-S8IQ&s"
                />
                <Card.Body>
                  <Card.Title>Card Title 1</Card.Title>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
        </div>
        <div>
        <h1>Maiores Notas</h1>
        <Row md={1}>
          <Col>
            {/* Container para permitir scroll horizontal */}
            <div style={{ overflowX: "auto", whiteSpace: "nowrap", padding: "1rem 0" }}>
              <Card style={{ width: "10rem", marginRight: "1rem" }}>
                <Card.Img
                  variant="cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7KHfGTX5y4tFHQ2lvPhmxaDXa4bloh-S8IQ&s"
                />
                <Card.Body>
                  <Card.Title>Card Title 1</Card.Title>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
        </div>
        <div>
        <h1>Favoritos do Usuario</h1>
        <Row md={1}>
          <Col>
            {/* Container para permitir scroll horizontal */}
            <div style={{ overflowX: "auto", whiteSpace: "nowrap", padding: "1rem 0" }}>
              <Card style={{ width: "10rem", marginRight: "1rem" }}>
                <Card.Img
                  variant="cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7KHfGTX5y4tFHQ2lvPhmxaDXa4bloh-S8IQ&s"
                />
                <Card.Body>
                  <Card.Title>Card Title 1</Card.Title>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
        </div>
    </Pagina>
  );
}