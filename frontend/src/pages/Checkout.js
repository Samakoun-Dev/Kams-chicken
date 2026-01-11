import React, { useState, useEffect } from "react";
import orangeMoneyLogo from "../assets/payments/orangemoney.png";
import paypalLogo from "../assets/payments/paypal.png";
import ubaLogo from "../assets/payments/uba.png";

export default function Checkout() {
    const [cart, setCart] = useState([]);
    const [form, setForm] = useState({ name: "", address: "", phone: "" });
    const [paymentMethod, setPaymentMethod] = useState("");
    const [extraFields, setExtraFields] = useState({}); // pour stocker les infos spécifiques

    // Charger le panier depuis localStorage
    const loadCart = () => {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(savedCart);
    };

    useEffect(() => {
        loadCart();
        window.addEventListener("cartUpdated", loadCart);
        return () => window.removeEventListener("cartUpdated", loadCart);
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleExtraChange = (e) => {
        setExtraFields({ ...extraFields, [e.target.name]: e.target.value });
    };

    const handlePaymentChange = (e) => {
        setPaymentMethod(e.target.value);
        setExtraFields({}); // reset des champs supplémentaires quand on change de paiement
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name || !form.address || !form.phone || !paymentMethod) {
            alert("Veuillez remplir tous les champs et choisir un mode de paiement !");
            return;
        }

        // Ici on pourrait envoyer toutes les infos au backend
        console.log("Commande:", { ...form, paymentMethod, extraFields, cart });

        alert(`Merci ${form.name} ! Votre commande est confirmée avec paiement via ${paymentMethod} 🍗`);
        localStorage.removeItem("cart");
        setCart([]);
        window.dispatchEvent(new Event("cartUpdated"));
    };

    const removeItem = (index) => {
        const updatedCart = cart.filter((_, i) => i !== index);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        window.dispatchEvent(new Event("cartUpdated"));
    };

    const total = cart.reduce((acc, item) => acc + item.price, 0);

    return (
        <div style={{ padding: "20px" }}>
            <h2>Finaliser la commande 🛒</h2>
            {cart.length === 0 ? (
                <p>Votre panier est vide</p>
            ) : (
                <>
                    {/* Tableau horizontal des produits */}
                    <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "20px" }}>
                        <thead>
                            <tr style={{ backgroundColor: "#f8f8f8", textAlign: "left" }}>
                                <th style={{ padding: "10px" }}>Image</th>
                                <th style={{ padding: "10px" }}>Produit</th>
                                <th style={{ padding: "10px" }}>Prix</th>
                                <th style={{ padding: "10px" }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item, index) => (
                                <tr key={index} style={{ borderBottom: "1px solid #ddd" }}>
                                    <td style={{ padding: "10px" }}>
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            style={{ width: "60px", height: "60px", borderRadius: "5px", objectFit: "cover" }}
                                        />
                                    </td>
                                    <td style={{ padding: "10px" }}>{item.name}</td>
                                    <td style={{ padding: "10px" }}>{item.price.toFixed(2)} €</td>
                                    <td style={{ padding: "10px" }}>
                                        <button
                                            onClick={() => removeItem(index)}
                                            style={{
                                                background: "red",
                                                color: "white",
                                                border: "none",
                                                padding: "5px 10px",
                                                borderRadius: "4px",
                                                cursor: "pointer"
                                            }}
                                        >
                                            ❌
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <h3>Total : {total.toFixed(2)} €</h3>

                    {/* Formulaire */}
                    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", maxWidth: "300px" }}>
                        <input name="name" placeholder="Nom" value={form.name} onChange={handleChange} style={{ margin: "5px 0", padding: "8px" }} />
                        <input name="address" placeholder="Adresse" value={form.address} onChange={handleChange} style={{ margin: "5px 0", padding: "8px" }} />
                        <input name="phone" placeholder="Téléphone" value={form.phone} onChange={handleChange} style={{ margin: "5px 0", padding: "8px" }} />

                        <label style={{ marginTop: "10px" }}>Moyen de paiement :</label>
                        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                            <label>
                                <input type="radio" name="payment" value="Orange Money" onChange={handlePaymentChange} />
                                <img src={orangeMoneyLogo} alt="Orange Money" style={{ height: "35px", marginLeft: "8px" }} />
                            </label>
                            <label>
                                <input type="radio" name="payment" value="PayPal" onChange={handlePaymentChange} />
                                <img src={paypalLogo} alt="PayPal" style={{ height: "35px", marginLeft: "8px" }} />
                            </label>
                            <label>
                                <input type="radio" name="payment" value="Carte UBA" onChange={handlePaymentChange} />
                                <img src={ubaLogo} alt="UBA" style={{ height: "35px", marginLeft: "8px" }} />
                            </label>
                            <label>
                                <input type="radio" name="payment" value="Espèces à la livraison" onChange={handlePaymentChange} />
                                <span style={{ marginLeft: "8px" }}>💵 Espèces à la livraison</span>
                            </label>
                        </div>

                        {/* Champs dynamiques selon le paiement */}
                        {paymentMethod === "Orange Money" && (
                            <>
                                <input name="omNumber" placeholder="Numéro Orange Money" onChange={handleExtraChange} style={{ margin: "5px 0", padding: "8px" }} />
                                <input name="omCode" type="password" placeholder="Code secret" onChange={handleExtraChange} style={{ margin: "5px 0", padding: "8px" }} />
                            </>
                        )}

                        {paymentMethod === "PayPal" && (
                            <input name="paypalEmail" placeholder="Email PayPal" onChange={handleExtraChange} style={{ margin: "5px 0", padding: "8px" }} />
                        )}

                        {paymentMethod === "Carte UBA" && (
                            <>
                                <input name="cardNumber" placeholder="Numéro de carte" onChange={handleExtraChange} style={{ margin: "5px 0", padding: "8px" }} />
                                <input name="expiryDate" placeholder="Date d'expiration (MM/AA)" onChange={handleExtraChange} style={{ margin: "5px 0", padding: "8px" }} />
                                <input name="cvv" type="password" placeholder="CVV" onChange={handleExtraChange} style={{ margin: "5px 0", padding: "8px" }} />
                            </>
                        )}

                        <button type="submit" style={{ marginTop: "25px", background: "#28a745", color: "white", padding: "10px 15px", border: "none", borderRadius: "5px" }}>
                            Confirmer la commande
                        </button>
                    </form>
                </>
            )}
        </div>
    );
}
