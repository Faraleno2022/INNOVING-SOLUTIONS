/* ===========================================================
   INNOVING SOLUTIONS – Générateur des pages de services
   Usage : node generate.js
   Lit js/data.js et crée services/<slug>.html pour chaque service.
   =========================================================== */
const fs = require("fs");
const path = require("path");

const SERVICES = require("./js/data.js");
const OUT_DIR = path.join(__dirname, "services");
const DOMAIN = "https://innovingsolutions.com";

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

/* --- Composants HTML communs (chemins relatifs à /services/) --- */
const navbar = `
  <nav id="mainNav" class="navbar navbar-expand-lg navbar-dark fixed-top scrolled">
    <div class="container">
      <a class="navbar-brand d-flex align-items-center" href="../index.html">
        <span class="brand-logo"><i class="bi bi-hexagon-fill"></i></span>
        <span class="brand-text">INNOVING<span class="brand-accent"> SOLUTIONS</span></span>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navContent" aria-controls="navContent" aria-expanded="false" aria-label="Menu">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item"><a class="nav-link" href="../index.html#accueil">Accueil</a></li>
          <li class="nav-item"><a class="nav-link" href="../index.html#apropos">À propos</a></li>
          <li class="nav-item"><a class="nav-link" href="../index.html#services">Services</a></li>
          <li class="nav-item"><a class="nav-link" href="../index.html#pourquoi">Pourquoi nous</a></li>
          <li class="nav-item"><a class="nav-link btn-contact" href="../index.html#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>`;

const footer = `
  <footer class="footer">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-4">
          <a class="navbar-brand d-flex align-items-center mb-3" href="../index.html">
            <span class="brand-logo"><i class="bi bi-hexagon-fill"></i></span>
            <span class="brand-text">INNOVING<span class="brand-accent"> SOLUTIONS</span></span>
          </a>
          <p class="footer-tagline">Construire | Connecter | Sécuriser</p>
          <p class="footer-text">Des solutions innovantes pour les infrastructures, les bâtiments intelligents, les télécommunications et la sécurité de demain.</p>
        </div>
        <div class="col-6 col-lg-4">
          <h4 class="footer-heading">Nos services</h4>
          <ul class="footer-links">
            ${SERVICES.map(s => `<li><a href="${s.slug}.html">${shorten(s.titre)}</a></li>`).join("\n            ")}
          </ul>
        </div>
        <div class="col-6 col-lg-4">
          <h4 class="footer-heading">Navigation</h4>
          <ul class="footer-links">
            <li><a href="../index.html#accueil">Accueil</a></li>
            <li><a href="../index.html#apropos">À propos</a></li>
            <li><a href="../index.html#services">Services</a></li>
            <li><a href="../index.html#pourquoi">Pourquoi nous</a></li>
            <li><a href="../index.html#contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <hr class="footer-divider">
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} INNOVING SOLUTIONS – SARLU. Tous droits réservés.</span>
        <span>Construire · Connecter · Sécuriser</span>
      </div>
    </div>
  </footer>`;

function shorten(t) {
  return t.length > 38 ? t.slice(0, 36) + "…" : t;
}

function buildPage(service, index) {
  const prestations = service.prestations
    .map(p => `<li><i class="bi bi-check2-circle"></i><span>${p}</span></li>`)
    .join("\n          ");

  const avantages = service.avantages
    .map(a => `<li><i class="bi bi-check-circle-fill"></i><span>${a}</span></li>`)
    .join("\n          ");

  // 3 autres services suggérés
  const related = SERVICES
    .filter((_, i) => i !== index)
    .slice(0, 3)
    .map(s => `
        <div class="col-md-4" data-reveal>
          <a class="related-card" href="${s.slug}.html">
            <i class="bi ${s.icon}"></i>
            <span>${s.titre}</span>
          </a>
        </div>`).join("");

  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="${service.desc.replace(/"/g, "&quot;")}">
  <title>${service.titre} – INNOVING SOLUTIONS</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../css/style.css">
</head>
<body>
${navbar}

  <!-- HERO DU SERVICE -->
  <header class="service-hero">
    <div class="container">
      <div class="breadcrumb-bar">
        <a href="../index.html">Accueil</a> <span>/</span>
        <a href="../index.html#services">Services</a> <span>/</span>
        <span>${service.titre}</span>
      </div>
      <div class="s-icon"><i class="bi ${service.icon}"></i></div>
      <h1>${service.titre}</h1>
      <p>${service.desc}</p>
    </div>
  </header>

  <!-- DÉTAIL -->
  <section class="section">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-7" data-reveal>
          <div class="detail-card">
            <h2><i class="bi bi-list-check me-2"></i>Nos prestations</h2>
            <ul class="detail-presta">
          ${prestations}
            </ul>
          </div>
        </div>
        <div class="col-lg-5" data-reveal>
          <div class="detail-card">
            <h2><i class="bi bi-stars me-2"></i>Avantages</h2>
            <ul class="detail-adv">
          ${avantages}
            </ul>
            <a href="../index.html#contact" class="btn btn-primary w-100 mt-4">
              <i class="bi bi-send-fill me-2"></i>Demander un devis
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta-band">
    <div class="container text-center" data-reveal>
      <h2>Intéressé par ce service ?</h2>
      <p>Nos experts étudient votre besoin et vous proposent une solution sur mesure.</p>
      <a href="../index.html#contact" class="btn btn-light btn-lg">Nous contacter</a>
    </div>
  </section>

  <!-- AUTRES SERVICES -->
  <section class="section section-alt">
    <div class="container">
      <div class="text-center mb-5" data-reveal>
        <span class="section-eyebrow">À découvrir aussi</span>
        <h2 class="section-title">Nos autres services</h2>
      </div>
      <div class="row g-3 justify-content-center">${related}
      </div>
      <div class="text-center mt-5" data-reveal>
        <a href="../index.html#services" class="btn btn-primary">
          <i class="bi bi-grid-3x3-gap me-2"></i>Voir tous les services
        </a>
      </div>
    </div>
  </section>

${footer}

  <button id="backToTop" class="back-to-top" aria-label="Retour en haut"><i class="bi bi-arrow-up"></i></button>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <script>
    // Apparition au scroll + bouton retour haut (autonome)
    document.addEventListener("DOMContentLoaded", () => {
      const els = document.querySelectorAll("[data-reveal]");
      if ("IntersectionObserver" in window) {
        const obs = new IntersectionObserver((entries) => {
          entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("revealed"); obs.unobserve(e.target); } });
        }, { threshold: 0.12 });
        els.forEach(el => obs.observe(el));
      } else { els.forEach(el => el.classList.add("revealed")); }

      const btn = document.getElementById("backToTop");
      window.addEventListener("scroll", () => btn.classList.toggle("show", window.scrollY > 400));
      btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

      const collapseEl = document.getElementById("navContent");
      document.querySelectorAll("#navContent .nav-link").forEach(link => {
        link.addEventListener("click", () => {
          const inst = bootstrap.Collapse.getInstance(collapseEl);
          if (inst && window.innerWidth < 992) inst.hide();
        });
      });
    });
  </script>
</body>
</html>`;
}

/* --- Génération --- */
let count = 0;
SERVICES.forEach((service, index) => {
  const file = path.join(OUT_DIR, `${service.slug}.html`);
  fs.writeFileSync(file, buildPage(service, index), "utf8");
  count++;
  console.log(`✓ services/${service.slug}.html`);
});
console.log(`\n${count} pages de services générées avec succès.`);

/* --- sitemap.xml --- */
const today = new Date().toISOString().slice(0, 10);
const urls = [
  { loc: `${DOMAIN}/`, priority: "1.0" },
  ...SERVICES.map(s => ({ loc: `${DOMAIN}/services/${s.slug}.html`, priority: "0.8" }))
];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(__dirname, "sitemap.xml"), sitemap, "utf8");
console.log("✓ sitemap.xml");

/* --- robots.txt --- */
const robots = `User-agent: *
Allow: /

Sitemap: ${DOMAIN}/sitemap.xml
`;
fs.writeFileSync(path.join(__dirname, "robots.txt"), robots, "utf8");
console.log("✓ robots.txt");
