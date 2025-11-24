import React from "react";
import { useLocation, Link, useParams, Navigate, useOutletContext, useNavigate } from "react-router-dom";
import { useCurrency } from "../context/CurrencyContext";
import "./ProductDetails.css"



const img_server_path = '/images/ProductCards/'

const ProductDetails = () => {
    const { state } = useLocation();
    const { id } = useParams();
    const { convertPrice, getSymbol, loading } = useCurrency();

    const {addToCart} = useOutletContext();
    const navigate = useNavigate();

    // Try to read from state (from Home)
    const product = state?.product;

    // Handle direct access (no state)
    if (!product) {
        return (
            <div className="container my-5 text-center">
                <h3>Product not found</h3>
                <p className="text-muted">Try visiting this page from the home screen.</p>
                <Link to="/" className="btn btn-primary mt-3"> Back to Home </Link>
            </div>
        );
    }

    const convertedPrice = convertPrice(product.price);
    document.title = `${product.title}`;

    const handleAddToCart =(qty=1) => {
        addToCart(product, qty);
        navigate("/cart");
    }
    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6 text-center">
                    <img src={`${img_server_path}${product.img_src}`} alt={product.title} className="img-fluid rounded shadow-sm" />
                </div>

                <div className="col-md-6">
                    <h2>{product.title}</h2>
                    <p className="text-muted">{product.description || "A great product you'll love."}</p>

                    {loading ? (
                        <p>Loading Currency...</p>
                    ) : (
                        <h4 className="fw-bold">
                            {getSymbol()} {convertedPrice}
                        </h4>
                    )}

                    <p className="text-secondary small">(Base: ${product.price} USD)</p>

                    <button className="btn btcl me-3" onClick={handleAddToCart}>Add to Cart</button>
                    <Link to="/" className="btn btbc">Back</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;