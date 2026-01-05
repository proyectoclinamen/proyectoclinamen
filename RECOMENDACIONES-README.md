# 📚 Sistema de Recomendaciones Mejorado

## 🎯 Características

- **Filtros múltiples**: Tipo, Año, Favoritos
- **Grid visual** con portadas de obras
- **Estadísticas en tiempo real**
- **Sistema de favoritos** con indicador visual (⭐)
- **Descripciones personales** para cada recomendación
- **100% editable manualmente** (sin backend, sin base de datos)
- **Responsive** y rápido

---

## 📁 Archivos del Sistema

```
data/
  └── recomendaciones-mejorado.js    # Base de datos editable

recomendaciones-mejorado.html        # Página con filtros avanzados
```

---

## 🔧 Estructura de Datos

Cada recomendación es un objeto JavaScript con la siguiente estructura:

```javascript
{
  titulo: "Nombre de la obra",           // REQUERIDO
  autor: "Autor/Director/Creador",       // REQUERIDO
  tipo: "libro",                         // REQUERIDO: "libro", "pelicula" o "serie"
  año: 2020,                             // REQUERIDO: número (año de publicación/estreno)
  favorito: true,                        // REQUERIDO: true o false
  imagen: "assets/images/portada.jpg",   // OPCIONAL: ruta a la imagen
  descripcion: "Tu nota personal",       // OPCIONAL: breve descripción
  tags: ["tag1", "tag2"]                 // OPCIONAL: para futuras búsquedas
}
```

### 📋 Reglas Importantes

1. **tipo**: Solo acepta estos valores exactos:
   - `"libro"`
   - `"pelicula"`
   - `"serie"`

2. **año**: Debe ser un número sin comillas:
   - ✅ `año: 2020`
   - ❌ `año: "2020"`

3. **favorito**: Debe ser booleano sin comillas:
   - ✅ `favorito: true`
   - ✅ `favorito: false`
   - ❌ `favorito: "true"`

4. **imagen**: Puede estar vacía si no tienes portada:
   - ✅ `imagen: ""`
   - ✅ `imagen: "assets/images/portada.jpg"`

---

## ➕ Cómo Añadir una Nueva Recomendación

### Paso 1: Abrir el archivo de datos

Abre `data/recomendaciones-mejorado.js`

### Paso 2: Copiar y modificar

Copia un objeto existente y modifica los campos:

```javascript
// Al final del array, antes del último corchete ]
{
  titulo: "Dune",
  autor: "Frank Herbert",
  tipo: "libro",
  año: 1965,
  favorito: true,
  imagen: "",
  descripcion: "Ciencia ficción épica sobre ecología, política y religión en el desierto.",
  tags: ["sci-fi", "clásico", "épico"]
},
```

### Paso 3: Guardar y recargar

Guarda el archivo y recarga la página. ¡Ya debería aparecer!

---

## 🎨 Cómo Añadir Portadas de Obras

### Opción A: Sin imágenes (más simple)

Deja el campo `imagen` vacío:

```javascript
imagen: ""
```

El sistema mostrará un placeholder gris elegante.

### Opción B: Con imágenes locales

1. **Crea la carpeta** (si no existe):
   ```
   assets/images/
   ```

2. **Guarda tus imágenes** allí:
   - Formato recomendado: JPG o WebP
   - Tamaño recomendado: 400x600px (ratio 2:3)
   - Ejemplo: `sapiens.jpg`, `arrival.jpg`

3. **Referéncialas** en el objeto:
   ```javascript
   imagen: "assets/images/sapiens.jpg"
   ```

### Opción C: Con URLs externas

Puedes usar URLs de internet directamente:

```javascript
imagen: "https://example.com/portada.jpg"
```

**⚠️ Advertencia**: Las URLs externas pueden romperse si el sitio las elimina.

---

## 🔍 Sistema de Filtros

### Filtros Disponibles

1. **Por Tipo**:
   - Todas (muestra todo)
   - Solo libros
   - Solo películas
   - Solo series

2. **Por Año**:
   - Dropdown con todos los años presentes en la base de datos
   - Ordenados de más reciente a más antiguo
   - Se actualiza automáticamente al añadir obras de nuevos años

3. **Por Favorito**:
   - Checkbox "Mostrar solo Favoritos"
   - Muestra únicamente las obras marcadas como `favorito: true`

### Combinación de Filtros

Los filtros se pueden combinar. Por ejemplo:
- "Solo libros + Año 2020 + Favoritos"
- Mostrará únicamente los libros del 2020 que sean favoritos

---

## 📊 Estadísticas Automáticas

El sistema muestra en tiempo real:
- Número de recomendaciones visibles
- Total de libros
- Total de películas
- Total de series
- Total de favoritos

Estas se actualizan automáticamente al aplicar filtros.

---

## 🛠️ Funciones JavaScript Disponibles

El archivo `recomendaciones-mejorado.js` incluye funciones útiles:

### Obtener años únicos
```javascript
obtenerAñosUnicos()
// Retorna: [2024, 2023, 2022, 2021, ...]
```

### Filtrar recomendaciones
```javascript
filtrarRecomendaciones({
  tipo: 'libro',
  año: 2020,
  favorito: true
})
// Retorna: Array de recomendaciones que cumplen los criterios
```

### Obtener solo favoritos
```javascript
obtenerFavoritos()
// Retorna: Array de todas las recomendaciones favoritas
```

### Buscar por texto
```javascript
buscarRecomendaciones('sapiens')
// Retorna: Array de recomendaciones que contienen "sapiens" en título, autor o descripción
```

### Obtener estadísticas
```javascript
obtenerEstadisticas()
// Retorna: { total: 24, libros: 8, peliculas: 8, series: 8, favoritos: 12 }
```

---

## 🎨 Personalización Visual

### Cambiar el símbolo de favorito

Abre `recomendaciones-mejorado.html` y busca:

```javascript
html += `<div class="recomendacion-favorito" title="Favorito">⭐</div>`;
```

Cambia `⭐` por otro emoji: `❤️`, `💎`, `🏆`, `✨`, etc.

### Cambiar colores

Los colores están en `css/style.css` en las variables CSS:

```css
:root {
  --color-acento: #8b7355;  /* Cambia este para el color principal */
}
```

### Cambiar el número de columnas

En `css/style.css`, busca:

```css
.recomendaciones-grid {
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
```

Cambia `200px` a:
- `150px` para más columnas (más compacto)
- `250px` para menos columnas (más espacioso)

---

## 🐛 Solución de Problemas

### Las recomendaciones no aparecen

1. **Abre la consola del navegador** (F12)
2. Busca errores en rojo
3. Problemas comunes:
   - Falta una coma entre objetos
   - Año escrito como texto: `"2020"` en vez de `2020`
   - Favorito escrito como texto: `"true"` en vez de `true`
   - Tipo mal escrito: `"Libro"` en vez de `"libro"`

### Los filtros no funcionan

Asegúrate de que el campo `tipo` tenga exactamente estos valores:
- `"libro"` (todo en minúsculas)
- `"pelicula"` (sin tilde, todo en minúsculas)
- `"serie"` (todo en minúsculas)

### Las imágenes no se cargan

Verifica que:
1. La ruta sea correcta
2. El archivo exista en la carpeta `assets/images/`
3. No haya espacios en el nombre del archivo

---

## 📈 Escalabilidad

Este sistema puede manejar cómodamente:
- ✅ Hasta 100 recomendaciones: Excelente rendimiento
- ✅ 100-500 recomendaciones: Buen rendimiento
- ⚠️ 500+ recomendaciones: Considera paginar o usar una base de datos

---

## 🚀 Funcionalidades Futuras (Ideas)

Si quieres extender el sistema, podrías añadir:

1. **Búsqueda por texto**: Filtrar por título, autor o descripción
2. **Ordenamiento**: Por año, título alfabético, favoritos primero
3. **Modo vista**: Grid vs Lista
4. **Exportar/Importar**: Guardar tu colección en JSON
5. **Enlaces externos**: A Goodreads, IMDb, etc.
6. **Etiquetas/Tags**: Sistema de categorización adicional
7. **Notas expandibles**: Click para ver descripción completa

---

## 📞 Próximos Pasos

1. **Importa tus recomendaciones** al archivo JS
2. **Añade portadas** si quieres (opcional pero bonito)
3. **Marca tus favoritos** con `favorito: true`
4. **Personaliza las descripciones** con tus notas personales
5. **Comparte tu colección** con el mundo

---

**¡Tu sistema de recomendaciones está listo para crecer contigo!** 🌱
