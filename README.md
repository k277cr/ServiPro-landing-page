# ServiPro Landing Page

Landing page hecha con **React + Vite** para presentar la plataforma **ServiPro**.  
Está preparada para ejecutarse en local y para desplegarse en **Cloudflare Pages** usando un repositorio de **GitHub**.

## Qué incluye

- Hero principal con propuesta de valor
- Navbar y navegación por secciones
- Sección de servicios
- Sección de precios
- Galería
- Sección de videos demostrativos
- Botones flotantes para contacto
- Footer
- Diseño responsive

## Stack usado

- React 18
- Vite 5
- CSS
- Framer Motion
- React Icons
- Lucide React
- Phosphor Icons

## Estructura del proyecto

```text
ServiPro-landing-page/
├── public/
│   └── images/
├── src/
│   ├── components/
│   │   ├── Contact.jsx
│   │   ├── FloatingSocials.jsx
│   │   ├── Footer.jsx
│   │   ├── Gallery.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Pricing.jsx
│   │   ├── Services.jsx
│   │   └── Videos.jsx
│   ├── data/
│   │   └── company.js
│   ├── styles/
│   │   ├── global.css
│   │   └── global-white.css
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── .node-version
├── .npmrc
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## Requisitos

- Node.js 20
- npm 10 o superior

Este proyecto trae dos archivos pensados para evitar problemas al desplegar:

- **.node-version**: fija Node 20
- **.npmrc**: usa el registro público de npm

## Instalación local

Abre la carpeta del proyecto y ejecuta:

```bash
npm install
```

## Ejecutar en desarrollo

```bash
npm run dev
```

Vite te mostrará una URL parecida a:

```text
http://localhost:5173
```

## Generar build de producción

```bash
npm run build
```

Eso crea la carpeta:

```text
dist/
```

## Probar el build localmente

```bash
npm run preview
```

## Configuración editable

La mayoría del contenido editable está en:

```text
src/data/company.js
```

Ahí puedes cambiar:

- nombre del proyecto
- descripción
- correo
- teléfono
- WhatsApp
- enlaces de redes sociales
- texto comercial
- lista de servicios
- planes y precios
- imágenes de galería
- videos

## Notas importantes sobre archivos

### No subir estas carpetas al repositorio

No deben ir a GitHub:

- `node_modules/`
- `dist/`

Por eso están ignoradas en `.gitignore`.

### Qué sí debe ir a GitHub

Sí deben ir al repositorio:

- `src/`
- `public/`
- `index.html`
- `package.json`
- `package-lock.json`
- `vite.config.js`
- `.node-version`
- `.npmrc`

## Despliegue en Cloudflare Pages

Usa el proyecto como **Pages**, no como **Worker**.

### Configuración recomendada en Cloudflare Pages

- **Production branch:** `main`
- **Framework preset:** `None` o `Vite` si aparece
- **Build command:** `npm install && npm run build`
- **Build output directory:** `dist`
- **Root directory:** `/`

### Variables recomendadas

- `NODE_VERSION = 20`
- `SKIP_DEPENDENCY_INSTALL = true`

> `SKIP_DEPENDENCY_INSTALL=true` se recomienda si Cloudflare falla con la instalación automática y quieres controlar tú el `npm install` desde el build command.

## Flujo recomendado con GitHub

### Rama principal
- `main` = producción

### Rama de trabajo
- `desarrollo` = cambios y pruebas

### Flujo sugerido
1. Trabajas en `desarrollo`
2. Haces commit y push
3. Revisas los cambios
4. Haces merge a `main`
5. Cloudflare publica automáticamente lo que esté en `main`

## Comandos Git útiles

Crear rama de desarrollo:

```bash
git checkout -b desarrollo
```

Cambiar a desarrollo:

```bash
git checkout desarrollo
```

Guardar cambios:

```bash
git add .
git commit -m "Actualizar landing"
git push origin desarrollo
```

Merge a main:

```bash
git checkout main
git pull origin main
git merge desarrollo
git push origin main
```

## Problema corregido en esta versión

Se corrigió el problema de instalación en Cloudflare que venía provocado por un `package-lock.json` con referencias de registro no adecuadas para despliegue externo.

Además se dejó el proyecto limpio para despliegue:

- sin `.git/`
- sin `node_modules/`
- sin `dist/`
- con `package-lock.json` regenerado
- con `.node-version`
- con `.npmrc`

## Observaciones

Durante el build de Vite pueden aparecer advertencias de `framer-motion` relacionadas con `use client`.  
En este proyecto esas advertencias no impiden compilar ni generar `dist`.

## Licencia

Uso educativo / proyecto personalizado para ServiPro.
