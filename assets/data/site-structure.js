/* ── site-structure.js ── 
   Define la taxonomía completa del sitio para el Panel Admin.
   Sincronizado al 100% con los Mega Menus de layout.js
*/

const NEWCONCRET_STRUCTURE = {
  "construccion": {
    "label": "Construcción",
    "categories": {
      "materiales": {
        "label": "Materiales",
        "subcategories": [
          { "slug": "nylon", "label": "Nylon" },
          { "slug": "microfibra", "label": "Microfibra" },
          { "slug": "macrofibra", "label": "Macrofibra" },
          { "slug": "endurecedor-superficial", "label": "Endurecedor superficial" },
          { "slug": "grouting", "label": "Grouting" },
          { "slug": "mortero-cementicio", "label": "Mortero cementicio" }
        ]
      },
      "productos-quimicos": {
        "label": "Productos químicos",
        "subcategories": [
          { "slug": "aglutinantes", "label": "Aglutinantes" },
          { "slug": "puentes-de-adherencia", "label": "Puentes de adherencia" },
          { "slug": "curadores", "label": "Curadores" },
          { "slug": "aditivo-llaneado", "label": "Aditivos para llaneado" }
        ]
      },
      "equipos": {
        "label": "Equipos",
        "subcategories": [
          { "slug": "allanadoras", "label": "Allanadoras" }
        ]
      }
    }
  },
  "reparacion": {
    "label": "Reparación",
    "categories": {
      "materiales": {
        "label": "Materiales",
        "subcategories": [
          { "slug": "grouting", "label": "Grouting" },
          { "slug": "mortero-cementicio", "label": "Mortero cementicio" },
          { "slug": "endurecedor-superficial", "label": "Endurecedor superficial" }
        ]
      },
      "productos-quimicos": {
        "label": "Químicos",
        "subcategories": [
          { "slug": "aglutinantes", "label": "Aglutinantes" },
          { "slug": "puentes-de-adherencia", "label": "Puentes de adherencia" }
        ]
      },
      "equipos": {
        "label": "Equipos",
        "subcategories": [
          { "slug": "escarificadoras", "label": "Escarificadoras" }
        ]
      },
      "insumos": {
        "label": "Insumos",
        "subcategories": [
          { "slug": "accesorios-amoladora", "label": "Accesorios amoladora" },
          { "slug": "bujardado", "label": "Ruedas de bujardado" },
          { "slug": "puntas-martillo", "label": "Puntas martillo" },
          { "slug": "mechas-copa", "label": "Mechas copa" }
        ]
      }
    }
  },
  "pulido": {
    "label": "Pulido",
    "categories": {
      "materiales": {
        "label": "Materiales",
        "subcategories": [
          { "slug": "grouting", "label": "Grouting" },
          { "slug": "mortero-cementicio", "label": "Mortero cementicio" }
        ]
      },
      "productos-quimicos": {
        "label": "Productos químicos",
        "subcategories": [
          { "slug": "aglutinantes", "label": "Aglutinantes" },
          { "slug": "puentes-de-adherencia", "label": "Puentes de adherencia" },
          { "slug": "densificadores", "label": "Densificadores" },
          { "slug": "impermeabilizantes", "label": "Impermeabilizantes" },
          { "slug": "selladores", "label": "Selladores" },
          { "slug": "detergentes", "label": "Detergentes" }
        ]
      },
      "equipos": {
        "label": "Equipos",
        "subcategories": [
          { "slug": "pulidoras", "label": "Pulidoras" },
          { "slug": "accesorios-pulidoras", "label": "Accesorios pulidoras" },
          { "slug": "aspiradoras", "label": "Aspiradoras" },
          { "slug": "accesorios-aspiradoras", "label": "Accesorios aspiradoras" },
          { "slug": "lustradoras", "label": "Lustradoras" },
          { "slug": "lavasecapisos", "label": "Lavasecapisos" }
        ]
      },
      "insumos": {
        "label": "Insumos",
        "subcategories": [
          { "slug": "metales-desbaste", "label": "Metales para desbaste" },
          { "slug": "discos-resinoides", "label": "Discos resinoides" },
          { "slug": "panos-diamantados", "label": "Paños diamantados" }
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
          { "slug": "aspiradoras", "label": "Aspiradoras" },
          { "slug": "lustradoras", "label": "Lustradoras" },
          { "slug": "lavasecapisos", "label": "Lavasecapisos" }
        ]
      },
      "productos-quimicos": {
        "label": "Productos químicos",
        "subcategories": [
          { "slug": "selladores", "label": "Selladores" },
          { "slug": "desengrasantes", "label": "Desengrasantes" }
        ]
      },
      "accesorios": {
        "label": "Accesorios",
        "subcategories": [
          { "slug": "mopas", "label": "Mopas y pulverizadores" },
          { "slug": "panos", "label": "Paños de lustre" }
        ]
      }
    }
  }
};
