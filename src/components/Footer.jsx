import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center my-3">Copyright &copy; MERN Shop</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
