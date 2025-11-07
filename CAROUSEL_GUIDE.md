# 🎠 Guide du Carousel IAS Glass

## 📸 Carousel intégré avec succès !

Un carousel premium a été ajouté à la landing page avec vos 10 images de galerie.

---

## 📍 Emplacement

Le carousel se situe **entre la section Hero et la section Vision**, offrant une galerie immersive des lunettes IAS Glass.

---

## ✨ Fonctionnalités

### Navigation
- **Boutons flèches** - Gauche/Droite pour naviguer
- **Dots indicateurs** - Cliquez pour aller à une image spécifique
- **Clavier** - Flèches ←/→ quand le carousel est visible
- **Tactile** - Swipe gauche/droite sur mobile/tablette
- **Souris** - Drag & drop pour faire glisser

### Autoplay
- **Défilement automatique** toutes les 5 secondes
- **Pause au survol** (desktop)
- **Pause lors d'interaction** (touch, click, drag)
- **Respect `prefers-reduced-motion`** pour l'accessibilité

### Responsive
- Adapté à tous les écrans (mobile → desktop)
- Boutons et dots redimensionnés sur mobile
- Touch gestures optimisés

---

## 🎨 Personnalisation

### Modifier le délai d'autoplay

Dans `/assets/js/main.js`, ligne ~253 :

```javascript
autoplayDelay: 5000, // 5 secondes (5000ms)
```

### Désactiver l'autoplay

Dans `/assets/js/main.js`, commentez les lignes 293-298 :

```javascript
// Autoplay (pause on hover)
// this.startAutoplay();
// carousel.addEventListener('mouseenter', () => this.stopAutoplay());
// carousel.addEventListener('mouseleave', () => this.startAutoplay());
```

### Changer les couleurs

Dans `/src/styles.css`, lignes 209-229 (dots) :

```css
.carousel-dot {
  background: rgba(147, 162, 177, 0.4); /* Couleur inactive */
}

.carousel-dot.active {
  background: var(--accent); /* Couleur active */
}
```

### Modifier les transitions

Dans `/src/styles.css`, ligne 169 :

```css
.carousel-track {
  transition: transform 0.5s cubic-bezier(0.4, 0.0, 0.2, 1);
}
```

---

## 📁 Images de la galerie

Les images sont stockées dans `/assets/img/` :

```
gallery-1.png  (1.8 MB)
gallery-2.png  (2.1 MB)
gallery-3.png  (1.7 MB)
gallery-4.png  (1.9 MB)
gallery-5.png  (2.0 MB)
gallery-6.png  (2.2 MB)
gallery-7.png  (1.6 MB)
gallery-8.png  (1.9 MB)
gallery-9.png  (2.0 MB)
gallery-10.png (2.0 MB)
```

**Total : ~19.2 MB**

### ⚡ Optimisation recommandée

Pour de meilleures performances, optimisez les images :

```bash
# Installer imagemagick et webp si nécessaire
sudo apt-get install imagemagick webp

# Optimiser toutes les images
cd assets/img
for i in gallery-*.png; do
  # Réduire la taille
  convert "$i" -quality 85 -resize 1200x800\> "optimized-$i"
  
  # Créer version WebP
  cwebp -q 85 "$i" -o "${i%.png}.webp"
done
```

Cela pourrait réduire le poids total à ~5-7 MB.

### 📝 Ajouter/Modifier des images

1. Ajoutez vos images dans `/assets/img/` avec le format `gallery-X.png`
2. Mettez à jour le HTML dans `/index.html` (lignes 95-133)
3. Ajoutez/supprimez des dots correspondants (lignes 151-160)
4. Le JavaScript s'adapte automatiquement au nombre d'images

---

## 🎯 Performance

### Budgets respectés
- **CSS** : 25 KB (✅ < 80 KB)
- **JS** : 14 KB (✅ < 25 KB)
- **Images** : Lazy loading activé

### Lighthouse
Le carousel est optimisé pour :
- ⚡ Performance (transitions CSS, pas de bibliothèque externe)
- ♿ Accessibilité (ARIA labels, navigation clavier)
- 📱 Mobile (touch gestures, responsive)

---

## 🔧 Dépannage

### Le carousel ne démarre pas
Vérifiez la console DevTools pour erreurs JavaScript.

### Les images ne s'affichent pas
Vérifiez que les chemins sont corrects : `/assets/img/gallery-X.png`

### L'autoplay ne fonctionne pas
Vérifiez si `prefers-reduced-motion` est activé dans votre OS.

### Le drag ne fonctionne pas
Vérifiez que JavaScript est activé et qu'il n'y a pas de conflits avec d'autres scripts.

---

## 📊 Compatibilité

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ iOS Safari 14+
- ✅ Android Chrome 90+

**Technologie** : Vanilla JavaScript (ES6), pas de dépendances externes

---

## 🎨 Exemple d'utilisation avancée

### Ajouter un caption sur chaque image

Dans `/index.html`, modifiez les slides :

```html
<div class="carousel-slide min-w-full relative">
  <img src="/assets/img/gallery-1.png" alt="IAS Glass - Vue 1" class="w-full h-auto object-cover rounded-xl" loading="lazy">
  <div class="absolute bottom-4 left-4 bg-black/60 text-white px-4 py-2 rounded">
    <p>Caption de l'image 1</p>
  </div>
</div>
```

### Ajouter un compteur d'images

Dans `/index.html`, après les dots :

```html
<div class="text-center mt-4 text-sm text-[var(--muted)]">
  <span id="carousel-counter">1 / 10</span>
</div>
```

Dans `/assets/js/main.js`, dans `updateCarousel()` :

```javascript
// Update counter
const counter = document.getElementById('carousel-counter');
if (counter) {
  counter.textContent = `${this.currentSlide + 1} / ${this.totalSlides}`;
}
```

---

## 🚀 C'est prêt !

Le carousel est **100% fonctionnel** et prêt pour production. Rafraîchissez la page sur **http://localhost:8000** pour le voir en action ! 🎉
