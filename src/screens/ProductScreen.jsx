import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { Col, Row, Image, ListGroup, Button, Card } from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'

const ProductScreen = (props) => {
  const params = useParams()

  const [product, setProduct] = useState([])
  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/product/${params.id}`)
      setProduct(data)
    }
    fetchProduct()
  }, [params])
  return (
    <>
      <Link to="/" className="btn btn-dark my-3">
        Go Back
      </Link>

      <Row>
        <Col md={6}>
          <Image src={product.image} fluid />
        </Col>
        <Col md={3}>
          <ListGroup>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product?.rating} text={`${product.numReviews} reviews`} />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>{product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup.Item>
              <Row>
                <Col>Price:</Col>
                <Col>${product.price}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Status:</Col>
                <Col>{product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                className="mx-auto block"
                style={{ width: '100%' }}
                type="button"
                disabled={product.countInStock === 0}
              >
                Add to Cart
              </Button>
            </ListGroup.Item>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen
