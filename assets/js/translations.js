/**
 * IAS Glass - Translations
 * French and English translations for the entire site
 */

const translations = {
  fr: {
    // Meta & SEO
    'meta.title': 'IAS Glass — Lunettes IA totalement autonomes | Edge AI',
    'meta.description': 'Les premières lunettes IA totalement autonomes. Analyse, contexte, aide à la décision. Sans cloud, sans smartphone. IA locale, confidentialité native.',
    'meta.og.title': 'IAS Glass — Lunettes IA totalement autonomes',
    'meta.og.description': 'Les premières lunettes IA totalement autonomes. Edge AI, LLM local, confidentialité native.',
    
    // Navigation
    'nav.vision': 'Vision',
    'nav.tech': 'Tech',
    'nav.demo': 'Démo',
    'nav.roadmap': 'Roadmap',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.join': 'Rejoindre la liste',
    'nav.menu': 'Menu',
    'nav.theme': 'Changer le thème',
    
    // Skip link
    'skip.content': 'Aller au contenu principal',
    
    // Hero Section
    'hero.title': 'IAS Glass',
    'hero.subtitle': 'Les premières lunettes IA totalement autonomes',
    'hero.description': 'Analyse. Contexte. Aide à la décision. Sans cloud. Sans smartphone. 100% sur l\'appareil.',
    'hero.feature1.title': 'IA locale',
    'hero.feature1.desc': 'LLM embarqué, latence < 30 ms',
    'hero.feature2.title': 'Capteurs multi-spectre',
    'hero.feature2.desc': 'RGB, IR, thermique',
    'hero.feature3.title': 'Confidentialité native',
    'hero.feature3.desc': 'chiffrement bout-à-bout, opt-in',
    'hero.cta.primary': 'Rejoindre la liste',
    'hero.cta.secondary': 'Lire le manifeste',
    'hero.img.alt': 'IAS Glass - Lunettes IA autonomes avec capteurs multi-spectre et affichage HUD thermique',
    
    // Gallery Section
    'gallery.title': 'Découvrez IAS Glass en images',
    'gallery.subtitle': 'Design, technologie et innovation',
    'gallery.prev': 'Image précédente',
    'gallery.next': 'Image suivante',
    'gallery.goto': 'Aller à l\'image',
    'gallery.alt': 'IAS Glass - Vue',
    
    // Vision Section
    'vision.title': 'L\'humain au centre. La machine en renfort.',
    'vision.p1': 'Nous construisons un assistant cognitif porté, réversible et éthique. IAS Glass étend votre perception, accélère votre analyse et respecte votre souveraineté.',
    'vision.p2': 'Vous les portez : vous pensez plus vite. Vous les retirez : vous redevenez 100% vous.',
    'vision.p3': 'Pas d\'implant, pas d\'intrusion—juste de la clarté.',
    
    // Features Section
    'features.title': 'Fonctionnalités clés',
    'features.1.title': 'Autonomie totale',
    'features.1.desc': 'Edge computing, pas de dépendance réseau.',
    'features.2.title': 'Reconnaissance de contexte',
    'features.2.desc': 'Objets, température, signaux environnementaux.',
    'features.3.title': 'Interface AR/HUD',
    'features.3.desc': 'Information juste-à-temps, non intrusive.',
    'features.4.title': 'Confidentialité',
    'features.4.desc': 'Aucune donnée partagée sans consentement explicite.',
    
    // Tech Section
    'tech.title': 'Architecture technique',
    'tech.subtitle': 'Stack d\'exécution locale',
    'tech.img.alt': 'Diagramme d\'architecture IAS Glass montrant l\'IA embarquée et autonome avec l\'humain au centre, entouré des capteurs intelligents, du moteur Edge IA, de l\'interface AR/HUD et du cloud optionnel sécurisé',
    'tech.1': 'SoC ARM + NPU',
    'tech.1.desc': '(classe XR)',
    'tech.2': 'LLM compressé',
    'tech.2.desc': '(4-bit quant., offline)',
    'tech.3': 'Pipeline vision/audio',
    'tech.3.desc': 'optimisé',
    'tech.4': 'Mises à jour OTA',
    'tech.4.desc': 'chiffrées',
    
    // Demo Section
    'demo.title': 'Démonstration',
    'demo.subtitle': 'Ce que vous voyez, quand vous en avez besoin',
    'demo.1.title': 'Maintenance',
    'demo.1.desc': 'Détection d\'objet + check température critique',
    'demo.2.title': 'Sécurité',
    'demo.2.desc': 'Alerte chaleur anormale zone restreinte',
    'demo.3.title': 'Productivité',
    'demo.3.desc': 'Résumé vocal d\'un environnement (mains libres)',
    
    // Roadmap Section
    'roadmap.title': 'Roadmap',
    'roadmap.1.title': 'T0-3 mois',
    'roadmap.1.desc': 'Design industriel & specs',
    'roadmap.2.title': 'T3-6 mois',
    'roadmap.2.desc': 'IA embarquée & capteurs',
    'roadmap.3.title': 'T6-9 mois',
    'roadmap.3.desc': 'Prototype public',
    'roadmap.4.title': 'T9-12 mois',
    'roadmap.4.desc': 'Pré-séries & industrialisation',
    
    // Comparison Section
    'comparison.title': 'Comparatif',
    'comparison.product1': 'Apple Vision',
    'comparison.product2': 'Ray-Ban Meta',
    'comparison.product3': 'IAS Glass',
    'comparison.cloud': 'Cloud-dépendant',
    'comparison.local': 'IA locale',
    'comparison.autonomy': 'Autonomie',
    'comparison.privacy': 'Confidentialité',
    'comparison.sensors': 'Capteurs',
    'comparison.yes': 'Oui',
    'comparison.no': 'Non',
    'comparison.weak': 'Faible',
    'comparison.medium': 'Moyenne',
    'comparison.native': 'Native',
    
    // FAQ Section
    'faq.title': 'FAQ',
    'faq.1.q': 'Pourquoi pas de cloud ?',
    'faq.1.a': 'Confidentialité et latence. Vos données restent sur l\'appareil, le traitement est instantané.',
    'faq.2.q': 'Est-ce légal/RGPD ?',
    'faq.2.a': 'Consentement explicite, minimisation, opt-in, effacement. Conformité RGPD par design.',
    'faq.3.q': 'Batterie & chaleur ?',
    'faq.3.a': 'Gestion thermique avancée + profils d\'usage adaptatifs pour autonomie optimale.',
    'faq.4.q': 'Prix ?',
    'faq.4.a': 'Cible premium early adopters ; prix communiqué à la pré-série.',
    
    // Contact Section
    'contact.title': 'Investissez dans l\'interface humaine suivante',
    'contact.subtitle': 'Rejoignez-nous dans la construction de l\'avenir de l\'augmentation cognitive.',
    'contact.email': 'Contact :',
    'contact.form.name': 'Nom',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Envoyer',
    'contact.form.success': 'Merci pour votre message ! Votre client email va s\'ouvrir.',
    
    // Footer
    'footer.manifesto': 'Manifeste',
    'footer.privacy': 'Confidentialité',
    'footer.legal': 'Mentions légales',
    'footer.copyright': '© 2024 IA Solution. Tous droits réservés.'
  },
  
  en: {
    // Meta & SEO
    'meta.title': 'IAS Glass — Fully Autonomous AI Glasses | Edge AI',
    'meta.description': 'The first fully autonomous AI glasses. Analysis, context, decision support. No cloud, no smartphone. Local AI, native privacy.',
    'meta.og.title': 'IAS Glass — Fully Autonomous AI Glasses',
    'meta.og.description': 'The first fully autonomous AI glasses. Edge AI, local LLM, native privacy.',
    
    // Navigation
    'nav.vision': 'Vision',
    'nav.tech': 'Tech',
    'nav.demo': 'Demo',
    'nav.roadmap': 'Roadmap',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.join': 'Join the List',
    'nav.menu': 'Menu',
    'nav.theme': 'Toggle theme',
    
    // Skip link
    'skip.content': 'Skip to main content',
    
    // Hero Section
    'hero.title': 'IAS Glass',
    'hero.subtitle': 'The first fully autonomous AI glasses',
    'hero.description': 'Analysis. Context. Decision support. No cloud. No smartphone. 100% on device.',
    'hero.feature1.title': 'Local AI',
    'hero.feature1.desc': 'Embedded LLM, latency < 30 ms',
    'hero.feature2.title': 'Multi-spectrum sensors',
    'hero.feature2.desc': 'RGB, IR, thermal',
    'hero.feature3.title': 'Native privacy',
    'hero.feature3.desc': 'end-to-end encryption, opt-in',
    'hero.cta.primary': 'Join the List',
    'hero.cta.secondary': 'Read the Manifesto',
    'hero.img.alt': 'IAS Glass - Autonomous AI glasses with multi-spectrum sensors and thermal HUD display',
    
    // Gallery Section
    'gallery.title': 'Discover IAS Glass in Images',
    'gallery.subtitle': 'Design, technology and innovation',
    'gallery.prev': 'Previous image',
    'gallery.next': 'Next image',
    'gallery.goto': 'Go to image',
    'gallery.alt': 'IAS Glass - View',
    
    // Vision Section
    'vision.title': 'Human-centered. Machine-assisted.',
    'vision.p1': 'We are building a wearable, reversible, and ethical cognitive assistant. IAS Glass extends your perception, accelerates your analysis, and respects your sovereignty.',
    'vision.p2': 'You wear them: you think faster. You take them off: you are 100% yourself again.',
    'vision.p3': 'No implant, no intrusion—just clarity.',
    
    // Features Section
    'features.title': 'Key Features',
    'features.1.title': 'Total Autonomy',
    'features.1.desc': 'Edge computing, no network dependency.',
    'features.2.title': 'Context Recognition',
    'features.2.desc': 'Objects, temperature, environmental signals.',
    'features.3.title': 'AR/HUD Interface',
    'features.3.desc': 'Just-in-time information, non-intrusive.',
    'features.4.title': 'Privacy',
    'features.4.desc': 'No data shared without explicit consent.',
    
    // Tech Section
    'tech.title': 'Technical Architecture',
    'tech.subtitle': 'Local execution stack',
    'tech.img.alt': 'IAS Glass architecture diagram showing embedded and autonomous AI with the human at the center, surrounded by smart sensors, Edge AI engine, AR/HUD interface, and optional secure cloud',
    'tech.1': 'ARM SoC + NPU',
    'tech.1.desc': '(XR class)',
    'tech.2': 'Compressed LLM',
    'tech.2.desc': '(4-bit quant., offline)',
    'tech.3': 'Vision/audio pipeline',
    'tech.3.desc': 'optimized',
    'tech.4': 'OTA updates',
    'tech.4.desc': 'encrypted',
    
    // Demo Section
    'demo.title': 'Demonstration',
    'demo.subtitle': 'What you see, when you need it',
    'demo.1.title': 'Maintenance',
    'demo.1.desc': 'Object detection + critical temperature check',
    'demo.2.title': 'Security',
    'demo.2.desc': 'Abnormal heat alert in restricted area',
    'demo.3.title': 'Productivity',
    'demo.3.desc': 'Voice summary of environment (hands-free)',
    
    // Roadmap Section
    'roadmap.title': 'Roadmap',
    'roadmap.1.title': 'Q0-3 months',
    'roadmap.1.desc': 'Industrial design & specs',
    'roadmap.2.title': 'Q3-6 months',
    'roadmap.2.desc': 'Embedded AI & sensors',
    'roadmap.3.title': 'Q6-9 months',
    'roadmap.3.desc': 'Public prototype',
    'roadmap.4.title': 'Q9-12 months',
    'roadmap.4.desc': 'Pre-series & industrialization',
    
    // Comparison Section
    'comparison.title': 'Comparison',
    'comparison.product1': 'Apple Vision',
    'comparison.product2': 'Ray-Ban Meta',
    'comparison.product3': 'IAS Glass',
    'comparison.cloud': 'Cloud-dependent',
    'comparison.local': 'Local AI',
    'comparison.autonomy': 'Autonomy',
    'comparison.privacy': 'Privacy',
    'comparison.sensors': 'Sensors',
    'comparison.yes': 'Yes',
    'comparison.no': 'No',
    'comparison.weak': 'Weak',
    'comparison.medium': 'Medium',
    'comparison.native': 'Native',
    
    // FAQ Section
    'faq.title': 'FAQ',
    'faq.1.q': 'Why no cloud?',
    'faq.1.a': 'Privacy and latency. Your data stays on the device, processing is instant.',
    'faq.2.q': 'Is it legal/GDPR compliant?',
    'faq.2.a': 'Explicit consent, minimization, opt-in, erasure. GDPR compliance by design.',
    'faq.3.q': 'Battery & heat?',
    'faq.3.a': 'Advanced thermal management + adaptive usage profiles for optimal battery life.',
    'faq.4.q': 'Price?',
    'faq.4.a': 'Targeting premium early adopters; price announced at pre-series.',
    
    // Contact Section
    'contact.title': 'Invest in the Next Human Interface',
    'contact.subtitle': 'Join us in building the future of cognitive augmentation.',
    'contact.email': 'Contact:',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send',
    'contact.form.success': 'Thank you for your message! Your email client will open.',
    
    // Footer
    'footer.manifesto': 'Manifesto',
    'footer.privacy': 'Privacy',
    'footer.legal': 'Legal',
    'footer.copyright': '© 2024 IA Solution. All rights reserved.'
  }
};

// Make translations available globally
window.translations = translations;
