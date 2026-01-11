import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Colonne Infos */}
                <div className="footer-section">
                    <h4>Kam's Chicken 🍗</h4>
                    <p>📍 123 Avenue du Poulet, Lafiabougou</p>
                    <p>📞 +212 6 93 04 13 84</p>
                </div>

                {/* Colonne Liens rapides */}
                <div className="footer-section">
                    <h4>Liens rapides</h4>
                    <ul>
                        <li><Link to="/">Accueil</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/panier">Panier</Link></li>
                        <li><Link to="/login">Se connecter</Link></li>
                    </ul>
                </div>

                {/* Colonne Réseaux sociaux */}
                <div className="footer-section">
                    <h4>Suivez-nous</h4>
                    <div className="social-icons">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaTwitter /></a>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                ©️ 2025 Kam's Chicken — Tous droits réservés.
            </div>
        </footer>
    );
}
