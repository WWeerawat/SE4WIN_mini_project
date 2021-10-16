import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";

const Navbar_bootstrap = () => {
  return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">SE4WIN</Navbar.Brand>
        </Container>
      </Navbar>
  );
};

export default Navbar_bootstrap;
