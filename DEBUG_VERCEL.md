# 🔍 Debug Vercel - Système I18n

## 🚨 Le problème

Le système de traduction fonctionne en local mais pas sur Vercel.

## ✅ Ce qui a été fait

1. ✅ Fichiers JS ajoutés au dépôt (commit b80279d)
2. ✅ Chemins relatifs partout (pas de `/assets/`)
3. ✅ `window.translations` exporté
4. ✅ Cache busters ajoutés (`?v=1.0`)
5. ✅ Logs de debug ajoutés

## 🧪 Test local

### 1. Ouvrir le fichier de test
```
http://localhost:8000/test-i18n.html
```

Vous devriez voir :
- ✅ `window.translations exists: true`
- ✅ `Languages: fr, en`
- ✅ `Elements with data-i18n: 4`

### 2. Tester le changement de langue
1. Cliquer sur "Changer langue"
2. Les textes doivent changer instantanément

### 3. Vérifier la console
Ouvrir F12 et vérifier :
```
🌍 translations.js loaded
✅ window.translations set: (2) ['fr', 'en']
```

## 🌐 Test sur Vercel

### 1. Attendre le déploiement
Aller sur https://vercel.com/dashboard et attendre que le déploiement soit terminé.

### 2. Ouvrir la console (F12)
Vérifier les logs :

#### ✅ Si vous voyez :
```
🌍 translations.js loaded
✅ window.translations set: (2) ['fr', 'en']
I18n: Module initialized with languages: fr, en
```
→ **Le système fonctionne !** Cliquez sur EN dans la navbar.

#### ❌ Si vous voyez :
```
Failed to load resource: translations.js
```
→ **Problème de chemin** - Vérifier dans l'onglet Network si translations.js se charge.

#### ❌ Si vous voyez :
```
I18n: Translations not loaded
```
→ **translations.js se charge mais window.translations n'est pas défini**
→ Vérifier que la ligne `window.translations = translations;` est bien présente.

#### ❌ Si vous ne voyez aucun log
→ **Les scripts ne se chargent pas du tout**
→ Vérifier dans Network (F12) si les fichiers JS sont accessibles.

## 🔧 Solutions selon le problème

### Problème 1 : Scripts ne se chargent pas (404)
```bash
# Vérifier que les fichiers sont dans le dépôt
git ls-tree -r HEAD --name-only | grep ".js"

# Résultat attendu:
# assets/js/main.js
# assets/js/translations.js
```

### Problème 2 : Cache de Vercel
Dans le dashboard Vercel :
1. Aller dans Settings → Deployments
2. Cliquer sur les 3 points du dernier déploiement
3. Choisir "Redeploy"
4. ✅ Cocher "Use existing Build Cache" = **NON**

### Problème 3 : Erreur JavaScript silencieuse
Dans la console (F12), vérifier s'il y a des erreurs en rouge.

## 📋 Checklist de vérification

Sur Vercel, dans l'onglet Network (F12) :

- [ ] `translations.js?v=1.0` charge (status 200)
- [ ] `main.js?v=1.0` charge (status 200)
- [ ] `styles.css?v=3.2` charge (status 200)
- [ ] Aucune erreur JavaScript dans la console
- [ ] `window.translations` est défini (taper dans la console)
- [ ] Le bouton `#lang-toggle` existe dans le DOM

## 🎯 Test rapide dans la console Vercel

Copier-coller dans la console du navigateur :

```javascript
// Test 1 : Translations chargées ?
console.log('translations:', window.translations ? '✅ OUI' : '❌ NON');

// Test 2 : Combien de langues ?
console.log('Langues:', window.translations ? Object.keys(window.translations) : 'N/A');

// Test 3 : Bouton présent ?
console.log('Bouton:', document.getElementById('lang-toggle') ? '✅ OUI' : '❌ NON');

// Test 4 : Éléments à traduire ?
console.log('Éléments [data-i18n]:', document.querySelectorAll('[data-i18n]').length);

// Test 5 : Changer manuellement la langue
if (window.translations && window.translations.en) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = window.translations.en[key];
    if (text) el.textContent = text;
  });
  console.log('✅ Traduction manuelle appliquée !');
}
```

## 📞 Résultats attendus

### ✅ Tout fonctionne si :
```
translations: ✅ OUI
Langues: (2) ['fr', 'en']
Bouton: ✅ OUI
Éléments [data-i18n]: 80+
✅ Traduction manuelle appliquée !
```

### ❌ Problème si :
- `translations: ❌ NON` → translations.js ne se charge pas
- `Bouton: ❌ NON` → Le HTML n'a pas le bon ID
- `Éléments: 0` → Les attributs data-i18n ne sont pas dans le HTML

## 🆘 Si rien ne fonctionne

1. **Vider le cache complet de Vercel**
   - Dashboard → Settings → Clear Build Cache
   - Redeploy

2. **Forcer un nouveau build**
   ```bash
   git commit --allow-empty -m "Force rebuild"
   git push
   ```

3. **Vérifier les logs de build Vercel**
   - Dashboard → Deployments → Cliquer sur le déploiement → View Build Logs

4. **Tester avec un chemin absolu temporairement**
   ```html
   <script src="/assets/js/translations.js?v=1.0"></script>
   ```

## 📊 Informations du dépôt

```bash
# Dernier commit
git log --oneline -1

# Fichiers modifiés
git show --stat HEAD

# Contenu de translations.js (premières lignes)
head -20 assets/js/translations.js
```
