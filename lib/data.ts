import type { Bi } from "./i18n";

export type ProjectIcon = "shield" | "archive" | "scanface" | "globe" | "clapperboard" | "filecheck";

export type Project = {
  slug: string;
  name: string;
  description: Bi;
  tags: string[];
  href: string;
  icon: ProjectIcon;
  featured?: boolean;
  cta: "project" | "code";
};

export const projects: Project[] = [
  {
    slug: "velar",
    name: "Velar",
    description: {
      fr: "Tableau de bord WireGuard self-hosted construit de zéro : gestion multi-interfaces, cycle de vie des clients (QR code, quotas, suspension auto), métriques Prometheus/Grafana, hub développeur avec testeur d'API et 4 thèmes UI.",
      en: "Self-hosted WireGuard dashboard built from scratch: multi-interface management, client lifecycle (QR code, quotas, auto-suspend), Prometheus/Grafana metrics, developer hub with API tester and 4 UI themes.",
    },
    tags: ["Go", "React", "TypeScript", "GORM", "shadcn/ui"],
    href: "https://github.com/AlexArtaud-Dev/Velar",
    icon: "shield",
    featured: true,
    cta: "code",
  },
  {
    slug: "orbix",
    name: "Orbix",
    description: {
      fr: "Plateforme d'automatisation de sauvegardes self-hosted : wizard de création en 6 étapes, chiffrement AES-256-GCM, cron avancé multi-règles, vault de credentials chiffré et pipeline visualizer animé.",
      en: "Self-hosted backup automation platform: 6-step creation wizard, AES-256-GCM encryption, advanced multi-rule cron, encrypted credentials vault and animated pipeline visualizer.",
    },
    tags: ["TypeScript", "NestJS", "Next.js", "Prisma"],
    href: "https://github.com/AlexArtaud-Dev/Orbix",
    icon: "archive",
    cta: "code",
  },
  {
    slug: "facelock",
    name: "Facelock",
    description: {
      fr: "Verrouillage automatique de session Windows par reconnaissance faciale. Pipeline CPU-only (YuNet + SFace), application de fond de tâche légère, ne fait confiance qu'aux visages enregistrés.",
      en: "Automatic Windows session lock via facial recognition. CPU-only pipeline (YuNet + SFace), lightweight tray app, only trusts enrolled faces.",
    },
    tags: ["Python", "OpenCV", "Computer Vision"],
    href: "https://github.com/AlexArtaud-Dev/Facelock",
    icon: "scanface",
    cta: "code",
  },
  {
    slug: "cloudflare-dyn-wan-ip-fixer",
    name: "CloudflareDynWanIPFixer",
    description: {
      fr: "Mise à jour automatique d'un enregistrement DNS Cloudflare selon l'IP WAN dynamique du réseau. Vérifications périodiques, alertes email et déploiement Docker, entièrement configurable via .env.",
      en: "Automatically updates a Cloudflare DNS record based on the network's dynamic WAN IP. Periodic checks, email alerts and Docker deployment, fully configurable via .env.",
    },
    tags: ["TypeScript", "Docker", "Cloudflare API"],
    href: "https://github.com/AlexArtaud-Dev-Personnal-Projects/CloudflareDynWanIPFixer",
    icon: "globe",
    cta: "code",
  },
  {
    slug: "mrename",
    name: "mrename",
    description: {
      fr: "Outil CLI de renommage intelligent pour séries TV : reconnaissance de plus de 10 patterns de nommage, analyse en temps réel et mode de prévisualisation sécurisé avant tout renommage en masse.",
      en: "Smart CLI renaming tool for TV series: recognizes 10+ naming patterns, real-time analysis and a safe preview mode before any bulk rename.",
    },
    tags: ["C", "CLI", "Pattern Matching"],
    href: "https://github.com/AlexArtaud-Dev/mrename",
    icon: "clapperboard",
    cta: "code",
  },
  {
    slug: "pdfaforge",
    name: "PdfAForge",
    description: {
      fr: "Service ASP.NET WebAPI léger pour convertir des fichiers PDF au format PDF/A-3B. Conçu pour la conformité facturation électronique en entreprise (Factur-X / NF Z 55-300).",
      en: "Lightweight ASP.NET WebAPI service to convert PDF files to PDF/A-3B. Built for enterprise e-invoicing compliance (Factur-X / NF Z 55-300).",
    },
    tags: ["C#", "ASP.NET", "WebAPI"],
    href: "https://github.com/AlexArtaud-Dev/PdfAForge",
    icon: "filecheck",
    cta: "code",
  },
];

export type ExperienceEntry = {
  role: Bi;
  org: string;
  contract: string;
  period: Bi;
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
        fr: "Participation à l'implémentation de la facturation électronique (intégration TX2 Cloud)",
        en: "Contributed to e-invoicing implementation (TX2 Cloud integration)",
      },
    ],
  },
  {
    role: { fr: "Ingénieur logiciel, applications cliniques", en: "Software Engineer, Clinical Applications" },
    org: "UTBM",
    contract: "CDD",
    period: { fr: "Septembre 2025 - Mars 2026", en: "September 2025 - March 2026" },
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
    contract: "3 ans 10 mois",
    period: { fr: "Novembre 2021 - Août 2025", en: "November 2021 - August 2025" },
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
    fr: "En parallèle, je développe et self-host mes propres outils open source (Velar, Orbix, Facelock...) sur mon temps libre.",
    en: "Alongside this, I build and self-host my own open source tools (Velar, Orbix, Facelock...) on my free time.",
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
  { value: "12+", label: { fr: "Projets open source", en: "Open source projects" } },
  { value: "20+", label: { fr: "Technologies déjà utilisées", en: "Technologies worked with" } },
];

export type OwnApp = {
  name: string;
  href: string;
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
    { name: "Velar", href: "https://github.com/AlexArtaud-Dev/Velar" },
    { name: "Orbix", href: "https://github.com/AlexArtaud-Dev/Orbix" },
  ] as OwnApp[],
  resilience: {
    fr: "Un point d'entrée redondant (Raspberry Pi) assure la haute disponibilité et la résilience des services hébergés.",
    en: "A redundant entry point (Raspberry Pi) ensures high availability and resilience for the hosted services.",
  },
};
