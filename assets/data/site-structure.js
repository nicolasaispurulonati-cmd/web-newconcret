/* ── site-structure.js ── 
   Define la taxonomía completa del sitio para el selector del Panel Admin.
*/

const NEWCONCRET_STRUCTURE = {
  "construccion": {
    "label": "Construcción",
    "categories": {
      "productos-quimicos": {
        "label": "Productos Químicos",
        "subcategories": [
          { "slug": "aglutinantes", "label": "Aglutinantes" },
          { "slug": "puentes-de-adherencia", "label": "Puentes de Adherencia" },
          { "slug": "curadores", "label": "Curadores" },
          { "slug": "aditivo-llaneado", "label": "Aditivos para Llaneado" }
        ]
      },
      "materiales": {
        "label": "Materiales",
        "subcategories": [
          { "slug": "nylon", "label": "Nylon" },
          { "slug": "microfibra", "label": "Microfibra" },
          { "slug": "macrofibra", "label": "Macrofibra" },
          { "slug": "endurecedor-superficial", "label": "Endurecedor Superficial" },
          { "slug": "grouting", "label": "Grouting" },
          { "slug": "mortero-cementicio", "label": "Mortero Cementicio" },
          { "slug": "sellador-poliuretanico", "label": "Sellador Poliuretánico" }
        ]
      },
      "equipos": {
        "label": "Equipos",
        "subcategories": [
          { "slug": "allanadoras", "label": "Allanadoras" }
        ]
      },
      "accesorios": {
        "label": "Accesorios",
        "subcategories": [
          { "slug": "accesorios-allanadora", "label": "Accesorios para Allanadoras" },
          { "slug": "discos-prep", "label": "Discos de Preparación" },
          { "slug": "platos-velcro", "label": "Platos de Velcro" }
        ]
      }
    }
  },
  "reparacion": {
    "label": "Reparación",
    "categories": {
      "equipos": {
        "label": "Equipos",
        "subcategories": [
          { "slug": "escarificadoras", "label": "Escarificadoras" }
        ]
      },
      "materiales": {
        "label": "Materiales",
        "subcategories": [
          { "slug": "nylon", "label": "Nylon" },
          { "slug": "microfibra", "label": "Microfibra" },
          { "slug": "macrofibra", "label": "Macrofibra" },
          { "slug": "endurecedor-superficial", "label": "Endurecedor Superficial" },
          { "slug": "grouting", "label": "Grouting" },
          { "slug": "mortero-cementicio", "label": "Mortero Cementicio" }
        ]
      },
      "productos-quimicos": {
        "label": "Productos Químicos",
        "subcategories": [
          { "slug": "aglutinantes", "label": "Aglutinantes" },
          { "slug": "puentes-de-adherencia", "label": "Puentes de Adherencia" },
          { "slug": "curadores", "label": "Curadores" },
          { "slug": "aditivo-llaneado", "label": "Aditivos para Llaneado" }
        ]
      },
      "insumos": {
        "label": "Insumos",
        "subcategories": [
          { "slug": "puntas-martillo", "label": "Puntas de Martillo" },
          { "slug": "accesorios-amoladora", "label": "Accesorios para Amoladora" },
          { "slug": "bujardado", "label": "Bujardado" }
        ]
      }
    }
  },
  "pulido": {
    "label": "Pulido",
    "categories": {
      "equipos": {
        "label": "Equipos",
        "subcategories": [
          { "slug": "pulidoras", "label": "Pulidoras" },
          { "slug": "aspiradoras", "label": "Aspiradoras" }
        ]
      },
      "insumos": {
        "label": "Insumos",
        "subcategories": [
          { "slug": "diametales-metalicos", "label": "Diamantados Metálicos" },
          { "slug": "herramientas-pcd", "label": "Herramientas PCD" },
          { "slug": "copas-diamantadas", "label": "Copas Diamantadas" },
          { "slug": "discos-resinoides", "label": "Discos Resinoides" },
          { "slug": "discos-abrillantadores", "label": "Discos Abrillantadores" }
        ]
      },
      "quimicos": {
        "label": "Químicos",
        "subcategories": [
          { "slug": "densificadores", "label": "Densificadores" },
          { "slug": "selladores-penetrantes", "label": "Selladores Penetrantes" },
          { "slug": "limpiadores-industriales", "label": "Limpiadores Industriales" }
        ]
      }
    }
  },
  "mantenimiento": {
    "label": "Mantenimiento",
    "categories": {
      "equipos": {
        "label": "Equipos",
        "subcategories": [
          { "slug": "lustradoras", "label": "Lustradoras" },
          { "slug": "aspiradoras-manto", "label": "Aspiradoras de Mantenimiento" }
        ]
      },
      "insumos": {
        "label": "Insumos",
        "subcategories": [
          { "slug": "pads-diamantados", "label": "Pads Diamantados" },
          { "slug": "cepillos", "label": "Cepillos" },
          { "slug": "discos-fibras", "label": "Discos de Fibra" }
        ]
      },
      "quimicos": {
        "label": "Químicos",
        "subcategories": [
          { "slug": "detergentes-neutros", "label": "Detergentes Neutros" },
          { "slug": "ceras-metalizadas", "label": "Ceras Metalizadas" }
        ]
      }
    }
  }
};
