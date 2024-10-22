'use client'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'

export default function Pagina(props) {
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Reviwers</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/filmes">Filmes</Nav.Link>
            <Nav.Link href="/animes">Animes</Nav.Link>
            <Nav.Link href="/series">Series</Nav.Link>
            <Nav.Link href="/jogos">Jogos</Nav.Link>
            <Nav.Link href="/hqs">HQs</Nav.Link>
          </Nav>
        </Container>
      </Navbar>



      <Container>
       {props.children}
      </Container>
    </>
  )
}
