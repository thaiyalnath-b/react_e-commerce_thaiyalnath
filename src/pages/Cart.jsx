import React from 'react'
import { useOutletContext } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useCurrency } from "../context/CurrencyContext";
import "./Cart.css"


const img_server_path = '/images/ProductCards/'

function Cart() {

  const { cart, updateQuantity, removeFromCart, clearCart } = useOutletContext();
  const { convertPrice, getSymbol, loading } = useCurrency();

  const increaseQty = (id) => {
    updateQuantity(id, +1);
  }

  const decreaseQty = (id) => {
    updateQuantity(id, -1);
  }

  const totalConverted = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
  const totalToShow = convertPrice(totalConverted);

  const buyProduct = () => {
    alert("Purchased Successfylly");
    clearCart();
  };

  if(loading) {
    return (
      <h2 className='text-center my-5'>Converting Prices...</h2>
    )
  }

  return (
    <div className='my-5'>
      {cart.length === 0 ? (
        <div className='text-center emp'>
          <p>Your Cart is Empty</p>
          <Link to="/" className="btn btcl">Add Item</Link>
        </div>

      ) : (
        <div className='d-flex flex-column'>
          <h1 className='text-center py-5 tit'>Your Cart</h1>
          <ul className='d-flex flex-column list-unstyled cot'>
            {cart.map((item, index) => {
              const convertedPrice = convertPrice(item.price)
              return (
                <li key={index} className='d-flex justify-content-center mb-3 li'>
                  <img src={`${img_server_path}${item.img_src}`} alt={item.title} className="img-fluid rounded shadow-sm" width="300px" />
                  <div className='p-3 '>
                    <h2>{item.title}</h2>
                    <p className="text-muted">{item.description || "A great product you'll love."}</p>
                    <br />
                    <p>Price: <b>{getSymbol()} {convertedPrice}</b></p>
                    <div className='d-flex align-items-center qty'>
                      <button onClick={() => decreaseQty(item.id)} className='btn'>-</button>
                      <span className='mx-2'>{item.quantity}</span>
                      <button onClick={() => increaseQty(item.id)} className='btn'>+</button>
                    </div>
                    <button onClick={()=> removeFromCart(item.id)} className='btn btn-danger mt-3'>Remove</button>
                  </div>
                </li>
              )
            })}
          </ul>
          <h3 className='text-center my-4'>
            Total: <b>{getSymbol()} {totalToShow}</b>
          </h3>
          <div className='text-center'>
            <Link to="/" className="btn btn-primary more me-3">Add More</Link>
            <button className="btn btn-success more" onClick={buyProduct}>Buy</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart