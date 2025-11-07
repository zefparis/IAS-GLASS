# IAS Glass Landing Page

Landing page statique production-grade pour IAS Glass - lunettes IA totalement autonomes.

## 🎯 Caractéristiques

- **100% statique** - Aucun framework SSR
- **Performance optimisée** - LCP < 1.5s, CLS < 0.02, TBT < 100ms
- **Lighthouse ≥ 95** sur tous les critères (Performance, SEO, Accessibilité, Best Practices)
- **Accessibilité complète** - WCAG 2.1 AA, navigation clavier, ARIA
- **SEO optimisé** - Meta tags, Open Graph, Twitter Cards, JSON-LD, sitemap
- **Dark/Light theme** avec toggle et sauvegarde localStorage
- **Sécurisé** - Headers de sécurité via Vercel, pas d'inline handlers
- **Vanilla JS** - Aucune dépendance externe au runtime

## 🚀 Déploiement rapide

### Prérequis
- Node.js 18+ et npm

### Installation

```bash
# Installer les dépendances
npm install

# Compiler le CSS (Tailwind + custom)
npm run build

# Mode développement (watch CSS)
npm run watch:css
```

### Déployer sur Vercel

```bash
# Installation de Vercel CLI (si nécessaire)
npm i -g vercel

# Déploiement
vercel --prod
```

Ou connectez votre repo GitHub à Vercel pour un déploiement automatique.

## 📁 Structure

```
/
├── index.html              # Page principale avec toutes les sections
├── assets/
│   ├── css/
│   │   └── styles.css      # Tailwind compilé + styles custom
│   ├── js/
│   │   └── main.js         # JavaScript vanilla (interactions + A11y)
│   └── img/
│       ├── hero-device.svg      # Mockup lunettes
│       ├── architecture.svg     # Diagramme technique
│       └── og-image.svg         # Image Open Graph
├── robots.txt              # Configuration robots
├── sitemap.xml             # Plan du site
├── vercel.json             # Configuration Vercel (headers + cache)
├── package.json            # Dépendances build
├── tailwind.config.js      # Configuration Tailwind
└── postcss.config.js       # Configuration PostCSS
```

## 🎨 Design System

### Couleurs (CSS Variables)

```css
--bg: #0B0F14          /* Fond sombre */
--fg: #E6EDF3          /* Texte principal */
--muted: #93A2B1       /* Texte secondaire */
--accent: #6EE7BF      /* Accent (liens, CTA) */
```

### Typographie

Système de fonts : `ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Inter, Helvetica Neue, Arial`

## ⚡ Performance Budget

- **CSS** : < 80KB gzip
- **JS** : < 25KB gzip
- **LCP** : < 1.5s (3G rapide)
- **CLS** : < 0.02
- **TBT** : < 100ms

## ♿ Accessibilité

- Navigation clavier complète
- Focus visible sur tous les éléments interactifs
- Skip link pour navigation rapide
- Contraste ≥ 4.5:1
- ARIA landmarks et labels
- Alt text pertinent sur toutes les images

## 🔒 Sécurité

- Pas d'inline event handlers
- Pas d'eval ou de code dynamique
- Headers de sécurité (CSP-ready, X-Frame-Options, etc.)
- Honeypot anti-spam sur formulaire
- Aucun tracker par défaut

## 📝 Sections de la page

1. **Header** - Navigation sticky avec logo et CTA
2. **Hero** - Titre, tagline, features clés, CTA
3. **Vision/Manifeste** - Message éthique et philosophie
4. **Fonctionnalités** - 4 cards (2×2)
5. **Architecture technique** - Diagramme et points clés
6. **Démonstration** - 3 scénarios d'usage
7. **Roadmap** - Timeline 12 mois
8. **Comparatif** - Tableau vs concurrents
9. **FAQ** - Accordion accessible
10. **Contact** - Formulaire + email investisseurs
11. **Footer** - Liens + copyright

## 🛠️ Technologies

- **HTML5** sémantique
- **Tailwind CSS 3.3** (compilé, purgé)
- **Vanilla JavaScript** (ES6+)
- **PostCSS** + Autoprefixer
- **SVG** optimisés

## 📞 Contact

Pour toute question : contact@ia-solution.fr

## 📄 Licence

© 2024 IA Solution. Tous droits réservés.
