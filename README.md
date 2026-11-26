# Biblioteca Institucional Innova Food

Página principal de la **Biblioteca Institucional Innova Food**, un catálogo digital de libros y recursos académicos en **ciencia y tecnología alimentaria**. El acceso está protegido por contraseña, y una vez dentro la persona usuaria puede explorar el catálogo y buscar libros por título.

## Tabla de contenidos

- [Características](#características)
- [Tecnologías utilizadas](#tecnologías-utilizadas)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Componentes de la interfaz](#componentes-de-la-interfaz)
- [Instalación y uso](#instalación-y-uso)
- [Personalización](#personalización)
- [Seguridad y limitaciones](#seguridad-y-limitaciones)
- [Mejoras futuras](#mejoras-futuras)

## Características

- **Modal de acceso con contraseña**, activo al cargar la página, con opción para mostrar u ocultar lo escrito y mensaje de error en caso de credenciales incorrectas.
- **Cierre de sesión** mediante un botón en el encabezado, oculto hasta que se inicia sesión.
- **Catálogo dinámico**: las tarjetas de los libros se generan desde `script.js` dentro de la cuadrícula `#libraryGrid`.
- **Contador de libros disponibles** (40 por defecto en el HTML, actualizable por el script).
- **Buscador por título** en tiempo real, con botón para limpiar la búsqueda y un mensaje cuando no hay coincidencias.
- **Encabezado con onda decorativa**, tipografías editoriales y diseño adaptable a distintas pantallas.
- **Hash de contraseña** con la librería CryptoJS, incluida por CDN, para no manejar la contraseña en texto plano dentro del script.

## Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| HTML5 | Estructura de la página |
| CSS3 (`styles.css`) | Estilos del login, encabezado, tarjetas y buscador |
| JavaScript (`script.js`) | Login, logout, generación del catálogo y filtrado |
| [CryptoJS 4.1.1](https://cryptojs.gitbook.io/docs/) (CDN) | Generación de hash de la contraseña |
| [Google Fonts](https://fonts.google.com/) | *Playfair Display* e *Inter* |
| [Font Awesome 6.5.0](https://fontawesome.com/) (CDN) | Iconografía |

No requiere compilación ni gestor de paquetes.

## Estructura del proyecto

```
proyecto/
├── index.html          # Esta página (login y catálogo)
├── styles.css          # Hoja de estilos
├── script.js           # Lógica de la aplicación y datos de los libros
└── Innova Food.jpeg    # Logo (encabezado y pie de página)
```

> El nombre del logo contiene un espacio (`Innova Food.jpeg`). Funciona en la mayoría de los entornos, pero conviene renombrarlo (por ejemplo, `innova-food.jpeg`) y actualizar las rutas para evitar problemas en servidores o repositorios.

## Componentes de la interfaz

| Componente | Identificador | Descripción |
|---|---|---|
| Login | `#loginModal` | Solicita la contraseña de acceso a la biblioteca |
| Mensaje de error | `#loginError` | Muestra el error cuando la contraseña es incorrecta |
| Encabezado | `.header` | Logo, título, subtítulo y descripción de la biblioteca |
| Botón de logout | `#logoutBtn` | Cierra la sesión; visible solo tras iniciar sesión |
| Estadísticas | `.stats-bar` | Cantidad de libros (`#total-books`) y área temática |
| Buscador | `#searchInput` | Filtra los libros por título |
| Cuadrícula | `#libraryGrid` | Contenedor donde `script.js` inserta los libros |
| Sin resultados | `#noResults` | Mensaje con botón para ver todos los libros |
| Pie de página | `.footer` | Logo, nombre y derechos de autor |

### Funciones globales referenciadas desde el HTML

`handleLogin(event)`, `handleLogout()`, `togglePasswordVisibility()`, `filterBooks()` y `clearSearch()` deben estar definidas en `script.js`.

## Instalación y uso

1. Descarga o clona el proyecto y verifica que `styles.css`, `script.js` y el logo estén junto a `index.html`.
2. Abre `index.html` en el navegador, preferiblemente mediante un servidor local:

   ```bash
   python -m http.server 8000
   ```

   Luego visita `http://localhost:8000`.
3. Ingresa la contraseña en el modal de acceso.
4. Explora el catálogo o usa el buscador para filtrar por título.

> Se requiere conexión a internet para cargar las fuentes, los iconos y CryptoJS.

## Personalización

- **Catálogo de libros:** se define en `script.js`. Al agregar o quitar libros, el contador `#total-books` debe reflejar la cantidad real.
- **Textos y marca:** edita el título, subtítulo y descripción en `.header-text`, además del nombre en el pie de página.
- **Logo:** reemplaza `Innova Food.jpeg` o actualiza las rutas del encabezado y del pie.
- **Color de la onda:** modifica `fill="#f5f0e8"` en el `<path>` SVG para que coincida con el fondo.
- **Contraseña de acceso:** se cambia en `script.js`. Si se usa un hash, genera uno nuevo con CryptoJS y reemplaza el valor almacenado.
- **Año del pie de página:** actualmente indica 2026.

## Seguridad y limitaciones

- La validación de la contraseña ocurre **en el navegador**. Aunque se use un hash, el valor de comparación y la lógica son visibles en el código fuente, por lo que esta protección solo disuade el acceso casual.
- Para proteger contenido sensible, la autenticación debe resolverse en un servidor, con sesiones o tokens.
- Los archivos de los libros, si están enlazados públicamente, podrían abrirse directamente sin pasar por el login.
- El contador del HTML trae un valor fijo (40) que debe coincidir con el catálogo cargado.

## Mejoras futuras

- Mover la autenticación a un backend.
- Agregar filtros por categoría, autor o año, además de la búsqueda por título.
- Incluir portadas, descripciones y descarga o lectura en línea de cada libro.
- Mejorar la accesibilidad con manejo de foco en el modal y cierre con la tecla Esc.
- Añadir metadatos SEO y un favicon.

---

© 2026 · Biblioteca Institucional Innova Food. Todos los derechos reservados.
