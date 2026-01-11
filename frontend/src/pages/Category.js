import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./Category.css";

const allProducts = {
    chicken: [
        { id: 1, name: "Bucket Poulet", price: 10.50, image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800&q=80" },
        { id: 2, name: "Tenders", price: 4.90, image: "https://images.unsplash.com/photo-1617196039897-50fe7d04e8d6?w=800&q=80" }
    ],
    tacos: [
        { id: 3, name: "Tacos Poulet", price: 7.50, image: "https://images.unsplash.com/photo-1601924579533-389c9ff9c350?w=800&q=80" }
    ],
    sushi: [
        { id: 4, name: "Sushi Mix", price: 12.00, image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&q=80" }
    ],
    burger: [
        { id: 5, name: "Burger Poulet", price: 6.50, image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80" }
    ]
};

export default function Category() {
    const { categoryName } = useParams();
    const [cart, setCart] = useState([]);

    const products = allProducts[categoryName] || [];

    const addToCart = (product) => {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        const updatedCart = [...savedCart, product];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        setCart(updatedCart);
        alert(`${product.name} ajouté au panier ✅`);
    };

    return (
        <div className="category-container">
            <h1 className="category-title">{categoryName.toUpperCase()}</h1>
            <div className="category-grid">
                {products.map((item) => (
                    <div key={item.id} className="category-card">
                        <img src={item.image} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p className="price">{item.price.toFixed(2)} €</p>
                        <button onClick={() => addToCart(item)}>Ajouter au panier</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
