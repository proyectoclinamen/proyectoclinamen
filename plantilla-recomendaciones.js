// =============================================================================
// PLANTILLA PARA AÑADIR NUEVAS RECOMENDACIONES
// =============================================================================
// Copia uno de estos bloques, rellena los campos y pégalo en recomendaciones-mejorado.js
// Recuerda añadir una coma al final si no es el último elemento del array
// =============================================================================

// ===== PLANTILLA PARA LIBRO =====
{
  titulo: "",
  autor: "",
  tipo: "libro",
  año: 2024,
  favorito: false,
  imagen: "",
  descripcion: "",
  tags: []
},

// ===== PLANTILLA PARA PELÍCULA =====
{
  titulo: "",
  autor: "",
  tipo: "pelicula",
  año: 2024,
  favorito: false,
  imagen: "",
  descripcion: "",
  tags: []
},

// ===== PLANTILLA PARA SERIE =====
{
  titulo: "",
  autor: "",
  tipo: "serie",
  año: 2024,
  favorito: false,
  imagen: "",
  descripcion: "",
  tags: []
},

// =============================================================================
// EJEMPLOS COMPLETOS
// =============================================================================

// Ejemplo de libro con todos los campos
{
  titulo: "El Quijote",
  autor: "Miguel de Cervantes",
  tipo: "libro",
  año: 1605,
  favorito: true,
  imagen: "assets/images/quijote.jpg",
  descripcion: "La primera novela moderna. Humor, aventura y crítica social en la España del Siglo de Oro.",
  tags: ["clásico", "aventura", "español"]
},

// Ejemplo de película sin imagen
{
  titulo: "12 Angry Men",
  autor: "Sidney Lumet",
  tipo: "pelicula",
  año: 1957,
  favorito: true,
  imagen: "",
  descripcion: "12 jurados, una sala, 96 minutos. Obra maestra del diálogo y la tensión.",
  tags: ["drama", "legal", "clásico"]
},

// Ejemplo de serie mínimo (solo campos requeridos)
{
  titulo: "Breaking Bad",
  autor: "Vince Gilligan",
  tipo: "serie",
  año: 2008,
  favorito: true,
  imagen: "",
  descripcion: "",
  tags: []
},

// =============================================================================
// NOTAS RÁPIDAS
// =============================================================================

// TIPOS VÁLIDOS (solo estos, todo en minúsculas):
// - "libro"
// - "pelicula"
// - "serie"

// AÑO:
// - Debe ser un número sin comillas
// - Correcto: año: 2020
// - Incorrecto: año: "2020"

// FAVORITO:
// - Debe ser booleano sin comillas
// - Correcto: favorito: true
// - Incorrecto: favorito: "true"

// IMAGEN:
// - Puede estar vacío: imagen: ""
// - Con ruta: imagen: "assets/images/portada.jpg"
// - Con URL: imagen: "https://example.com/cover.jpg"

// DESCRIPCIÓN Y TAGS:
// - Son opcionales
// - Pueden estar vacíos: descripcion: "", tags: []

// COMAS:
// - Cada objeto necesita una coma al final, EXCEPTO el último
// - Si añades un elemento nuevo, asegúrate de poner coma al anterior

// =============================================================================
// CHECKLIST ANTES DE GUARDAR
// =============================================================================
// [ ] Todos los campos requeridos están completos
// [ ] El tipo es "libro", "pelicula" o "serie" (sin mayúsculas)
// [ ] El año es un número (sin comillas)
// [ ] Favorito es true o false (sin comillas)
// [ ] Hay comas entre objetos
// [ ] El último objeto NO tiene coma después del }
// [ ] Todas las llaves { } y corchetes [ ] están balanceados
