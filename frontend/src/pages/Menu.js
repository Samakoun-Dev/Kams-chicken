import React, { useState } from "react";
import productsData from "../data"; // on importe la data avec les images locales
import "./Menu.css";

export default function Menu() {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        const updatedCart = [...savedCart, product];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        console.log("Panier après ajout:", updatedCart);
        window.dispatchEvent(new Event("cartUpdated"));
        alert(`${product.name} ajouté au panier ✅`);
    };

    return (
        <div className="menu-container">
            <h2 className="menu-title">Menu 🍽️</h2>
            {Object.entries(productsData).map(([category, items]) => (
                <div key={category} className="menu-section">
                    <h3 className="category-title">{category}</h3>
                    <div className="menu-grid">
                        {items.map((item) => (
                            <div key={item.id} className="menu-card">
                                <img src={item.image} alt={item.name} className="menu-image" />
                                <h4>{item.name}</h4>
                                <p className="price">{item.price.toFixed(2)} €</p>
                                <button className="add-button" onClick={() => addToCart(item)}>
                                    Ajouter au panier
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
