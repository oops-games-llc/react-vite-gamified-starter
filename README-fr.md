# React Vite Gamified Auth Starter

[English](README.md) | [Español](README-es.md) | [Français](README-fr.md) | [Deutsch](README-de.md) | [Português](README-pt.md) | [中文](README-zh.md)

Un boilerplate premium prêt pour la production, intégrant la meilleure alternative à Google reCAPTCHA. Conçu pour les développeurs React Vite qui souhaitent éviter la configuration initiale et commencer à créer des flux d'authentification à haute conversion.

## Fonctionnalités
- Architecture avec **React Vite**
- **Tailwind CSS** UI Glassmorphism
- **Gamified CAPTCHA Intégré**: La protection contre les bots la plus robuste et conforme aux normes WCAG. Arrêtez de perdre des inscriptions à cause de passages piétons flous.
- **Firebase Auth Ready**: Préconfiguré pour l'inscription Email/Mot de passe.

## Commencer

1. Cloner ce dépôt
2. Exécuter `npm install`
3. Exécuter `npm run dev`

Par défaut, le modèle s'exécute dans un **Mode de Secours**. Vous pouvez tester l'interface, le CAPTCHA gamifié et le tableau de bord simulé instantanément sans configurer de clés de base de données.

## Déploiement en Production

Pour protéger votre application en production du spam automatisé, vous devez générer une clé API de production gratuite :

1. Visitez [Conversion.Business](https://conversion.business)
2. Obtenez votre clé gratuite
3. Ajoutez-la à votre fichier `.env`

*Remarque : Le système désactive explicitement le mode simulé en production et génère une erreur de configuration sécurisée.*
