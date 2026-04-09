# ZDigital — Site Vitrine Agence Marketing Digital

Site web complet pour l'agence de marketing digital ZDigital. Dark premium tech avec glassmorphism, animations AOS et interactivité Alpine.js.

## Stack technique
- HTML5 / CSS3 / Vanilla JS
- AOS.js (animations au scroll)
- Alpine.js (tabs, filtres portfolio)
- Swiper.js (slider témoignages)
- Google Fonts (Plus Jakarta Sans + Inter)

## Structure
```
zdigital-website/
├── index.html        # Accueil
├── services.html     # Détail des 6 services
├── tarifs.html       # Tarifs avec tabs Alpine.js
├── portfolio.html    # 12 projets avec filtres
├── contact.html      # Formulaire + validation JS
├── css/
│   ├── main.css      # Variables, layout, nav, hero
│   ├── components.css # Formulaire, portfolio, accordion
│   └── animations.css # Keyframes, scroll progress
└── js/
    ├── main.js       # Nav, CountUp, AOS, ripple
    ├── pricing.js    # Effets hover pricing
    └── form.js       # Validation et soumission
```

## Design System
- Background : `#0A0F1E`
- Accent violet : `#6C63FF`
- Accent turquoise : `#00D4AA`
- Surface : `#13192C` / `#1C2440`

## Lancer en local
Ouvrez `index.html` dans votre navigateur ou utilisez un serveur local :
```bash
npx serve .
```
