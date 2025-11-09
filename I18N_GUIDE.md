# Guide du Système de Traduction FR/EN

## 🌍 Système de traduction implémenté

Le site IAS Glass dispose maintenant d'un système complet de traduction français/anglais.

## ✅ Corrections pour Vercel

### Problème résolu
Le système fonctionnait en local mais pas sur Vercel à cause des **chemins absolus** (`/assets/...`).

### Solution appliquée
✅ **Tous les chemins convertis en relatifs** :
- `/assets/js/translations.js` → `assets/js/translations.js`
- `/assets/js/main.js` → `assets/js/main.js`
- `/assets/css/styles.css` → `assets/css/styles.css`
- Toutes les images dans `assets/img/`

✅ **Export global des traductions** dans `translations.js` :
```javascript
window.translations = translations;
```

✅ **Logs de debug** pour diagnostiquer les problèmes :
- Vérification du chargement des traductions
- Comptage des éléments traduits
- Identification des clés manquantes

## 📁 Fichiers modifiés

1. **`assets/js/translations.js`** (nouveau)
   - Toutes les traductions FR/EN
   - 150+ clés de traduction
   - Export global via `window.translations`

2. **`assets/js/main.js`** (modifié)
   - Module `I18n` ajouté
   - Gestion du changement de langue
   - Persistence dans localStorage
   - Logs de debug

3. **`index.html`** (modifié)
   - Import de `translations.js` AVANT `main.js`
   - Bouton de langue dans la navbar
   - Attributs `data-i18n` sur tous les éléments
   - Chemins relatifs pour tous les assets

4. **`src/styles.css`** (modifié)
   - Styles pour le bouton de langue
   - Transitions pour le changement de langue

## 🚀 Déploiement sur Vercel

### Vérification avant déploiement

```bash
# 1. Compiler le CSS
npm run build:css

# 2. Vérifier que tous les fichiers sont présents
git ls-files assets/js/
# Doit afficher:
# - assets/js/main.js
# - assets/js/translations.js

# 3. Commit et push
git add .
git commit -m "Fix i18n for Vercel"
git push origin main
```

### Déploiement automatique
Vercel détectera automatiquement les changements et redéploiera le site.

## 🧪 Test en production

1. Ouvrir le site sur Vercel
2. Ouvrir la console (F12)
3. Vérifier les logs :
   - `I18n: Module initialized with languages: fr, en`
   - `I18n: Found X elements to translate`
4. Cliquer sur le bouton **EN** dans la navbar
5. Le site doit passer en anglais instantanément

## 🐛 Debugging

Si le système ne fonctionne toujours pas sur Vercel :

### Dans la console du navigateur
```javascript
// Vérifier que translations est chargé
console.log(window.translations);
// Doit afficher l'objet avec fr et en

// Vérifier le module I18n
console.log(document.getElementById('lang-toggle'));
// Doit afficher le bouton
```

### Logs automatiques
Le système affiche automatiquement :
- ✅ Initialisation réussie
- ⚠️ Traductions non chargées
- ⚠️ Bouton non trouvé
- ⚠️ Clés de traduction manquantes

## 📝 Ajouter de nouvelles traductions

1. Éditer `assets/js/translations.js`
2. Ajouter la clé dans `fr:` et `en:`
3. Dans le HTML, ajouter l'attribut :
   ```html
   <span data-i18n="votre.nouvelle.cle">Texte FR</span>
   ```
4. Pour les attributs (alt, aria-label, etc.) :
   ```html
   <img data-i18n="image.alt" data-i18n-attr="alt" alt="Texte FR">
   ```

## 🎨 Personnalisation

### Changer la langue par défaut
Dans `main.js`, ligne 87 :
```javascript
const savedLang = localStorage.getItem('lang') || 'en'; // Changez 'fr' en 'en'
```

### Désactiver les logs de debug
Commentez ou supprimez les lignes `console.log()` dans `main.js`

## ✨ Fonctionnalités

- ✅ Switch FR/EN dans la navbar
- ✅ Sauvegarde de la préférence (localStorage)
- ✅ Traduction complète du site
- ✅ Animation fluide lors du changement
- ✅ Mise à jour des meta tags (SEO)
- ✅ Respect de `prefers-reduced-motion`
- ✅ Support des attributs HTML (alt, aria-label, etc.)

## 📞 Support

Si des problèmes persistent après le déploiement, vérifiez :
1. Les logs dans la console du navigateur
2. Que `translations.js` est bien chargé (Network tab)
3. Que les chemins sont relatifs (pas de `/` au début)
4. Que `window.translations` est défini
