import React, { useState } from "react";

export default function Auth() {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [loading, setLoading] = useState(false);

    const toggleMode = () => {
        setIsLogin(!isLogin);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const url = isLogin
                ? "http://127.0.0.1:8000/api/login/"
                : "http://127.0.0.1:8000/api/register/";

            const body = isLogin
                ? { email: formData.email, password: formData.password }
                : {
                    full_name: formData.fullName,
                    email: formData.email,
                    password: formData.password,
                    confirm_password: formData.confirmPassword
                };

            const res = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            const data = await res.json();

            if (res.ok) {
                if (isLogin) {
                    localStorage.setItem("token", data.token); // Sauvegarde du token
                    alert("Connexion réussie ✅");
                } else {
                    alert("Inscription réussie ✅, vous pouvez vous connecter !");
                    setIsLogin(true);
                }
            } else {
                alert(data.error || "Une erreur est survenue ❌");
            }
        } catch (err) {
            alert("Erreur réseau ❌");
        }

        setLoading(false);
    };

    return (
        <div style={containerStyle}>
            <div style={cardStyle}>
                <h2 style={{ marginBottom: "20px", color: "#c8102e" }}>
                    {isLogin ? "Connexion" : "Inscription"}
                </h2>

                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {!isLogin && (
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Nom complet"
                            value={formData.fullName}
                            onChange={handleChange}
                            style={inputStyle}
                            required
                        />
                    )}
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        style={inputStyle}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Mot de passe"
                        value={formData.password}
                        onChange={handleChange}
                        style={inputStyle}
                        required
                    />
                    {!isLogin && (
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirmer le mot de passe"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            style={inputStyle}
                            required
                        />
                    )}
                    <button style={isLogin ? loginBtnStyle : registerBtnStyle} disabled={loading}>
                        {loading ? "Chargement..." : isLogin ? "Se connecter" : "S'inscrire"}
                    </button>
                </form>

                <p style={{ marginTop: "15px", fontSize: "14px" }}>
                    {isLogin ? "Pas encore de compte ?" : "Déjà inscrit ?"}{" "}
                    <span onClick={toggleMode} style={{ color: "#007bff", cursor: "pointer" }}>
                        {isLogin ? "Créer un compte" : "Se connecter"}
                    </span>
                </p>
            </div>
        </div>
    );
}

const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "80vh",
    background: "#f8f8f8"
};

const cardStyle = {
    background: "white",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "350px",
    textAlign: "center"
};

const inputStyle = {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "14px"
};

const loginBtnStyle = {
    background: "#c8102e",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    cursor: "pointer"
};

const registerBtnStyle = {
    background: "#28a745",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    cursor: "pointer"
};
