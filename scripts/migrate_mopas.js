const fs = require('fs');

const srcFile = 'c:/newconcret-2.0/mantenimiento/equipos/aspiradoras/index.html';
const dstFileMopas = 'c:/newconcret-2.0/mantenimiento/accesorios/mopas/index.html';
const dstFilePanos = 'c:/newconcret-2.0/mantenimiento/accesorios/panos/index.html';

let contentBase = fs.readFileSync(srcFile, 'utf8');

// ==== MOPAS ====
let contentMopas = contentBase;

// Title and Meta
contentMopas = contentMopas.replace('<title>Aspiradoras Profesionales | NewConcret</title>', '<title>Mopas y Pulverizadores | Accesorios | NewConcret</title>');
contentMopas = contentMopas.replace('content="Aspiradoras profesionales de alto rendimiento para el mantenimiento de pisos industriales y comerciales."', 'content="Mopas de microfibra y pulverizadores para aplicación de productos."');

// Breadcrumb
contentMopas = contentMopas.replace('<a href="../">Equipos</a>', '<a href="../">Accesorios</a>');
contentMopas = contentMopas.replace('<em>Aspiradoras</em>', '<em>Mopas y pulverizadores</em>');
contentMopas = contentMopas.replace('<span class="ph-eyebrow-tx">Equipos de Mantenimiento / NewConcret</span>', '<span class="ph-eyebrow-tx">Accesorios · Mantenimiento</span>');

// Title and Desc
contentMopas = contentMopas.replace('<h1 class="ph-title">Aspiradoras<br>profesionales</h1>', '<h1 class="ph-title">Mopas y<br>pulverizadores</h1>');
contentMopas = contentMopas.replace('<p class="ph-desc">Sistemas de aspiración profesional para el mantenimiento y limpieza de grandes superficies industriales.</p>', '<p class="ph-desc">Herramientas ergonómicas para la correcta aplicación de selladores y limpiadores.</p>');

// Filter Bar
contentMopas = contentMopas.replace('<button class="pill active" data-filter="aspiradoras">Aspiradoras</button>', '<button class="pill active" data-filter="mopas">Mopas y pulverizadores</button>');
contentMopas = contentMopas.replace('<button class="custom-select-trigger" id="customFilterTrigger">Aspiradoras</button>', '<button class="custom-select-trigger" id="customFilterTrigger">Mopas y pulverizadores</button>');
contentMopas = contentMopas.replace('<div class="custom-option selected" data-value="aspiradoras">Aspiradoras</div>', '<div class="custom-option selected" data-value="mopas">Mopas y pulverizadores</div>');

// Products count bar
contentMopas = contentMopas.replace('Mostrando <b id="showing-count">0</b> aspiradoras profesionales', 'Mostrando <b id="showing-count">0</b> mopas y pulverizadores');

// JS Vars
contentMopas = contentMopas.replace("const PAGE_CATEGORIA    = 'equipos';", "const PAGE_CATEGORIA    = 'accesorios';");
contentMopas = contentMopas.replace("const PAGE_SUBCATEGORIA = 'aspiradoras';", "const PAGE_SUBCATEGORIA = 'mopas';");
contentMopas = contentMopas.replace("let activeFilter = 'aspiradoras';", "let activeFilter = 'mopas';");

fs.writeFileSync(dstFileMopas, contentMopas);
console.log('Template copied and updated for mopas successfully.');

// ==== PAÑOS ====
if (fs.existsSync(dstFilePanos)) {
  let contentPanos = contentBase;

  // Title and Meta
  contentPanos = contentPanos.replace('<title>Aspiradoras Profesionales | NewConcret</title>', '<title>Paños y Discos | Accesorios | NewConcret</title>');
  contentPanos = contentPanos.replace('content="Aspiradoras profesionales de alto rendimiento para el mantenimiento de pisos industriales y comerciales."', 'content="Paños y discos de limpieza para lavasecapisos y lustradoras."');

  // Breadcrumb
  contentPanos = contentPanos.replace('<a href="../">Equipos</a>', '<a href="../">Accesorios</a>');
  contentPanos = contentPanos.replace('<em>Aspiradoras</em>', '<em>Paños y discos</em>');
  contentPanos = contentPanos.replace('<span class="ph-eyebrow-tx">Equipos de Mantenimiento / NewConcret</span>', '<span class="ph-eyebrow-tx">Accesorios · Mantenimiento</span>');

  // Title and Desc
  contentPanos = contentPanos.replace('<h1 class="ph-title">Aspiradoras<br>profesionales</h1>', '<h1 class="ph-title">Paños y<br>discos</h1>');
  contentPanos = contentPanos.replace('<p class="ph-desc">Sistemas de aspiración profesional para el mantenimiento y limpieza de grandes superficies industriales.</p>', '<p class="ph-desc">Consumibles de alta durabilidad para equipos de limpieza y mantenimiento.</p>');

  // Filter Bar
  contentPanos = contentPanos.replace('<button class="pill active" data-filter="aspiradoras">Aspiradoras</button>', '<button class="pill active" data-filter="panos">Paños y discos</button>');
  contentPanos = contentPanos.replace('<button class="custom-select-trigger" id="customFilterTrigger">Aspiradoras</button>', '<button class="custom-select-trigger" id="customFilterTrigger">Paños y discos</button>');
  contentPanos = contentPanos.replace('<div class="custom-option selected" data-value="aspiradoras">Aspiradoras</div>', '<div class="custom-option selected" data-value="panos">Paños y discos</div>');

  // Products count bar
  contentPanos = contentPanos.replace('Mostrando <b id="showing-count">0</b> aspiradoras profesionales', 'Mostrando <b id="showing-count">0</b> paños y discos');

  // JS Vars
  contentPanos = contentPanos.replace("const PAGE_CATEGORIA    = 'equipos';", "const PAGE_CATEGORIA    = 'accesorios';");
  contentPanos = contentPanos.replace("const PAGE_SUBCATEGORIA = 'aspiradoras';", "const PAGE_SUBCATEGORIA = 'panos';");
  contentPanos = contentPanos.replace("let activeFilter = 'aspiradoras';", "let activeFilter = 'panos';");

  fs.writeFileSync(dstFilePanos, contentPanos);
  console.log('Template copied and updated for panos successfully.');
}
