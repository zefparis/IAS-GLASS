# Guide de déploiement IAS Glass

## ✅ Checklist pré-déploiement

### Performance & Build
- [x] CSS compilé : 21KB (budget: < 80KB gzip) ✅
- [x] JS minifié : 8.2KB (budget: < 25KB gzip) ✅
- [x] Images optimisées (SVG + PNG OG image)
- [x] Lazy loading activé sur images
- [x] Animations respectent `prefers-reduced-motion`

### SEO
- [x] Meta tags title/description
- [x] Open Graph tags
- [x] Twitter Cards
- [x] JSON-LD structured data
- [x] Sitemap.xml
- [x] Robots.txt
- [x] Favicon (emoji SVG)

### Accessibilité
- [x] Skip link
- [x] ARIA landmarks
- [x] Focus visible
- [x] Navigation clavier complète
- [x] Contraste ≥ 4.5:1
- [x] Alt text sur images
- [x] FAQ accordion accessible

### Sécurité
- [x] Headers Vercel (X-Frame-Options, CSP-ready, etc.)
- [x] Pas d'inline handlers
- [x] Honeypot anti-spam
- [x] Permissions-Policy restrictive
- [x] Pas de tracking par défaut

### Fonctionnalités
- [x] Theme toggle dark/light
- [x] Smooth scroll
- [x] Scroll-spy navigation
- [x] FAQ accordions
- [x] Form avec validation
- [x] Toutes sections présentes

## 🚀 Déploiement sur Vercel

### Option 1: Via Vercel CLI

```bash
# Installation CLI (si nécessaire)
npm i -g vercel

# Login
vercel login

# Déploiement production
vercel --prod
```

### Option 2: Via GitHub

1. Push le code sur GitHub
2. Connecter le repo sur vercel.com
3. Configuration automatique détectée
4. Déploiement automatique à chaque push

### Variables d'environnement

Aucune variable nécessaire pour ce projet statique.

## 📊 Tests de performance

### Lighthouse CI

```bash
# Installation
npm install -g @lhci/cli

# Audit local
lhci autorun --collect.url=http://localhost:8000
```

### Tests manuels

1. **Performance**
   - Ouvrir DevTools > Lighthouse
   - Mode Mobile
   - Vérifier scores ≥ 95

2. **Accessibilité**
   - Tester navigation clavier (Tab, Enter, Space)
   - Vérifier contraste (axe DevTools)
   - Tester lecteur d'écran

3. **SEO**
   - Vérifier meta tags dans <head>
   - Tester Open Graph avec https://www.opengraph.xyz/
   - Valider sitemap.xml

4. **Responsive**
   - Tester sur Mobile (320px)
   - Tester sur Tablet (768px)
   - Tester sur Desktop (1920px)

## 🔍 Vérifications post-déploiement

### URLs à tester

- [ ] https://your-domain.com/
- [ ] https://your-domain.com/sitemap.xml
- [ ] https://your-domain.com/robots.txt

### Headers HTTP

```bash
curl -I https://your-domain.com/ | grep -E 'X-Frame|X-Content|Cache-Control|Referrer'
```

Vérifier:
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- Cache-Control approprié

### Performance réelle

Tester avec:
- https://pagespeed.web.dev/
- https://www.webpagetest.org/
- https://gtmetrix.com/

Targets:
- LCP < 1.5s
- FID < 100ms
- CLS < 0.02

## 🐛 Troubleshooting

### CSS ne se charge pas
Vérifier que `assets/css/styles.css` existe et est commité.

### JS ne fonctionne pas
Vérifier console DevTools pour erreurs. Tester avec et sans adblocker.

### Images manquantes
Vérifier chemins absolus `/assets/img/...` et que les fichiers sont commités.

### Theme toggle ne fonctionne pas
Vérifier localStorage dans DevTools > Application. Peut être bloqué en mode privé.

## 📝 Mises à jour futures

### Modifier le contenu
1. Éditer `index.html`
2. Commit + push (déploiement auto sur Vercel)

### Modifier les styles
1. Éditer `src/styles.css`
2. Rebuild: `npm run build:css`
3. Commit les changements
4. Push

### Ajouter analytics
1. Décommenter hook Analytics dans `main.js`
2. Ajouter script tracking (ex: Plausible, Fathom)
3. Respecter RGPD (consentement si nécessaire)

## 🎯 Performance targets atteints

- ✅ CSS: 21KB (< 80KB)
- ✅ JS: 8.2KB (< 25KB)
- ✅ Aucune dépendance externe au runtime
- ✅ 100% statique
- ✅ Prêt pour Lighthouse ≥ 95

## 📞 Support

Pour questions techniques: contact@ia-solution.fr
