const fs = require('fs');

const srcFile = 'c:/newconcret-2.0/mantenimiento/equipos/aspiradoras/index.html';
const dstFile = 'c:/newconcret-2.0/mantenimiento/productos-quimicos/desengrasantes/index.html';

let content = fs.readFileSync(srcFile, 'utf8');

// Title and Meta
content = content.replace('<title>Aspiradoras Profesionales | NewConcret</title>', '<title>Desengrasantes | Productos Químicos | NewConcret</title>');
content = content.replace('content="Aspiradoras profesionales de alto rendimiento para el mantenimiento de pisos industriales y comerciales."', 'content="Desengrasantes industriales para limpieza profunda de hormigón y mampostería."');

// Breadcrumb
content = content.replace('<a href="../">Equipos</a>', '<a href="../">Químicos</a>');
content = content.replace('<em>Aspiradoras</em>', '<em>Desengrasantes</em>');
content = content.replace('<span class="ph-eyebrow-tx">Equipos de Mantenimiento / NewConcret</span>', '<span class="ph-eyebrow-tx">Productos Químicos / NewConcret</span>');

// Title and Desc
content = content.replace('<h1 class="ph-title">Aspiradoras<br>profesionales</h1>', '<h1 class="ph-title">Desengrasantes<br>industriales</h1>');
content = content.replace('<p class="ph-desc">Sistemas de aspiración profesional para el mantenimiento y limpieza de grandes superficies industriales.</p>', '<p class="ph-desc">Fórmulas concentradas para la limpieza profunda y remoción de grasas en pisos de hormigón.</p>');

// Filter Bar
content = content.replace('<button class="pill active" data-filter="aspiradoras">Aspiradoras</button>', '<button class="pill active" data-filter="desengrasantes">Desengrasantes</button>');
content = content.replace('<button class="custom-select-trigger" id="customFilterTrigger">Aspiradoras</button>', '<button class="custom-select-trigger" id="customFilterTrigger">Desengrasantes</button>');
content = content.replace('<div class="custom-option selected" data-value="aspiradoras">Aspiradoras</div>', '<div class="custom-option selected" data-value="desengrasantes">Desengrasantes</div>');

// Products count bar
content = content.replace('Mostrando <b id="showing-count">0</b> aspiradoras profesionales', 'Mostrando <b id="showing-count">0</b> desengrasantes industriales');

// JS Vars
content = content.replace("const PAGE_CATEGORIA    = 'equipos';", "const PAGE_CATEGORIA    = 'productos-quimicos';");
content = content.replace("const PAGE_SUBCATEGORIA = 'aspiradoras';", "const PAGE_SUBCATEGORIA = 'desengrasantes';");
content = content.replace("let activeFilter = 'aspiradoras';", "let activeFilter = 'desengrasantes';");

fs.writeFileSync(dstFile, content);
console.log('Template copied and updated for desengrasantes successfully.');
