// =========================================
//  DATOS DE LA BIBLIOTECA
// =========================================

const books = [
  {
    title: "Alimentos funcionales",
    id: "1dvoILueBulhuxsR3uNKrHA_5uKrMZPC8",
    link: "https://drive.google.com/file/d/1dvoILueBulhuxsR3uNKrHA_5uKrMZPC8/view?usp=drive_link"
  },
  {
    title: "Análisis químicos de los alimentos",
    id: "1lj4QrHpvFPEI2o9TAWtT9ZwsXGTojqZa",
    link: "https://drive.google.com/file/d/1lj4QrHpvFPEI2o9TAWtT9ZwsXGTojqZa/view?usp=sharing"
  },
  {
    title: "Biotecnología y alimentación",
    id: "1QvkRoEDK49c070nGZ-z6ceSx8dzGTJAn",
    link: "https://drive.google.com/file/d/1QvkRoEDK49c070nGZ-z6ceSx8dzGTJAn/view?usp=sharing"
  },
  {
    title: "Buenas prácticas e higiene en la industria pesquera",
    id: "1OCqGQtZIEdEWXep_4FhZtGro9Gco4suo",
    link: "https://drive.google.com/file/d/1OCqGQtZIEdEWXep_4FhZtGro9Gco4suo/view?usp=sharing"
  },
  {
    title: "Cocina sana para intolerancias",
    id: "1x5PhAXFxCwm6l9bhzuTE_E57rGHA-RGM",
    link: "https://drive.google.com/file/d/1x5PhAXFxCwm6l9bhzuTE_E57rGHA-RGM/view?usp=sharing"
  },
  {
    title: "Composición de alimentos – Valor nutritivo",
    id: "1rGs4TzDgqOLQ4YixaWGuW0cO3kfUudeT",
    link: "https://drive.google.com/file/d/1rGs4TzDgqOLQ4YixaWGuW0cO3kfUudeT/view?usp=sharing"
  },
  {
    title: "Conservación de alimentos por calor",
    id: "1nYdNvJeBXeSQF7vBjMz3N-B_5hvigl7h",
    link: "https://drive.google.com/file/d/1nYdNvJeBXeSQF7vBjMz3N-B_5hvigl7h/view?usp=sharing"
  },
  {
    title: "Control de plagas – Moscas de la fruta",
    id: "1EyinJh4ioDXp4bYyLNim6NLWVdalExOf",
    link: "https://drive.google.com/file/d/1EyinJh4ioDXp4bYyLNim6NLWVdalExOf/view?usp=sharing"
  },
  {
    title: "Inocuidad alimentaria",
    id: "1SAvVV9M3Xj4roO7ar5ABePVeLSEbmBd5",
    link: "https://drive.google.com/file/d/1SAvVV9M3Xj4roO7ar5ABePVeLSEbmBd5/view?usp=sharing"
  },
  {
    title: "Deshidratación de alimentos",
    id: "17-4-CmJsPPkySM_aI_kADuKzat3G9REY",
    link: "https://drive.google.com/file/d/17-4-CmJsPPkySM_aI_kADuKzat3G9REY/view?usp=sharing"
  },
  {
    title: "Elaboración de cerveza",
    id: "1o3Oz3NylF1VqDAlH2WKws0O7nb29w8CG",
    link: "https://drive.google.com/file/d/1o3Oz3NylF1VqDAlH2WKws0O7nb29w8CG/view?usp=sharing"
  },
  {
    title: "Elaboración de helados",
    id: "1JxsZp3H5L603oMYSXUa-O3WGfNXY9ewg",
    link: "https://drive.google.com/file/d/1JxsZp3H5L603oMYSXUa-O3WGfNXY9ewg/view?usp=sharing"
  },
  {
    title: "Elaboración y conservación de frutas y hortalizas",
    id: "1N_aIMspxYP9dikFo-N1CbxfueXgjYJvW",
    link: "https://drive.google.com/file/d/1N_aIMspxYP9dikFo-N1CbxfueXgjYJvW/view?usp=sharing"
  },
  {
    title: "Enciclopedia de las especias – Condimentos y plantas aromáticas",
    id: "1zKRE1rRm2BhCgPuc1nbwY2j_cyjeyQOj",
    link: "https://drive.google.com/file/d/1zKRE1rRm2BhCgPuc1nbwY2j_cyjeyQOj/view?usp=sharing"
  },
  {
    title: "Enfermedades alérgicas",
    id: "1tN8k7eCMaXLcXeocBgvVKUE1Dxx3Zh-y",
    link: "https://drive.google.com/file/d/1tN8k7eCMaXLcXeocBgvVKUE1Dxx3Zh-y/view?usp=sharing"
  },
  {
    title: "Enfermedades de origen alimentario",
    id: "1lQ3wvU_Y2VQmSwJsLwPLXj91c7HFL61A",
    link: "https://drive.google.com/file/d/1lQ3wvU_Y2VQmSwJsLwPLXj91c7HFL61A/view?usp=sharing"
  },
  {
    title: "Fundamentos de las operaciones unitarias para industrias alimentarias",
    id: "1AZG4bR_CFKTdxKmUWpP_Fi4PmCk6i5N3",
    link: "https://drive.google.com/file/d/1AZG4bR_CFKTdxKmUWpP_Fi4PmCk6i5N3/view?usp=sharing"
  },
  {
    title: "HACCP – Manual del auditor de calidad",
    id: "1VxYK4izz3Jn2VHelo0TxobJ8shlgOGv1",
    link: "https://drive.google.com/file/d/1VxYK4izz3Jn2VHelo0TxobJ8shlgOGv1/view?usp=sharing"
  },
  {
    title: "Higiene en los alimentos",
    id: "1jpqbYcpaPR8xZ-CqErPN3uGgM-GFu8kC",
    link: "https://drive.google.com/file/d/1jpqbYcpaPR8xZ-CqErPN3uGgM-GFu8kC/view?usp=sharing"
  },
  {
    title: "Introducción a la Acuacultura",
    id: "1OwWOmeX7yZrr8UMF49nTDKr_m7kPNgzn",
    link: "https://drive.google.com/file/d/1OwWOmeX7yZrr8UMF49nTDKr_m7kPNgzn/view?usp=sharing"
  },
  {
    title: "Introducción a la química de los colorantes",
    id: "1yLA5MXmtIA2uZXkev9OziiEQgr-96Izf",
    link: "https://drive.google.com/file/d/1yLA5MXmtIA2uZXkev9OziiEQgr-96Izf/view?usp=sharing"
  },
  {
    title: "La alergia en los alimentos",
    id: "1KZdf4YwvrYJflRpL2zF0GgL_unv2Ysvq",
    link: "https://drive.google.com/file/d/1KZdf4YwvrYJflRpL2zF0GgL_unv2Ysvq/view?usp=sharing"
  },
  {
    title: "La ciencia del chocolate",
    id: "1nZshV8sa4aiOcerd6o2SV6Edq1llVasc",
    link: "https://drive.google.com/file/d/1nZshV8sa4aiOcerd6o2SV6Edq1llVasc/view?usp=sharing"
  },
  {
    title: "Localización y distribución de plantas Agroindustriales",
    id: "1iWStKdyniKOdk4EfFAwq6kogpvZEc5dc",
    link: "https://drive.google.com/file/d/1iWStKdyniKOdk4EfFAwq6kogpvZEc5dc/view?usp=sharing"
  },
  {
    title: "Manual Avanzado de Panificación",
    id: "1ohC51hl0G7QooAarCeFCxsmgulyiN78N",
    link: "https://drive.google.com/file/d/1ohC51hl0G7QooAarCeFCxsmgulyiN78N/view?usp=sharing"
  },
  {
    title: "Manual Avanzado de Vitaminas y Suplementación Nutricional",
    id: "1P3hUV6adhcUjPNX-vqHDMR_XgybFWFk-",
    link: "https://drive.google.com/file/d/1P3hUV6adhcUjPNX-vqHDMR_XgybFWFk-/view?usp=sharing"
  },
  {
    title: "Manual BPM en cocinas",
    id: "11bi5E-N9Xh_B5iS1Vu7C1Pb1l_ACVDqs",
    link: "https://drive.google.com/file/d/11bi5E-N9Xh_B5iS1Vu7C1Pb1l_ACVDqs/view?usp=sharing"
  },
  {
    title: "Manual de alergia alimentaria",
    id: "1M735DB19MLuZqpNnVe45COy_gjOdOvrI",
    link: "https://drive.google.com/file/d/1M735DB19MLuZqpNnVe45COy_gjOdOvrI/view?usp=sharing"
  },
  {
    title: "Manual de elaboración de licores",
    id: "16sfQkEdnDymzteFwAO3DiVH8V1XHAvqG",
    link: "https://drive.google.com/file/d/16sfQkEdnDymzteFwAO3DiVH8V1XHAvqG/view?usp=sharing"
  },
  {
    title: "Manual de procesamiento de Frutas y Hortalizas",
    id: "1MW0MkLyA3XDVmhrSKwd1FYGnZ9PyPVB8",
    link: "https://drive.google.com/file/d/1MW0MkLyA3XDVmhrSKwd1FYGnZ9PyPVB8/view?usp=sharing"
  },
  {
    title: "Manual de vinos y licores",
    id: "1cXM9kJxUegjorr8aJXu_PA3_IzXGiZ7A",
    link: "https://drive.google.com/file/d/1cXM9kJxUegjorr8aJXu_PA3_IzXGiZ7A/view?usp=sharing"
  },
  {
    title: "Manual para manipuladores de alimentos",
    id: "1mDx-bDzNXhKuaP_6JKKy_oKMwfbpVe_-",
    link: "https://drive.google.com/file/d/1mDx-bDzNXhKuaP_6JKKy_oKMwfbpVe_-/view?usp=sharing"
  },
  {
    title: "Matemática de la cerveza",
    id: "1bXQotzOkQH6CNh48L7ybyO8npjj5SanL",
    link: "https://drive.google.com/file/d/1bXQotzOkQH6CNh48L7ybyO8npjj5SanL/view?usp=sharing"
  },
  {
    title: "Microbiología alimentaria",
    id: "17ETP8Wpeh6yc0Gug9f7oh8Bgvi5McRQU",
    link: "https://drive.google.com/file/d/17ETP8Wpeh6yc0Gug9f7oh8Bgvi5McRQU/view?usp=sharing"
  },
  {
    title: "Preelaboración y conservación de alimentos",
    id: "1mCeMXrKJVD1MsiVYTGBgebzxjRws_ZOh",
    link: "https://drive.google.com/file/d/1mCeMXrKJVD1MsiVYTGBgebzxjRws_ZOh/view?usp=sharing"
  },
  {
    title: "Procedimiento de tecnología de carnes",
    id: "1zC7vjjuqXoLDUtJeYeNxhRxNdL4B-Ils",
    link: "https://drive.google.com/file/d/1zC7vjjuqXoLDUtJeYeNxhRxNdL4B-Ils/view?usp=sharing"
  },
  {
    title: "Procedimientos de tecnología de la leche",
    id: "19gsdoTmpCI52UaVhCSIZdCUUMrblSoz4",
    link: "https://drive.google.com/file/d/19gsdoTmpCI52UaVhCSIZdCUUMrblSoz4/view?usp=sharing"
  },
  {
    title: "Procesamiento térmico de frutas y hortalizas",
    id: "1tKgm-CISbgMD0JByt6FEHQQH-HJBGjnn",
    link: "https://drive.google.com/file/d/1tKgm-CISbgMD0JByt6FEHQQH-HJBGjnn/view?usp=sharing"
  },
  {
    title: "Producción de lácteos",
    id: "1GthjAYAnhMy7dvWWXI6R46PMBPt9JLZI",
    link: "https://drive.google.com/file/d/1GthjAYAnhMy7dvWWXI6R46PMBPt9JLZI/view?usp=sharing"
  },
  {
    title: "Toxicología alimentaria",
    id: "1dEZvUxLtsav30_3TORUjOMK6X5U5A7Q2",
    link: "https://drive.google.com/file/d/1dEZvUxLtsav30_3TORUjOMK6X5U5A7Q2/view?usp=sharing"
  }
];

// =========================================
//  FUNCIÓN: OBTENER URL DE MINIATURA
// =========================================
function getThumbnailUrl(fileId) {
  // Google Drive thumbnail URL pública
  return `https://drive.google.com/thumbnail?id=${fileId}&sz=w400`;
}

// =========================================
//  FUNCIÓN: CREAR TARJETA DE LIBRO
// =========================================
function createBookCard(book, index) {
  const card = document.createElement('a');
  card.className = 'book-card';
  card.href = book.link;
  card.target = '_blank';
  card.rel = 'noopener noreferrer';
  card.setAttribute('data-title', book.title.toLowerCase());
  // Retraso escalonado en la animación de entrada
  card.style.animationDelay = `${index * 0.04}s`;

  const thumbUrl = getThumbnailUrl(book.id);

  card.innerHTML = `
    <div class="book-cover-wrapper">
      <img
        class="book-cover"
        src="${thumbUrl}"
        alt="Portada: ${book.title}"
        loading="lazy"
        onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
      />
      <div class="book-cover-fallback">
        <i class="fas fa-book"></i>
        <span>${book.title}</span>
      </div>
      <span class="book-badge">PDF</span>
    </div>
    <div class="book-info">
      <p class="book-title">${book.title}</p>
      <p class="book-type">
        <i class="fas fa-external-link-alt"></i>
        Abrir en Drive
      </p>
    </div>
  `;

  return card;
}

// =========================================
//  FUNCIÓN: RENDERIZAR LIBROS
// =========================================
function renderBooks(list) {
  const grid = document.getElementById('libraryGrid');
  grid.innerHTML = '';

  list.forEach((book, index) => {
    const card = createBookCard(book, index);
    grid.appendChild(card);
  });
}

// =========================================
//  FUNCIÓN: FILTRAR LIBROS
// =========================================
function filterBooks() {
  const query = document.getElementById('searchInput').value.trim().toLowerCase();
  const clearBtn = document.getElementById('clearBtn');
  const resultsInfo = document.getElementById('resultsInfo');
  const noResults = document.getElementById('noResults');

  clearBtn.style.display = query ? 'block' : 'none';

  const filtered = books.filter(book =>
    book.title.toLowerCase().includes(query)
  );

  renderBooks(filtered);

  if (query) {
    resultsInfo.textContent = `${filtered.length} resultado${filtered.length !== 1 ? 's' : ''} para "${query}"`;
  } else {
    resultsInfo.textContent = '';
  }

  noResults.style.display = filtered.length === 0 ? 'block' : 'none';
  document.getElementById('libraryGrid').style.display = filtered.length === 0 ? 'none' : 'grid';
}

// =========================================
//  FUNCIÓN: LIMPIAR BÚSQUEDA
// =========================================
function clearSearch() {
  const input = document.getElementById('searchInput');
  input.value = '';
  filterBooks();
  input.focus();
}

// =========================================
//  INICIALIZACIÓN
// =========================================
document.addEventListener('DOMContentLoaded', () => {
  // Actualizar contador total
  document.getElementById('total-books').textContent = books.length;

  // Renderizar todos los libros
  renderBooks(books);

  // Atajos de teclado
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') clearSearch();
    // Ctrl+K o / para enfocar búsqueda
    if ((e.ctrlKey && e.key === 'k') || (e.key === '/' && document.activeElement.tagName !== 'INPUT')) {
      e.preventDefault();
      document.getElementById('searchInput').focus();
    }
  });
});
