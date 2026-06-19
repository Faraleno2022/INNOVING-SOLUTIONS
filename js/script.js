/* ===========================================================
   INNOVING SOLUTIONS – Script principal (page d'accueil)
   Les données proviennent de js/data.js (window.SERVICES)
   =========================================================== */

/* ---------- Génération des cartes de services ---------- */
function renderServices() {
  const grid = document.getElementById("servicesGrid");
  const footer = document.getElementById("footerServices");
  const select = document.getElementById("sujet");
  const services = window.SERVICES || [];
  if (!grid) return;

  let cards = "";
  let footerLinks = "";
  let options = '<option value="">— Sélectionnez un service —</option>';

  services.forEach((s) => {
    const url = `services/${s.slug}.html`;

    // Aperçu : toutes les prestations restent visibles sur la carte
    const apercu = s.prestations
      .map(p => `<li><i class="bi bi-check2"></i>${p}</li>`)
      .join("");

    cards += `
      <div class="col-md-6 col-lg-4" data-reveal>
        <article class="service-card">
          <div class="service-icon"><i class="bi ${s.icon}"></i></div>
          <h3>${s.titre}</h3>
          <p>${s.desc}</p>
          <ul class="service-presta">${apercu}</ul>
          <a class="service-more" href="${url}">
            Voir plus <i class="bi bi-arrow-right"></i>
          </a>
        </article>
      </div>`;

    footerLinks += `<li><a href="services/${s.slug}.html">${shorten(s.titre)}</a></li>`;
    options += `<option value="${s.titre}">${s.titre}</option>`;
  });

  grid.innerHTML = cards;
  if (footer) footer.innerHTML = footerLinks;
  if (select) select.innerHTML = options;
}

function shorten(t) {
  return t.length > 38 ? t.slice(0, 36) + "…" : t;
}

/* ---------- Initialisation ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderServices();

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  initNavbarScroll();
  initReveal();
  initCounters();
  initBackToTop();
  initContactForm();
  initNavCollapse();
});

/* ---------- Navbar : fond au scroll ---------- */
function initNavbarScroll() {
  const nav = document.getElementById("mainNav");
  if (!nav) return;
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 60);
  onScroll();
  window.addEventListener("scroll", onScroll);
}

/* ---------- Fermeture du menu mobile après clic ---------- */
function initNavCollapse() {
  const collapseEl = document.getElementById("navContent");
  if (!collapseEl) return;
  document.querySelectorAll("#navContent .nav-link").forEach(link => {
    link.addEventListener("click", () => {
      const instance = bootstrap.Collapse.getInstance(collapseEl);
      if (instance && window.innerWidth < 992) instance.hide();
    });
  });
}

/* ---------- Animation d'apparition au scroll ---------- */
function initReveal() {
  const els = document.querySelectorAll("[data-reveal]");
  if (!("IntersectionObserver" in window)) {
    els.forEach(el => el.classList.add("revealed"));
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => obs.observe(el));
}

/* ---------- Compteurs animés ---------- */
function initCounters() {
  const nums = document.querySelectorAll(".stat-num");
  if (!nums.length) return;
  const animate = (el) => {
    const target = +el.dataset.count;
    const suffix = el.dataset.suffix || "";
    const dur = 1500;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { animate(entry.target); obs.unobserve(entry.target); }
    });
  }, { threshold: 0.5 });
  nums.forEach(n => obs.observe(n));
}

/* ---------- Bouton retour en haut ---------- */
function initBackToTop() {
  const btn = document.getElementById("backToTop");
  if (!btn) return;
  window.addEventListener("scroll", () => {
    btn.classList.toggle("show", window.scrollY > 400);
  });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* ---------- Validation du formulaire de contact ---------- */
function initContactForm() {
  const form = document.getElementById("contactForm");
  const alert = document.getElementById("formAlert");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;
    ["nom", "email", "message"].forEach(id => {
      const field = document.getElementById(id);
      const ok = field.value.trim() !== "" &&
        (id !== "email" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value));
      field.classList.toggle("is-invalid", !ok);
      if (!ok) valid = false;
    });

    if (!valid) {
      showAlert(alert, "Veuillez corriger les champs en surbrillance.", "danger");
      return;
    }

    const nom = document.getElementById("nom").value.trim();
    showAlert(alert, `Merci ${nom} ! Votre demande a bien été enregistrée. Nous vous recontacterons rapidement.`, "success");
    form.reset();
  });

  form.querySelectorAll(".form-control").forEach(f => {
    f.addEventListener("input", () => f.classList.remove("is-invalid"));
  });
}

function showAlert(el, msg, type) {
  el.className = `alert alert-${type}`;
  el.textContent = msg;
  el.classList.remove("d-none");
  if (type === "success") {
    setTimeout(() => el.classList.add("d-none"), 8000);
  }
}
