# Sitio Web Personal - Guía de Uso y Mantenimiento

## 📁 Estructura del Proyecto

```
proyecto/
│
├── index.html                    # Página de inicio
├── sobre-mi.html                 # Página "Sobre mí"
├── ensayos.html                  # Lista de ensayos
├── recomendaciones.html          # Grid de recomendaciones
│
├── ensayos/                      # Carpeta de ensayos individuales
│   └── ejemplo-ensayo.html       # Ejemplo de ensayo individual
│
├── css/
│   └── style.css                 # Todos los estilos del sitio
│
├── data/
│   └── recomendaciones.js        # Base de datos de recomendaciones
│
└── assets/
    └── images/                   # Carpeta para imágenes (crear si necesitas)
```

## 🚀 Cómo empezar

1. **Personaliza tu información:**
   - Abre cada archivo HTML y reemplaza "Tu Nombre" con tu nombre real
   - Actualiza los enlaces de email y redes sociales
   - Modifica el contenido de "Sobre mí" con tu biografía

2. **Abre el sitio localmente:**
   - Simplemente abre `index.html` en tu navegador
   - No necesitas servidor, funciona directamente desde los archivos

## ✍️ Cómo añadir un nuevo ensayo

### Paso 1: Crear el archivo HTML

1. Copia `ensayos/ejemplo-ensayo.html`
2. Renómbralo (ej: `mi-nuevo-ensayo.html`)
3. Edita el contenido:
   - Título del ensayo
   - Fecha de publicación
   - Contenido del ensayo

### Paso 2: Añadirlo a la lista

1. Abre `ensayos.html`
2. Añade un nuevo `<li class="ensayo-item">` al principio de la lista
3. Sigue la estructura de los ejemplos existentes

**Ejemplo:**

```html
<li class="ensayo-item">
  <div class="ensayo-fecha">5 de enero, 2025</div>
  <h2 class="ensayo-titulo">
    <a href="ensayos/mi-nuevo-ensayo.html">Título de mi ensayo</a>
  </h2>
  <p class="ensayo-extracto">
    Un resumen breve de qué trata el ensayo...
  </p>
</li>
```

## 📚 Cómo añadir recomendaciones

1. Abre `data/recomendaciones.js`
2. Añade un nuevo objeto al array siguiendo esta estructura:

```javascript
{
  titulo: "Nombre del libro/película/serie",
  autor: "Autor o director",
  tipo: "libro", // o "pelicula" o "serie"
  imagen: "" // Opcional: ruta a la imagen
}
```

**Ejemplo completo:**

```javascript
{
  titulo: "1984",
  autor: "George Orwell",
  tipo: "libro",
  imagen: "assets/images/1984.jpg"
}
```

3. Guarda el archivo y recarga `recomendaciones.html`

## 🎨 Personalizar colores y estilos

Todos los colores y espaciados están centralizados en variables CSS al inicio de `css/style.css`:

```css
:root {
  --color-fondo: #fafaf8;
  --color-texto: #2a2a2a;
  --color-acento: #8b7355;
  /* etc. */
}
```

Simplemente modifica estos valores para cambiar toda la paleta del sitio.

## 🖼️ Añadir imágenes

1. Crea la carpeta `assets/images/` si no existe
2. Coloca tus imágenes allí
3. Referéncialas en HTML o JS con la ruta: `assets/images/tu-imagen.jpg`

**Recomendaciones para imágenes:**
- Formato: WebP o JPG optimizado
- Portadas de libros: idealmente 400x600px (ratio 2:3)
- Comprime las imágenes antes de subirlas

## 🌐 Publicar tu sitio

Este sitio es HTML estático, así que puedes hospedarlo en:

- **Netlify**: Arrastra la carpeta del proyecto
- **GitHub Pages**: Sube los archivos a un repositorio
- **Vercel**: Conecta tu repositorio Git
- **Neocities**: Súbelo manualmente

Todas estas opciones son gratuitas para sitios estáticos.

## 🔧 Mantenimiento a largo plazo

### Backup regular
- Guarda copias del proyecto completo
- Considera usar Git para control de versiones

### Añadir contenido regularmente
- Los ensayos siempre van al principio de la lista (orden cronológico inverso)
- Actualiza la fecha en el footer cuando hagas cambios

### Optimización
- Comprime imágenes antes de añadirlas
- Si el sitio crece mucho, considera minificar el CSS

## 💡 Tips y mejores prácticas

1. **Nombres de archivo:** Usa guiones medios, sin espacios
   - ✅ `mi-nuevo-ensayo.html`
   - ❌ `Mi Nuevo Ensayo.html`

2. **Fechas consistentes:** Usa siempre el formato "DD de mes, AAAA"

3. **Extractos:** 2-3 oraciones máximo para los extractos de ensayos

4. **Recomendaciones:** Puedes dejar el campo `imagen` vacío si no tienes la portada

5. **Enlaces rotos:** Verifica que todas las rutas sean correctas al añadir contenido

## 🐛 Solución de problemas

**El CSS no se carga:**
- Verifica que la ruta en el `<link>` sea correcta
- Desde `ensayos/`, usa `../css/style.css`

**Las recomendaciones no aparecen:**
- Verifica la consola del navegador (F12) por errores
- Asegúrate de que `recomendaciones.js` tenga sintaxis correcta

**Los filtros no funcionan:**
- Los valores de `tipo` deben ser exactamente: "libro", "pelicula" o "serie"

## 📞 Siguiente nivel

Cuando tu sitio crezca, considera:
- Añadir un sistema de búsqueda simple con JavaScript
- Implementar RSS para los ensayos
- Añadir comentarios/anotaciones en los márgenes
- Crear un archivo de "ideas en progreso"

---

**¡Tu sitio está listo para crecer contigo!** 🌱
