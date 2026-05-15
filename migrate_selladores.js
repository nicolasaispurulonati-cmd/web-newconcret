const fs = require('fs');

const srcFile = 'c:/newconcret-2.0/mantenimiento/equipos/aspiradoras/index.html';
const dstFile = 'c:/newconcret-2.0/mantenimiento/productos-quimicos/selladores/index.html';

let content = fs.readFileSync(srcFile, 'utf8');

// Title and Meta
content = content.replace('<title>Aspiradoras Profesionales | NewConcret</title>', '<title>Selladores | Productos Químicos | NewConcret</title>');
content = content.replace('content="Aspiradoras profesionales de alto rendimiento para el mantenimiento de pisos industriales y comerciales."', 'content="Selladores anti-manchas y protectores para pisos de hormigón."');

// Breadcrumb
content = content.replace('<a href="../">Equipos</a>', '<a href="../">Químicos</a>');
content = content.replace('<em>Aspiradoras</em>', '<em>Selladores</em>');
content = content.replace('<span class="ph-eyebrow-tx">Equipos de Mantenimiento / NewConcret</span>', '<span class="ph-eyebrow-tx">Productos Químicos / NewConcret</span>');

// Title and Desc
content = content.replace('<h1 class="ph-title">Aspiradoras<br>profesionales</h1>', '<h1 class="ph-title">Selladores<br>protectores</h1>');
content = content.replace('<p class="ph-desc">Sistemas de aspiración profesional para el mantenimiento y limpieza de grandes superficies industriales.</p>', '<p class="ph-desc">Tratamientos anti-manchas y protectores para prolongar la vida útil del hormigón.</p>');

// Filter Bar
content = content.replace('<button class="pill active" data-filter="aspiradoras">Aspiradoras</button>', '<button class="pill active" data-filter="selladores">Selladores</button>');
content = content.replace('<button class="custom-select-trigger" id="customFilterTrigger">Aspiradoras</button>', '<button class="custom-select-trigger" id="customFilterTrigger">Selladores</button>');
content = content.replace('<div class="custom-option selected" data-value="aspiradoras">Aspiradoras</div>', '<div class="custom-option selected" data-value="selladores">Selladores</div>');

// Products count bar
content = content.replace('Mostrando <b id="showing-count">0</b> aspiradoras profesionales', 'Mostrando <b id="showing-count">0</b> selladores protectores');

// JS Vars
content = content.replace("const PAGE_CATEGORIA    = 'equipos';", "const PAGE_CATEGORIA    = 'productos-quimicos';");
content = content.replace("const PAGE_SUBCATEGORIA = 'aspiradoras';", "const PAGE_SUBCATEGORIA = 'selladores';");
content = content.replace("let activeFilter = 'aspiradoras';", "let activeFilter = 'selladores';");

fs.writeFileSync(dstFile, content);
console.log('Template copied and updated successfully.');
