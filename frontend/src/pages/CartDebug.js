import React, { useEffect, useState } from "react";

export default function CartDebug() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        console.log("📦 Contenu du localStorage :", savedCart);
        setCart(savedCart);
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h2>🛠️ Debug Panier</h2>
            {cart.length === 0 ? (
                <p>⚠️ Aucun produit trouvé dans le panier</p>
            ) : (
                <ul>
                    {cart.map((item, index) => (
                        <li key={index}>
                            {item.name} — {item.price} €
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
