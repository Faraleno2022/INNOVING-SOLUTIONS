/* ===========================================================
   INNOVING SOLUTIONS – Données des 10 services
   Fichier partagé : utilisé par le site (navigateur) ET par
   le générateur de pages (Node.js).
   =========================================================== */
const SERVICES = [
  {
    slug: "construction-batiments-connectes",
    icon: "bi-buildings",
    titre: "Construction de bâtiments modernes et connectés",
    desc: "Bâtiments modernes intégrant les dernières innovations pour plus de confort, de sécurité, d'efficacité énergétique et de valeur patrimoniale.",
    prestations: [
      "Études architecturales et techniques",
      "Construction de villas, immeubles et complexes résidentiels",
      "Construction de bâtiments administratifs et commerciaux",
      "Intégration de solutions Smart Building",
      "Gestion intelligente de l'éclairage et de l'énergie",
      "Pré-équipement pour la domotique et les télécommunications",
      "Rénovation et modernisation des bâtiments existants"
    ],
    avantages: ["Confort accru", "Économies d'énergie", "Valorisation immobilière", "Sécurité renforcée"]
  },
  {
    slug: "gestion-immobiliere-intelligente",
    icon: "bi-house-gear",
    titre: "Gestion immobilière intelligente",
    desc: "Accompagnement des propriétaires, investisseurs et promoteurs dans la gestion moderne et numérique de leurs biens immobiliers.",
    prestations: [
      "Gestion administrative et financière",
      "Suivi des loyers et des paiements",
      "Gestion des contrats de location",
      "Gestion de copropriétés",
      "Maintenance préventive et corrective",
      "Tableaux de bord et reporting",
      "Digitalisation des opérations immobilières"
    ],
    avantages: ["Réduction des coûts de gestion", "Meilleur suivi des biens", "Optimisation de la rentabilité", "Transparence des opérations"]
  },
  {
    slug: "haute-technologie-informatique-domotique",
    icon: "bi-cpu",
    titre: "Haute technologie, informatique et domotique",
    desc: "Intégration de technologies innovantes pour rendre les bâtiments, entreprises et infrastructures plus performants et plus intelligents.",
    prestations: [
      "Réseaux informatiques",
      "Installation de serveurs",
      "Solutions Cloud",
      "Domotique résidentielle",
      "Contrôle intelligent de l'éclairage",
      "Gestion automatisée des équipements",
      "Internet des objets (IoT)",
      "Solutions d'intelligence artificielle"
    ],
    avantages: ["Automatisation des tâches", "Gain de productivité", "Réduction des coûts d'exploitation", "Contrôle à distance"]
  },
  {
    slug: "telecommunications-reseaux",
    icon: "bi-broadcast-pin",
    titre: "Télécommunications et réseaux",
    desc: "Déploiement d'infrastructures de communication fiables et performantes pour les entreprises, administrations et particuliers.",
    prestations: [
      "Réseaux fibre optique",
      "Réseaux sans fil (Wi-Fi professionnel)",
      "Réseaux radio",
      "Réseaux LAN/WAN",
      "Solutions VoIP",
      "Interconnexion de sites",
      "Études et déploiement d'infrastructures télécoms",
      "Maintenance des équipements"
    ],
    avantages: ["Connexion rapide et sécurisée", "Couverture optimale", "Haute disponibilité", "Évolutivité des infrastructures"]
  },
  {
    slug: "securite-electronique-videosurveillance",
    icon: "bi-camera-video",
    titre: "Sécurité électronique et vidéosurveillance",
    desc: "Protection des personnes, des biens et des infrastructures grâce à des systèmes de sécurité de dernière génération.",
    prestations: [
      "Caméras IP et analogiques",
      "Vidéosurveillance intelligente",
      "Contrôle d'accès",
      "Pointage biométrique",
      "Alarmes intrusion",
      "Détection incendie",
      "Interphonie et visiophonie",
      "Centre de supervision de sécurité"
    ],
    avantages: ["Protection permanente", "Surveillance à distance", "Réduction des risques", "Gestion centralisée de la sécurité"]
  },
  {
    slug: "electricite-securite-electrique",
    icon: "bi-lightning-charge",
    titre: "Électricité et sécurité électrique (BT & HT)",
    desc: "Installations électriques conformes aux normes internationales pour garantir la sécurité et la continuité des activités.",
    prestations: [
      "Études électriques",
      "Installation basse tension (BT)",
      "Installation moyenne et haute tension",
      "Tableaux électriques",
      "Éclairage intérieur et extérieur",
      "Mise à la terre",
      "Parafoudres et protection électrique",
      "Groupes électrogènes",
      "Énergie solaire et stockage"
    ],
    avantages: ["Sécurité des installations", "Continuité de service", "Réduction des risques électriques", "Optimisation énergétique"]
  },
  {
    slug: "geolocalisation-gps-suivi-vehicules",
    icon: "bi-geo-alt",
    titre: "Géolocalisation GPS et suivi de véhicules",
    desc: "Solutions de géolocalisation permettant de suivre et gérer les véhicules en temps réel.",
    prestations: [
      "Installation de balises GPS",
      "Suivi en temps réel",
      "Historique des trajets",
      "Alertes de vitesse",
      "Géofencing",
      "Gestion de flotte",
      "Rapports automatisés",
      "Contrôle des conducteurs"
    ],
    avantages: ["Réduction des coûts d'exploitation", "Sécurisation des véhicules", "Optimisation des trajets", "Contrôle permanent"]
  },
  {
    slug: "controle-gestion-carburant",
    icon: "bi-fuel-pump",
    titre: "Contrôle et gestion de carburant",
    desc: "Surveillance de la consommation de carburant afin de réduire les pertes et améliorer la rentabilité des opérations.",
    prestations: [
      "Capteurs de niveau de carburant",
      "Détection de vol de carburant",
      "Surveillance en temps réel",
      "Rapports de consommation",
      "Contrôle des ravitaillements",
      "Analyse de performance des véhicules",
      "Gestion des stocks de carburant"
    ],
    avantages: ["Réduction des fraudes", "Économies significatives", "Contrôle précis des dépenses", "Optimisation de la flotte"]
  },
  {
    slug: "maintenance-depannage-multitechnique",
    icon: "bi-tools",
    titre: "Maintenance et dépannage multitechnique",
    desc: "Maintenance préventive et corrective de toutes les installations techniques.",
    prestations: [
      "Maintenance électrique",
      "Maintenance informatique",
      "Maintenance télécoms",
      "Maintenance sécurité électronique",
      "Maintenance bâtiments",
      "Assistance technique",
      "Dépannage d'urgence",
      "Contrats de maintenance"
    ],
    avantages: ["Réduction des pannes", "Longévité des équipements", "Continuité des activités", "Intervention rapide"]
  },
  {
    slug: "etudes-conseil-accompagnement-projets",
    icon: "bi-clipboard-data",
    titre: "Études, conseil et accompagnement de projets",
    desc: "Accompagnement des porteurs de projets depuis l'idée jusqu'à la réalisation complète.",
    prestations: [
      "Études de faisabilité",
      "Assistance à maîtrise d'ouvrage",
      "Planification de projets",
      "Audit technique",
      "Conseil stratégique",
      "Élaboration de cahiers des charges",
      "Contrôle qualité",
      "Suivi et évaluation de projets"
    ],
    avantages: ["Réduction des risques", "Maîtrise des coûts", "Respect des délais", "Réussite du projet"]
  }
];

/* Export universel : navigateur + Node.js */
if (typeof window !== "undefined") window.SERVICES = SERVICES;
if (typeof module !== "undefined" && module.exports) module.exports = SERVICES;
