import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaDrumstickBite, FaShoppingCart } from "react-icons/fa";
import "./Header.css";

export default function Header() {
    const [cartCount, setCartCount] = useState(0);
    const [animate, setAnimate] = useState(false);

    const updateCartCount = () => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartCount(cart.length);
        setAnimate(true);
        setTimeout(() => setAnimate(false), 300);
    };

    useEffect(() => {
        updateCartCount();
        window.addEventListener("cartUpdated", updateCartCount);
        return () => window.removeEventListener("cartUpdated", updateCartCount);
    }, []);

    return (
        <header className="header">
            <div className="logo">
                🍗 <span>Kam's Chicken</span>
            </div>
            <nav>
                <ul className="nav-links">
                    <li>
                        <Link to="/"><FaHome /> Accueil</Link>
                    </li>
                    <li>
                        <Link to="/menu"><FaDrumstickBite /> Menu</Link>
                    </li>
                    <li className="cart-link">
                        <Link to="/panier">
                            <FaShoppingCart /> Panier
                            {cartCount > 0 && (
                                <span className={`cart-count ${animate ? "bump" : ""}`}>
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                    </li>
                    <li>
                        <Link to="/login" className="login-btn">🔑 Se connecter</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
