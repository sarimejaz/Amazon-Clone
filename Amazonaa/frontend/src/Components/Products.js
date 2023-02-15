import React from 'react'
import { Row,Col,Card,Button } from 'react-bootstrap';
import '../App.css';
import { useContext } from "react";
import CartContext from "../CartContext";


export const Productss = [
    {
        id:1,
        image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/FK0C2?wid=2000&hei=1536&fmt=jpeg&qlt=95&.v=1496963407334",
        title:"Apple Pencil",
        price:10900,
        rating:4
    },
    {
        id:2,
        image:"https://m.media-amazon.com/images/I/71gD8WdSlaL._SL1500_.jpg",
        title:"MacBook Pro 2020 M1",
        price:122000,
        rating:5
    },
    {
        id:3,
        image:"https://m.media-amazon.com/images/I/61pQniOIAtL._SL1500_.jpg",
        title:"Milton Water Bottle",
        price:799,
        rating:4
    },
    {
        id:4,
        image:"https://cdn1.smartprix.com/rx-iK7TLGhMH-w1200-h1200/boat-rockerz-185-wir.jpg",
        title:"boAt Rockerz 185 Wireless Neckband",
        price:1999,
        rating:4

    },
    {
        id:5,
        image:"https://www.ubuy.co.in/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODF4dVc3aDF0a0wuX0FDX1NMMTUwMF8uanBn.jpg",
        title:"GUND Slumbers Teddy Bear Stuffed Animal Plush, Brown, 17",
        price:5999,
        rating:4

    },
    {
        id:6,
        image:"https://hnsfpau.imgix.net/5/images/detailed/125/B07PJV9DHV_001.jpg?fit=fill&bg=0FFF&w=1500&h=844&auto=format,compress",
        title:"Echo Dot (3rd Gen) – New and improved smart speaker with Alexa (Black)",
        price:2499,
        rating:3

    },
    
]

function Products() {

    const {addToCart} = useContext(CartContext);
    const { items } = useContext(CartContext);

    return (
        <div className='product'>
            <Row xs={1} md={3} className="g-4">
                {Productss.map((product) => (
                    <Col>
                        <Card style={{zIndex:"10",outline:"none",height:"30rem",border:"1px solid black"}}>
                            <Card.Img variant="top" src={product.image} style={{maxHeight:"250px",width:"100%",objectFit:"contain"}}/>
                            <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>
                                <div className='Stars'>
                                {Array(product.rating).fill().map((_)=>{
                                    return (<p>⭐️</p>)
                                })}
                                </div>
                                <h5>Price: ₹{product.price}</h5>
                            </Card.Text>

                            <Button onClick={()=> addToCart(product.id,product.title,product.price,product.image)} variant="outline-dark">Add To Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
        
    )
    
}

export default Products;