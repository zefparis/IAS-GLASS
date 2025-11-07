# 📸 Instructions pour remplacer l'image Hero

## Image à utiliser
Utilisez **l'image 2** (lunettes noires photoréalistes sur fond noir avec affichage HUD "75.5° OBJECT")

## Étapes

### 1. Sauvegarder l'image
Sauvegardez l'image des lunettes noires dans :
```
/home/iasolution/CascadeProjects/ias-glass-landing/assets/img/hero-device.png
```

### 2. Optimisation recommandée (optionnelle)
Pour de meilleures performances, optimisez l'image :

```bash
# Si vous avez ImageMagick installé
convert hero-device.png -quality 85 -resize 1200x800 hero-device-optimized.png

# Ou utilisez un outil en ligne comme TinyPNG
```

### 3. Format WebP (recommandé pour performance)
Créez aussi une version WebP pour navigateurs modernes :

```bash
# Si vous avez cwebp installé
cwebp -q 85 assets/img/hero-device.png -o assets/img/hero-device.webp
```

## ✅ Fait automatiquement
Le HTML a déjà été mis à jour pour utiliser :
- Format WebP en priorité (meilleure compression)
- PNG en fallback (compatibilité)
- SVG comme dernière option

## 📊 Tailles recommandées
- **Largeur max** : 1200-1600px
- **Qualité** : 85% (bon compromis qualité/poids)
- **Poids cible** : < 200KB

L'image actuelle que vous souhaitez utiliser est parfaite - elle est :
- ✅ Professionnelle et premium
- ✅ Sur fond noir (s'intègre parfaitement au dark theme)
- ✅ Montre le HUD en action
- ✅ Photo-réaliste (crédibilité produit)
