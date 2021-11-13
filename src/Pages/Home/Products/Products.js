
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Products = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('https://quiet-retreat-22689.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div className="py-5">
            <Container>
                <div className="w-100 mx-auto">
                    <h1 className="text-center fw-bold"> FEATURED PRODUCTS</h1>
                <h3 className="text-center">Top performing parts developed by specialists in collaboration with the KTM Motorsport department. Tried and tested by the KTM factory riders in countless world championships. With these KTM parts your engine is on a technically very high level and suitable for factory performances on the circuit.</h3>

                </div>
                {
                    products.length ? <Row xs={1} md={3} className="g-4">
                    {
                        products.slice(0,6).map(product => <Col key={product?._id}>
                            <Card className="shadow">
                                <Card.Img style={{height:'250px'}} variant="top" src={product?.img}/>
                                <div className="p-3">
                                <div className="d-flex align-items-center justify-content-between">
                                    <Card.Title>{product?.name}</Card.Title>
                                    
                                </div>
                                <p className="p-0 m-0">{product?.details}</p>
                                <div>
                                    <h2>{product?.price}</h2>
                                    <Link to={`/purchase/${product._id}`}><Button >Order now</Button></Link>
                                </div>
                                </div>
                            </Card>
                            </Col>)
                    }
                </Row> : <h2>Loading...</h2>
                }
            </Container>
        </div>
    );
};

export default Products;