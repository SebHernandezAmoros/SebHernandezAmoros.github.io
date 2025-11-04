# 🌌 Mi Portafolio Personal — Astro

Este proyecto es un portafolio personal construido con **Astro** y desplegado en **GitHub Pages**.

Astro es un framework rápido para sitios estáticos, ideal para páginas de portafolio, blogs y landing pages.  
Este repositorio usa deployment automático mediante **GitHub Actions**.

---

## 📁 Estructura del Proyecto

```text
/
├── public/                # Archivos estáticos públicos (favicon, imágenes)
├── src/
│   ├── assets/            # Imágenes y recursos del proyecto
│   ├── components/        # Componentes reutilizables (.astro / .jsx)
│   ├── layouts/           # Layout global (estructura html base)
│   └── pages/             # Páginas del sitio (rutas)
│       └── index.astro    # Página principal
├── astro.config.mjs       # Configuración de Astro
├── package.json           # Dependencias y scripts
└── tsconfig.json          # Configuración de TypeScript (opcional)
🧞‍♂️ Comandos (desde la raíz del proyecto)
Comando	Acción
npm install	Instala dependencias
npm run dev	Inicia servidor local http://localhost:4321
npm run build	Construye el sitio en /dist
npm run preview	Previsualiza la build local
npm run astro -- --help	Muestra ayuda de la CLI Astro

🚀 Cómo ejecutar este portafolio localmente
bash
Copiar código
npm install
npm run dev
Abrir en navegador:
👉 http://localhost:4321

🌐 Deploy en GitHub Pages (Automático)
Este proyecto se despliega automáticamente en GitHub Pages usando GitHub Actions.

✅ Requisitos
Repositorio con el nombre:

lua
Copiar código
<TU_USUARIO>.github.io
Ejemplo: SebHernandezAmoros.github.io

Repositorio público

Branch principal: main

✅ Pasos para crear y desplegar un proyecto Astro en GitHub Pages
1️⃣ Crear proyecto Astro
bash
Copiar código
npm create astro@latest mi-portfolio
2️⃣ Instalar dependencias
bash
Copiar código
cd mi-portfolio
npm install
3️⃣ Inicializar Git
bash
Copiar código
git init
git add .
git commit -m "Initial Astro project"
4️⃣ Conectar con GitHub
bash
Copiar código
git branch -M main
git remote add origin https://github.com/<TU_USUARIO>/<TU_USUARIO>.github.io.git
git push -u origin main
5️⃣ Crear archivo de deploy
Ruta: .github/workflows/deploy.yml

Contenido:

yaml
Copiar código
name: Deploy Astro site to GitHub Pages

on:
  push:
    branches: [ "main" ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci || npm install
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
    steps:
      - uses: actions/deploy-pages@v4
6️⃣ Activar Pages en GitHub
Ir a: Settings > Pages
Source → GitHub Actions

✅ Tu sitio estará disponible en:
cpp
Copiar código
https://<TU_USUARIO>.github.io