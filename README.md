# INNOVING SOLUTIONS – Site web

Site web statique vitrine pour **INNOVING SOLUTIONS – SARLU**.
*Construire | Connecter | Sécuriser*

## Technologies
- HTML5 / CSS3
- Bootstrap 5 + Bootstrap Icons
- JavaScript (vanilla)
- Google Fonts (Poppins, Inter)

## Structure
```
.
├── index.html          # Page d'accueil (toutes les cartes de services + "Voir plus")
├── generate.js         # Générateur des pages de services (Node.js)
├── css/style.css       # Styles
├── js/
│   ├── data.js         # Données des 10 services (source unique)
│   └── script.js       # Interactions de la page d'accueil
└── services/           # 10 pages dédiées (une par service, générées)
```

## Développement

Les contenus des services sont centralisés dans `js/data.js`.
Après toute modification, régénérez les pages de services :

```bash
node generate.js
```

## Aperçu
Ouvrez `index.html` dans un navigateur (aucune installation requise).

---
© INNOVING SOLUTIONS – SARLU
