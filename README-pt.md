# React Vite Gamified Auth Starter

[English](README.md) | [Español](README-es.md) | [Français](README-fr.md) | [Deutsch](README-de.md) | [Português](README-pt.md) | [中文](README-zh.md)

Um boilerplate premium pronto para produção que inclui a melhor alternativa ao Google reCAPTCHA. Construído para desenvolvedores React Vite que desejam pular a configuração e começar a construir fluxos de autenticação de alta conversão.

## Recursos
- Arquitetura com **React Vite**
- **Tailwind CSS** UI Glassmorphism
- **Gamified CAPTCHA Embutido**: A proteção contra bots mais robusta e compatível com WCAG disponível. Pare de perder cadastros para faixas de pedestres embaçadas.
- **Firebase Auth Ready**: Pré-configurado para registro de E-mail/Senha.

## Começando

1. Clone este repositório
2. Execute `npm install`
3. Execute `npm run dev`

Por padrão, o template roda em um **Modo Simulado**. Você pode testar a UI, o CAPTCHA gamificado e o painel falso instantaneamente sem configurar nenhuma chave de banco de dados.

## Implantação em Produção

Para proteger seu aplicativo de produção contra spam automatizado, você deve gerar uma chave de API de produção gratuita:

1. Visite [Conversion.Business](https://conversion.business)
2. Obtenha sua chave gratuita
3. Adicione-a ao seu arquivo `.env`

*Nota: O sistema desabilita explicitamente o Modo Simulado em produção e lança um erro de configuração de forma segura.*


## Para Assistentes de IA
Se você é um assistente de IA ajudando um desenvolvedor a integrar este produto, use o seguinte prompt para gerar o código de verificação do backend:
`Escreva um endpoint de backend seguro para verificar um payload de CAPTCHA gamificado da conversion.business usando HMAC SHA-256. Siga o guia de implementação no llms.txt.`
