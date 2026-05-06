/* 
   NEWCONCRET - productos.js
   Catalogo unificado de productos.
*/

const STORE_BASE = 'https://tiendalonati.com.ar';

const productos = [
    {
        "id": "allanadora-cte436",
        "sku": "ALLANADORACTE436",
        "nombre": "Allanadora CTE436",
        "secciones": [
            "construccion"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Para compactar y alisar hormigón",
        "imagen": "/assets/img/productos/allanadora.png",
        "storeUrl": "https://tiendalonati.com.ar/productos/allanadora/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Motor",
                "valor": "Honda 5.5 HP"
            },
            {
                "icono": "◉",
                "clave": "Potencia",
                "valor": "3600 RPM"
            },
            {
                "icono": "◉",
                "clave": "Diametro de trabajo",
                "valor": "940 mm"
            }
        ],
        "rutas": [
            {
                "sección": "construccion",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "construccion",
                "categoría": "equipos",
                "subcategoría": ""
            },
            {
                "sección": "construccion",
                "categoría": "equipos",
                "subcategoría": "allanadoras"
            }
        ],
        "pdfUrl": "/assets/docs/allanadora-1777921009636.pdf",
        "visible": true
    },
    {
        "id": "concret-fix",
        "sku": "CONCRETFIX",
        "nombre": "Concret Fix",
        "secciones": [
            "construccion",
            "reparacion",
            "pulido"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Grouting de reparación estructural de secado rápido",
        "imagen": "/assets/img/productos/concretfix.png",
        "storeUrl": "https://tiendalonati.com.ar/productos/concret-fix/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Tipo",
                "valor": "Grouting cementicio"
            },
            {
                "icono": "◉",
                "clave": "Secado",
                "valor": "Fraguado rápido"
            },
            {
                "icono": "◉",
                "clave": "Presentaciones",
                "valor": "Bolsas de 25 kg"
            }
        ],
        "rutas": [
            {
                "sección": "construccion",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "construccion",
                "categoría": "materiales",
                "subcategoría": ""
            },
            {
                "sección": "construccion",
                "categoría": "materiales",
                "subcategoría": "grouting"
            },
            {
                "sección": "reparacion",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "reparacion",
                "categoría": "materiales",
                "subcategoría": ""
            },
            {
                "sección": "reparacion",
                "categoría": "materiales",
                "subcategoría": "grouting"
            },
            {
                "sección": "pulido",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "materiales",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "materiales",
                "subcategoría": "grouting"
            }
        ],
        "pdfUrl": "/assets/docs/1776186110601_Ficha_Tecnica_Concret_Fix.pdf",
        "visible": true
    },
    {
        "id": "concret-microstrong",
        "sku": "CONCRETMICROSTRONG",
        "nombre": "Concret MicroStrong",
        "secciones": [
            "construccion",
            "reparacion",
            "pulido"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Reparación, nivelación y terminación de superficies",
        "imagen": "/assets/img/productos/concretmicrostrong.png",
        "storeUrl": "https://tiendalonati.com.ar/productos/concret-microstrong/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Tipo",
                "valor": "Mortero cementicio"
            },
            {
                "icono": "◉",
                "clave": "Versiones",
                "valor": "Fino y Grueso"
            },
            {
                "icono": "◉",
                "clave": "Presentaciones",
                "valor": "Bolsas de 10 kg"
            }
        ],
        "rutas": [
            {
                "sección": "construccion",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "construccion",
                "categoría": "materiales",
                "subcategoría": ""
            },
            {
                "sección": "construccion",
                "categoría": "materiales",
                "subcategoría": "mortero-cementicio"
            },
            {
                "sección": "reparacion",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "reparacion",
                "categoría": "materiales",
                "subcategoría": ""
            },
            {
                "sección": "reparacion",
                "categoría": "materiales",
                "subcategoría": "mortero-cementicio"
            },
            {
                "sección": "pulido",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "materiales",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "materiales",
                "subcategoría": "mortero-cementicio"
            }
        ],
        "pdfUrl": "",
        "visible": true
    },
    {
        "id": "concret-dur",
        "sku": "CONCRETDUR",
        "nombre": "Concret Dur",
        "secciones": [
            "construccion",
            "reparacion"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Endurecedor superficial no metálico para hormigón fresco",
        "imagen": "/assets/img/productos/concretdur.png",
        "storeUrl": "${STORE_BASE}/productos/concret-dur/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Tipo",
                "valor": "Endurecedor superficial"
            },
            {
                "icono": "◉",
                "clave": "Versiones",
                "valor": "Dur 100, 200 y 300"
            },
            {
                "icono": "◉",
                "clave": "Presentaciones",
                "valor": "Bolsas de 25 kg"
            }
        ],
        "rutas": [
            {
                "sección": "construccion",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "construccion",
                "categoría": "materiales",
                "subcategoría": ""
            },
            {
                "sección": "construccion",
                "categoría": "materiales",
                "subcategoría": "endurecedor-superficial"
            },
            {
                "sección": "reparacion",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "reparacion",
                "categoría": "materiales",
                "subcategoría": ""
            },
            {
                "sección": "reparacion",
                "categoría": "materiales",
                "subcategoría": "endurecedor-superficial"
            }
        ],
        "pdfUrl": "",
        "visible": true
    },
    {
        "id": "nylon-negro-de-200-micrones",
        "sku": "NYLONNEGRO",
        "nombre": "Nylon Negro de 200 micrones",
        "secciones": [
            "construccion"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Barrera hidrófuga para humedad ascendente",
        "imagen": "/assets/img/productos/nylonnegro.png",
        "storeUrl": "https://tiendalonati.com.ar/productos/nylon-negro/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Material",
                "valor": "Polietileno"
            },
            {
                "icono": "◉",
                "clave": "Función",
                "valor": "Barrera hidrofuga"
            },
            {
                "icono": "◉",
                "clave": "Presentación",
                "valor": "Segun necesidad"
            }
        ],
        "pdfUrl": "",
        "visible": true,
        "rutas": [
            {
                "sección": "construccion",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "construccion",
                "categoría": "materiales",
                "subcategoría": ""
            },
            {
                "sección": "construccion",
                "categoría": "materiales",
                "subcategoría": "nylon"
            }
        ]
    },
    {
        "id": "concret-micro",
        "sku": "CONCRETMICRO",
        "nombre": "Concret Micro",
        "secciones": [
            "construccion"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Microfibra monofilamento",
        "imagen": "/assets/img/productos/microfibra.png",
        "storeUrl": "https://tiendalonati.com.ar/productos/microfibra3/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Material",
                "valor": "Polipropileno virgen"
            },
            {
                "icono": "◉",
                "clave": "Función",
                "valor": "Control de fisuración"
            },
            {
                "icono": "◉",
                "clave": "Presentación",
                "valor": "Bolsas de 0,6 kg"
            }
        ],
        "rutas": [
            {
                "sección": "construccion",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "construccion",
                "categoría": "materiales",
                "subcategoría": ""
            },
            {
                "sección": "construccion",
                "categoría": "materiales",
                "subcategoría": "microfibra"
            }
        ],
        "pdfUrl": "",
        "visible": true
    },
    {
        "id": "concret-fibra",
        "sku": "CONCRETFIBRA",
        "nombre": "Concret Fibra",
        "secciones": [
            "construccion"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Macrofibra de polipropileno",
        "imagen": "/assets/img/productos/macrofibra.png",
        "storeUrl": "${STORE_BASE}/productos/macrofibra/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Material",
                "valor": "Polipropileno virgen"
            },
            {
                "icono": "◉",
                "clave": "Función",
                "valor": "Refuerzo para hormigón"
            },
            {
                "icono": "◉",
                "clave": "Presentación",
                "valor": "Bolsas de 6 kg"
            }
        ],
        "rutas": [
            {
                "sección": "construccion",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "construccion",
                "categoría": "materiales",
                "subcategoría": ""
            },
            {
                "sección": "construccion",
                "categoría": "materiales",
                "subcategoría": "macrofibra"
            }
        ],
        "pdfUrl": "",
        "visible": true
    },
    {
        "id": "concret-one",
        "sku": "CONCRETONE",
        "nombre": "Concret One",
        "secciones": [
            "construccion"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Aditivo facilitador de llaneado",
        "imagen": "/assets/img/productos/concret-one-5-1777919261199.png",
        "storeUrl": "https://tiendalonati.com.ar/productos/concret-one/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Tipo",
                "valor": "Aditivo de sílice coloidal"
            },
            {
                "icono": "◉",
                "clave": "Función",
                "valor": "Regulador de fraguado"
            },
            {
                "icono": "◉",
                "clave": "Presentaciones",
                "valor": "5, 10 y 20 litros"
            }
        ],
        "rutas": [
            {
                "sección": "construccion",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "construccion",
                "categoría": "productos-quimicos",
                "subcategoría": ""
            },
            {
                "sección": "construccion",
                "categoría": "productos-quimicos",
                "subcategoría": "aditivo-llaneado"
            }
        ],
        "pdfUrl": "/assets/docs/ficha-tcnica---new-concret---concret-one-1777920855993.pdf",
        "visible": true
    },
    {
        "id": "concret-strong",
        "sku": "CONCRETSTRONG",
        "nombre": "Concret Strong",
        "secciones": [
            "construccion",
            "reparacion"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Aglutinante potenciado para sistemas de pulido",
        "imagen": "/assets/img/productos/strong-5-1777920959883.png",
        "storeUrl": "https://tiendalonati.com.ar/productos/concret-strong/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Tipo",
                "valor": "Aglutinante líquido"
            },
            {
                "icono": "◉",
                "clave": "Función",
                "valor": "Relleno de micro poros"
            },
            {
                "icono": "◉",
                "clave": "Presentaciones",
                "valor": "5, 10 y 20 litros"
            }
        ],
        "rutas": [
            {
                "sección": "construccion",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "construccion",
                "categoría": "productos-quimicos",
                "subcategoría": ""
            },
            {
                "sección": "construccion",
                "categoría": "productos-quimicos",
                "subcategoría": "aglutinantes"
            },
            {
                "sección": "reparacion",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "reparacion",
                "categoría": "productos-quimicos",
                "subcategoría": ""
            },
            {
                "sección": "reparacion",
                "categoría": "productos-quimicos",
                "subcategoría": "aglutinantes"
            },
            {
                "sección": "reparacion",
                "categoría": "productos-quimicos",
                "subcategoría": "puentes-de-adherencia"
            }
        ],
        "pdfUrl": "/assets/docs/ficha-tcnica---new-concret---concret-strong-1777920972787.pdf",
        "visible": true
    },
    {
        "id": "concret-restor",
        "sku": "CONCRETRESTOR",
        "nombre": "Concret Restor",
        "secciones": [
            "construccion",
            "reparacion"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Puente de adherencia",
        "imagen": "/assets/img/productos/5-l-1777920757894.png",
        "storeUrl": "https://tiendalonati.com.ar/productos/concret-restor/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Tipo",
                "valor": "Promotor de adherencia"
            },
            {
                "icono": "◉",
                "clave": "Función",
                "valor": "Unión entre capas"
            },
            {
                "icono": "◉",
                "clave": "Presentaciones",
                "valor": "5, 10 y 20 litros"
            }
        ],
        "rutas": [
            {
                "sección": "construccion",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "construccion",
                "categoría": "productos-quimicos",
                "subcategoría": ""
            },
            {
                "sección": "construccion",
                "categoría": "productos-quimicos",
                "subcategoría": "aglutinantes"
            },
            {
                "sección": "construccion",
                "categoría": "productos-quimicos",
                "subcategoría": "puentes-de-adherencia"
            },
            {
                "sección": "reparacion",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "reparacion",
                "categoría": "productos-quimicos",
                "subcategoría": ""
            },
            {
                "sección": "reparacion",
                "categoría": "productos-quimicos",
                "subcategoría": "aglutinantes"
            },
            {
                "sección": "reparacion",
                "categoría": "productos-quimicos",
                "subcategoría": "puentes-de-adherencia"
            }
        ],
        "pdfUrl": "/assets/docs/ficha-tcnica---new-concret---concret-restor-1777920767131.pdf",
        "visible": true
    },
    {
        "id": "concret-scudo",
        "sku": "CONCRETSCUDO",
        "nombre": "Concret Scudo",
        "secciones": [
            "construccion"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Curador de membrana",
        "imagen": "/assets/img/productos/scudo-5-1777920808015.png",
        "storeUrl": "https://tiendalonati.com.ar/productos/concret-scudo/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Tipo",
                "valor": "Curador acrílico líquido"
            },
            {
                "icono": "◉",
                "clave": "Función",
                "valor": "Control de evaporación"
            },
            {
                "icono": "◉",
                "clave": "Presentaciones",
                "valor": "5, 10 y 20 litros"
            }
        ],
        "rutas": [
            {
                "sección": "construccion",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "construccion",
                "categoría": "productos-quimicos",
                "subcategoría": ""
            },
            {
                "sección": "construccion",
                "categoría": "productos-quimicos",
                "subcategoría": "curadores"
            }
        ],
        "pdfUrl": "/assets/docs/ficha-tcnica---new-concret---concret-scudo-1777920816257.pdf",
        "visible": true
    },
    {
        "id": "sellador-poliuretnico",
        "sku": "SELLADORPOLIURETNICO",
        "nombre": "Sellador Poliuretánico",
        "secciones": [
            "construccion",
            "reparacion"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Sellado profesional de juntas",
        "imagen": "/assets/img/productos/sellador-newconcret-1777921719643.png",
        "storeUrl": "https://tiendalonati.com.ar/productos/sellador-poliuretanico/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Tipo",
                "valor": "Poliuretanico"
            },
            {
                "icono": "◉",
                "clave": "Función",
                "valor": "Sellado de juntas"
            },
            {
                "icono": "◉",
                "clave": "Presentación",
                "valor": "Sachet 600 g"
            }
        ],
        "rutas": [
            {
                "sección": "construccion",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "construccion",
                "categoría": "materiales",
                "subcategoría": ""
            },
            {
                "sección": "reparacion",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "reparacion",
                "categoría": "materiales",
                "subcategoría": ""
            }
        ],
        "pdfUrl": "",
        "visible": true
    },
    {
        "id": "plato-con-velcro-para-pulido",
        "sku": "PLATOCON",
        "nombre": "Plato con Velcro para Pulido",
        "secciones": [
            "construccion"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Accesorio para pulido con allanadora",
        "imagen": "/assets/img/productos/discos-allanadora.png",
        "storeUrl": "${STORE_BASE}/productos/plato-con-velcro/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Diametro",
                "valor": "33 cm"
            },
            {
                "icono": "◉",
                "clave": "Sistema",
                "valor": "Velcro industrial"
            },
            {
                "icono": "◉",
                "clave": "Compatibilidad",
                "valor": "Velcro industrial"
            }
        ],
        "rutas": [
            {
                "sección": "construccion",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "construccion",
                "categoría": "equipos",
                "subcategoría": ""
            },
            {
                "sección": "construccion",
                "categoría": "equipos",
                "subcategoría": "allanadoras"
            }
        ],
        "pdfUrl": "/assets/docs/acc-allanadora-1777921198331.pdf",
        "visible": true
    },
    {
        "id": "jackson-10",
        "sku": "JACKSON10",
        "nombre": "Jackson 10",
        "secciones": [
            "reparacion"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Escarificadora",
        "imagen": "/assets/img/productos/jackson-10-1777921631842.png",
        "storeUrl": "https://tiendalonati.com.ar/productos/jackson-101/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Motor",
                "valor": "10 HP"
            },
            {
                "icono": "◉",
                "clave": "Ancho de trabajo",
                "valor": "300mm"
            },
            {
                "icono": "◉",
                "clave": "Profundidad",
                "valor": "1 a 7 mm"
            }
        ],
        "pdfUrl": "",
        "visible": true,
        "rutas": [
            {
                "sección": "reparacion",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "reparacion",
                "categoría": "equipos",
                "subcategoría": ""
            },
            {
                "sección": "reparacion",
                "categoría": "equipos",
                "subcategoría": "escarificadoras"
            }
        ]
    },
    {
        "id": "jackson-15",
        "sku": "JACKSON15",
        "nombre": "Jackson 15",
        "secciones": [
            "reparacion"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Escarificadora",
        "imagen": "/assets/img/productos/jackson-15-1777921639477.png",
        "storeUrl": "https://tiendalonati.com.ar/productos/jackson-151/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Motor",
                "valor": "15 HP"
            },
            {
                "icono": "◉",
                "clave": "Ancho de trabajo",
                "valor": "300mm"
            },
            {
                "icono": "◉",
                "clave": "Profundidad",
                "valor": "1 a 30 mm"
            }
        ],
        "pdfUrl": "",
        "visible": true,
        "rutas": [
            {
                "sección": "reparacion",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "reparacion",
                "categoría": "equipos",
                "subcategoría": ""
            },
            {
                "sección": "reparacion",
                "categoría": "equipos",
                "subcategoría": "escarificadoras"
            }
        ]
    },
    {
        "id": "mecha-copa-diamantada",
        "sku": "MECHACOPA",
        "nombre": "Mecha Copa Diamantada",
        "secciones": [
            "reparacion"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Perforación en hormigón y superficies duras",
        "imagen": "/assets/img/productos/mecha-copa-diamantada.png",
        "storeUrl": "https://tiendalonati.com.ar/productos/mecha-copa-diamantada/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Diametro",
                "valor": "35, 45 y 55 mm"
            },
            {
                "icono": "◉",
                "clave": "Material",
                "valor": "Diamantada"
            },
            {
                "icono": "◉",
                "clave": "Compatibilidad",
                "valor": "Rosca M14"
            }
        ],
        "pdfUrl": "",
        "visible": true,
        "rutas": [
            {
                "sección": "reparacion",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "reparacion",
                "categoría": "insumos",
                "subcategoría": ""
            },
            {
                "sección": "reparacion",
                "categoría": "insumos",
                "subcategoría": "mechas-copa"
            }
        ]
    },
    {
        "id": "discos-flap",
        "sku": "DISCOSFLAP",
        "nombre": "Discos Flap",
        "secciones": [
            "reparacion",
            "pulido"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Desbaste, nivelación y pulido en zonas de difácil acceso",
        "imagen": "/assets/img/productos/disco-flap.png",
        "storeUrl": "https://tiendalonati.com.ar/productos/discos-flap/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Diametro",
                "valor": "115 mm"
            },
            {
                "icono": "◉",
                "clave": "Granos",
                "valor": "60 y 120"
            },
            {
                "icono": "◉",
                "clave": "Modo_de_uso",
                "valor": "Uso en seco"
            }
        ],
        "pdfUrl": "/assets/docs/discos-flap-1777921926290.pdf",
        "visible": true,
        "rutas": [
            {
                "sección": "reparacion",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "reparacion",
                "categoría": "insumos",
                "subcategoría": ""
            },
            {
                "sección": "reparacion",
                "categoría": "insumos",
                "subcategoría": "accesorios-amoladora"
            },
            {
                "sección": "pulido",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "insumos",
                "subcategoría": ""
            }
        ]
    },
    {
        "id": "disco-diamantado-para-amoladora",
        "sku": "DISCODIAMANTADO",
        "nombre": "Disco Diamantado para amoladora",
        "secciones": [
            "reparacion",
            "pulido"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Desbaste agresivo y remoción de recubrimientos",
        "imagen": "/assets/img/productos/metal-amoladora.png",
        "storeUrl": "https://tiendalonati.com.ar/productos/disco-diamantado-amoladora/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Material",
                "valor": "Metal Diamantado"
            },
            {
                "icono": "◉",
                "clave": "Diametro",
                "valor": "125 mm"
            },
            {
                "icono": "◉",
                "clave": "Granos",
                "valor": "30 y 60"
            }
        ],
        "pdfUrl": "/assets/docs/discos-amol-1777921912403.pdf",
        "visible": true,
        "rutas": [
            {
                "sección": "reparacion",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "reparacion",
                "categoría": "insumos",
                "subcategoría": ""
            },
            {
                "sección": "reparacion",
                "categoría": "insumos",
                "subcategoría": "accesorios-amoladora"
            },
            {
                "sección": "pulido",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "insumos",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "insumos",
                "subcategoría": "metales-desbaste"
            }
        ]
    },
    {
        "id": "disco-epoxi-para-amoladora",
        "sku": "DISCOEPOXI",
        "nombre": "Disco Epoxi para amoladora",
        "secciones": [
            "reparacion"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Remoción de recubrimientos epoxi y adhesivos",
        "imagen": "/assets/img/productos/epoxi-amoladora.png",
        "storeUrl": "https://tiendalonati.com.ar/productos/diamantado-epoxy-para-amoladora-5aq8s/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Material",
                "valor": "Segmentos PCD"
            },
            {
                "icono": "◉",
                "clave": "Diametro",
                "valor": "125 mm"
            },
            {
                "icono": "◉",
                "clave": "Grano",
                "valor": "Epoxi"
            }
        ],
        "pdfUrl": "/assets/docs/discos-amol-1777921939014.pdf",
        "visible": true,
        "rutas": [
            {
                "sección": "reparacion",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "reparacion",
                "categoría": "insumos",
                "subcategoría": ""
            },
            {
                "sección": "reparacion",
                "categoría": "insumos",
                "subcategoría": "accesorios-amoladora"
            }
        ]
    },
    {
        "id": "respaldo-amoladora",
        "sku": "RESPALDOAMOLADORA",
        "nombre": "Respaldo Amoladora",
        "secciones": [
            "reparacion"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Soporte para discos resinoides con sistema velcro",
        "imagen": "/assets/img/productos/respaldo-amoladora.png",
        "storeUrl": "https://tiendalonati.com.ar/productos/respaldo-de-amoladoras/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Diámetros",
                "valor": "100 mm y 180 mm"
            },
            {
                "icono": "◉",
                "clave": "Compatibilidad",
                "valor": "Rosca M14"
            },
            {
                "icono": "◉",
                "clave": "Adherencia",
                "valor": "Velcro Industrial"
            }
        ],
        "pdfUrl": "/assets/docs/resp-amol-1777921977326.pdf",
        "visible": true,
        "rutas": [
            {
                "sección": "reparacion",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "reparacion",
                "categoría": "insumos",
                "subcategoría": ""
            },
            {
                "sección": "reparacion",
                "categoría": "insumos",
                "subcategoría": "accesorios-amoladora"
            }
        ]
    },
    {
        "id": "carcasa-de-corte",
        "sku": "CARCASADE",
        "nombre": "Carcasa de corte",
        "secciones": [
            "reparacion"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Protección en trabajos de corte",
        "imagen": "/assets/img/productos/carcasa-corte.png",
        "storeUrl": "https://tiendalonati.com.ar/productos/carcasa-para-corte/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Compatibilidad",
                "valor": "Discos de corte"
            },
            {
                "icono": "◉",
                "clave": "Caracteristica",
                "valor": "Altura regulable"
            },
            {
                "icono": "◉",
                "clave": "Diametro",
                "valor": "115 mm"
            }
        ],
        "pdfUrl": "/assets/docs/carcasa-amol-1777922003671.pdf",
        "visible": true,
        "rutas": [
            {
                "sección": "reparacion",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "reparacion",
                "categoría": "insumos",
                "subcategoría": ""
            },
            {
                "sección": "reparacion",
                "categoría": "insumos",
                "subcategoría": "accesorios-amoladora"
            }
        ]
    },
    {
        "id": "carcasa-antipolvo",
        "sku": "CARCASAANTIPOLVO",
        "nombre": "Carcasa antipolvo",
        "secciones": [
            "reparacion"
        ],
        "categoria": "insumos",
        "cat_label": "Insumos",
        "subcategoria": "accesorios-amoladora",
        "descripcion": "Carcasa antipolvo para amoladora",
        "imagen": "/assets/img/productos/carcasa-antipolvo.png",
        "storeUrl": "${STORE_BASE}/productos/carcaza-antipolvo-para-amoladora/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Aplicacion",
                "valor": "Control de polucion"
            },
            {
                "icono": "◉",
                "clave": "Caracteristica",
                "valor": "Salida aspiradora"
            },
            {
                "icono": "◉",
                "clave": "Diametros",
                "valor": "125 mm y 180 mm"
            }
        ]
    },
    {
        "id": "punta-sds-plus",
        "sku": "PUNTASDS",
        "nombre": "Punta SDS Plus",
        "secciones": [
            "reparacion"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Demolición puntual y apertura inicial",
        "imagen": "/assets/img/productos/punta-sds-plus.png",
        "storeUrl": "${STORE_BASE}/productos/punta-sds-plus/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Tipo",
                "valor": "Punta cónica"
            },
            {
                "icono": "◉",
                "clave": "Sistema",
                "valor": "SDS Plus"
            },
            {
                "icono": "◉",
                "clave": "Material",
                "valor": "Acero templado"
            },
            {
                "icono": "◉",
                "clave": "Aplicacion",
                "valor": "Hormigón y mampostería"
            }
        ],
        "pdfUrl": "",
        "visible": true,
        "rutas": [
            {
                "sección": "reparacion",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "reparacion",
                "categoría": "insumos",
                "subcategoría": ""
            },
            {
                "sección": "reparacion",
                "categoría": "insumos",
                "subcategoría": "puntas-martillo"
            }
        ]
    },
    {
        "id": "pala-angosta-sds-plus",
        "sku": "PALAANGOSTA",
        "nombre": "Pala Angosta SDS Plus",
        "secciones": [
            "reparacion"
        ],
        "categoria": "insumos",
        "cat_label": "Insumos",
        "subcategoria": "puntas-martillo",
        "descripcion": "Canaletas y ranuras",
        "imagen": "/assets/img/productos/pala-angosta-sds-plus.png",
        "storeUrl": "${STORE_BASE}/productos/pala-angosta-sds-plus/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Tipo",
                "valor": "Cincel plano angosto"
            },
            {
                "icono": "◉",
                "clave": "Sistema",
                "valor": "SDS Plus"
            },
            {
                "icono": "◉",
                "clave": "Material",
                "valor": "Acero templado"
            },
            {
                "icono": "◉",
                "clave": "Aplicacion",
                "valor": "Hormigón y ladrillo"
            }
        ]
    },
    {
        "id": "pala-ancha-sds-plus",
        "sku": "PALAANCHA",
        "nombre": "Pala Ancha SDS Plus",
        "secciones": [
            "reparacion"
        ],
        "categoria": "insumos",
        "cat_label": "Insumos",
        "subcategoria": "puntas-martillo",
        "descripcion": "Remoción de revestimientos",
        "imagen": "/assets/img/productos/pala-ancha-sds-plus.png",
        "storeUrl": "${STORE_BASE}/productos/pala-ancha-sds-plus/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Tipo",
                "valor": "Cincel plano ancho"
            },
            {
                "icono": "◉",
                "clave": "Sistema",
                "valor": "SDS Plus"
            },
            {
                "icono": "◉",
                "clave": "Material",
                "valor": "Acero templado"
            },
            {
                "icono": "◉",
                "clave": "Aplicacion",
                "valor": "Hormigón y cerámicos"
            }
        ]
    },
    {
        "id": "ruedas-de-bujardado",
        "sku": "RUEDASDE",
        "nombre": "Ruedas de Bujardado",
        "secciones": [
            "reparacion"
        ],
        "categoria": "insumos",
        "cat_label": "Insumos",
        "subcategoria": "bujardado",
        "descripcion": "Texturado de hormigón",
        "imagen": "/assets/img/productos/ruedas-bujardado.png",
        "storeUrl": "${STORE_BASE}/productos/ruedas-de-bujardado/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Diametro",
                "valor": "75 mm"
            },
            {
                "icono": "◉",
                "clave": "Material",
                "valor": "Carburo diamantado"
            },
            {
                "icono": "◉",
                "clave": "Compatibilidad",
                "valor": "Pulidoras NewConcret"
            }
        ]
    },
    {
        "id": "plato-para-ruedas-de-bujardado",
        "sku": "PLATOPARA",
        "nombre": "Plato para Ruedas de Bujardado",
        "secciones": [
            "reparacion"
        ],
        "categoria": "insumos",
        "cat_label": "Insumos",
        "subcategoria": "bujardado",
        "descripcion": "Texturado de hormigón",
        "imagen": "/assets/img/productos/bujardado.png",
        "storeUrl": "${STORE_BASE}/productos/plato-bujardado/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Material",
                "valor": "Acero reforzado"
            },
            {
                "icono": "◉",
                "clave": "Sistema",
                "valor": "Ruedas intercambiables"
            },
            {
                "icono": "◉",
                "clave": "Compatibilidad",
                "valor": "Pulidoras NewConcret"
            }
        ]
    },
    {
        "id": "frida-400-eco",
        "sku": "FRIDA400",
        "nombre": "Frida 400 ECO",
        "secciones": [
            "pulido"
        ],
        "categoria": "equipos",
        "cat_label": "Equipos",
        "subcategoria": "pulidoras",
        "descripcion": "Pulidora semi-profesional",
        "imagen": "/assets/img/productos/frida-400.png",
        "storeUrl": "${STORE_BASE}/productos/frida-400/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Ancho de trabajo",
                "valor": "400 mm"
            },
            {
                "icono": "▲",
                "clave": "Potencia",
                "valor": "220 V (monofásica)"
            },
            {
                "icono": "◉",
                "clave": "Placas de fijacion",
                "valor": "3"
            }
        ]
    },
    {
        "id": "frida-450",
        "sku": "FRIDA450",
        "nombre": "Frida 450",
        "secciones": [
            "pulido"
        ],
        "categoria": "equipos",
        "cat_label": "Equipos",
        "subcategoria": "pulidoras",
        "descripcion": "Pulidora semi-profesional",
        "imagen": "/assets/img/productos/frida-450.png",
        "storeUrl": "${STORE_BASE}/productos/frida-450/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Ancho de trabajo",
                "valor": "450 mm"
            },
            {
                "icono": "▲",
                "clave": "Potencia",
                "valor": "220 V (monofásica)"
            },
            {
                "icono": "◉",
                "clave": "Placas de fijacion",
                "valor": "4"
            }
        ]
    },
    {
        "id": "frida-720",
        "sku": "FRIDA720",
        "nombre": "Frida 720",
        "secciones": [
            "pulido"
        ],
        "categoria": "equipos",
        "cat_label": "Equipos",
        "subcategoria": "pulidoras",
        "descripcion": "Pulidora Profesional",
        "imagen": "/assets/img/productos/frida-720.png",
        "storeUrl": "${STORE_BASE}/productos/frida-720/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Ancho de trabajo",
                "valor": "720 mm"
            },
            {
                "icono": "▲",
                "clave": "Potencia",
                "valor": "380 V (trifásica)"
            },
            {
                "icono": "◉",
                "clave": "Placas de fijacion",
                "valor": "12"
            }
        ]
    },
    {
        "id": "chavela-550s",
        "sku": "CHAVELA550S",
        "nombre": "Chavela 550s",
        "secciones": [
            "pulido"
        ],
        "categoria": "equipos",
        "cat_label": "Equipos",
        "subcategoria": "pulidoras",
        "descripcion": "Pulidora Satelital Profesional",
        "imagen": "/assets/img/productos/chavela-550.png",
        "storeUrl": "${STORE_BASE}/productos/chavela-550s/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Ancho de trabajo",
                "valor": "550 mm"
            },
            {
                "icono": "▲",
                "clave": "Potencia",
                "valor": "220 V (monofásica)"
            },
            {
                "icono": "◉",
                "clave": "Placas de fijacion",
                "valor": "9"
            }
        ]
    },
    {
        "id": "chavela-680",
        "sku": "CHAVELA680",
        "nombre": "Chavela 680",
        "secciones": [
            "pulido"
        ],
        "categoria": "equipos",
        "cat_label": "Equipos",
        "subcategoria": "pulidoras",
        "descripcion": "Pulidora Satelital Industrial",
        "imagen": "/assets/img/productos/chavela-680.png",
        "storeUrl": "${STORE_BASE}/productos/chavela-680/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Ancho de trabajo",
                "valor": "680 mm"
            },
            {
                "icono": "▲",
                "clave": "Potencia",
                "valor": "380 V (trifásica)"
            },
            {
                "icono": "◉",
                "clave": "Placas de fijacion",
                "valor": "12"
            }
        ]
    },
    {
        "id": "chavela-750",
        "sku": "CHAVELA750",
        "nombre": "Chavela 750",
        "secciones": [
            "pulido"
        ],
        "categoria": "equipos",
        "cat_label": "Equipos",
        "subcategoria": "pulidoras",
        "descripcion": "Pulidora Satelital Industrial",
        "imagen": "/assets/img/productos/chavela-750.png",
        "storeUrl": "${STORE_BASE}/productos/chavela-750/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Ancho de trabajo",
                "valor": "750 mm"
            },
            {
                "icono": "▲",
                "clave": "Potencia",
                "valor": "380 V (trifásica)"
            },
            {
                "icono": "◉",
                "clave": "Placas de fijacion",
                "valor": "12"
            }
        ]
    },
    {
        "id": "chavela-750cr",
        "sku": "CHAVELA750CR",
        "nombre": "Chavela 750CR",
        "secciones": [
            "pulido"
        ],
        "categoria": "equipos",
        "cat_label": "Equipos",
        "subcategoria": "pulidoras",
        "descripcion": "Pulidora Satelital Industrial a control remoto",
        "imagen": "/assets/img/productos/chavela-750cr.png",
        "storeUrl": "${STORE_BASE}/productos/chavela-750cr/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Ancho de trabajo",
                "valor": "750 mm"
            },
            {
                "icono": "▲",
                "clave": "Potencia",
                "valor": "380 V (trifásica)"
            },
            {
                "icono": "◉",
                "clave": "Placas de fijacion",
                "valor": "12"
            }
        ]
    },
    {
        "id": "chavela-850",
        "sku": "CHAVELA850",
        "nombre": "Chavela 850",
        "secciones": [
            "pulido"
        ],
        "categoria": "equipos",
        "cat_label": "Equipos",
        "subcategoria": "pulidoras",
        "descripcion": "Pulidora Satelital Industrial",
        "imagen": "/assets/img/productos/chavela-850.png",
        "storeUrl": "${STORE_BASE}/productos/chavela-850/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Ancho de trabajo",
                "valor": "850 mm"
            },
            {
                "icono": "▲",
                "clave": "Potencia",
                "valor": "380 V (trifásica)"
            },
            {
                "icono": "◉",
                "clave": "Placas de fijacion",
                "valor": "12"
            }
        ]
    },
    {
        "id": "chavela-900",
        "sku": "CHAVELA900",
        "nombre": "Chavela 900",
        "secciones": [
            "pulido"
        ],
        "categoria": "equipos",
        "cat_label": "Equipos",
        "subcategoria": "pulidoras",
        "descripcion": "Pulidora Satelital Industrial a control remoto",
        "imagen": "/assets/img/productos/chavela-900.png",
        "storeUrl": "${STORE_BASE}/productos/chavela-900/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Ancho de trabajo",
                "valor": "850 mm"
            },
            {
                "icono": "▲",
                "clave": "Potencia",
                "valor": "380 V (trifásica)"
            },
            {
                "icono": "◉",
                "clave": "Placas de fijacion",
                "valor": "12"
            }
        ]
    },
    {
        "id": "chavela-1366",
        "sku": "CHAVELA1366",
        "nombre": "Chavela 1366",
        "secciones": [
            "pulido"
        ],
        "categoria": "equipos",
        "cat_label": "Equipos",
        "subcategoria": "pulidoras",
        "descripcion": "Pulidora Satelital de dos Motores a Control Remoto",
        "imagen": "/assets/img/productos/chavela-1366.png",
        "storeUrl": "${STORE_BASE}/productos/chavela-1366/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Ancho de trabajo",
                "valor": "1366 mm"
            },
            {
                "icono": "▲",
                "clave": "Potencia",
                "valor": "380 V (trifásica)"
            },
            {
                "icono": "◉",
                "clave": "Placas de fijacion",
                "valor": "24"
            }
        ]
    },
    {
        "id": "tarsila-c1500-light",
        "sku": "TARSILAC1500",
        "nombre": "Tarsila C1500 Light",
        "secciones": [
            "pulido",
            "mantenimiento"
        ],
        "categoria": "equipos",
        "cat_label": "Equipos",
        "subcategoria": "lustradoras",
        "descripcion": "Lustradora de Alta Velocidad",
        "imagen": "/assets/img/productos/tarseila-c1500-light-7-1773156559338.png",
        "storeUrl": "${STORE_BASE}/productos/tarsila-c1500-light1/",
        "specs": [
            {
                "icono": "▲",
                "clave": "Motor",
                "valor": "1,5 HP"
            },
            {
                "icono": "◉",
                "clave": "Ancho",
                "valor": "51 cm"
            },
            {
                "icono": "◉",
                "clave": "RPM",
                "valor": "1500"
            }
        ]
    },
    {
        "id": "tarsila-c1500",
        "sku": "TARSILAC1500",
        "nombre": "Tarsila C1500",
        "secciones": [
            "mantenimiento",
            "pulido"
        ],
        "categoria": "equipos",
        "cat_label": "Equipos",
        "subcategoria": "lustradoras",
        "descripcion": "Lustradora industrial",
        "imagen": "/assets/img/productos/tarseila-c1500-1773156598791.png",
        "storeUrl": "${STORE_BASE}/productos/tarsila-c15001/",
        "specs": [
            {
                "icono": "▲",
                "clave": "Motor",
                "valor": "5HP / RPM 1500"
            },
            {
                "icono": "◉",
                "clave": "Ancho",
                "valor": "51 cm"
            },
            {
                "icono": "◉",
                "clave": "Peso",
                "valor": "90 Kg"
            }
        ]
    },
    {
        "id": "gala-d301",
        "sku": "GALAD301",
        "nombre": "Gala D301",
        "secciones": [],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Aspiradora Monofásica",
        "imagen": "/assets/img/productos/1774979593223_D301.png",
        "storeUrl": "${STORE_BASE}/productos/gala-d301-monofasica/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Ideal para",
                "valor": "Uso continuo"
            },
            {
                "icono": "▲",
                "clave": "Motor",
                "valor": "7.5 HP"
            },
            {
                "icono": "◉",
                "clave": "Filtro",
                "valor": "38.600 cm3"
            }
        ],
        "rutas": []
    },
    {
        "id": "gala-js400",
        "sku": "GALAJS400",
        "nombre": "Gala JS400",
        "secciones": [],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Aspiradora Trifásica Compacta",
        "imagen": "/assets/img/productos/1774979612256_JS400.png",
        "storeUrl": "${STORE_BASE}/productos/b480-trifasica/",
        "specs": [
            {
                "icono": "▲",
                "clave": "Motor",
                "valor": "7.5 HP"
            },
            {
                "icono": "◉",
                "clave": "Volumen de aire:",
                "valor": "318 m3/h"
            },
            {
                "icono": "◉",
                "clave": "Filtro",
                "valor": "HEPA"
            }
        ],
        "rutas": []
    },
    {
        "id": "gala-551",
        "sku": "GALA551",
        "nombre": "Gala 551",
        "secciones": [],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Aspiradora Industrial Trifásica",
        "imagen": "/assets/img/productos/1774979845948_G551.png",
        "storeUrl": "${STORE_BASE}/productos/gala-551-trifasica/",
        "specs": [
            {
                "icono": "▲",
                "clave": "Motor",
                "valor": "7.5 HP"
            },
            {
                "icono": "◉",
                "clave": "Área de Filtrado",
                "valor": "85.000 cm3"
            },
            {
                "icono": "▲",
                "clave": "Potencia",
                "valor": "380 V"
            }
        ],
        "rutas": []
    },
    {
        "id": "gala-w552",
        "sku": "GALAW552",
        "nombre": "Gala W552",
        "secciones": [],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Aspiradora Industrial Trifásica",
        "imagen": "/assets/img/productos/1774979861311_552.png",
        "storeUrl": "${STORE_BASE}/productos/gala-w552/",
        "specs": [
            {
                "icono": "▲",
                "clave": "Motor",
                "valor": "7.5 HP"
            },
            {
                "icono": "◉",
                "clave": "Área de Filtrado",
                "valor": "85.000 cm3"
            },
            {
                "icono": "▲",
                "clave": "Potencia",
                "valor": "380 V"
            }
        ],
        "rutas": []
    },
    {
        "id": "gala-sw551-trifsica",
        "sku": "GALASW551",
        "nombre": "Gala SW551 Trifásica",
        "secciones": [],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Aspiradora Industrial Trifásica",
        "imagen": "/assets/img/productos/1774979873749_SW551_Roja.png",
        "storeUrl": "${STORE_BASE}/productos/gala-sw551-trifasica/",
        "specs": [
            {
                "icono": "▲",
                "clave": "Motor",
                "valor": "7.5 HP"
            },
            {
                "icono": "◉",
                "clave": "Área de Filtrado",
                "valor": "38.600 cm2"
            },
            {
                "icono": "▲",
                "clave": "Potencia",
                "valor": "380V"
            }
        ],
        "rutas": []
    },
    {
        "id": "cicln-preseparador",
        "sku": "CICLNPRESEPARADOR",
        "nombre": "Ciclón preseparador",
        "secciones": [],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Ciclón Preseparador de residuos",
        "imagen": "/assets/img/productos/1774979886295_Ciclon.png",
        "storeUrl": "${STORE_BASE}/productos/ciclon-preseparador/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Función",
                "valor": "Disminuir el peso del material aspirado"
            }
        ],
        "rutas": []
    },
    {
        "id": "extensin-curva-para-cepillo-barredor",
        "sku": "EXTENSINCURVA",
        "nombre": "Extensión curva para cepillo barredor",
        "secciones": [],
        "categoria": "a",
        "cat_label": "A",
        "subcategoria": "c",
        "descripcion": "",
        "imagen": "https://acdn.mitiendanube.com/stores/003/469/628/products/extensioncurva-cacee0e49067ef7cdb17310961635402-480-0.webp",
        "storeUrl": "${STORE_BASE}/productos/extension-curva-para-cepillo-barredor/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Diametro",
                "valor": "50mm"
            }
        ]
    },
    {
        "id": "cepillo-barredor-con-ruedas-mc75",
        "sku": "CEPILLOBARREDOR",
        "nombre": "Cepillo barredor con ruedas MC75",
        "secciones": [],
        "categoria": "a",
        "cat_label": "A",
        "subcategoria": "c",
        "descripcion": "",
        "imagen": "https://acdn.mitiendanube.com/stores/003/469/628/products/cepillobarredor-6d2c0866c34661474517310969503581-480-0.webp",
        "storeUrl": "${STORE_BASE}/productos/cepillo-barredor-con-ruedas-mc75/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Diametro",
                "valor": "50 mm a 2 x 40 mm"
            }
        ]
    },
    {
        "id": "manguera-de-aspiracin",
        "sku": "MANGUERADE",
        "nombre": "Manguera de aspiración",
        "secciones": [],
        "categoria": "a",
        "cat_label": "A",
        "subcategoria": "c",
        "descripcion": "",
        "imagen": "https://acdn.mitiendanube.com/stores/003/469/628/products/manguera-dd3876fb071d75bcce17310962817090-480-0.webp",
        "storeUrl": "${STORE_BASE}/productos/manguera-de-aspiracion-de-pvc-interior-liso/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Material",
                "valor": "PVC"
            },
            {
                "icono": "◉",
                "clave": "Interior",
                "valor": "Liso"
            },
            {
                "icono": "◉",
                "clave": "Diametro",
                "valor": "50 mm"
            }
        ]
    },
    {
        "id": "bifurcacin-metlica-mc75",
        "sku": "BIFURCACINMETLICA",
        "nombre": "Bifurcación metálica MC75",
        "secciones": [],
        "categoria": "a",
        "cat_label": "A",
        "subcategoria": "c",
        "descripcion": "",
        "imagen": "https://acdn.mitiendanube.com/stores/003/469/628/products/bifurcacion-8cd7ec039f0771391217310967788401-480-0.webp",
        "storeUrl": "${STORE_BASE}/productos/bifurcacion-metalica-mc75/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Diametro",
                "valor": "50 mm a 2 x 40 mm"
            }
        ]
    },
    {
        "id": "terminales-para-manguera-mc75",
        "sku": "TERMINALESPARA",
        "nombre": "Terminales para manguera MC/75",
        "secciones": [],
        "categoria": "a",
        "cat_label": "A",
        "subcategoria": "c",
        "descripcion": "",
        "imagen": "https://acdn.mitiendanube.com/stores/003/469/628/products/terminales-bc2f19b0034d6683ce17310964231408-480-0.webp",
        "storeUrl": "${STORE_BASE}/productos/terminales-para-manguera-mc-75/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Diametro",
                "valor": "40 y 50mm"
            }
        ]
    },
    {
        "id": "cepillo-redondo-mc75",
        "sku": "CEPILLOREDONDO",
        "nombre": "Cepillo redondo MC/75",
        "secciones": [],
        "categoria": "a",
        "cat_label": "A",
        "subcategoria": "c",
        "descripcion": "",
        "imagen": "https://acdn.mitiendanube.com/stores/003/469/628/products/cepillo-a03c1648dcd6f6e32717310965854354-480-0.webp",
        "storeUrl": "${STORE_BASE}/productos/cepillo-redondo-mc-75/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Material",
                "valor": "Metálico y plástico"
            },
            {
                "icono": "◉",
                "clave": "Diametro",
                "valor": "50mm"
            }
        ]
    },
    {
        "id": "pico-chato-metlico-mc75",
        "sku": "PICOCHATO",
        "nombre": "Pico chato metálico MC/75",
        "secciones": [],
        "categoria": "a",
        "cat_label": "A",
        "subcategoria": "c",
        "descripcion": "",
        "imagen": "https://acdn.mitiendanube.com/stores/003/469/628/products/pico-89f2ce7a3b11a28c6d17310966658096-480-0.webp",
        "storeUrl": "${STORE_BASE}/productos/pico-chato-metalico-mc-75/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Diametro",
                "valor": "50mm"
            }
        ]
    },
    {
        "id": "metales-para-desbaste-circulares",
        "sku": "METALESPARA",
        "nombre": "Metales para desbaste circulares",
        "secciones": [],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Desbaste de Superficies",
        "imagen": "/assets/img/productos/1774979928639_Circulares_60_2.png",
        "storeUrl": "${STORE_BASE}/productos/metales-para-desbaste-linea-newconcret-circular/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Linea",
                "valor": "Metales Circulares"
            },
            {
                "icono": "◉",
                "clave": "Grano",
                "valor": "16, 30, 60, 120, 240 y 400"
            },
            {
                "icono": "◉",
                "clave": "Compatibilidad",
                "valor": "Pulidoras NewConcret"
            }
        ],
        "rutas": []
    },
    {
        "id": "metales-para-desbaste-trapezoidal",
        "sku": "METALESPARA",
        "nombre": "Metales para desbaste Trapezoidal",
        "secciones": [],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Desbaste de Superficies",
        "imagen": "/assets/img/productos/1774979950755_1.png",
        "storeUrl": "${STORE_BASE}/productos/metales-trapezoidales-alto-rendimiento/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Linea",
                "valor": "Trapezoidal Alto rendimiento"
            },
            {
                "icono": "◉",
                "clave": "Grano",
                "valor": "16, 30 ,60 ,120 ,220 ,400"
            },
            {
                "icono": "◉",
                "clave": "Compatibilidad",
                "valor": "Pulidoras NewConcret"
            }
        ],
        "rutas": []
    },
    {
        "id": "metales-para-desbaste-lnea-eco",
        "sku": "METALESPARA",
        "nombre": "Metales para desbaste línea ECO",
        "secciones": [],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Desbaste de Superficies",
        "imagen": "/assets/img/productos/1774979966424_Grano_8_2.png",
        "storeUrl": "${STORE_BASE}/productos/metales-para-desbaste-linea-newconcret-eco/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Linea",
                "valor": "Trapezoidal Eco"
            },
            {
                "icono": "◉",
                "clave": "Grano",
                "valor": "8, 16, 30, 60, 120, 240, 400"
            },
            {
                "icono": "◉",
                "clave": "Compatibilidad",
                "valor": "Pulidoras NewConcret"
            }
        ],
        "rutas": []
    },
    {
        "id": "metal-epoxi",
        "sku": "METALEPOXI",
        "nombre": "Metal Epoxi",
        "secciones": [],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Metal PCD Right-Left",
        "imagen": "/assets/img/productos/1774979995444_Epoxy_y_PCD2.png",
        "storeUrl": "${STORE_BASE}/productos/metal-para-remover-revestimientos-epoxy-poliuretano/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Remueve",
                "valor": "Revestimientos Epoxi y Poliuretano"
            },
            {
                "icono": "◉",
                "clave": "Rendimiento",
                "valor": ">1300 m²"
            },
            {
                "icono": "◉",
                "clave": "Composición",
                "valor": "Policristalinos de Diamante"
            }
        ],
        "rutas": []
    },
    {
        "id": "discos-resinoides-espesor-12-mm",
        "sku": "DISCOSRESINOIDES",
        "nombre": "Discos Resinoides Espesor 12 mm",
        "secciones": [],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Desbaste y Pulido de Superficies",
        "imagen": "/assets/img/productos/1774980072043_Grano_400_12mm__3_.jpg",
        "storeUrl": "${STORE_BASE}/productos/discos-resinoides-diametro-100-mm-12-mm-espesor/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Diametro",
                "valor": "100 mm"
            },
            {
                "icono": "◉",
                "clave": "Grano",
                "valor": "30/50/100/200/400/800"
            },
            {
                "icono": "▲",
                "clave": "Espesor",
                "valor": "12 mm"
            }
        ],
        "rutas": []
    },
    {
        "id": "discos-resinoides-espesor-8-mm",
        "sku": "DISCOSRESINOIDES",
        "nombre": "Discos Resinoides Espesor 8 mm",
        "secciones": [
            "pulido"
        ],
        "categoria": "insumos",
        "cat_label": "Insumos",
        "subcategoria": "resinoides",
        "descripcion": "Desbaste y Pulido de Superficies",
        "imagen": "/assets/img/productos/400-1773683050508.jpg",
        "storeUrl": "${STORE_BASE}/productos/discos-resinoides-diametro-100-mm-8-mm-espesor/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Diametro",
                "valor": "100 mm"
            },
            {
                "icono": "◉",
                "clave": "Grano",
                "valor": "30/50/100/200/400/800/1000/2000/3000"
            },
            {
                "icono": "▲",
                "clave": "Espesor",
                "valor": "8 mm"
            }
        ]
    },
    {
        "id": "discos-resinoides-para-empastado",
        "sku": "DISCOSRESINOIDES",
        "nombre": "Discos resinoides para empastado",
        "secciones": [],
        "categoria": "materiales",
        "cat_label": "Materiales",
        "subcategoria": "materiales",
        "descripcion": "",
        "imagen": "/assets/img/productos/empastinado-1773683133501.jpg",
        "storeUrl": "${STORE_BASE}/productos/discos-resinoides-para-empastado/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Función",
                "valor": "Distribuir pasta de relleno"
            },
            {
                "icono": "◉",
                "clave": "Diametro",
                "valor": "100 mm"
            },
            {
                "icono": "◉",
                "clave": "Material",
                "valor": "Compuestos de Resinas flexibles"
            }
        ]
    },
    {
        "id": "paos-diamantados",
        "sku": "PAOSDIAMANTADOS",
        "nombre": "Paños diamantados",
        "secciones": [],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "",
        "imagen": "/assets/img/productos/1774980413700_3_Pasos_3.png",
        "storeUrl": "${STORE_BASE}/productos/panos-diamantados-100-mm/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Diametro",
                "valor": "100 mm"
            },
            {
                "icono": "◉",
                "clave": "Función",
                "valor": "Sustituyen a los discos resinoides de 100 mm"
            },
            {
                "icono": "◉",
                "clave": "Grano",
                "valor": "1 / 2 / 3"
            }
        ],
        "rutas": []
    },
    {
        "id": "ruedas-de-burbujado",
        "sku": "RUEDASDE",
        "nombre": "Ruedas de burbujado",
        "secciones": [],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "",
        "imagen": "/assets/img/productos/1774980156131_Base___Ruedas_Bujardado_550_680__2_.png",
        "storeUrl": "${STORE_BASE}/productos/ruedas-de-bujardado/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Terminación",
                "valor": "Rugosa y delicada"
            },
            {
                "icono": "◉",
                "clave": "Aplicación",
                "valor": "Veredas, rampas de discapacitados, sendas peatonales al aire libre, cocheras o toda superficie que necesite una delicada rugosidad."
            }
        ],
        "rutas": []
    },
    {
        "id": "adaptador-universal",
        "sku": "ADAPTADORUNIVERSAL",
        "nombre": "Adaptador Universal",
        "secciones": [],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "",
        "imagen": "/assets/img/productos/1774980176434_Adaptador_1.png",
        "storeUrl": "${STORE_BASE}/productos/adaptador-universal/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Ideal para",
                "valor": "Usar nuestros insumos en todo tipo de máquinas"
            }
        ],
        "rutas": []
    },
    {
        "id": "base-con-velcro-p-disco-resinoide",
        "sku": "BASECON",
        "nombre": "Base con velcro p/ Disco resinoide",
        "secciones": [],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "",
        "imagen": "/assets/img/productos/1774980204391_Base_con_Velcro.png",
        "storeUrl": "${STORE_BASE}/productos/base-con-velcro-p-disco-resinoide/",
        "specs": [],
        "rutas": []
    },
    {
        "id": "faldas-para-pulidoras",
        "sku": "FALDASPARA",
        "nombre": "Faldas para pulidoras",
        "secciones": [],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "En pulidoras",
        "imagen": "/assets/img/productos/1774980234534_Pollera_Pulidora.png",
        "storeUrl": "${STORE_BASE}/productos/faldas-para-pulidoras1/",
        "specs": [],
        "rutas": []
    },
    {
        "id": "concret-restor",
        "sku": "CONCRETRESTOR",
        "nombre": "Concret Restor",
        "secciones": [],
        "categoria": "p",
        "cat_label": "p",
        "subcategoria": "r",
        "descripcion": "",
        "imagen": "https://acdn.mitiendanube.com/stores/003/469/628/products/restor1-06d0849cb3d57c801617095792871763-1024-1024.webp",
        "storeUrl": "${STORE_BASE}/productos/concret-restor1/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Presentación",
                "valor": "5 lts / 20 lts / 200 lts"
            },
            {
                "icono": "◉",
                "clave": "Efecto",
                "valor": "Sellador superficial para grietas, poros y pequeños huecos"
            },
            {
                "icono": "◉",
                "clave": "Aplicación",
                "valor": "En pisos de hormigón"
            }
        ]
    },
    {
        "id": "concret-sodium",
        "sku": "CONCRETSODIUM",
        "nombre": "Concret Sodium",
        "secciones": [],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Densificador a base de Sodio",
        "imagen": "/assets/img/productos/1774980261013_Sodium_5_L.png",
        "storeUrl": "${STORE_BASE}/productos/concret-sodium1/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Presentación",
                "valor": "5, 10 y 20 litros"
            },
            {
                "icono": "◉",
                "clave": "Efecto",
                "valor": "Densificador y Endurecedor"
            },
            {
                "icono": "◉",
                "clave": "Aplicación",
                "valor": "En pisos de hormigón"
            }
        ],
        "rutas": []
    },
    {
        "id": "concret-litium",
        "sku": "CONCRETLITIUM",
        "nombre": "Concret Litium",
        "secciones": [],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Densificador y sellador a base de litio",
        "imagen": "/assets/img/productos/1774980271081_Litium_5L.png",
        "storeUrl": "${STORE_BASE}/productos/concret-litium1/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Presentación",
                "valor": "5, 10 y 20 litros"
            },
            {
                "icono": "◉",
                "clave": "Efecto",
                "valor": "Densificador y sellador"
            },
            {
                "icono": "◉",
                "clave": "Aplicación",
                "valor": "En pisos de hormigón"
            }
        ],
        "rutas": []
    },
    {
        "id": "concret-lock",
        "sku": "CONCRETLOCK",
        "nombre": "Concret Lock",
        "secciones": [],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Impermeabilizante oleo e hidro repelente",
        "imagen": "/assets/img/productos/1774980286105_Lock_5L.png",
        "storeUrl": "${STORE_BASE}/productos/concret-lock1/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Presentación",
                "valor": "5, 10 y 20 litros"
            },
            {
                "icono": "◉",
                "clave": "Efecto",
                "valor": "Sellador impermeabilizantes"
            },
            {
                "icono": "◉",
                "clave": "Aplicación",
                "valor": "Ladrillos, lajas, piedras, cerámicas, mamposterias, etc."
            }
        ],
        "rutas": []
    },
    {
        "id": "concret-d",
        "sku": "CONCRETD",
        "nombre": "Concret D",
        "secciones": [],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Detergente removedor y desengrasante",
        "imagen": "/assets/img/productos/1774980316433_Concret_D_5.png",
        "storeUrl": "${STORE_BASE}/productos/concret-d1/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Presentación",
                "valor": "5, 10 y 20 litros"
            },
            {
                "icono": "◉",
                "clave": "Efecto",
                "valor": "Detergente"
            },
            {
                "icono": "◉",
                "clave": "Aplicación",
                "valor": "En pisos de hormigón"
            }
        ],
        "rutas": []
    },
    {
        "id": "concret-max",
        "sku": "CONCRETMAX",
        "nombre": "Concret Max",
        "secciones": [
            "pulido",
            "mantenimiento"
        ],
        "categoria": "productos-quimicos",
        "cat_label": "Productos Químicos",
        "subcategoria": "selladores",
        "descripcion": "Sellador de Alto Brillo",
        "imagen": "https://acdn.mitiendanube.com/stores/003/469/628/products/max1-24f9dfc8d224acb1ab17095782723940-1024-1024.webp",
        "storeUrl": "${STORE_BASE}/productos/concret-max1/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Presentación",
                "valor": "5, 10 y 20 lts"
            },
            {
                "icono": "◉",
                "clave": "Efecto",
                "valor": "Protección de alto brillo"
            },
            {
                "icono": "◉",
                "clave": "Aplicación",
                "valor": "Pisos de mosaico, mármol, terrazo, hormigón."
            }
        ]
    },
    {
        "id": "concret-finish",
        "sku": "CONCRETFINISH",
        "nombre": "Concret Finish",
        "secciones": [],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Sellador de Alto Solidos",
        "imagen": "/assets/img/productos/1774980353991_Finish_5L.png",
        "storeUrl": "${STORE_BASE}/productos/concret-finish/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Presentación",
                "valor": "5, 10 y 20 litros"
            },
            {
                "icono": "◉",
                "clave": "Efecto",
                "valor": "Sellador"
            },
            {
                "icono": "◉",
                "clave": "Aplicación",
                "valor": "Hormigón, granito, terrazo, etc."
            }
        ],
        "rutas": []
    },
    {
        "id": "gala-b480",
        "sku": "GALAB480",
        "nombre": "Gala B480",
        "secciones": [],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Aspiradora Industrial Monofásica",
        "imagen": "/assets/img/productos/1774980378204_B480.png",
        "storeUrl": "${STORE_BASE}/productos/gala-b480",
        "specs": [
            {
                "icono": "▲",
                "clave": "Motor",
                "valor": "3500 W"
            },
            {
                "icono": "◉",
                "clave": "Filtros",
                "valor": "HEPA"
            },
            {
                "icono": "◉",
                "clave": "Capacidad",
                "valor": "100 L"
            }
        ],
        "rutas": []
    },
    {
        "id": "gala-b301",
        "sku": "GALAB301",
        "nombre": "Gala B301",
        "secciones": [],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Aspiradora Industrial Monofásica",
        "imagen": "/assets/img/productos/1774980391705_Gala_B301__4_.png",
        "storeUrl": "${STORE_BASE}/productos/gala-b301",
        "specs": [
            {
                "icono": "▲",
                "clave": "Cantidad de Motores",
                "valor": "3"
            },
            {
                "icono": "▲",
                "clave": "Potencia",
                "valor": "3500 W"
            },
            {
                "icono": "◉",
                "clave": "Capacidad",
                "valor": "80 L"
            }
        ],
        "rutas": []
    }
];