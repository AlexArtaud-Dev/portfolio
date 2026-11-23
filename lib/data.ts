import type { Bi } from "./i18n";

export type ArchitectureIcon = "layers" | "activity" | "shield";

export type ArchitecturePillar = {
  icon: ArchitectureIcon;
  title: Bi;
  description: Bi;
  points: Bi[];
};

export const architecture: ArchitecturePillar[] = [
  {
    icon: "layers",
    title: { fr: "Clean Architecture & DDD", en: "Clean Architecture & DDD" },
    description: {
      fr: "Séparation stricte entre domaine métier et infrastructure, pour du code testable et indépendant des frameworks.",
      en: "Strict separation between business domain and infrastructure, for code that's testable and framework-independent.",
    },
    points: [
      {
        fr: "Canopy : contrat OpenAPI 3.1 unique d'où sont générés le serveur Go et le client TypeScript",
        en: "Canopy: a single OpenAPI 3.1 contract generating both the Go server and the TypeScript client",
      },
      {
        fr: "Homedex : architecture hexagonale (domain → application → infrastructure), intégrations ajoutées en implémentant un port",
        en: "Homedex: hexagonal architecture (domain → application → infrastructure), integrations added by implementing a port",
      },
      {
        fr: "Velar (Go) : couches handlers/services/repositories découplées de la persistance GORM",
        en: "Velar (Go): handlers/services/repositories layers decoupled from GORM persistence",
      },
      {
        fr: "Orbix (NestJS) : modules métier isolés (backups, vault, scheduler) via injection de dépendances",
        en: "Orbix (NestJS): isolated business modules (backups, vault, scheduler) via dependency injection",
      },
      {
        fr: "Refonte Laravel chez Computacenter : extraction de la logique métier des contrôleurs vers des services dédiés",
        en: "Laravel rebuild at Computacenter: business logic extracted from controllers into dedicated services",
      },
    ],
  },
  {
    icon: "activity",
    title: { fr: "API Design & Observabilité", en: "API Design & Observability" },
    description: {
      fr: "Des APIs typées de bout en bout et des services que je peux réellement surveiller en production.",
      en: "End-to-end typed APIs and services I can actually monitor in production.",
    },
    points: [
      {
        fr: "Canopy : chaque opération longue est un job avec progression live, annulation et résultat lisible",
        en: "Canopy: every long operation is a job with live progress, cancel and a readable result",
      },
      {
        fr: "API typées de bout en bout avec tRPC (plateforme HDM Network)",
        en: "End-to-end typed APIs with tRPC (HDM Network platform)",
      },
      {
        fr: "Hub développeur Velar : testeur d'API avec proxy serveur, tokens jamais exposés au navigateur",
        en: "Velar developer hub: API tester with a server-side proxy, tokens never exposed to the browser",
      },
      {
        fr: "Endpoint Prometheus et intégration Grafana sur Velar, Uptime Kuma pour le monitoring temps réel du homelab",
        en: "Prometheus endpoint and Grafana integration on Velar, Uptime Kuma for real-time homelab monitoring",
      },
    ],
  },
  {
    icon: "shield",
    title: { fr: "Sécurité applicative", en: "Application Security" },
    description: {
      fr: "L'authentification et le chiffrement ne sont pas des options ajoutées après coup.",
      en: "Authentication and encryption aren't an afterthought.",
    },
    points: [
      {
        fr: "Canopy : aucun shell depuis l'UI, accès fichiers confinés par os.Root, moteur interne joignable uniquement via des jetons courts signés",
        en: "Canopy: no shell from the UI, file access confined with os.Root, internal engine reachable only through short-lived signed tokens",
      },
      {
        fr: "Plugins Canopy installés uniquement depuis des dépôts autorisés, binaires vérifiés par SHA-256",
        en: "Canopy plugins installed only from allowlisted repositories, binaries verified by SHA-256",
      },
      {
        fr: "Authentification JWT + refresh token httpOnly, TOTP et hachage bcrypt sur Velar",
        en: "JWT + httpOnly refresh token authentication, TOTP and bcrypt hashing on Velar",
      },
      {
        fr: "Vault de credentials chiffré en AES-256-GCM sur Orbix",
        en: "AES-256-GCM encrypted credentials vault on Orbix",
      },
      {
        fr: "Authentification centralisée LDAP + Authelia sur le homelab",
        en: "Centralized LDAP + Authelia authentication on the homelab",
      },
    ],
  },
];

export type Project = {
  slug: string;
  name: string;
  /** File name (without extension) of the logo in public/logos */
  logo: string;
  description: Bi;
  tags: string[];
  href: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "velar",
    name: "Velar",
    logo: "velar",
    description: {
      fr: "Tableau de bord WireGuard self-hosted construit de zéro : multi-interfaces, fédération multi-instances (maître/esclaves), cycle de vie des clients (QR code, quotas, suspension auto), limitation de bande passante, AdGuard Home intégré, TOTP et métriques Prometheus/Grafana.",
      en: "Self-hosted WireGuard dashboard built from scratch: multi-interface, multi-instance federation (master/slaves), client lifecycle (QR code, quotas, auto-suspend), bandwidth limiting, built-in AdGuard Home, TOTP and Prometheus/Grafana metrics.",
    },
    tags: ["Go", "React", "TypeScript", "SQLite", "WireGuard"],
    href: "https://github.com/AlexArtaud-Dev/Velar",
    featured: true,
  },
  {
    slug: "homedex",
    name: "Homedex",
    logo: "homedex",
    description: {
      fr: "Dashboard de homelab modulaire : cartes de services avec statut et stats en direct (Jellyfin, Proxmox, OpenMediaVault, Portainer, Nextcloud, Tailscale), widgets, sections en drag & drop et un panneau d'admin complet, sans YAML ni rebuild. Architecture hexagonale + worker de fond.",
      en: "Modular homelab dashboard: service cards with live status and stats (Jellyfin, Proxmox, OpenMediaVault, Portainer, Nextcloud, Tailscale), widgets, drag & drop sections and a full admin panel, no YAML and no rebuild. Hexagonal architecture + background worker.",
    },
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "dnd-kit"],
    href: "https://github.com/AlexArtaud-Dev/homedex",
  },
  {
    slug: "orbix",
    name: "Orbix",
    logo: "orbix",
    description: {
      fr: "Gestionnaire de pipelines de sauvegarde self-hosted : sources locales, API HTTP (OAuth2) ou SFTP, archives zip/tar chiffrées AES-256, envoi par email ou SSH, planification cron, vault de credentials chiffré, dashboard et logs structurés en temps réel.",
      en: "Self-hosted backup pipeline manager: local, HTTP API (OAuth2) or SFTP sources, AES-256 encrypted zip/tar archives, delivery by email or SSH, cron scheduling, encrypted credentials vault, dashboard and real-time structured logs.",
    },
    tags: ["TypeScript", "NestJS", "Next.js", "Prisma"],
    href: "https://github.com/AlexArtaud-Dev/Orbix",
  },
  {
    slug: "dapple",
    name: "dapple",
    logo: "dapple",
    description: {
      fr: "Diffuse les vidéos locales vers les écrans du réseau (Chromecast / Google TV, DLNA / UPnP, Apple TV en AirPlay 2) depuis un seul binaire statique : découverte, appairage, télécommande en terminal et conversion à la volée via ffmpeg. Utilisable seul ou comme plugin Canopy.",
      en: "Casts local videos to the screens on your network (Chromecast / Google TV, DLNA / UPnP, Apple TV over AirPlay 2) from one static binary: discovery, pairing, terminal remote and on-the-fly conversion with ffmpeg. Works standalone or as a Canopy plugin.",
    },
    tags: ["Rust", "Google Cast", "DLNA", "AirPlay"],
    href: "https://github.com/AlexArtaud-Dev/dapple",
  },
  {
    slug: "facelock",
    name: "Facelock",
    logo: "facelock",
    description: {
      fr: "Verrouillage automatique de session Windows par reconnaissance faciale. Pipeline CPU-only (YuNet + SFace), application de fond de tâche légère, ne fait confiance qu'aux visages enregistrés. 100 % local, aucune photo stockée.",
      en: "Automatic Windows session lock via facial recognition. CPU-only pipeline (YuNet + SFace), lightweight tray app, only trusts enrolled faces. 100% local, no photos stored.",
    },
    tags: ["Python", "OpenCV", "Computer Vision"],
    href: "https://github.com/AlexArtaud-Dev/Facelock",
  },
  {
    slug: "mrename",
    name: "mrename",
    logo: "mrename",
    description: {
      fr: "Outil CLI de renommage en masse pour séries TV : détection automatique parmi 10+ motifs de nommage, analyse visuelle, prévisualisation sécurisée et mode non interactif (--dry-run). Binaires statiques publiés par tag, plugin Canopy officiel.",
      en: "Bulk renaming CLI for TV series: automatic detection among 10+ naming patterns, visual analysis, safe preview and a non-interactive mode (--dry-run). Static binaries published on tag, official Canopy plugin.",
    },
    tags: ["C", "CLI", "Pattern Matching"],
    href: "https://github.com/AlexArtaud-Dev/mrename",
  },
  {
    slug: "vrconnect",
    name: "VRConnect",
    logo: "vrconnect",
    description: {
      fr: "Middleware Rust de données vitales médicales en temps réel : serveur Socket.IO (décompression zlib), nettoyage et validation des données, sorties console, serveur BLE GATT et enregistrement avec rotation des fichiers.",
      en: "Rust middleware for real-time medical vital data: Socket.IO server (zlib decompression), data cleaning and validation, console output, BLE GATT server and file recording with rotation.",
    },
    tags: ["Rust", "Socket.IO", "Bluetooth LE"],
    href: "https://github.com/AlexArtaud-Dev/VRConnect",
  },
  {
    slug: "pdfaforge",
    name: "PdfAForge",
    logo: "pdfaforge",
    description: {
      fr: "Service ASP.NET WebAPI léger pour convertir des fichiers PDF au format PDF/A-3B. Conçu pour la conformité facturation électronique en entreprise (Factur-X / NF Z 55-300).",
      en: "Lightweight ASP.NET WebAPI service to convert PDF files to PDF/A-3B. Built for enterprise e-invoicing compliance (Factur-X / NF Z 55-300).",
    },
    tags: ["C#", "ASP.NET", "WebAPI"],
    href: "https://github.com/AlexArtaud-Dev/PdfAForge",
  },
  {
    slug: "cloudflare-dyn-wan-ip-fixer",
    name: "CloudflareDynWanIPFixer",
    logo: "cloudflare-dyn-wan-ip-fixer",
    description: {
      fr: "Mise à jour automatique d'un enregistrement DNS Cloudflare selon l'IP WAN dynamique du réseau. Vérifications périodiques, alertes email et déploiement Docker, entièrement configurable via .env.",
      en: "Automatically updates a Cloudflare DNS record based on the network's dynamic WAN IP. Periodic checks, email alerts and Docker deployment, fully configurable via .env.",
    },
    tags: ["TypeScript", "Docker", "Cloudflare API"],
    href: "https://github.com/AlexArtaud-Dev-Personnal-Projects/CloudflareDynWanIPFixer",
  },
];

export type CanopyPlugin = {
  id: string;
  name: string;
  logo: string;
  language: string;
  version: string;
  description: Bi;
  points: Bi[];
  href: string;
};

export const canopy = {
  name: "Canopy",
  logo: "canopy",
  repo: "https://github.com/AlexArtaud-Dev/Canopy",
  wiki: "https://github.com/AlexArtaud-Dev/Canopy/wiki",
  dockerHub: "https://hub.docker.com/r/izoniks/canopy",
  pluginGuide: "https://github.com/AlexArtaud-Dev/Canopy/blob/main/docs/integrations/writing-a-plugin.md",
  tagline: {
    fr: "Un gestionnaire de fichiers web self-hosted, construit de zéro comme successeur moderne de FileBrowser.",
    en: "A self-hosted web file manager, built from scratch as a modern successor to FileBrowser.",
  },
  intro: {
    fr: "Mon projet actuel. Canopy gère les dossiers d'un serveur depuis le navigateur avec une UX soignée, des opérations longues transparentes et une sécurité pensée dès la conception : l'interface n'exécute jamais de commande, chaque accès fichier est confiné par le moteur et chaque modification est autorisée côté serveur puis auditée.",
    en: "My current project. Canopy manages a server's folders from the browser with a polished UX, transparent long operations and security by design: the interface never runs a command, every file access is confined by the engine and every change is authorized on the server, then audited.",
  },
  stats: [
    { value: "40", label: { fr: "Releases publiées", en: "Releases shipped" } },
    { value: "159", label: { fr: "PR mergées", en: "Merged PRs" } },
    { value: "3", label: { fr: "Langues (FR/EN/ES)", en: "Languages (EN/FR/ES)" } },
    { value: "~20 Mo", label: { fr: "Image du moteur Go", en: "Go engine image" } },
  ],
  features: [
    {
      icon: "activity",
      title: { fr: "Opérations transparentes", en: "Transparent operations" },
      text: {
        fr: "Chaque tâche longue (copie, zip, upload reprenable) est un job avec progression live, annulation et résultat lisible.",
        en: "Every long task (copy, zip, resumable upload) is a job with live progress, cancel and a readable result.",
      },
    },
    {
      icon: "undo",
      title: { fr: "Corbeille & annulation", en: "Trash & undo" },
      text: {
        fr: "Corbeille avec restauration, confirmation et annulation des actions destructrices, audit de chaque changement.",
        en: "Trash with restore, confirmation and undo for destructive actions, every change audited.",
      },
    },
    {
      icon: "share",
      title: { fr: "Partage & dépôts", en: "Sharing & drop-offs" },
      text: {
        fr: "Liens de partage (expiration, mot de passe, limite de téléchargements) et liens de dépôt filtrés par type et taille.",
        en: "Share links (expiry, password, download limit) and upload links filtered by file type and size.",
      },
    },
    {
      icon: "users",
      title: { fr: "Rôles & droits par dossier", en: "Roles & folder rights" },
      text: {
        fr: "Utilisateurs, groupes, matrice de permissions, règles d'accès par dossier, invitations, TOTP et codes de secours.",
        en: "Users, groups, permission matrix, per-folder access rules, invitations, TOTP and recovery codes.",
      },
    },
    {
      icon: "eye",
      title: { fr: "Aperçus & streaming", en: "Previews & streaming" },
      text: {
        fr: "Images, PDF, code, audio, vidéo ; MKV et autres formats convertis à la volée par ffmpeg. Vues liste et grille 10k+ entrées.",
        en: "Images, PDF, code, audio, video; MKV and other formats converted on the fly by ffmpeg. List and grid views for 10k+ entries.",
      },
    },
    {
      icon: "layout",
      title: { fr: "Dashboards & PWA", en: "Dashboards & PWA" },
      text: {
        fr: "Tableaux de bord personnels, application installable, thèmes clair/sombre, interface responsive tactile et clavier.",
        en: "Personal dashboards, installable app, light/dark themes, responsive touch- and keyboard-friendly interface.",
      },
    },
  ],
  architecture: [
    {
      name: "web",
      tech: "Next.js · TypeScript · Better Auth · Drizzle",
      role: {
        fr: "Seul point d'entrée public : UI, authentification, autorisations, audit",
        en: "The only public entry point: UI, authentication, authorization, audit",
      },
    },
    {
      name: "engine",
      tech: "Go · os.Root · distroless",
      role: {
        fr: "Réseau interne uniquement, n'accepte que des jetons courts signés par le web ; accès fichiers confiné à la racine, jobs, plugins",
        en: "Internal network only, accepts only short-lived tokens signed by the web app; root-confined file access, jobs, plugins",
      },
    },
    {
      name: "contracts",
      tech: "OpenAPI 3.1",
      role: {
        fr: "Source unique de vérité : code Go et TypeScript générés, aucune dérive entre les deux",
        en: "Single source of truth: generated Go and TypeScript code, no drift between both sides",
      },
    },
    {
      name: "database",
      tech: "PostgreSQL",
      role: {
        fr: "Un rôle par application, schémas auth / app / audit séparés",
        en: "One role per app, separate auth / app / audit schemas",
      },
    },
  ],
  delivery: {
    fr: "Monorepo pnpm, CI à 9 checks obligatoires (lint, types, tests, couverture ≥ 90 % sur les paquets Go purs, changelog trilingue), commits signés, release automatisée vers GHCR et Docker Hub en amd64/arm64, documentation publiée sur le wiki à chaque merge.",
    en: "pnpm monorepo, CI with 9 required checks (lint, types, tests, ≥ 90% coverage on pure Go packages, trilingual changelog), signed commits, automated releases to GHCR and Docker Hub for amd64/arm64, documentation published to the wiki on every merge.",
  },
  pluginsIntro: {
    fr: "Canopy ne lance jamais de shell : ses commandes sont un catalogue d'outils typés. Ce catalogue est extensible par plugins, et le format est volontairement générique : n'importe quel outil en ligne de commande open source, dans n'importe quel langage, peut devenir un module Canopy.",
    en: "Canopy never runs a shell: its commands are a catalog of typed tools. That catalog is extensible through plugins, and the format is deliberately generic: any open source command-line tool, in any language, can become a Canopy module.",
  },
  plugins: [
    {
      id: "mrename",
      name: "mrename",
      logo: "mrename",
      language: "C",
      version: "v1.1.0",
      description: {
        fr: "Renommage en masse d'épisodes de séries avec détection automatique parmi 10+ motifs de nommage.",
        en: "Bulk renaming of TV series episodes with automatic detection among 10+ naming patterns.",
      },
      points: [
        { fr: "Mode non interactif pensé pour Canopy (--pattern auto, --dry-run)", en: "Non-interactive mode built for Canopy (--pattern auto, --dry-run)" },
        { fr: "Clic droit sur un dossier → simulation puis renommage, avec progression live", en: "Right-click a folder → simulate then rename, with live progress" },
        { fr: "Binaires statiques linux amd64/arm64 publiés par tag", en: "Static linux amd64/arm64 binaries published on tag" },
      ],
      href: "https://github.com/AlexArtaud-Dev/mrename",
    },
    {
      id: "dapple",
      name: "dapple",
      logo: "dapple",
      language: "Rust",
      version: "v0.5.0",
      description: {
        fr: "Diffuse les vidéos locales vers les écrans du réseau : Chromecast / Google TV, DLNA / UPnP et Apple TV (AirPlay 2). Un seul binaire statique.",
        en: "Casts local videos to the screens on your network: Chromecast / Google TV, DLNA / UPnP and Apple TV (AirPlay 2). One static binary.",
      },
      points: [
        { fr: "Découverte et appairage des écrans, gérés dans Administration › Appareils", en: "Screen discovery and pairing, managed in Administration › Devices" },
        { fr: "Télécommande live dans Canopy : pause, reprise, avance, volume, stop", en: "Live remote inside Canopy: pause, resume, seek, volume, stop" },
        { fr: "Conversion à la volée (ffmpeg / HLS) de ce que l'écran ne lit pas", en: "On-the-fly conversion (ffmpeg / HLS) of what the screen can't play" },
      ],
      href: "https://github.com/AlexArtaud-Dev/dapple",
    },
  ] as CanopyPlugin[],
  genericity: {
    title: { fr: "Votre outil, en module Canopy", en: "Your tool, as a Canopy module" },
    text: {
      fr: "Pas de SDK, pas de dépendance à Canopy : une release GitHub suffit. N'importe qui peut publier son propre module open source, l'administrateur n'a qu'à autoriser le dépôt.",
      en: "No SDK, no dependency on Canopy: a GitHub release is enough. Anyone can publish their own open source module; the administrator just allows the repository.",
    },
    steps: [
      {
        fr: "Publier une release avec canopy-plugin.yaml, des binaires statiques linux et un fichier SHA256SUMS",
        en: "Publish a release with canopy-plugin.yaml, static linux binaries and a SHA256SUMS file",
      },
      {
        fr: "Décrire ses commandes : paramètres typés (chemin, booléen, entier, liste…), droits requis, parser de progression",
        en: "Describe the commands: typed params (path, bool, int, enum…), required rights, progress parser",
      },
      {
        fr: "Canopy vérifie le manifeste et le SHA-256, stocke le binaire et l'exécute sans shell, avec les droits de l'utilisateur",
        en: "Canopy checks the manifest and SHA-256, stores the binary and runs it without a shell, under the user's rights",
      },
      {
        fr: "Options avancées : appareils réseau, télécommande, choix détectés (Detect), données persistantes par plugin",
        en: "Advanced options: network devices, remote control, detected choices (Detect), per-plugin persistent data",
      },
    ],
    manifest: `id: mytool
name: { en: My tool, fr: Mon outil }
version: 1.2.0
binary: mytool
source:
  repo: you/mytool
  checksums: SHA256SUMS
  assets:
    linux-amd64: mytool-linux-amd64
commands:
  - id: mytool.run
    params:
      - name: folder
        type: path
        access: update
    args: ['{flags}', '{folder}']
    progressParser: line-count`,
  },
};

export type ExperienceEntry = {
  role: Bi;
  org: string;
  contract: string;
  period: Bi;
  startDate: string;
  endDate: string | null;
  location?: Bi;
  description: Bi;
  points: Bi[];
};

export const experience: ExperienceEntry[] = [
  {
    role: { fr: "Ingénieur logiciel", en: "Software Engineer" },
    org: "ABEO",
    contract: "CDI",
    period: { fr: "Mars 2026 - Présent", en: "March 2026 - Present" },
    startDate: "2026-03-01",
    endDate: null,
    location: { fr: "Rioz, Bourgogne-Franche-Comté · Hybride", en: "Rioz, Bourgogne-Franche-Comté · Hybrid" },
    description: {
      fr: "Développement et maintien en conditions opérationnelles sur un ERP Microsoft Dynamics, avec un volet conformité réglementaire sur la facturation électronique.",
      en: "Development and operational maintenance on a Microsoft Dynamics ERP, with a regulatory compliance component on e-invoicing.",
    },
    points: [
      {
        fr: "Développement & MCO sur Microsoft Dynamics 365 F&O et AX 2012 (X++) : évolutions fonctionnelles, correctifs, adaptations du standard",
        en: "Development & maintenance on Microsoft Dynamics 365 F&O and AX 2012 (X++): functional evolutions, fixes, standard adaptations",
      },
      { fr: "Gestion documentaire via Lasernet", en: "Document management via Lasernet" },
      {
        fr: "En charge de l'implémentation de la facturation électronique dans l'environnement AX12 (CU12 / CU7)",
        en: "In charge of the e-invoicing implementation in the AX12 environment (CU12 / CU7)",
      },
      {
        fr: "Conception et développement d'un configurateur de produits (Next.js, Redis, MySQL) connecté à D365, doté d'un moteur de configuration complet : attributs, groupes de configuration, contraintes, calculs, nomenclatures (BOM) et gammes (ROUTE)",
        en: "Design and development of a product configurator (Next.js, Redis, MySQL) connected to D365, featuring a full configuration engine: attributes, configuration groups, constraints, calculations, BOM and routings",
      },
      {
        fr: "Déploiement et hébergement du configurateur sur Azure : Azure CLI, Azure DevOps, pipelines CI/CD (build & release) et mise en production automatisée sur plusieurs environnements",
        en: "Deployed and hosted on Azure: Azure CLI, Azure DevOps, CI/CD pipelines (build & release) and automated rollouts across multiple environments",
      },
    ],
  },
  {
    role: { fr: "Ingénieur logiciel, applications cliniques", en: "Software Engineer, Clinical Applications" },
    org: "UTBM",
    contract: "CDD",
    period: { fr: "Septembre 2025 - Mars 2026", en: "September 2025 - March 2026" },
    startDate: "2025-09-01",
    endDate: "2026-03-01",
    location: { fr: "Belfort · Sur site", en: "Belfort · On-site" },
    description: {
      fr: "Projet de recherche sur l'automatisation de la sédation en réanimation, en lien direct avec le CHU et les équipes hospitalières.",
      en: "Research project on ICU sedation automation, working directly with the university hospital and clinical teams.",
    },
    points: [
      {
        fr: "Outils logiciels pour l'automatisation de la sédation et de l'analgésie en réanimation",
        en: "Software tools for ICU sedation and analgesia automation",
      },
      {
        fr: "Conception et maintien des interfaces dédiées aux professionnels de santé",
        en: "Design and maintenance of interfaces for healthcare professionals",
      },
      {
        fr: "Structuration des données médicales et optimisation des bases de données",
        en: "Medical data structuring and database optimization",
      },
      {
        fr: "Connecteurs d'interopérabilité hospitalière (DPI, SIH, dispositifs médicaux connectés)",
        en: "Hospital interoperability connectors (EHR, HIS, connected medical devices)",
      },
      {
        fr: "Référent technique entre l'université, le CHU et les entreprises partenaires",
        en: "Technical point of contact between the university, the hospital and partner companies",
      },
    ],
  },
  {
    role: { fr: "Ingénieur (stage, CDD puis alternance)", en: "Engineer (internship, fixed-term, then work-study)" },
    org: "Computacenter",
    contract: "Stage → CDD → Alternance",
    period: { fr: "Novembre 2021 - Août 2025", en: "November 2021 - August 2025" },
    startDate: "2021-11-01",
    endDate: "2025-08-01",
    location: { fr: "Saint-Priest, Auvergne-Rhône-Alpes · Hybride", en: "Saint-Priest, Auvergne-Rhône-Alpes · Hybrid" },
    description: {
      fr: "Progression sur 3 contrats successifs (stage puis CDD puis alternance ingénieur) sur des applications métier critiques de supervision, avec une montée en responsabilité continue.",
      en: "Progressed through 3 successive contracts (internship, then fixed-term, then engineering work-study) on critical monitoring business applications, with steadily increasing responsibility.",
    },
    points: [
      {
        fr: "Refonte complète d'une application métier critique en Laravel 10 : sécurisation, montée en version, pérennisation",
        en: "Full rebuild of a critical business application in Laravel 10: security hardening, version upgrade, long-term maintainability",
      },
      {
        fr: "Module de gestion des dépendances de supervision avec interface web en arbres interactifs",
        en: "Monitoring dependency management module with an interactive tree-based web interface",
      },
      {
        fr: "Application d'orchestration des données de supervision (stack TALL) : collecte multi-sources, temps réel, credentials sécurisés",
        en: "Monitoring data orchestration app (TALL stack): multi-source collection, real time, secured credentials",
      },
      {
        fr: "Modules d'import/export Excel et d'énumérations dynamiques",
        en: "Excel import/export modules and dynamic enumerations",
      },
      {
        fr: "Dockerisation d'applications legacy dans le cadre d'un plan de sécurisation du SI",
        en: "Dockerized legacy applications as part of an IT security hardening plan",
      },
      {
        fr: "Tutorat d'un stagiaire ingénieur et transmission auprès de collégiens",
        en: "Mentored an engineering intern and gave talks to middle school students",
      },
    ],
  },
  {
    role: { fr: "Ingénieur logiciel", en: "Software Engineer" },
    org: "HDM Network ASBL",
    contract: "Stage",
    period: { fr: "Février 2025 - Avril 2025", en: "February 2025 - April 2025" },
    startDate: "2025-02-01",
    endDate: "2025-04-01",
    location: { fr: "Belgique · À distance", en: "Belgium · Remote" },
    description: {
      fr: "Conception et développement complet d'une plateforme de mise en relation entre stagiaires/alternants et entreprises, avec un focus performance et expérience utilisateur.",
      en: "Full design and development of a platform connecting interns/work-study students with companies, focused on performance and user experience.",
    },
    points: [
      { fr: "Stack : Next.js, NestJS, Prisma, MySQL, Typesense, tRPC, Clerk", en: "Stack: Next.js, NestJS, Prisma, MySQL, Typesense, tRPC, Clerk" },
      {
        fr: "Moteur de recherche avancé et API typées de bout en bout",
        en: "Advanced search engine and end-to-end typed APIs",
      },
      {
        fr: "Authentification sécurisée et maintien en conditions opérationnelles d'applications TypeScript existantes",
        en: "Secure authentication and operational maintenance of existing TypeScript applications",
      },
    ],
  },
];

export const openSource = {
  since: { fr: "Depuis septembre 2020", en: "Since September 2020" },
  text: {
    fr: "En parallèle, je développe et self-host mes propres outils open source (Canopy et ses plugins, Velar, Homedex, Orbix...) sur mon temps libre.",
    en: "Alongside this, I build and self-host my own open source tools (Canopy and its plugins, Velar, Homedex, Orbix...) on my free time.",
  },
};

export type EducationEntry = {
  degree: Bi;
  school: string;
  period: Bi;
  detail: Bi;
  points: Bi[];
};

export const education: EducationEntry[] = [
  {
    degree: { fr: "Diplôme d'Ingénieur en Informatique", en: "Engineering Degree in Computer Science" },
    school: "UTBM (Université de Technologie de Belfort-Montbéliard)",
    period: { fr: "Août 2022 - Août 2025", en: "August 2022 - August 2025" },
    detail: {
      fr: "Diplôme validé (208/180 ECTS) · Formation par alternance",
      en: "Degree awarded (208/180 ECTS) · Work-study program",
    },
    points: [
      {
        fr: "Spécialisation de troisième année : développement logiciel avancé",
        en: "Third-year specialization: advanced software development",
      },
      {
        fr: "Alternance de 3 ans intégrée à la formation (Computacenter)",
        en: "3-year work-study track integrated into the program (Computacenter)",
      },
    ],
  },
  {
    degree: { fr: "DUT Informatique", en: "Associate Degree in Computer Science (DUT)" },
    school: "IUT2 Grenoble",
    period: { fr: "2020 - Février 2022", en: "2020 - February 2022" },
    detail: { fr: "Obtenu avec mention Très Bien", en: "Awarded with highest honors" },
    points: [
      {
        fr: "Délégué de promotion du semestre décalé",
        en: "Class representative for the offset-semester cohort",
      },
      {
        fr: "Soutien scolaire à des camarades de promotion pendant la période Covid",
        en: "Peer tutoring for classmates during the Covid period",
      },
    ],
  },
];

export type Certification = {
  name: string;
  org: string;
  date: Bi;
  credentialId?: string;
};

export const certifications: Certification[] = [
  {
    name: "Linguaskill Business - C1 Level",
    org: "University of Cambridge",
    date: { fr: "Février 2024", en: "February 2024" },
    credentialId: "J8LPN-7QZES",
  },
  {
    name: "SL1 Professional Certificate",
    org: "ScienceLogic",
    date: { fr: "Juillet 2023", en: "July 2023" },
    credentialId: "102408366",
  },
];

export type Skill = {
  name: string;
  slug?: string;
  color?: string;
};

export type SkillCategory = {
  title: Bi;
  skills: Skill[];
};

export const skills: SkillCategory[] = [
  {
    title: { fr: "Langages", en: "Languages" },
    skills: [
      { name: "TypeScript", slug: "typescript", color: "3178C6" },
      { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
      { name: "Go", slug: "go", color: "00ADD8" },
      { name: "C#", slug: "csharp", color: "239120" },
      { name: "Python", slug: "python", color: "3776AB" },
      { name: "Rust", slug: "rust", color: "000000" },
      { name: "PHP", slug: "php", color: "777BB4" },
      { name: "C" },
    ],
  },
  {
    title: { fr: "Frontend", en: "Frontend" },
    skills: [
      { name: "React", slug: "react", color: "61DAFB" },
      { name: "Next.js", slug: "nextdotjs", color: "000000" },
      { name: "Vite", slug: "vite", color: "646CFF" },
      { name: "Tailwind CSS", slug: "tailwindcss", color: "06B6D4" },
    ],
  },
  {
    title: { fr: "Backend", en: "Backend" },
    skills: [
      { name: "Node.js", slug: "nodedotjs", color: "339933" },
      { name: "NestJS", slug: "nestjs", color: "E0234E" },
      { name: "Laravel", slug: "laravel", color: "FF2D20" },
      { name: "ASP.NET", slug: "dotnet", color: "512BD4" },
      { name: "tRPC", slug: "trpc", color: "2596BE" },
    ],
  },
  {
    title: { fr: "Bases de données & ORM", en: "Databases & ORM" },
    skills: [
      { name: "PostgreSQL", slug: "postgresql", color: "4169E1" },
      { name: "MySQL", slug: "mysql", color: "4479A1" },
      { name: "SQLite", slug: "sqlite", color: "003B57" },
      { name: "SQL Server", slug: "microsoftsqlserver", color: "CC2927" },
      { name: "Prisma", slug: "prisma", color: "2D3748" },
      { name: "GORM" },
    ],
  },
  {
    title: { fr: "DevOps, Cloud & Homelab", en: "DevOps, Cloud & Homelab" },
    skills: [
      { name: "Docker", slug: "docker", color: "2496ED" },
      { name: "GitHub Actions", slug: "githubactions", color: "2088FF" },
      { name: "Nginx", slug: "nginx", color: "009639" },
      { name: "WireGuard", slug: "wireguard", color: "88171A" },
      { name: "Prometheus", slug: "prometheus", color: "E6522C" },
      { name: "Grafana", slug: "grafana", color: "F46800" },
    ],
  },
];

export const stats = [
  { value: "5+", label: { fr: "Ans d'expérience", en: "Years of experience" } },
  { value: "15+", label: { fr: "Projets open source", en: "Open source projects" } },
  { value: "20+", label: { fr: "Technologies déjà utilisées", en: "Technologies worked with" } },
];

export type OwnApp = {
  name: string;
  href: string;
  logo: string;
};

export const homelab = {
  name: "R.O.G.E.R",
  fullName: "Resourceful Omniscient Gateway for Experiments and Research",
  since: { fr: "Depuis juin 2023", en: "Since June 2023" },
  intro: {
    fr: "Depuis 2023, je construis et maintiens mon propre homelab, un serveur personnel auto-hébergé, dans le but de tester des technologies émergentes et d'approfondir mes compétences en systèmes d'information, automatisation, sécurité et administration réseau. Toutes les applications listées ci-dessous sont utilisées à des fins strictement personnelles.",
    en: "Since 2023, I've been building and maintaining my own homelab, a self-hosted personal server, to experiment with emerging technologies and deepen my skills in information systems, automation, security and network administration. Every application listed below is used strictly for personal purposes.",
  },
  specs: [
    { label: "CPU", value: "Ryzen 7 5700G · 8C / 16T" },
    { label: "GPU", value: "RTX 2060 · 6 Go" },
    { label: "RAM", value: "128 Go DDR4 3200MHz" },
    { label: "NVMe", value: "2× 2 To Gen 4" },
    { label: "HDD", value: "4× 12 To" },
  ],
  stackCategories: [
    {
      title: { fr: "Systèmes d'exploitation", en: "Operating systems" },
      items: [
        { name: "Linux", slug: "linux" },
        { name: "Windows" },
      ],
    },
    {
      title: { fr: "Virtualisation & conteneurisation", en: "Virtualization & containers" },
      items: [
        { name: "Proxmox", slug: "proxmox" },
        { name: "Docker", slug: "docker" },
        { name: "Portainer", slug: "portainer" },
      ],
    },
    {
      title: { fr: "Stockage & fichiers", en: "Storage & files" },
      items: [
        { name: "OpenMediaVault", slug: "openmediavault" },
        { name: "Nextcloud", slug: "nextcloud" },
      ],
    },
    {
      title: { fr: "Réseau & sécurité", en: "Network & security" },
      items: [
        { name: "Nginx", slug: "nginx" },
        { name: "Coraza (WAF)" },
        { name: "Cloudflare", slug: "cloudflare" },
        { name: "WireGuard (PiVPN)", slug: "wireguard" },
        { name: "Pi-hole", slug: "pihole" },
      ],
    },
    {
      title: { fr: "Monitoring & identité", en: "Monitoring & identity" },
      items: [
        { name: "Uptime Kuma", slug: "uptimekuma" },
        { name: "LDAP" },
        { name: "Authelia", slug: "authelia" },
      ],
    },
  ],
  apps: [
    { name: "Bitwarden", slug: "bitwarden" },
    { name: "Jellyfin", slug: "jellyfin" },
    { name: "Navidrome" },
    { name: "Firefly III", slug: "fireflyiii" },
    { name: "Stirling PDF" },
    { name: "ConvertX" },
    { name: "Gitea", slug: "gitea" },
    { name: "Kimai" },
    { name: "YouTrack" },
    { name: "Docmost" },
    { name: "Home Assistant", slug: "homeassistant" },
    { name: "MCSManager" },
  ],
  ownApps: [
    { name: "Canopy", href: "https://github.com/AlexArtaud-Dev/Canopy", logo: "canopy" },
    { name: "dapple", href: "https://github.com/AlexArtaud-Dev/dapple", logo: "dapple" },
    { name: "Homedex", href: "https://github.com/AlexArtaud-Dev/homedex", logo: "homedex" },
    { name: "Velar", href: "https://github.com/AlexArtaud-Dev/Velar", logo: "velar" },
    { name: "Orbix", href: "https://github.com/AlexArtaud-Dev/Orbix", logo: "orbix" },
  ] as OwnApp[],
  resilience: {
    fr: "Un point d'entrée redondant (Raspberry Pi) assure la haute disponibilité et la résilience des services hébergés.",
    en: "A redundant entry point (Raspberry Pi) ensures high availability and resilience for the hosted services.",
  },
};
