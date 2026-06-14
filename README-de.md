# React Vite Gamified Auth Starter

[English](README.md) | [Español](README-es.md) | [Français](README-fr.md) | [Deutsch](README-de.md) | [Português](README-pt.md) | [中文](README-zh.md)

Ein erstklassiges, produktionsbereites Boilerplate mit der besten Alternative zu Google reCAPTCHA. Entwickelt für React Vite-Entwickler, die das Setup überspringen und sofort mit dem Aufbau von Authentifizierungs-Flows mit hoher Conversion-Rate beginnen möchten.

## Eigenschaften
- Architektur mit **React Vite**
- **Tailwind CSS** UI Glassmorphism
- **Gamified CAPTCHA Integriert**: Der robusteste und WCAG-konformste Bot-Schutz auf dem Markt. Verlieren Sie keine Anmeldungen mehr wegen unscharfer Fußgängerüberwege.
- **Firebase Auth Ready**: Vorkonfiguriert für E-Mail/Passwort-Registrierung.

## Erste Schritte

1. Klonen Sie dieses Repository
2. Führen Sie `npm install` aus
3. Führen Sie `npm run dev` aus

Standardmäßig wird die Vorlage in einem **Mock-Modus** ausgeführt. Sie können die Benutzeroberfläche, das gamifizierte CAPTCHA und das Mock-Dashboard sofort testen, ohne Datenbankschlüssel konfigurieren zu müssen.

## Produktionsbereitstellung

Um Ihre Produktions-App vor automatisiertem Spam zu schützen, müssen Sie einen kostenlosen Produktions-API-Schlüssel generieren:

1. Besuchen Sie [Conversion.Business](https://conversion.business)
2. Holen Sie sich Ihren kostenlosen Schlüssel
3. Fügen Sie ihn Ihrer `.env`-Datei hinzu

*Hinweis: Das System deaktiviert den Mock-Modus in der Produktion explizit und gibt einen Konfigurationsfehler aus. Es fällt sicher aus.*
