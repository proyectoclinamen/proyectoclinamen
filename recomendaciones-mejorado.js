// =============================================================================
// BASE DE DATOS DE RECOMENDACIONES
// =============================================================================
// Instrucciones para añadir nuevas recomendaciones:
// 1. Copia un objeto existente
// 2. Modifica los campos según tu recomendación
// 3. Guarda el archivo
// 4. Recarga la página de recomendaciones
//
// Campos disponibles:
// - titulo: Nombre de la obra (requerido)
// - autor: Autor/Director/Creador (requerido)
// - tipo: "libro", "pelicula" o "serie" (requerido)
// - año: Año de publicación/estreno (requerido, como número)
// - favorito: true o false (requerido)
// - imagen: Ruta a la imagen de portada (opcional, deja "" si no tienes)
// - descripcion: Breve descripción personal (opcional)
// - tags: Array de etiquetas para futuras búsquedas (opcional)
// =============================================================================

const recomendaciones = [
  // ===== LIBROS =====
  {
    titulo: "Sapiens",
    autor: "Yuval Noah Harari",
    tipo: "libro",
    año: 2011,
    favorito: true,
    imagen: "",
    descripcion: "Una historia fascinante de la humanidad desde la revolución cognitiva hasta hoy.",
    tags: ["historia", "antropología", "ciencia"]
  },
  {
    titulo: "El hombre en busca de sentido",
    autor: "Viktor Frankl",
    tipo: "libro",
    año: 1946,
    favorito: true,
    imagen: "",
    descripcion: "Reflexiones profundas sobre el sentido de la vida desde los campos de concentración.",
    tags: ["filosofía", "psicología", "memoria"]
  },
  {
    titulo: "Meditaciones",
    autor: "Marco Aurelio",
    tipo: "libro",
    año: 180,
    favorito: true,
    imagen: "",
    descripcion: "Sabiduría estoica atemporal. Un manual de vida que releo constantemente.",
    tags: ["filosofía", "estoicismo", "clásico"]
  },
  {
    titulo: "Thinking, Fast and Slow",
    autor: "Daniel Kahneman",
    tipo: "libro",
    año: 2011,
    favorito: false,
    imagen: "",
    descripcion: "Cómo pensamos y por qué nos equivocamos. Esencial para entender la mente humana.",
    tags: ["psicología", "economía", "ciencia"]
  },
  {
    titulo: "La sociedad del cansancio",
    autor: "Byung-Chul Han",
    tipo: "libro",
    año: 2010,
    favorito: true,
    imagen: "",
    descripcion: "Crítica brillante a la sociedad del rendimiento y la autoexplotación moderna.",
    tags: ["filosofía", "sociedad", "contemporáneo"]
  },
  {
    titulo: "Ensayos",
    autor: "Michel de Montaigne",
    tipo: "libro",
    año: 1580,
    favorito: false,
    imagen: "",
    descripcion: "El inventor del ensayo moderno. Prosa honesta y profundamente humana.",
    tags: ["filosofía", "ensayo", "clásico"]
  },
  {
    titulo: "Los sonámbulos",
    autor: "Christopher Clark",
    tipo: "libro",
    año: 2012,
    favorito: false,
    imagen: "",
    descripcion: "Cómo Europa entró sonámbula en la Primera Guerra Mundial. Historia magistral.",
    tags: ["historia", "guerra", "política"]
  },
  {
    titulo: "Bullshit Jobs",
    autor: "David Graeber",
    tipo: "libro",
    año: 2018,
    favorito: true,
    imagen: "",
    descripcion: "Por qué tantos trabajos son inútiles y qué dice eso sobre nuestra sociedad.",
    tags: ["sociedad", "trabajo", "antropología"]
  },

  // ===== PELÍCULAS =====
  {
    titulo: "Arrival",
    autor: "Denis Villeneuve",
    tipo: "pelicula",
    año: 2016,
    favorito: true,
    imagen: "",
    descripcion: "Ciencia ficción contemplativa sobre lenguaje, tiempo y comunicación.",
    tags: ["sci-fi", "lingüística", "drama"]
  },
  {
    titulo: "Her",
    autor: "Spike Jonze",
    tipo: "pelicula",
    año: 2013,
    favorito: true,
    imagen: "",
    descripcion: "Una historia de amor con una IA que explora la soledad y conexión moderna.",
    tags: ["romance", "tecnología", "futuro"]
  },
  {
    titulo: "Before Sunrise",
    autor: "Richard Linklater",
    tipo: "pelicula",
    año: 1995,
    favorito: true,
    imagen: "",
    descripcion: "Una noche en Viena. Dos personas conversando. Nada más, nada menos.",
    tags: ["romance", "diálogo", "minimalista"]
  },
  {
    titulo: "Blade Runner 2049",
    autor: "Denis Villeneuve",
    tipo: "pelicula",
    año: 2017,
    favorito: false,
    imagen: "",
    descripcion: "Continuación visualmente impresionante que honra y expande el original.",
    tags: ["sci-fi", "distopía", "filosofía"]
  },
  {
    titulo: "The Social Network",
    autor: "David Fincher",
    tipo: "pelicula",
    año: 2010,
    favorito: false,
    imagen: "",
    descripcion: "No es sobre Facebook. Es sobre ambición, traición y la era digital.",
    tags: ["drama", "tecnología", "biografía"]
  },
  {
    titulo: "Coherence",
    autor: "James Ward Byrkit",
    tipo: "pelicula",
    año: 2013,
    favorito: false,
    imagen: "",
    descripcion: "Thriller de bajo presupuesto y alta inteligencia. Mejor entrar sin saber nada.",
    tags: ["thriller", "sci-fi", "indie"]
  },
  {
    titulo: "Dunkirk",
    autor: "Christopher Nolan",
    tipo: "pelicula",
    año: 2017,
    favorito: false,
    imagen: "",
    descripcion: "Guerra como experiencia sensorial. Cronologías entrelazadas magistrales.",
    tags: ["guerra", "historia", "suspenso"]
  },
  {
    titulo: "Paterson",
    autor: "Jim Jarmusch",
    tipo: "pelicula",
    año: 2016,
    favorito: true,
    imagen: "",
    descripcion: "Una semana en la vida de un poeta-conductor de autobús. Belleza en lo cotidiano.",
    tags: ["drama", "poesía", "minimalista"]
  },

  // ===== SERIES =====
  {
    titulo: "The Leftovers",
    autor: "Damon Lindelof",
    tipo: "serie",
    año: 2014,
    favorito: true,
    imagen: "",
    descripcion: "Después de que el 2% de la población desaparece. Sobre el duelo y el misterio.",
    tags: ["drama", "misterio", "filosofía"]
  },
  {
    titulo: "Station Eleven",
    autor: "Patrick Somerville",
    tipo: "serie",
    año: 2021,
    favorito: true,
    imagen: "",
    descripcion: "Post-apocalipsis pero sobre arte, memoria y lo que nos hace humanos.",
    tags: ["drama", "post-apocalíptico", "arte"]
  },
  {
    titulo: "Dark",
    autor: "Baran bo Odar",
    tipo: "serie",
    año: 2017,
    favorito: false,
    imagen: "",
    descripcion: "Viajes en el tiempo, familias entrelazadas. Complejo pero coherente.",
    tags: ["sci-fi", "thriller", "misterio"]
  },
  {
    titulo: "Severance",
    autor: "Dan Erickson",
    tipo: "serie",
    año: 2022,
    favorito: true,
    imagen: "",
    descripcion: "Tu yo del trabajo no recuerda tu vida personal. Distopía corporativa inquietante.",
    tags: ["thriller", "distopía", "trabajo"]
  },
  {
    titulo: "The Bear",
    autor: "Christopher Storer",
    tipo: "serie",
    año: 2022,
    favorito: true,
    imagen: "",
    descripcion: "Chef de alta cocina hereda un restaurant de sandwiches. Caos, familia, excelencia.",
    tags: ["drama", "comida", "familia"]
  },
  {
    titulo: "Chernobyl",
    autor: "Craig Mazin",
    tipo: "serie",
    año: 2019,
    favorito: false,
    imagen: "",
    descripcion: "El costo de las mentiras. Reconstrucción meticulosa del desastre nuclear.",
    tags: ["drama", "historia", "real"]
  },
  {
    titulo: "Andor",
    autor: "Tony Gilroy",
    tipo: "serie",
    año: 2022,
    favorito: false,
    imagen: "",
    descripcion: "Star Wars para adultos. Sobre fascismo, resistencia y sacrificio.",
    tags: ["sci-fi", "política", "star-wars"]
  },
  {
    titulo: "Halt and Catch Fire",
    autor: "Christopher Cantwell",
    tipo: "serie",
    año: 2014,
    favorito: true,
    imagen: "",
    descripcion: "La revolución de las computadoras personales. Personajes complejos y creíbles.",
    tags: ["drama", "tecnología", "historia"]
  }
];

// =============================================================================
// UTILIDADES PARA ACCEDER A LOS DATOS
// =============================================================================

// Obtener todos los años únicos (para generar filtros)
function obtenerAñosUnicos() {
  const años = recomendaciones.map(r => r.año);
  return [...new Set(años)].sort((a, b) => b - a); // Orden descendente
}

// Obtener todos los tipos únicos
function obtenerTiposUnicos() {
  const tipos = recomendaciones.map(r => r.tipo);
  return [...new Set(tipos)];
}

// Filtrar recomendaciones
function filtrarRecomendaciones(filtros = {}) {
  return recomendaciones.filter(rec => {
    // Filtro por tipo
    if (filtros.tipo && filtros.tipo !== 'todas' && rec.tipo !== filtros.tipo) {
      return false;
    }
    
    // Filtro por año
    if (filtros.año && filtros.año !== 'todos' && rec.año !== parseInt(filtros.año)) {
      return false;
    }
    
    // Filtro por favorito
    if (filtros.favorito === true && rec.favorito !== true) {
      return false;
    }
    
    return true;
  });
}

// Obtener solo favoritos
function obtenerFavoritos() {
  return recomendaciones.filter(r => r.favorito === true);
}

// Buscar por texto (título, autor o descripción)
function buscarRecomendaciones(texto) {
  const busqueda = texto.toLowerCase();
  return recomendaciones.filter(r => {
    return r.titulo.toLowerCase().includes(busqueda) ||
           r.autor.toLowerCase().includes(busqueda) ||
           (r.descripcion && r.descripcion.toLowerCase().includes(busqueda));
  });
}

// Estadísticas rápidas
function obtenerEstadisticas() {
  return {
    total: recomendaciones.length,
    libros: recomendaciones.filter(r => r.tipo === 'libro').length,
    peliculas: recomendaciones.filter(r => r.tipo === 'pelicula').length,
    series: recomendaciones.filter(r => r.tipo === 'serie').length,
    favoritos: recomendaciones.filter(r => r.favorito).length
  };
}
