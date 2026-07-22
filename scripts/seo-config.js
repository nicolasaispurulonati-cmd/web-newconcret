/**
 * NEWCONCRET — seo-config.js
 * Configuración central de SEO / metadatos. Editá ACÁ y se propaga a todo:
 * canonical, OpenGraph, JSON-LD, robots.txt, sitemap.xml y llms.txt.
 *
 * ⚠️ DOMINIO: cambiá DOMAIN cuando newconcret.com esté conectado a Vercel.
 */

const DOMAIN = 'https://newconcret.com'; // ← única fuente de verdad del dominio

const ORG = {
  id:          DOMAIN + '/#organization',
  name:        'NewConcret',
  legalName:   'NewConcret',
  url:         DOMAIN + '/',
  logo:        DOMAIN + '/logos/logonewconcret-blanco.png',
  email:       'info@newconcret.com',
  phone:       '+5492342464082',           // E.164
  whatsapp:    'https://wa.me/5492342464082',
  sameAs: [
    'https://www.instagram.com/newconcret/'
  ],
  address: {
    street:  'Las Cigüeñas 217',
    city:    'Bragado',
    region:  'Buenos Aires',
    country: 'AR'
  },
  // Descripción "de entidad": clara, factual, sin marketing inflado. Es lo que
  // una IA lee para entender QUÉ es NewConcret y citarlo con confianza.
  description:
    'NewConcret es una empresa argentina especializada en pisos de hormigón. ' +
    'Comercializa maquinaria industrial, insumos técnicos (tratamientos químicos, ' +
    'discos diamantados, morteros) y dicta capacitaciones profesionales para el ' +
    'pulido, la construcción, la reparación y el mantenimiento de pisos de hormigón. ' +
    'Con sede en Bragado, Buenos Aires, da servicio en toda Argentina.'
};

const SITE = {
  id:           DOMAIN + '/#website',
  name:         'NewConcret',
  inLanguage:   'es-AR',
  locale:       'es_AR'
};

// Imagen OG por defecto (1.2k px, formato webp soportado por Google/redes).
const DEFAULT_OG_IMAGE = DOMAIN + '/assets/img/hero/productos.webp';

// Áreas/servicios principales (para llms.txt y descripciones de sección).
const SECTIONS = {
  construccion:  { label: 'Construcción de pisos de hormigón', desc: 'Equipos (allanadoras, aserradoras), materiales (endurecedores, morteros, fibras) y químicos para la construcción de pisos industriales de hormigón.' },
  pulido:        { label: 'Pulido de pisos de hormigón',       desc: 'Pulidoras, aspiradoras, discos diamantados, densificadores y selladores para el pulido profesional de pisos de hormigón.' },
  reparacion:    { label: 'Reparación de pisos de hormigón',   desc: 'Escarificadoras, bujardado, mechas copa, morteros y químicos para la reparación de superficies de hormigón.' },
  mantenimiento: { label: 'Mantenimiento de pisos',            desc: 'Lavasecapisos, lustradoras, aspiradoras, mopas, paños, desengrasantes y selladores para el mantenimiento de pisos pulidos.' }
};

// Etiquetas legibles para breadcrumbs y llms.txt (slug → texto).
const LABELS = {
  construccion: 'Construcción', pulido: 'Pulido', reparacion: 'Reparación', mantenimiento: 'Mantenimiento',
  equipos: 'Equipos', materiales: 'Materiales', insumos: 'Insumos', accesorios: 'Accesorios',
  'productos-quimicos': 'Productos Químicos', allanadoras: 'Allanadoras', aserradoras: 'Aserradoras',
  'endurecedor-superficial': 'Endurecedor Superficial', grouting: 'Grouting', macrofibra: 'Macrofibra',
  microfibra: 'Microfibra', 'mortero-cementicio': 'Mortero Cementicio', nylon: 'Nylon',
  'aditivo-llaneado': 'Aditivo de Llaneado', aglutinantes: 'Aglutinantes', curadores: 'Curadores',
  'puentes-de-adherencia': 'Puentes de Adherencia', mopas: 'Mopas', panos: 'Paños',
  aspiradoras: 'Aspiradoras', lavasecapisos: 'Lavasecapisos', lustradoras: 'Lustradoras',
  desengrasantes: 'Desengrasantes', selladores: 'Selladores',
  'accesorios-aspiradoras': 'Accesorios de Aspiradoras', 'accesorios-pulidoras': 'Accesorios de Pulidoras',
  pulidoras: 'Pulidoras', 'discos-resinoides': 'Discos Resinoides', 'metales-desbaste': 'Metales de Desbaste',
  'panos-diamantados': 'Paños Diamantados', densificadores: 'Densificadores', detergentes: 'Detergentes',
  impermeabilizantes: 'Impermeabilizantes', escarificadoras: 'Escarificadoras',
  'accesorios-amoladora': 'Accesorios de Amoladora', bujardado: 'Bujardado', 'mechas-copa': 'Mechas Copa',
  'puntas-martillo': 'Puntas de Martillo', productos: 'Productos', nosotros: 'Nosotros',
  contacto: 'Contacto', capacitacion: 'Capacitaciones', blog: 'Blog',
  proteccion: 'Protección', 'sistema-3-pasos': 'Sistema 3 Pasos'
};

function label(seg) {
  return LABELS[seg] || seg.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

module.exports = { DOMAIN, ORG, SITE, DEFAULT_OG_IMAGE, SECTIONS, LABELS, label };
