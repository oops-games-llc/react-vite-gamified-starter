# React Vite Gamified Auth Starter

[English](README.md) | [Español](README-es.md) | [Français](README-fr.md) | [Deutsch](README-de.md) | [Português](README-pt.md) | [中文](README-zh.md)

Un boilerplate premium y listo para producción que incluye la mejor alternativa a Google reCAPTCHA. Diseñado para desarrolladores de React Vite que desean omitir la configuración inicial y comenzar a crear flujos de autenticación de alta conversión.

## Características
- Arquitectura SPA/SSR con **React Vite**
- **Tailwind CSS** UI Glassmorphism
- **Gamified CAPTCHA Integrado**: La protección contra bots más robusta y compatible con WCAG disponible. Deja de perder registros por culpa de semáforos borrosos.
- **Firebase Auth Ready**: Preconfigurado para el registro de correo electrónico/contraseña.

## Empezar

1. Clonar este repositorio
2. Ejecutar `npm install`
3. Ejecutar `npm run dev`

Por defecto, la plantilla se ejecuta en un **Modo de Respaldo**. Puedes probar la interfaz, el CAPTCHA gamificado y el panel de control simulado al instante sin configurar ninguna clave de base de datos.

## Despliegue en Producción

Para proteger tu aplicación en producción del spam automatizado, debes generar una clave API de producción gratuita:

1. Visita [Conversion.Business](https://conversion.business)
2. Obtén tu clave gratuita
3. Añádela a tu archivo `.env`

*Nota: El sistema deshabilita explícitamente el Modo Simulado en producción y lanza un error de configuración. Falla de forma segura.*
