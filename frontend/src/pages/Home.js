import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      {/* Bannière */}
      <div className="banner">
        <div className="banner-content">
          <h1>Bienvenue chez <span>Kam's Chicken</span> 🍗</h1>
          <p>Du croustillant, du goût, et un service rapide !</p>
          <a href="/menu" className="btn-primary">Voir le Menu</a>
        </div>
      </div>

      {/* Section produits populaires */}
      <section className="popular">
        <h2>Nos Best-sellers</h2>
        <div className="popular-grid">
          <div className="popular-card">
            <img src="https://media.istockphoto.com/id/576730586/fr/photo/seau-rouge-de-poulet-frit-sur-fond-blanc-2.webp?a=1&b=1&s=612x612&w=0&k=20&c=aAmyYtoKDo6eUStNSutEF_Gk0tD-pmzLsD3_oaQdYts=" />
            <h3>Bucket Poulet</h3>
            <p></p>
          </div>
          <div className="popular-card">
            <img src="https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJpZWQlMjBjaGlja2VufGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000" />
            <h3>Poulet braisé</h3>
            <p>Croustillant, doré, irrésistible.</p>
          </div>
          <div className="popular-card">
            <img src="https://images.unsplash.com/photo-1588923930957-81c81fd6262b?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJpZWQlMjBjaGlja2VufGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000" alt="Tacos" />
            <h3>Poulet fried</h3>
            <p>Farci et gourmand, comme on aime.</p>
          </div>
          <div className="popular-card">
            <img src="https://images.unsplash.com/photo-1564436872-f6d81182df12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJlcGFzfGVufDB8fDB8fHww" />
            <h3>Poulet grillé</h3>
            <p>Croustillant, doré, irrésistible.</p>
          </div>
          <div className="popular-card">
            <img src="https://media.istockphoto.com/id/2170408203/fr/photo/pizza-with-prosciutto-cotto-ham-and-mushrooms.webp?a=1&b=1&s=612x612&w=0&k=20&c=w81UVGemoW3pWjBym9fFterPIjsGngP7AyThp_sHLeE=" />
            <h3>Pizza </h3>
            <p>Farci et gourmand, comme on aime.</p>
          </div>
          <div className="popular-card">
            <img src="https://images.unsplash.com/photo-1591989330748-777649e84466?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2F1Y2lzc2V8ZW58MHx8MHx8fDA%3D" />
            <h3>Saucisse </h3>
            <p></p>
          </div>
          <div className="popular-card">
            <img src="https://images.unsplash.com/photo-1508615263227-c5d58c1e5821?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8R3JpbGxhZGV8ZW58MHx8MHx8fDA%3D" />
            <h3>Viande</h3>
            <p></p>
          </div>
          <div className="popular-card">
            <img src="https://media.istockphoto.com/id/157312072/fr/photo/panier-de-frites.webp?a=1&b=1&s=612x612&w=0&k=20&c=cn4O9wpC5Jl8hkXhgLaJw-ewkcb7o7m9HRtsTIx2Er4=" />
            <h3>Frites</h3>
            <p></p>
          </div>
          <div className="popular-card">
            <img src="https://plus.unsplash.com/premium_photo-1695658519363-c6a0c2f0a1e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBvaXNzb24lMjBncmlsbCVDMyVBOXxlbnwwfHwwfHx8MA%3D%3D" />
            <h3>Poisson grillé</h3>
            <p></p>
          </div>
          <div className="popular-card">
            <img src="https://plus.unsplash.com/premium_photo-1668143358351-b20146dbcc02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3VzaGl8ZW58MHx8MHx8fDA%3D" />
            <h3>Sushi</h3>
            <p></p>
          </div>
          <div className="popular-card">
            <img src="https://media.istockphoto.com/id/180698997/fr/photo/b%C5%93uf-souvlaki-enveloppement.webp?a=1&b=1&s=612x612&w=0&k=20&c=kmE2Wps2D5mMaOqwbQ-DSMiCWQSOpUNe3b8NSR5vL90=" />
            <h3>Chawarma</h3>
            <p></p>
          </div>
          <div className="popular-card">
            <img src="https://media.istockphoto.com/id/917919440/fr/photo/cuisine-japonaise.webp?a=1&b=1&s=612x612&w=0&k=20&c=n5LxLyybJnToWKnJUsZ29OcXJUvxbCdTc-nWEJ-bVAY=" />
            <h3>Sashimi</h3>
            <p></p>
          </div>
          <div className="popular-card">
            <img src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800&q=80" />
            <h3>Burger </h3>
            <p></p>
          </div>
          <div className="popular-card">
            <img src="https://media.istockphoto.com/id/614313140/fr/photo/tacos-de-b%C5%93uf-doux-avec-des-frites.webp?a=1&b=1&s=612x612&w=0&k=20&c=5rNVWhRYFs__mHCod8ER7o4JRcRyKztGE3XOCx3LrQ8=" />
            <h3>Tacos </h3>
            <p></p>
          </div>
          <div className="popular-card">
            <img src="https://images.unsplash.com/photo-1554433607-66b5efe9d304?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNhbmR3aWNofGVufDB8fDB8fHww" />
            <h3>Sandwich </h3>
            <p></p>
          </div>
          <div className="popular-card">
            <img src="https://plus.unsplash.com/premium_photo-1671559021019-0268c54511b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFzYWduZXxlbnwwfHwwfHx8MA%3D%3D" />
            <h3>Lasagne</h3>
            <p></p>
          </div>
          <div className="popular-card">
            <img src="https://media.istockphoto.com/id/1264282318/fr/photo/plat-de-couscous-sur-une-table-de-famille.webp?a=1&b=1&s=612x612&w=0&k=20&c=uQPboimspvx5tQr6Llx5eJ5fLTeNL_bcgraMvqb4-9w=" />
            <h3>Plat Couscous</h3>
            <p></p>
          </div>
          <div className="popular-card">
            <img src="https://plus.unsplash.com/premium_photo-1664472619078-9db415ebef44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cCVDMyVBMnRlc3xlbnwwfHwwfHx8MA%3D%3D" />
            <h3>Pâtes</h3>
            <p></p>
          </div>
          <div className="popular-card">
            <img src="https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNhbGFkZXxlbnwwfHwwfHx8MA%3D%3D" />
            <h3>Salade</h3>
            <p></p>
          </div>
        </div>
      </section>
    </div>
  );
}
