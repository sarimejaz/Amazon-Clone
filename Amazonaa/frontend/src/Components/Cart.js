import "../App.css";
import { useContext,useState } from "react";
import CartContext from "../CartContext";
import {Productss} from './Products'
import { Card,Button,Row,Col } from "react-bootstrap";





function Cart() {



  let { items } = useContext(CartContext);


  const [cartItems, setcartItems] = useState(items)


  function Removeit(id) {
    //const Cartarr = [];
    //Cartarr.push(id);
   // console.log(Cartarr);
  //  this.setState(prevState => ({data: update(previous.data,items = items.filter(item => item.id!==id))});
    let x = cartItems.filter(item => item.id!==id);
    console.log("x",x);
    // setcartItems(x);
  }



  console.log("items",items)
  return (
    <div>
      {items?.length===0 ?(
        <div>Your Cart is Empty</div>
      ):(

      
    <div style={{width:"100%",justifyContent:"center"}}>
    <Row xs={1} md={3} className="g-4">
      {items.map((item) => {
         
        return <div >
          <Col style={{margin:"auto",width:"80%"}}>
          <Card style={{zIndex:"10",outline:"none",border:"1px solid black"}}>
            <Card.Img variant="top" src={item.image} style={{maxHeight:"250px",width:"100%",objectFit:"contain"}}/>
            <Card.Body>
            <Card.Title>{item?.name}</Card.Title>
            <Card.Text>
                <div className='Stars'>
                {Array(5).fill().map((_)=>{
                    return (<p>⭐️</p>)
                })}
                </div>
                <h5>Price: {item?.price}</h5>
                
            </Card.Text>
                
            <Button variant="outline-dark" onClick={Removeit(item?.id)}>Remove from Cart</Button>
            </Card.Body>
        </Card>
        </Col>
      </div>; 
      
        
      })}
      </Row>
     
    </div>)
    
} 
  
  </div>
  );
  
}

export default Cart;
