import React ,{useState,useContext,createContext} from "react";


const CartContext = createContext();



export function CartProvider({children}){

    const [items, setitems] = useState([])


    const addToCart = (id,name,price,image) => {
        setitems((prevState) => [...prevState,{id,name,price,image}])
    };

    return(
        <CartContext.Provider value={{items, addToCart}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;