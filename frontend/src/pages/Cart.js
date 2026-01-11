import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Cart() {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(savedCart);
    }, []);

    const removeItem = (index) => {
        const updatedCart = cart.filter((_, i) => i !== index);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const total = cart.reduce((acc, item) => acc + item.price, 0);

    const goToCheckout = () => {
        navigate("/checkout");
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Panier 🛒</h2>
            {cart.length === 0 ? (
                <p>Votre panier est vide</p>
            ) : (
                <>
                    <ul>
                        {cart.map((item, index) => (
                            <li key={index}>
                                {item.name} — {item.price.toFixed(2)} €
                                <button onClick={() => removeItem(index)} style={{ marginLeft: "10px" }}>
                                    ❌
                                </button>
                            </li>
                        ))}
                    </ul>
                    <h3>Total : {total.toFixed(2)} €</h3>
                    <button
                        style={{
                            background: "#28a745",
                            color: "white",
                            padding: "10px 15px",
                            border: "none",
                            borderRadius: "5px"
                        }}
                        onClick={goToCheckout}
                    >
                        Passer au paiement 💳
                    </button>
                </>
            )}
        </div>
    );
}
