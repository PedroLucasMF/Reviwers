'use client'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'

export default function Pagina(props) {
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Reviwers</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="/fundamentos">Filmes</Nav.Link>
            <Nav.Link href="/objetos">Animes</Nav.Link>
            <Nav.Link href="/nomes">Series</Nav.Link>
            <Nav.Link href="/numeros">Jogos</Nav.Link>
            <Nav.Link href="/numeros">HQs</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="bg-secondary text-white text-center p-3">
        <h1>{props.titulo}</h1>
      </div>

      <Container>
       {props.children}
      </Container>
    </>
  )
}
