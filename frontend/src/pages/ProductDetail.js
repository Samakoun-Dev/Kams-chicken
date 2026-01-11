import React, { useState } from "react";
import { useParams } from "react-router-dom";
import productsData from "../data";

export default function ProductDetail() {
    const { productId } = useParams();
    const product = Object.values(productsData).flat().find(p => p.id === parseInt(productId));
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        const updatedCart = [...savedCart, product];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        setCart(updatedCart);
        window.dispatchEvent(new Event("cartUpdated"));
        alert(`${product.name} ajouté au panier ✅`);
    };

    if (!product) return <p>Produit introuvable.</p>;

    return (
        <div style={{ padding: "20px" }}>
            <img
                src={product.image}
                alt={product.name}
                style={{ width: "100%", maxWidth: "400px", borderRadius: "10px" }}
            />
            <h2>{product.name}</h2>
            <p>{product.price.toFixed(2)} MAD</p>
            <p>{product.description || "Aucune description disponible."}</p>

            <button
                onClick={() => addToCart(product)} // ✅ on passe bien le produit
                style={{
                    backgroundColor: "#28a745",
                    color: "white",
                    border: "none",
                    padding: "10px 15px",
                    borderRadius: "5px",
                    cursor: "pointer"
                }}
            >
                Ajouter au panier
            </button>
        </div>
    );
}
