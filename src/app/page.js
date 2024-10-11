"use client";

import { Card, Col, Container, Row } from "react-bootstrap";
import Pagina from "./components/Pagina";

export default function Page() {
  return (
    <Pagina titulo="Home">
      <div>
        <h1>Mais Recentes</h1>
        <Row md={1}>
          <Col>
            {/* Container para permitir scroll horizontal */}
            <div style={{ overflowX: "auto", whiteSpace: "nowrap", padding: "1rem 0" }}>
              <Card style={{ width: "18rem", display: "inline-block", marginRight: "1rem" }}>
                <Card.Img
                  variant="cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7KHfGTX5y4tFHQ2lvPhmxaDXa4bloh-S8IQ&s"
                />
                <Card.Body>
                  <Card.Title>Card Title 1</Card.Title>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem", display: "inline-block", marginRight: "1rem" }}>
                <Card.Img
                  variant="cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7KHfGTX5y4tFHQ2lvPhmxaDXa4bloh-S8IQ&s"
                />
                <Card.Body>
                  <Card.Title>Card Title 2</Card.Title>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem", display: "inline-block", marginRight: "1rem" }}>
                <Card.Img
                  variant="cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7KHfGTX5y4tFHQ2lvPhmxaDXa4bloh-S8IQ&s"
                />
                <Card.Body>
                  <Card.Title>Card Title 3</Card.Title>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem", display: "inline-block", marginRight: "1rem" }}>
                <Card.Img
                  variant="cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7KHfGTX5y4tFHQ2lvPhmxaDXa4bloh-S8IQ&s"
                />
                <Card.Body>
                  <Card.Title>Card Title 3</Card.Title>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem", display: "inline-block", marginRight: "1rem" }}>
                <Card.Img
                  variant="cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7KHfGTX5y4tFHQ2lvPhmxaDXa4bloh-S8IQ&s"
                />
                <Card.Body>
                  <Card.Title>Card Title 3</Card.Title>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem", display: "inline-block", marginRight: "1rem" }}>
                <Card.Img
                  variant="cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7KHfGTX5y4tFHQ2lvPhmxaDXa4bloh-S8IQ&s"
                />
                <Card.Body>
                  <Card.Title>Card Title 3</Card.Title>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem", display: "inline-block", marginRight: "1rem" }}>
                <Card.Img
                  variant="cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7KHfGTX5y4tFHQ2lvPhmxaDXa4bloh-S8IQ&s"
                />
                <Card.Body>
                  <Card.Title>Card Title 3</Card.Title>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem", display: "inline-block", marginRight: "1rem" }}>
                <Card.Img
                  variant="cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7KHfGTX5y4tFHQ2lvPhmxaDXa4bloh-S8IQ&s"
                />
                <Card.Body>
                  <Card.Title>Card Title 3</Card.Title>
                </Card.Body>
              </Card>
              {/* Adicione mais cards aqui conforme necessário */}
            </div>
          </Col>
        </Row>
      </div>
    </Pagina>
  );
}