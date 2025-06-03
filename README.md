# MFM Digital - Formulaire de Contact

![MFM Digital Logo](page/assets/frogino-removebg-preview.png)

🌐 Déploiement en Ligne
👉 Lien vers la démo : mfmdigital-grenouille-test.vercel.app

## 📋 Description du Projet

Ce projet présente un formulaire de contact moderne et responsive pour l'agence **MFM Digital**. Cette page web statique respecte fidèlement le design du maquette Figma fournie : [Contactez-nous - MFM Digital](https://www.figma.com/file/a9HCjyZUuYb4PobuHAH1Aa/Contactez-nous?type=design&node-id=0%3A1&mode=design&t=3tTBNGfPn8FsxPxS-1).

L'implémentation traduit parfaitement la vision créative du design reflétant l'identité visuelle distinctive de l'agence.

## ✨ Fonctionnalités

### 🎨 Design & Interface
- **Design Responsive** : Adaptation parfaite sur tous les appareils (desktop, tablette, mobile)
- **Thème Visuel Unique** : Integration d'éléments visuels de grenouilles/crapauds
- **Animation Fluide** : Transitions CSS et interactions utilisateur soignées
- **Interface Moderne** : Design épuré avec palette de couleurs cohérente

### 🔧 Fonctionnalités Interactives
- **Toggle Switch Animé** : Sélecteur Crapaud/Grenouille avec animation personnalisée
- **Tooltip Téléphone** : Fonctionnalité de copie rapide du numéro de téléphone
- **Checkbox Personnalisé** : Checkbox de consentement avec design sur-mesure
- **Validation de Formulaire** : Champs requis avec validation HTML5
- **Effets Hover** : Interactions visuelles sur les éléments cliquables

### 📱 Responsive Design
- **Desktop** (1440px+) : Layout complet avec positionnement absolu
- **Tablette Grande** (1025px-1439px) : Adaptation en flexbox
- **Tablette** (768px-1024px) : Réorganisation verticale
- **Mobile Large** (481px-767px) : Optimisation tactile
- **Mobile** (320px-480px) : Interface condensée
- **Très Petit Écran** (<320px) : Version ultra-compacte

## 🏗️ Structure du Projet

```
mfm-digital-contact/
├── page/
│   ├── assets/
│   │   ├── frog.png # Image de fond header
│   │   ├── frogino-removebg-preview.png # Logo favicon
│   │   ├── Group.png # Icône crapaud
│   │   ├── Vector.png # Icône grenouille
│   │   ├── uiw_facebook.png # Icône Facebook
│   │   └── linkedin.png # Icône LinkedIn
│   ├── index.html # Page principale
│   ├── style.css # Styles CSS responsifs
│   └── script.js # Fonctionnalités JavaScript
├── README.md # Documentation du projet
└── package.json # Configuration npm 

```

## 🛠️ Technologies Utilisées

### Frontend
- **HTML5** : Structure sémantique moderne
- **CSS3** : 
  - Flexbox & Grid Layout
  - Animations & Transitions
  - Media Queries pour le responsive
  - Variables CSS personnalisées
- **JavaScript (Vanilla)** :
  - Manipulation du DOM
  - Gestion des événements
  - API Clipboard pour la copie
  - Interactions utilisateur avancées

### Design Patterns
- **Mobile-First Approach** : Développement orienté mobile
- **Progressive Enhancement** : Amélioration progressive des fonctionnalités
- **Semantic HTML** : Structure accessible et SEO-friendly

## 📦 Installation & Utilisation

### Installation Locale
```bash
# Cloner le repository
git clone https://github.com/votre-username/mfm-digital-contact.git

# Naviguer dans le dossier
cd mfm-digital-contact

# Ouvrir avec un serveur local (optionnel)
# Avec Python 3
python -m http.server 8000

# Avec Node.js (si installé)
npx serve .

# Ou simplement ouvrir index.html dans un navigateur
```

### Structure des Fichiers
- Assurez-vous que tous les assets sont dans le dossier `assets/`
- Le fichier CSS doit être dans le même répertoire que `index.html`
- Le script JavaScript doit être dans le même répertoire

## 🚀 Déploiement

### Hébergement Statique
Ce projet étant une page web statique, il peut être déployé sur n'importe quelle plateforme d'hébergement :

- **GitHub Pages** : Hébergement gratuit directement depuis votre repository
- **Netlify** : Déploiement automatique avec drag & drop ou Git
- **Surge.sh** : Déploiement en ligne de commande simple
- **Firebase Hosting** : Solution de Google pour sites statiques
- **Serveur Web classique** : Apache, Nginx, ou tout serveur HTTP

### Prérequis de Déploiement
```bash
# Structure minimale requise
├── index.html              # Point d'entrée
├── style.css              # Styles obligatoires
├── script.js              # Fonctionnalités JavaScript
└── assets/                # Dossier d'images requis
    ├── frog.png
    ├── frogino-removebg-preview.png
    ├── Group.png
    ├── Vector.png
    ├── uiw_facebook.png
    └── linkedin.png
```

## 🎨 Personnalisation

### Couleurs Principales
```css
:root {
  --primary-green: #9DD129;
  --primary-green-hover: #8cc214;
  --text-color: #000000;
  --border-color: #D0D0D0;
  --background-white: #FFFFFF;
}
```

### Points de Rupture Responsive
```css
/* Desktop */
@media screen and (min-width: 1440px)

/* Tablette Grande */
@media screen and (max-width: 1439px) and (min-width: 1025px)

/* Tablette */
@media screen and (max-width: 1024px)

/* Mobile Large */
@media screen and (max-width: 767px)

/* Mobile */
@media screen and (max-width: 480px)

/* Très Petit */
@media screen and (max-width: 319px)
```

## 🔧 Fonctionnalités JavaScript

### Copie du Numéro de Téléphone
```javascript
function copyPhone() {
  const phoneNumber = "+32 2 880 96 92";
  navigator.clipboard.writeText(phoneNumber);
}
```

### Toggle Switch Interactif
- Alternance automatique entre Crapaud/Grenouille
- Animation fluide du slider
- Changement des icônes et couleurs

### Checkbox Personnalisé
- Design sur-mesure respectant la charte graphique
- Animation d'apparition/disparition
- Accessibilité maintenue

## 📊 Performance & SEO

### Optimisations Appliquées
- **Images Optimisées** : Formats PNG optimisés pour le web
- **CSS Minifié** : Structure optimisée pour le chargement
- **JavaScript Léger** : Code vanilla sans dépendances
- **Responsive Images** : Adaptation aux différentes résolutions
- **Semantic HTML** : Structure SEO-friendly

### Métriques Cibles
- **First Contentful Paint** : <1.5s
- **Time to Interactive** : <2s
- **Cumulative Layout Shift** : <0.1
- **Largest Contentful Paint** : <2.5s

## 🧪 Tests & Validation

### Tests Recommandés
```bash
# Validation HTML
# Utiliser https://validator.w3.org/

# Test Responsive
# Chrome DevTools > Device Toolbar

# Test Performance
# Chrome DevTools > Lighthouse

# Test Accessibilité
# axe DevTools extension
```

### Compatibilité Navigateurs
- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+
- ✅ Mobile Safari iOS 13+
- ✅ Chrome Mobile 80+

## 📞 Contact & Support

### Informations MFM Digital
- **Adresse** : Rue Middelbourg 66, 1170 Watermael-Boitsfort
- **Téléphone** : +32 2 880 96 92
- **Email** : info@mfmdigital.com
- **Facebook** : [MFM Digital Agency](https://www.facebook.com/mfmdigitalagency/)
- **LinkedIn** : [MFM Digital](https://www.linkedin.com/company/mfm-digital/)

### Développement
Pour toute question technique concernant ce projet, veuillez ouvrir une issue sur GitHub.

## 📄 License

Ce projet est la propriété de MFM Digital. Tous droits réservés.

---

**Développé par Yosr Mekki pour MFM Digital**

*Expertise personnalisée et accompagnement sur-mesure pour vos projets web*
