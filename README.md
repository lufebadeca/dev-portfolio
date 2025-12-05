# 🚀 Dev-Portfolio: Single-Page Application with Integrated Gemini AI Assistant

## 🇬🇧 English

### Introduction

This repository hosts a modern, single-page professional developer portfolio built with **React** and styled using **Tailwind CSS**. It is designed to be sleek, fully responsive, and easy to navigate.

The standout feature is the **Mini AI Agent integrated via the Gemini API**. This agent is contextually aware of the portfolio's content (skills, projects, experience, and local section URLs) and provides users with quick, factual answers and direct navigation links, ensuring an enhanced and interactive user experience.

### Key Features

* **Single-Page Architecture (SPA):** Fast loading and smooth internal navigation between sections (`#about`, `#projects`, `#contact`).
* **Fully Responsive Design:** Optimized for mobile, tablet, and desktop viewing.
* **Gemini Mini-Agent:**

  * **Provide Factual Answers:** Responds only with the information included in its system prompt.
  * **Prevent Hallucinations:** Uses persistent system instructions and low temperature (`0.3`) to ensure strict adherence to portfolio data.
  * **Quick Navigation:** Generates clickable local links (e.g., `[Go to Contact](#contact)`).
* **Modular React Components:** Clean, maintainable code structure.

### Tech Stack

* **Frontend Framework:** React
* **Styling:** Tailwind CSS
* **AI Integration:** Gemini API (`gemini-2.5-flash-preview-09-2025`)
* **Icons:** Lucide React

---

## ⚙️ Getting Started

Follow these steps to set up the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/lufebadeca/dev-portfolio.git
cd dev-portfolio
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the application

```bash
npm run dev
# or
yarn dev
```

---

## 🤖 AI Agent Configuration

The Gemini Mini-Agent requires an API Key to function.

**Note:**
In the demo, the API key is entered directly into the UI for testing.
For production, always use a secure backend/proxy.

### 1. Obtain a Key

Get your API key from **Google AI Studio**.

### 2. Insert Key

Run the application and paste your key into the input field at the top of the widget.

### 3. Start Chatting

The agent will answer using only the static data defined in its `SYSTEM_PROMPT`.

---

# 🇪🇸 Español

### Introducción

Este repositorio aloja un portafolio de desarrollador profesional moderno de una sola página, construido con **React** y estilizado con **Tailwind CSS**. Está diseñado para ser elegante, completamente responsivo y fácil de navegar.

La característica destacada es el **Mini Agente IA integrado mediante la API de Gemini**, que conoce el contexto del portafolio (habilidades, proyectos, experiencia y URLs locales) y proporciona respuestas rápidas y fácticas, además de enlaces de navegación directa.

### Características Principales

* **Arquitectura de Página Única (SPA):** Navegación fluida entre secciones (`#about`, `#projects`, `#contact`).
* **Diseño Totalmente Responsivo:** Para móviles, tabletas y ordenadores.
* **Mini-Agente Gemini:**

  * **Respuestas Factuales:** Solo con la información del prompt del sistema.
  * **Prevención de Alucinaciones:** Instrucción persistente y baja temperatura (`0.3`).
  * **Navegación Rápida:** Enlaces locales clicables (ej.: `[Ir a Contacto](#contact)`).
* **Componentes Modulares:** Código limpio dentro de un único archivo.

### Stack Tecnológico

* **Framework Frontend:** React
* **Estilos:** Tailwind CSS
* **Integración IA:** Gemini API (`gemini-2.5-flash-preview-09-2025`)
* **Iconos:** Lucide React

---

## ⚙️ Primeros Pasos

### 1. Clonar el repositorio

```bash
git clone https://github.com/lufebadeca/dev-portfolio.git
cd dev-portfolio
```

### 2. Instalar dependencias

```bash
npm install
# o
yarn install
```

### 3. Ejecutar la aplicación

```bash
npm run dev
# o
yarn dev
```

---

## 🤖 Configuración del Agente IA

El Mini-Agente de Gemini requiere una **Clave API**.

**Nota:**
En el demo, la clave se introduce directamente en la interfaz solo para pruebas.
En producción, usa siempre un backend/proxy seguro.

### 1. Obtener una clave

Disponible en **Google AI Studio**.

### 2. Insertar clave

Ejecuta la aplicación e introduce la clave en el widget.

### 3. Comenzar a chatear

El agente responde solo con los datos del `SYSTEM_PROMPT`.

---

## 📄 License

This project is open-source and available under the **MIT License**.
