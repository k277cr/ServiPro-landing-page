# Landing Page profesional para empresa

Este proyecto es una **landing page profesional en React + JavaScript + CSS** pensada para promocionar:

- locales
- negocios
- servicios
- emprendimientos
- empresas en general

La página incluye:

- sección principal llamativa
- información de la empresa
- servicios ofrecidos
- galería de imágenes
- correo, teléfono y ubicación
- botones de contacto directo
- acceso rápido a **WhatsApp** con mensaje predefinido
- enlaces a **Instagram** y **Messenger**
- diseño responsive para celular, tablet y computadora

---

## Importante sobre MySQL

Esta landing page **no utiliza MySQL**, porque es una página de presentación visual y no necesita base de datos para funcionar.

Se puede abrir y ejecutar en:

- **VS Code**
- **Visual Studio**
- cualquier editor de código
- cualquier hosting que soporte páginas estáticas o React

Si después quieres agregar:

- formulario conectado a base de datos
- panel de administración
- registro de clientes
- almacenamiento de mensajes

entonces sí se puede integrar más adelante con:

- MySQL
- PHP
- Node.js + Express
- Java + Spring Boot

---

## Tecnologías utilizadas

- **React**
- **JavaScript**
- **CSS**
- **Vite**
- **React Icons**

---

## Estructura del proyecto

```bash
landing-page-empresa/
│
├── public/
│   └── images/
│
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── FloatingSocials.jsx
│   │   ├── Footer.jsx
│   │   ├── Gallery.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   └── Services.jsx
│   │
│   ├── data/
│   │   └── company.js
│   │
│   ├── styles/
│   │   └── global.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
└── README.md
```

---

## Cómo abrir el proyecto

### 1) Descomprimir el archivo ZIP
Primero descomprime el archivo.

### 2) Abrir la carpeta en VS Code
Abre la carpeta `landing-page-empresa` en Visual Studio Code.

### 3) Instalar dependencias
Abre la terminal dentro del proyecto y ejecuta:

```bash
npm install
```

### 4) Ejecutar el proyecto
Luego ejecuta:

```bash
npm run dev
```

### 5) Abrir en el navegador
Vite te mostrará una URL parecida a esta:

```bash
http://localhost:5173/
```

Abre esa dirección en tu navegador.

---

## Cómo cambiar los datos de tu empresa

Debes editar este archivo:

```bash
src/data/company.js
```

Ahí encontrarás datos como estos:

- nombre de la empresa
- eslogan
- descripción
- correo
- teléfono
- número de WhatsApp
- mensaje automático de WhatsApp
- Instagram
- Messenger
- Facebook
- dirección
- ubicación
- enlace de Google Maps
- imágenes de galería

---

## Cómo funciona el botón de WhatsApp

En el archivo `src/data/company.js` existe esta configuración:

```js
whatsappNumber: '50688888888',
whatsappMessage: 'Necesito información de la empresa',
```

Cuando el usuario da clic en el botón de WhatsApp, se abre un enlace así:

```js
https://wa.me/TUNUMERO?text=MENSAJE
```

Ejemplo:

```js
https://wa.me/50688888888?text=Necesito%20informaci%C3%B3n%20de%20la%20empresa
```

### Recomendaciones

- no pongas el signo `+`
- no pongas espacios
- usa el código del país, por ejemplo `506`

Correcto:

```js
50688888888
```

Incorrecto:

```js
+506 8888-8888
```

---

## Cómo cambiar Instagram y Messenger

También en `src/data/company.js` encontrarás:

```js
instagramUrl: 'https://instagram.com/tuempresa',
messengerUrl: 'https://m.me/tuempresa',
```

Solo reemplaza `tuempresa` por el usuario o enlace real de tu negocio.

---

## Cómo cambiar las imágenes

Actualmente el proyecto usa imágenes de ejemplo en línea.

Puedes cambiarlas de dos formas:

### Opción 1: usar nuevas URLs
Modifica el arreglo `gallery` dentro de `src/data/company.js`.

### Opción 2: usar imágenes locales
Guarda tus imágenes dentro de:

```bash
public/images/
```

Y luego cambia las rutas así:

```js
image: '/images/foto1.jpg'
```

Ejemplo:

```js
gallery: [
  {
    title: 'Mi local',
    image: '/images/local1.jpg'
  },
  {
    title: 'Mi servicio',
    image: '/images/servicio1.jpg'
  }
]
```

---

## Cómo personalizar colores y estilos

Si quieres cambiar:

- colores
- tamaños
- botones
- fondos
- sombras
- responsive

puedes editar el archivo:

```bash
src/styles/global.css
```

---

## Cómo generar la versión final para subir a internet

Cuando ya todo esté listo, ejecuta:

```bash
npm run build
```

Eso generará una carpeta llamada `dist/` con los archivos optimizados para producción.

Luego puedes subir esa carpeta a plataformas como:

- Netlify
- Vercel
- Hostinger
- cPanel
- GitHub Pages

---

## Ideas para mejorarla más adelante

Si luego quieres hacerla todavía más profesional, puedes agregar:

- formulario de contacto funcional
- mapa incrustado de Google Maps
- testimonios de clientes
- sección de preguntas frecuentes
- animaciones avanzadas
- conexión a backend
- panel administrador
- guardado de contactos en base de datos

---

## Resumen

Este proyecto ya te deja una base profesional para:

- mostrar tu empresa
- promocionar tus locales y servicios
- facilitar el contacto con clientes
- dirigir usuarios a WhatsApp, Instagram y Messenger
- transmitir una imagen más seria y profesional

---

## Autor

Proyecto preparado para que puedas editarlo fácilmente según los datos reales de tu empresa.
