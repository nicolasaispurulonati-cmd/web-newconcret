/* 
   NEWCONCRET - productos.js
   Catalogo unificado de productos.
*/

const STORE_BASE = 'https://tiendalonati.com.ar';

const productos = [
    {
        "id": "prod_mpfnbk3b",
        "nombre": "Aserradora CTE436",
        "sku": "ASERRADORA",
        "descripcion": "Aserradora para corte de juntas en pisos de hormigón, con motor trifásico de 5,5 HP, guía láser y aspiración de polvo integrada.",
        "imagen": "/assets/img/productos/aserradora-1-1779377279250.webp",
        "pdfUrl": "/assets/docs/corta-juntas-2-1779377320986.pdf",
        "storeUrl": "",
        "visible": true,
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
                "subcategoría": "aserradoras"
            }
        ],
        "secciones": [
            "construccion"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "specs": [
            {
                "icono": "◉",
                "clave": "Potencia de corte",
                "valor": "5,5 HP"
            },
            {
                "icono": "◉",
                "clave": "Profundidad máx. de corte",
                "valor": "65 mm"
            },
            {
                "icono": "◉",
                "clave": "Voltaje",
                "valor": "380V trifásico"
            }
        ]
    },
    {
        "id": "prod_mp2xi1g1",
        "nombre": "Metales PCD Right/Left",
        "sku": "PCD-ROJO-AZUL",
        "descripcion": "Segmentos con filos PCD en versiones Right y Left para la remoción agresiva de recubrimientos.",
        "imagen": "/assets/img/productos/epoxy-y-pcd-1778608255871.webp",
        "pdfUrl": "/assets/docs/metales-pcd-1779301993506.pdf",
        "storeUrl": "https://tiendalonati.com.ar/productos/metal-epoxy-poliuretano/",
        "visible": true,
        "rutas": [
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
        ],
        "secciones": [
            "pulido"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "specs": [
            {
                "icono": "◉",
                "clave": "Variantes",
                "valor": "Right y Left"
            },
            {
                "icono": "◉",
                "clave": "Rendimiento",
                "valor": ">1300 m²"
            },
            {
                "icono": "◉",
                "clave": "Aplicación",
                "valor": "Epoxi, poliuretanos, adhesivos y pinturas"
            }
        ]
    },
    {
        "id": "prod_mp2xw1r5",
        "nombre": "Metal Epoxi Circular",
        "sku": "EPOXI-CIRCULAR",
        "descripcion": "Segmento metálico circular para remover epoxi, poliuretanos y pinturas de alta adherencia.",
        "imagen": "/assets/img/productos/circular-epoxy-2-1778608929665.webp",
        "pdfUrl": "/assets/docs/metales-pcd-1784565821117.pdf",
        "storeUrl": "https://tiendalonati.com.ar/productos/metal-epoxy-circular/",
        "visible": true,
        "rutas": [
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
        ],
        "secciones": [
            "pulido"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "specs": [
            {
                "icono": "◉",
                "clave": "Geometría",
                "valor": "Circular"
            },
            {
                "icono": "◉",
                "clave": "Aplicación",
                "valor": "Remoción de recubrimientos"
            },
            {
                "icono": "◉",
                "clave": "Compatibilidad",
                "valor": "Base metálica o magnética NewConcret"
            }
        ]
    },
    {
        "id": "metal-epoxi",
        "sku": "METALEPOXI",
        "nombre": "Metal Epoxi Trapezoidal",
        "secciones": [
            "pulido"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Segmento metálico trapezoidal para remover recubrimientos de alta adherencia con desgaste uniforme.",
        "imagen": "/assets/img/productos/epoxy-1778605387003.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/metal-epoxy-trapezoidal/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Geometría",
                "valor": "Trapezoidal"
            },
            {
                "icono": "◉",
                "clave": "Rendimiento",
                "valor": ">1300 m²"
            },
            {
                "icono": "◉",
                "clave": "Compatibilidad",
                "valor": "Bases universales o magnéticas NewConcret"
            }
        ],
        "rutas": [
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
        ],
        "pdfUrl": "/assets/docs/metales-pcd-1784565832502.pdf",
        "visible": true
    },
    {
        "id": "metales-para-desbaste-circulares",
        "sku": "METALESPARA",
        "nombre": "Metal para desbaste Circular",
        "secciones": [
            "pulido"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Segmentos circulares de desbaste con diamante calibrado para nivelar y preparar el hormigón.",
        "imagen": "/assets/img/productos/circulares-8-2-1778604202928.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/metales-circulares/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Granos",
                "valor": "8 a 400"
            },
            {
                "icono": "◉",
                "clave": "Aleación",
                "valor": "Cobre, hierro y cobalto"
            },
            {
                "icono": "◉",
                "clave": "Aplicación",
                "valor": "Nivelación y preparación mecánica"
            }
        ],
        "rutas": [
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
        ],
        "pdfUrl": "/assets/docs/metales-circulare-1778604147818.pdf",
        "visible": true
    },
    {
        "id": "tarsila-c1500-light",
        "sku": "TARSILAC1500",
        "nombre": "Lustradora Tarsila C1500 Light",
        "secciones": [
            "pulido",
            "mantenimiento"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Lustradora monofásica de ultra alta velocidad para pulido, abrillantado y mantenimiento de pisos.",
        "imagen": "/assets/img/productos/tarseila-c1500-light-7-1773156559338.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/lustradora-tarsila-c1500-light/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Potencia",
                "valor": "1300 W (1,5 HP) – 220 V"
            },
            {
                "icono": "◉",
                "clave": "Velocidad",
                "valor": "1500 RPM"
            },
            {
                "icono": "◉",
                "clave": "Ancho de trabajo",
                "valor": "51 cm (20”)"
            }
        ],
        "pdfUrl": "/assets/docs/lustradora-tarsila-light-1778597083459.pdf",
        "visible": true,
        "rutas": [
            {
                "sección": "pulido",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "equipos",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "equipos",
                "subcategoría": "lustradoras"
            },
            {
                "sección": "mantenimiento",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "mantenimiento",
                "categoría": "equipos",
                "subcategoría": ""
            },
            {
                "sección": "mantenimiento",
                "categoría": "equipos",
                "subcategoría": "lustradoras"
            }
        ]
    },
    {
        "id": "tarsila-c1500",
        "sku": "TARSILAC1500",
        "nombre": "Lustradora Tarsila C1500",
        "secciones": [
            "pulido",
            "mantenimiento"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Lustradora industrial de ultra alta velocidad para acabados de alto brillo sobre hormigón tratado.",
        "imagen": "/assets/img/productos/1500-nueva-1778598427788.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/tarsila-c1500/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Potencia",
                "valor": "5,5 HP – 220 V"
            },
            {
                "icono": "◉",
                "clave": "Velocidad",
                "valor": "0–1440 RPM"
            },
            {
                "icono": "◉",
                "clave": "Diámetro del plato",
                "valor": "510 mm"
            }
        ],
        "pdfUrl": "/assets/docs/lustradora-tarsila-1500-1778598389073.pdf",
        "visible": true,
        "rutas": [
            {
                "sección": "pulido",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "equipos",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "equipos",
                "subcategoría": "lustradoras"
            },
            {
                "sección": "mantenimiento",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "mantenimiento",
                "categoría": "equipos",
                "subcategoría": ""
            },
            {
                "sección": "mantenimiento",
                "categoría": "equipos",
                "subcategoría": "lustradoras"
            }
        ]
    },
    {
        "id": "prod_mp2spm6m",
        "nombre": "Lavasecapisos MB460",
        "sku": "MB460",
        "descripcion": "Lavasecapisos compacto con alimentación directa a 220 V, sin interrupciones por carga.",
        "imagen": "/assets/img/productos/mb460-1778600227857.webp",
        "pdfUrl": "/assets/docs/mb460-1778600234967.pdf",
        "storeUrl": "https://tiendalonati.com.ar/productos/lavasecapisos-mb460/",
        "visible": true,
        "rutas": [
            {
                "sección": "pulido",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "equipos",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "equipos",
                "subcategoría": "lavasecapisos"
            },
            {
                "sección": "mantenimiento",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "mantenimiento",
                "categoría": "equipos",
                "subcategoría": ""
            },
            {
                "sección": "mantenimiento",
                "categoría": "equipos",
                "subcategoría": "lavasecapisos"
            }
        ],
        "secciones": [
            "pulido",
            "mantenimiento"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "specs": [
            {
                "icono": "◉",
                "clave": "Rendimiento",
                "valor": "1.850 m²/h"
            },
            {
                "icono": "◉",
                "clave": "Ancho de limpieza",
                "valor": "450 mm"
            },
            {
                "icono": "◉",
                "clave": "Capacidad tanques",
                "valor": "35 L / 42 L"
            }
        ]
    },
    {
        "id": "prod_mp2t7yml",
        "nombre": "Lavasecapisos MX3",
        "sku": "MX3",
        "descripcion": "Lavasecapisos a batería que limpia y seca en un solo paso, sin cables.",
        "imagen": "/assets/img/productos/mx3-1778601166341.webp",
        "pdfUrl": "/assets/docs/mx3-1778601171496.pdf",
        "storeUrl": "https://tiendalonati.com.ar/productos/lavasecapisos-mx3/",
        "visible": true,
        "rutas": [
            {
                "sección": "pulido",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "equipos",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "equipos",
                "subcategoría": "lavasecapisos"
            },
            {
                "sección": "mantenimiento",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "mantenimiento",
                "categoría": "equipos",
                "subcategoría": ""
            },
            {
                "sección": "mantenimiento",
                "categoría": "equipos",
                "subcategoría": "lavasecapisos"
            }
        ],
        "secciones": [
            "pulido",
            "mantenimiento"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "specs": [
            {
                "icono": "◉",
                "clave": "Rendimiento",
                "valor": "2.850 m²/h"
            },
            {
                "icono": "◉",
                "clave": "Ancho de limpieza",
                "valor": "530 mm"
            },
            {
                "icono": "◉",
                "clave": "Autonomía",
                "valor": "3 a 4 horas"
            }
        ]
    },
    {
        "id": "prod_mp2tfel4",
        "nombre": "Lavasecapisos MX3T",
        "sku": "MX3T",
        "descripcion": "Lavasecapisos a batería autopropulsada para limpieza intensiva a velocidad de trabajo constante.",
        "imagen": "/assets/img/productos/mx3-1778601543367.webp",
        "pdfUrl": "/assets/docs/mx3t-1778601462133.pdf",
        "storeUrl": "https://tiendalonati.com.ar/productos/lavasecapisos-mx3t/",
        "visible": true,
        "rutas": [
            {
                "sección": "pulido",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "equipos",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "equipos",
                "subcategoría": "lavasecapisos"
            },
            {
                "sección": "mantenimiento",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "mantenimiento",
                "categoría": "equipos",
                "subcategoría": ""
            },
            {
                "sección": "mantenimiento",
                "categoría": "equipos",
                "subcategoría": "lavasecapisos"
            }
        ],
        "secciones": [
            "pulido",
            "mantenimiento"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "specs": [
            {
                "icono": "◉",
                "clave": "Rendimiento",
                "valor": "3.200 m²/h"
            },
            {
                "icono": "◉",
                "clave": "Ancho de limpieza",
                "valor": "530 mm"
            },
            {
                "icono": "◉",
                "clave": "Tracción",
                "valor": "Motorizada, autopropulsada"
            }
        ]
    },
    {
        "id": "prod_mp40z4uh",
        "nombre": "Lavasecapisos MB135",
        "sku": "LAV-MB135",
        "descripcion": "Lavasecapisos ride-on de doble cepillo con tracción motorizada, para grandes superficies.",
        "imagen": "/assets/img/productos/mb135-1778674658727.webp",
        "pdfUrl": "/assets/docs/mb135-1778674667448.pdf",
        "storeUrl": "https://tiendalonati.com.ar/productos/lavasecapisos-mb135/",
        "visible": true,
        "rutas": [
            {
                "sección": "pulido",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "equipos",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "equipos",
                "subcategoría": "lavasecapisos"
            },
            {
                "sección": "mantenimiento",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "mantenimiento",
                "categoría": "equipos",
                "subcategoría": ""
            },
            {
                "sección": "mantenimiento",
                "categoría": "equipos",
                "subcategoría": "lavasecapisos"
            }
        ],
        "secciones": [
            "pulido",
            "mantenimiento"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "specs": [
            {
                "icono": "◉",
                "clave": "Rendimiento",
                "valor": "4.500–5.600 m²/h"
            },
            {
                "icono": "◉",
                "clave": "Ancho de limpieza",
                "valor": "800 mm"
            },
            {
                "icono": "◉",
                "clave": "Autonomía",
                "valor": "3 a 4 horas"
            }
        ]
    },
    {
        "id": "prod_mp48pywy",
        "nombre": "Barredora M50",
        "sku": "BARR-MS50",
        "descripcion": "Barredora MS50 es un equipo de alta capacidad diseñado para cubrir grandes superficies con máxima eficiencia, autonomía y potencia.",
        "imagen": "/assets/img/productos/ms50-1778687672939.webp",
        "pdfUrl": "/assets/docs/ms50-1778687678615.pdf",
        "storeUrl": "",
        "visible": true,
        "rutas": [
            {
                "sección": "mantenimiento",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "mantenimiento",
                "categoría": "equipos",
                "subcategoría": ""
            }
        ],
        "secciones": [
            "mantenimiento"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "specs": [
            {
                "icono": "◉",
                "clave": "Eficiencia de Limpieza",
                "valor": "7960 m²/h"
            },
            {
                "icono": "◉",
                "clave": "Tiempo de Trabajo",
                "valor": "4 a 5 horas"
            },
            {
                "icono": "◉",
                "clave": "Ancho de Barrido",
                "valor": "1500 mm"
            }
        ]
    },
    {
        "id": "prod_mp48ol0v",
        "nombre": "Barredora MS30",
        "sku": "BARR-MS30",
        "descripcion": "Barredora MS30 es un equipo industrial diseñado para cubrir grandes superficies con máxima eficiencia, autonomía y capacidad de barrido.",
        "imagen": "/assets/img/productos/ms30-1778682885069.webp",
        "pdfUrl": "/assets/docs/ms30-1778682911457.pdf",
        "storeUrl": "",
        "visible": true,
        "rutas": [
            {
                "sección": "mantenimiento",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "mantenimiento",
                "categoría": "equipos",
                "subcategoría": ""
            }
        ],
        "secciones": [
            "mantenimiento"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "specs": [
            {
                "icono": "◉",
                "clave": "Eficiencia de Limpeiza",
                "valor": "5580 m²/h"
            },
            {
                "icono": "◉",
                "clave": "Tiempo de Trabajo",
                "valor": "3 a 4 horas"
            },
            {
                "icono": "◉",
                "clave": "Ancho de Barrido",
                "valor": "1150 mm"
            }
        ]
    },
    {
        "id": "frida-400-eco",
        "sku": "FRIDA400",
        "nombre": "Pulidora Frida 400 ECO",
        "secciones": [
            "pulido"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Pulidora semiprofesional compacta con fondo magnético, para hormigón, mármol, terrazo y piedra.",
        "imagen": "/assets/img/productos/frida-400.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/frida-400/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Transmisión",
                "valor": "3 correas de aleación de aluminio"
            },
            {
                "icono": "◉",
                "clave": "Fondo",
                "valor": "Magnético"
            },
            {
                "icono": "◉",
                "clave": "Rueda trasera",
                "valor": "Dual independiente"
            }
        ],
        "pdfUrl": "/assets/docs/frida-400-1778596814278.pdf",
        "visible": true,
        "rutas": [
            {
                "sección": "pulido",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "equipos",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "equipos",
                "subcategoría": "pulidoras"
            }
        ]
    },
    {
        "id": "frida-450",
        "sku": "FRIDA450",
        "nombre": "Pulidora Frida 450",
        "secciones": [
            "pulido"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Pulidora semiprofesional de 4 cabezales con fondo magnético y rueda trasera dual.",
        "imagen": "/assets/img/productos/frida-450.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/frida-450/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Motor",
                "valor": "5,5 HP – 220 V"
            },
            {
                "icono": "◉",
                "clave": "Velocidad",
                "valor": "800 RPM"
            },
            {
                "icono": "◉",
                "clave": "Cabezales",
                "valor": "4"
            }
        ],
        "pdfUrl": "/assets/docs/frida-450-1778596781261.pdf",
        "visible": true,
        "rutas": [
            {
                "sección": "pulido",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "equipos",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "equipos",
                "subcategoría": "pulidoras"
            }
        ]
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
        "descripcion": "Film de polietileno negro que actúa como barrera hidrófuga bajo contrapisos y plateas.",
        "imagen": "/assets/img/productos/nylonnegro.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/nylon-negro/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Espesor",
                "valor": "200 micrones"
            },
            {
                "icono": "◉",
                "clave": "Presentación",
                "valor": "4 × 50 m (~200 m²)"
            },
            {
                "icono": "◉",
                "clave": "Función",
                "valor": "Barrera contra humedad ascendente"
            }
        ],
        "pdfUrl": "/assets/docs/ficha-tcnica-nylon-negro-1778596573206.pdf",
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
        "id": "concret-dur",
        "sku": "CONCRETDUR",
        "nombre": "Concret Dur",
        "secciones": [
            "construccion"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Endurecedor superficial no metálico que se aplica sobre hormigón fresco para lograr una capa monolítica antidesgaste.",
        "imagen": "/assets/img/productos/concretdur.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/concret-dur/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Tipos disponibles",
                "valor": "Dur 100 / 200 / 300"
            },
            {
                "icono": "◉",
                "clave": "Presentación",
                "valor": "Bolsas de 25 kg"
            },
            {
                "icono": "◉",
                "clave": "Aplicación",
                "valor": "Sobre hormigón fresco"
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
            }
        ],
        "pdfUrl": "/assets/docs/ficha-tecnica-concret-dur-1778593121150.pdf",
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
        "descripcion": "Grouting cementicio monocomponente de fraguado rápido para reparaciones estructurales.",
        "imagen": "/assets/img/productos/concretfix.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/concret-fix/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Fraguado",
                "valor": "Rápido"
            },
            {
                "icono": "◉",
                "clave": "Rendimiento",
                "valor": "1,9 kg/L"
            },
            {
                "icono": "◉",
                "clave": "Presentaciones",
                "valor": "Bolsas de 10 y 25 kg"
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
        "pdfUrl": "/assets/docs/ficha-tecnica-concret-fix-1784316616373.pdf",
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
        "descripcion": "Mortero cementicio modificado con polímeros para reparar y nivelar hormigón; se pule sin desgranarse.",
        "imagen": "/assets/img/productos/concretmicrostrong.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/concret-microstrong/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Consumo",
                "valor": "1,9–2,1 kg/m² por mm de espesor"
            },
            {
                "icono": "◉",
                "clave": "Presentación",
                "valor": "Bolsa de 10 kg"
            },
            {
                "icono": "◉",
                "clave": "Ventaja",
                "valor": "Pulible sin desgranarse"
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
        "pdfUrl": "/assets/docs/ficha-tcnica-concret-microstrong-1778591010565.pdf",
        "visible": true
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
        "descripcion": "Microfibra monofilamento de polipropileno que previene la fisuración plástica del hormigón.",
        "imagen": "/assets/img/productos/microfibra.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/concret-micro-microfibra/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Material",
                "valor": "Polipropileno 100% virgen"
            },
            {
                "icono": "◉",
                "clave": "Rendimiento",
                "valor": "0,6 kg por m³"
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
        "pdfUrl": "/assets/docs/ficha-tecnica-microfibra-1778596553056.pdf",
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
        "descripcion": "Macrofibra estructural de polipropileno que reemplaza total o parcialmente la malla electrosoldada.",
        "imagen": "/assets/img/productos/macrofibra.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/concret-fibra-macrofibra/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Rendimiento",
                "valor": "Aprox. 2,5 kg por m³"
            },
            {
                "icono": "◉",
                "clave": "Presentación",
                "valor": "Bolsas de 6 kg"
            },
            {
                "icono": "◉",
                "clave": "Función",
                "valor": "Refuerzo estructural y control de fisuras"
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
        "pdfUrl": "/assets/docs/ficha-tcnica---macrofibra-concret-fibra-1778596584361.pdf",
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
        "descripcion": "Aditivo superficial que facilita el llaneado y mejora la crema del hormigón sin agregar agua.",
        "imagen": "/assets/img/productos/concret-one-5-1777919261199.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/concret-one/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Presentación",
                "valor": "5, 10 y 20 litros"
            },
            {
                "icono": "◉",
                "clave": "Aplicación",
                "valor": "Por pulverización durante el llaneado"
            },
            {
                "icono": "◉",
                "clave": "Ventaja",
                "valor": "No altera la relación agua/cemento"
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
        "id": "concret-scudo",
        "sku": "CONCRETSCUDO",
        "nombre": "Concret Scudo",
        "secciones": [
            "construccion"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Curador de membrana listo para usar que forma una película flexible y evita la evaporación brusca del agua.",
        "imagen": "/assets/img/productos/scudo-5-1777920808015.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/concret-scudo/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Presentación",
                "valor": "5, 10 y 20 litros"
            },
            {
                "icono": "◉",
                "clave": "Rendimiento",
                "valor": "5 a 8 m² por litro"
            },
            {
                "icono": "◉",
                "clave": "Aplicación",
                "valor": "Por pulverización sobre hormigón fresco"
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
        "id": "concret-restor",
        "sku": "CONCRETRESTOR",
        "nombre": "Concret Restor",
        "secciones": [
            "construccion",
            "reparacion",
            "pulido"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Aglutinante líquido que, mezclado con el polvo del pulido, sella fisuras, poros y pequeños huecos.",
        "imagen": "/assets/img/productos/5-l-1777920757894.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/concret-restor/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Presentación",
                "valor": "5, 10 y 20 litros"
            },
            {
                "icono": "◉",
                "clave": "Efecto",
                "valor": "Sella fisuras, poros y huecos"
            },
            {
                "icono": "◉",
                "clave": "Aplicación",
                "valor": "Durante el pulido del hormigón"
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
            },
            {
                "sección": "pulido",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "productos-quimicos",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "productos-quimicos",
                "subcategoría": "aglutinantes"
            },
            {
                "sección": "pulido",
                "categoría": "productos-quimicos",
                "subcategoría": "puentes-de-adherencia"
            }
        ],
        "pdfUrl": "/assets/docs/ficha-tcnica-concret-restor-1784567925973.pdf",
        "visible": true
    },
    {
        "id": "concret-strong",
        "sku": "CONCRETSTRONG",
        "nombre": "Concret Strong",
        "secciones": [
            "construccion",
            "reparacion",
            "pulido"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Aglutinante líquido listo para usar; es el componente B del sistema Concret MicroStrong.",
        "imagen": "/assets/img/productos/strong-5-1777920959883.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/concret-strong/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Presentación",
                "valor": "5, 10 y 20 litros"
            },
            {
                "icono": "◉",
                "clave": "Función",
                "valor": "Componente B de Concret MicroStrong"
            },
            {
                "icono": "◉",
                "clave": "Efecto",
                "valor": "Mejora cohesión, adherencia y anclaje"
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
            },
            {
                "sección": "pulido",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "productos-quimicos",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "productos-quimicos",
                "subcategoría": "aglutinantes"
            }
        ],
        "pdfUrl": "/assets/docs/ficha-tcnica---new-concret---concret-strong-1777920972787.pdf",
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
        "descripcion": "Sellador poliuretánico monocomponente y tixotrópico para juntas de dilatación, con elasticidad permanente.",
        "imagen": "/assets/img/productos/sellador-newconcret-1777921719643.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/sellador-poliuretanico/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Presentación",
                "valor": "Salchichas de 600 g"
            },
            {
                "icono": "◉",
                "clave": "Rendimiento",
                "valor": "100 cm³ por metro lineal (junta de 1 cm²)"
            },
            {
                "icono": "◉",
                "clave": "Curado",
                "valor": "Película en 24 h, total hasta 7 días"
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
        "pdfUrl": "/assets/docs/sellador-poliuretanico-1784565941992.pdf",
        "visible": true
    },
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
        "descripcion": "Allanadora a motor Honda para alisar y compactar el hormigón fresco apenas terminado el vertido.",
        "imagen": "/assets/img/productos/allanadora.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/allanadora/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Motor",
                "valor": "Honda GX160 de 5,5 HP"
            },
            {
                "icono": "◉",
                "clave": "Velocidad de cuchilla",
                "valor": "70–160 rpm"
            },
            {
                "icono": "◉",
                "clave": "Diámetro de trabajo",
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
        "id": "plato-con-velcro-para-pulido",
        "sku": "PLATOCON",
        "nombre": "Plato con Velcro para Pulido",
        "secciones": [
            "construccion"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Plato con velcro industrial de 33 cm que habilita lustre, limpieza y micropulido con la allanadora.",
        "imagen": "/assets/img/productos/discos-allanadora.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/discos-para-pulido-para-allanadora/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Diámetro",
                "valor": "33 cm"
            },
            {
                "icono": "◉",
                "clave": "Fijación",
                "valor": "Velcro industrial"
            },
            {
                "icono": "◉",
                "clave": "Compatibilidad",
                "valor": "Discos resinoides, paños diamantados y pads"
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
        "descripcion": "Escarificadora para quitar recubrimientos y marcas de hormigón y asfalto, dejando la superficie apta para pulir.",
        "imagen": "/assets/img/productos/jackson-10-1777921631842.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/jackson-101/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Motor",
                "valor": "10 HP – 380 V"
            },
            {
                "icono": "◉",
                "clave": "Ancho de trabajo",
                "valor": "300 mm"
            },
            {
                "icono": "◉",
                "clave": "Profundidad de trabajo",
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
        "descripcion": "Escarificadora con desplazamiento automático para nivelar y quitar recubrimientos en hormigón y asfalto.",
        "imagen": "/assets/img/productos/jackson-15-1777921639477.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/jackson-151/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Motor",
                "valor": "15 HP – 380 V"
            },
            {
                "icono": "◉",
                "clave": "Ancho de trabajo",
                "valor": "300 mm"
            },
            {
                "icono": "◉",
                "clave": "Profundidad de trabajo",
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
        "id": "carcasa-antipolvo",
        "sku": "CARCASAANTIPOLVO",
        "nombre": "Carcasa antipolvo",
        "secciones": [],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Carcasa con salida para aspiradora que contiene el polvo al desbastar con amoladora.",
        "imagen": "/assets/img/productos/carcasa-antipolvo.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/carcasa-antipolvo-para-amoladora/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Diámetros compatibles",
                "valor": "125 y 180 mm"
            },
            {
                "icono": "◉",
                "clave": "Conexión",
                "valor": "Salida para aspiradora industrial"
            },
            {
                "icono": "◉",
                "clave": "Aplicación",
                "valor": "Desbaste, lijado y nivelado"
            }
        ],
        "pdfUrl": "/assets/docs/carcasa-amol-1784566103208.pdf",
        "visible": true,
        "rutas": []
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
        "imagen": "/assets/img/productos/punta-sds-plus.webp",
        "storeUrl": "",
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
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Canaletas y ranuras",
        "imagen": "/assets/img/productos/pala-angosta-sds-plus.webp",
        "storeUrl": "",
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
        "id": "pala-ancha-sds-plus",
        "sku": "PALAANCHA",
        "nombre": "Pala Ancha SDS Plus",
        "secciones": [
            "reparacion"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Remoción de revestimientos",
        "imagen": "/assets/img/productos/pala-ancha-sds-plus.webp",
        "storeUrl": "",
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
        "id": "respaldo-amoladora",
        "sku": "RESPALDOAMOLADORA",
        "nombre": "Respaldo Amoladora",
        "secciones": [
            "reparacion"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Respaldo con velcro industrial para fijar discos resinoides en la amoladora.",
        "imagen": "/assets/img/productos/respaldo-amoladora.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/respaldo-de-amoladoras/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Diámetros",
                "valor": "100 y 180 mm"
            },
            {
                "icono": "◉",
                "clave": "Fijación",
                "valor": "Velcro industrial"
            },
            {
                "icono": "◉",
                "clave": "Compatibilidad",
                "valor": "Amoladora – rosca M14"
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
        "descripcion": "Resguardo de altura regulable para disco de corte de 125 mm; desvía chispas y partículas del operador.",
        "imagen": "/assets/img/productos/carcasa-corte.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/carcasa-para-corte/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Diámetro compatible",
                "valor": "125 mm"
            },
            {
                "icono": "◉",
                "clave": "Ajuste",
                "valor": "Altura regulable"
            },
            {
                "icono": "◉",
                "clave": "Aplicación",
                "valor": "Corte en metal, hormigón y mampostería"
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
        "id": "chavela-550s",
        "sku": "CHAVELA550S",
        "nombre": "Chavela 550s",
        "secciones": [
            "pulido"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Pulidora satelital compacta con tanque de agua y fondo magnético, para hogares y obras medianas.",
        "imagen": "/assets/img/productos/chavela-550.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/chavela-550s/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Motor",
                "valor": "5,5 HP – 220 V"
            },
            {
                "icono": "◉",
                "clave": "Ancho de trabajo",
                "valor": "550 mm"
            },
            {
                "icono": "◉",
                "clave": "Cabezales",
                "valor": "3"
            }
        ],
        "pdfUrl": "/assets/docs/chavela-550s-1778596835808.pdf",
        "visible": true,
        "rutas": [
            {
                "sección": "pulido",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "equipos",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "equipos",
                "subcategoría": "pulidoras"
            }
        ]
    },
    {
        "id": "chavela-680",
        "sku": "CHAVELA680",
        "nombre": "Pulidora Chavela 680",
        "secciones": [
            "pulido"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Pulidora satelital de entrada al segmento industrial, con tanque de agua y fondo magnético.",
        "imagen": "/assets/img/productos/chavela-680.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/chavela-680/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Motor",
                "valor": "15 HP – 380 V"
            },
            {
                "icono": "◉",
                "clave": "Ancho de trabajo",
                "valor": "680 mm"
            },
            {
                "icono": "◉",
                "clave": "Cabezales",
                "valor": "4"
            }
        ],
        "pdfUrl": "/assets/docs/chavela-680-1778596872264.pdf",
        "visible": true,
        "rutas": [
            {
                "sección": "pulido",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "equipos",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "equipos",
                "subcategoría": "pulidoras"
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
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Pulidora satelital industrial de 20 HP con desplazamiento regulable y fondo magnético.",
        "imagen": "/assets/img/productos/chavela-750.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/chavela-750/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Potencia",
                "valor": "20 HP – 380 V"
            },
            {
                "icono": "◉",
                "clave": "Diámetro de trabajo",
                "valor": "750 mm"
            },
            {
                "icono": "◉",
                "clave": "Velocidad",
                "valor": "0–1500 RPM"
            }
        ],
        "pdfUrl": "/assets/docs/chavela-750-1778596890418.pdf",
        "visible": true,
        "rutas": [
            {
                "sección": "pulido",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "equipos",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "equipos",
                "subcategoría": "pulidoras"
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
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Pulidora satelital industrial de 20 HP con control remoto, para trabajos de gran escala.",
        "imagen": "/assets/img/productos/chavela-750cr.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/chavela-750cr/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Potencia",
                "valor": "20 HP – 380 V"
            },
            {
                "icono": "◉",
                "clave": "Diámetro de trabajo",
                "valor": "750 mm"
            },
            {
                "icono": "◉",
                "clave": "Control remoto",
                "valor": "Hasta 100 m"
            }
        ],
        "pdfUrl": "/assets/docs/chavela-750cr-1778596921101.pdf",
        "visible": true,
        "rutas": [
            {
                "sección": "pulido",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "equipos",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "equipos",
                "subcategoría": "pulidoras"
            }
        ]
    },
    {
        "id": "chavela-850",
        "sku": "CHAVELA850",
        "nombre": "Pulidora Chavela 850",
        "secciones": [
            "pulido"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Pulidora satelital industrial para grandes superficies, con tanque de agua y fondo magnético.",
        "imagen": "/assets/img/productos/chavela-850.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/chavela-850/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Motor",
                "valor": "20 HP – 380 V"
            },
            {
                "icono": "◉",
                "clave": "Ancho de trabajo",
                "valor": "850 mm"
            },
            {
                "icono": "◉",
                "clave": "Cabezales",
                "valor": "4"
            }
        ],
        "pdfUrl": "/assets/docs/chavela-850-1778596939462.pdf",
        "visible": true,
        "rutas": [
            {
                "sección": "pulido",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "equipos",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "equipos",
                "subcategoría": "pulidoras"
            }
        ]
    },
    {
        "id": "chavela-900",
        "sku": "CHAVELA900",
        "nombre": "Pulidora Chavela 900",
        "secciones": [
            "pulido"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Pulidora satelital de 30 HP con control remoto, para pisos extremadamente planos en alta productividad.",
        "imagen": "/assets/img/productos/chavela-900.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/chavela-900/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Motor",
                "valor": "30 HP – 380 V"
            },
            {
                "icono": "◉",
                "clave": "Velocidad",
                "valor": "0–3600 RPM"
            },
            {
                "icono": "◉",
                "clave": "Cabezales",
                "valor": "4"
            }
        ],
        "pdfUrl": "/assets/docs/chavela-900-1778597005222.pdf",
        "visible": true,
        "rutas": [
            {
                "sección": "pulido",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "equipos",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "equipos",
                "subcategoría": "pulidoras"
            }
        ]
    },
    {
        "id": "chavela-1366",
        "sku": "CHAVELA1366",
        "nombre": "Pulidora Chavela 1366",
        "secciones": [
            "pulido"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Pulidora satelital bimotor con control remoto, para desbaste y pulido en grandes superficies industriales.",
        "imagen": "/assets/img/productos/chavela-1366.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/chavela-1366/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Motor",
                "valor": "20 HP × 2 – 380 V"
            },
            {
                "icono": "◉",
                "clave": "Ancho de trabajo",
                "valor": "1366 mm"
            },
            {
                "icono": "◉",
                "clave": "Control remoto",
                "valor": "Hasta 100 m"
            }
        ],
        "pdfUrl": "/assets/docs/chavela-1366-1778597031719.pdf",
        "visible": true,
        "rutas": [
            {
                "sección": "pulido",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "equipos",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "equipos",
                "subcategoría": "pulidoras"
            }
        ]
    },
    {
        "id": "metales-para-desbaste-trapezoidal",
        "sku": "METALESPARA",
        "nombre": "Metal para desbaste Alto Rendimiento",
        "secciones": [
            "pulido"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Segmentos trapezoidales de doble segmento para el desbaste y afinado progresivo del hormigón.",
        "imagen": "/assets/img/productos/1-1778604259666.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/metales-alto-rendimiento/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Granos",
                "valor": "16, 30, 60, 120, 220 y 400"
            },
            {
                "icono": "◉",
                "clave": "Aleación",
                "valor": "Cobre, hierro y cobalto"
            },
            {
                "icono": "◉",
                "clave": "Segmentos",
                "valor": "Doble segmento trapezoidal"
            }
        ],
        "rutas": [
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
        ],
        "pdfUrl": "/assets/docs/metales-alto-rend-1784566864058.pdf",
        "visible": true
    },
    {
        "id": "metales-para-desbaste-lnea-eco",
        "sku": "METALESPARA",
        "nombre": "Metal para desbaste línea ECO",
        "secciones": [
            "pulido"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Línea económica de segmentos trapezoidales para desbaste y preparación en toda la escala de granos.",
        "imagen": "/assets/img/productos/grano-30-2-1778604302525.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/metales-eco/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Granos",
                "valor": "8 a 400"
            },
            {
                "icono": "◉",
                "clave": "Aleación",
                "valor": "Cobre, hierro y cobalto"
            },
            {
                "icono": "◉",
                "clave": "Geometría",
                "valor": "Trapezoidal de doble segmento"
            }
        ],
        "rutas": [
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
        ],
        "pdfUrl": "/assets/docs/metales-eco-1784566876326.pdf",
        "visible": true
    },
    {
        "id": "prod_mp2z1hgg",
        "nombre": "Discos Resinoides Espesor 15 mm",
        "sku": "RESINOIDE-15MM",
        "descripcion": "Disco resinoide de 15 mm de espesor para pulido de alto rendimiento con contacto constante.",
        "imagen": "/assets/img/productos/resinas-15mm-grano-50-2-1778610727067.webp",
        "pdfUrl": "/assets/docs/resinas-15-1784566889822.pdf",
        "storeUrl": "https://tiendalonati.com.ar/productos/discos-resinoide-15mm/",
        "visible": true,
        "rutas": [
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
                "subcategoría": "discos-resinoides"
            }
        ],
        "secciones": [
            "pulido"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "specs": [
            {
                "icono": "◉",
                "clave": "Diámetro",
                "valor": "100 mm"
            },
            {
                "icono": "◉",
                "clave": "Espesor",
                "valor": "15 mm"
            },
            {
                "icono": "◉",
                "clave": "Granos",
                "valor": "50, 100, 200 y 400"
            }
        ]
    },
    {
        "id": "discos-resinoides-espesor-12-mm",
        "sku": "DISCOSRESINOIDES",
        "nombre": "Discos Resinoides Espesor 12 mm",
        "secciones": [
            "pulido"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Disco resinoide de 12 mm de espesor, el más robusto de la línea, para máxima vida útil en pulido.",
        "imagen": "/assets/img/productos/metal-epoxy-trapezoidal-2-1778609116513.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/discos-resinoide-12mm/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Diámetro",
                "valor": "100 mm"
            },
            {
                "icono": "◉",
                "clave": "Espesor",
                "valor": "12 mm"
            },
            {
                "icono": "◉",
                "clave": "Granos",
                "valor": "50 a 1000"
            }
        ],
        "rutas": [
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
                "subcategoría": "discos-resinoides"
            }
        ],
        "pdfUrl": "/assets/docs/resinas-12-1784566901158.pdf",
        "visible": true
    },
    {
        "id": "discos-resinoides-espesor-8-mm",
        "sku": "DISCOSRESINOIDES",
        "nombre": "Discos Resinoides Espesor 8 mm",
        "secciones": [
            "pulido"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Disco resinoide de 8 mm de espesor para pulido intermedio y de terminación, en seco o húmedo.",
        "imagen": "/assets/img/productos/grano-30-1778605279602.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/discos-resinoides-100-8-espesor/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Diámetro",
                "valor": "100 mm"
            },
            {
                "icono": "◉",
                "clave": "Espesor",
                "valor": "8 mm"
            },
            {
                "icono": "◉",
                "clave": "Fijación",
                "valor": "Velcro"
            }
        ],
        "pdfUrl": "/assets/docs/resinas-8-1784566911519.pdf",
        "visible": true,
        "rutas": [
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
                "subcategoría": "discos-resinoides"
            }
        ]
    },
    {
        "id": "prod_mp2yumhm",
        "nombre": "Discos Resinoides Espesor 3 mm",
        "sku": "RESINOIDE-3MM",
        "descripcion": "Disco resinoide fino y flexible para las etapas finales de pulido y abrillantado.",
        "imagen": "/assets/img/productos/grano-400-1778610389925.webp",
        "pdfUrl": "/assets/docs/resinas-3-1784566921326.pdf",
        "storeUrl": "https://tiendalonati.com.ar/productos/discos-resinoides-3mm/",
        "visible": true,
        "rutas": [
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
                "subcategoría": "discos-resinoides"
            }
        ],
        "secciones": [
            "pulido"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "specs": [
            {
                "icono": "◉",
                "clave": "Diámetro",
                "valor": "100 mm"
            },
            {
                "icono": "◉",
                "clave": "Espesor",
                "valor": "3 mm"
            },
            {
                "icono": "◉",
                "clave": "Granos",
                "valor": "50 a 3000 y BUFF"
            }
        ]
    },
    {
        "id": "paos-diamantados",
        "sku": "PAOSDIAMANTADOS",
        "nombre": "Paños diamantados",
        "secciones": [
            "pulido"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Sistema de tres paños diamantados para el micropulido progresivo previo al abrillantado.",
        "imagen": "/assets/img/productos/3-pasos-2-1778605551012.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/panos-diamantados1/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Granos",
                "valor": "400, 800 y 1500"
            },
            {
                "icono": "◉",
                "clave": "Diámetro",
                "valor": "100 mm"
            },
            {
                "icono": "◉",
                "clave": "Fijación",
                "valor": "Velcro"
            }
        ],
        "rutas": [
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
                "subcategoría": "panos-diamantados"
            }
        ],
        "pdfUrl": "/assets/docs/pads-1784566933628.pdf",
        "visible": true
    },
    {
        "id": "prod_mp2zb57m",
        "nombre": "Pads Manual de Pulido",
        "sku": "PADPULIDO",
        "descripcion": "Pads diamantados con base de esponja para retoques manuales en orillas, mesadas y esquinas.",
        "imagen": "/assets/img/productos/espnoja-manual-grano-100-1778611557051.webp",
        "pdfUrl": "/assets/docs/esponjas-1784566942049.pdf",
        "storeUrl": "https://tiendalonati.com.ar/productos/pads-manuales/",
        "visible": true,
        "rutas": [
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
                "subcategoría": "panos-diamantados"
            }
        ],
        "secciones": [
            "pulido"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "specs": [
            {
                "icono": "◉",
                "clave": "Granos",
                "valor": "60, 100, 200 y 400"
            },
            {
                "icono": "◉",
                "clave": "Dimensiones",
                "valor": "90 × 55 × 30 mm"
            },
            {
                "icono": "◉",
                "clave": "Uso",
                "valor": "Seco y húmedo"
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
        "descripcion": "Mecha copa diamantada para perforar hormigón, piedra y cerámica con mínima vibración.",
        "imagen": "/assets/img/productos/mecha-copa-45mm-1784565295486.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/mecha-copa-diamantada/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Diámetros",
                "valor": "35, 45 y 55 mm"
            },
            {
                "icono": "◉",
                "clave": "Construcción",
                "valor": "Barril metálico reforzado"
            },
            {
                "icono": "◉",
                "clave": "Compatibilidad",
                "valor": "Amoladora – rosca M14"
            }
        ],
        "pdfUrl": "/assets/docs/mecha-copa-1784566952910.pdf",
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
        "id": "disco-epoxi-para-amoladora",
        "sku": "DISCOEPOXI",
        "nombre": "Disco Epoxi para amoladora",
        "secciones": [
            "reparacion",
            "pulido"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Disco diamantado con puntas PCD para remover epoxi, adhesivos y pinturas con amoladora.",
        "imagen": "/assets/img/productos/epoxi-amoladora.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/diamantado-epoxy-para-amoladora-5aq8s/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Diámetros",
                "valor": "125 y 180 mm"
            },
            {
                "icono": "◉",
                "clave": "Grano",
                "valor": "PCD"
            },
            {
                "icono": "◉",
                "clave": "Compatibilidad",
                "valor": "Amoladora de velocidad variable – M14"
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
        "descripcion": "Disco diamantado de 125 mm para desbaste y nivelación donde no llega la pulidora de piso.",
        "imagen": "/assets/img/productos/metal-amoladora.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/disco-diamantado-amoladora/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Diámetro",
                "valor": "125 mm"
            },
            {
                "icono": "◉",
                "clave": "Granos",
                "valor": "30 y 60"
            },
            {
                "icono": "◉",
                "clave": "Compatibilidad",
                "valor": "Amoladora de velocidad variable – M14"
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
        "descripcion": "Disco flap de carburo de silicio para desbaste y pulido en bordes, zócalos y zonas de difícil acceso.",
        "imagen": "/assets/img/productos/disco-flap.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/discos-flap/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Diámetro",
                "valor": "115 mm"
            },
            {
                "icono": "◉",
                "clave": "Granos",
                "valor": "60 y 120"
            },
            {
                "icono": "◉",
                "clave": "Velocidad máxima",
                "valor": "13.300 rpm"
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
        "id": "prod_mpe7kdt2",
        "nombre": "Resinas Diámetro 180 mm",
        "sku": "RESINAS-180",
        "descripcion": "Disco resinoide de 180 mm y 3 mm de espesor: flexible para curvas, bordes y zonas irregulares.",
        "imagen": "/assets/img/productos/grano-800-1779290401067.webp",
        "pdfUrl": "/assets/docs/resinas-180-1784566970662.pdf",
        "storeUrl": "https://tiendalonati.com.ar/productos/discos-resinoides-180/",
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
                "subcategoría": "discos-resinoides"
            }
        ],
        "secciones": [
            "reparacion",
            "pulido"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "specs": [
            {
                "icono": "◉",
                "clave": "Diámetro",
                "valor": "180 mm"
            },
            {
                "icono": "◉",
                "clave": "Espesor",
                "valor": "3 mm"
            },
            {
                "icono": "◉",
                "clave": "Granos",
                "valor": "50 a 1500"
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
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Ruedas con puntas de carburo y diamante para escarificar y texturizar hormigón y piedra.",
        "imagen": "/assets/img/productos/ruedas-bujardado.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/ruedas-de-bujardado/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Diámetro",
                "valor": "75 mm"
            },
            {
                "icono": "◉",
                "clave": "Puntas",
                "valor": "Carburo y diamante industrial"
            },
            {
                "icono": "◉",
                "clave": "Terminación",
                "valor": "Rugosa y uniforme"
            }
        ],
        "pdfUrl": "/assets/docs/bujardado-1778603935946.pdf",
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
                "subcategoría": "bujardado"
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
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Cabezal portaruedas que monta las ruedas de bujardado en pulidoras NewConcret.",
        "imagen": "/assets/img/productos/bujardado.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/ruedas-de-bujardado/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Función",
                "valor": "Soporte para ruedas de bujardado"
            },
            {
                "icono": "◉",
                "clave": "Ruedas compatibles",
                "valor": "75 mm"
            },
            {
                "icono": "◉",
                "clave": "Compatibilidad",
                "valor": "Pulidoras NewConcret"
            }
        ],
        "pdfUrl": "/assets/docs/bujardado-1778604032241.pdf",
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
                "subcategoría": "bujardado"
            }
        ]
    },
    {
        "id": "cicln-preseparador",
        "sku": "CICLNPRESEPARADOR",
        "nombre": "Ciclón preseparador",
        "secciones": [
            "pulido",
            "mantenimiento"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Preseparador ciclónico que captura hasta el 90% del polvo antes de la aspiradora y alarga la vida del filtro.",
        "imagen": "/assets/img/productos/ciclon-2-1779469259240.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/ciclon-preseparador/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Retención",
                "valor": "Hasta 90% del polvo"
            },
            {
                "icono": "◉",
                "clave": "Caudal máximo",
                "valor": "420 m³/h"
            },
            {
                "icono": "◉",
                "clave": "Recolección",
                "valor": "Bolsa continua de 20 L+"
            }
        ],
        "rutas": [
            {
                "sección": "pulido",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "equipos",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "equipos",
                "subcategoría": "aspiradoras"
            },
            {
                "sección": "mantenimiento",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "mantenimiento",
                "categoría": "equipos",
                "subcategoría": ""
            },
            {
                "sección": "mantenimiento",
                "categoría": "equipos",
                "subcategoría": "aspiradoras"
            }
        ],
        "pdfUrl": "/assets/docs/cicln-1779304878286.pdf",
        "visible": true
    },
    {
        "id": "gala-b480",
        "sku": "GALAB480",
        "nombre": "Aspiradora Gala B480",
        "secciones": [
            "pulido",
            "mantenimiento"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Aspiradora industrial monofásica con filtración HEPA y tanque pivotante, para el polvo fino del pulido.",
        "imagen": "/assets/img/productos/b480-1778599117879.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/aspiradora-gala-b480/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Potencia",
                "valor": "3600 W – 220 V"
            },
            {
                "icono": "◉",
                "clave": "Caudal máximo",
                "valor": "420 m³/h"
            },
            {
                "icono": "◉",
                "clave": "Recolección",
                "valor": "Tambor de acero inoxidable de 80 L"
            }
        ],
        "rutas": [
            {
                "sección": "pulido",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "equipos",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "equipos",
                "subcategoría": "aspiradoras"
            },
            {
                "sección": "mantenimiento",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "mantenimiento",
                "categoría": "equipos",
                "subcategoría": ""
            },
            {
                "sección": "mantenimiento",
                "categoría": "equipos",
                "subcategoría": "aspiradoras"
            }
        ],
        "pdfUrl": "/assets/docs/b480-1779304905143.pdf",
        "visible": true
    },
    {
        "id": "gala-b301",
        "sku": "GALAB301",
        "nombre": "Aspiradora Gala B301",
        "secciones": [
            "pulido",
            "mantenimiento"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Aspiradora industrial monofásica de alto caudal para pulido, desbaste y mantenimiento.",
        "imagen": "/assets/img/productos/gala-b301-4-1778599236971.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/aspiradora-industrial-gala-b301/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Potencia",
                "valor": "3600 W – 220 V"
            },
            {
                "icono": "◉",
                "clave": "Caudal máximo",
                "valor": "600 m³/h"
            },
            {
                "icono": "◉",
                "clave": "Recolección",
                "valor": "Tanque de acero inoxidable de 100 L"
            }
        ],
        "rutas": [
            {
                "sección": "pulido",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "equipos",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "equipos",
                "subcategoría": "aspiradoras"
            },
            {
                "sección": "mantenimiento",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "mantenimiento",
                "categoría": "equipos",
                "subcategoría": ""
            },
            {
                "sección": "mantenimiento",
                "categoría": "equipos",
                "subcategoría": "aspiradoras"
            }
        ],
        "pdfUrl": "/assets/docs/b301-1779304984995.pdf",
        "visible": true
    },
    {
        "id": "gala-d301",
        "sku": "GALAD301",
        "nombre": "Aspiradora Gala D301",
        "secciones": [
            "pulido",
            "mantenimiento"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Aspiradora monofásica con embolsado continuo y filtración HEPA, para mantenimiento diario y obras medianas.",
        "imagen": "/assets/img/productos/d301-roja-1779469269910.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/aspiradora-industrial-gala-d301/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Potencia",
                "valor": "5 HP – 220 V"
            },
            {
                "icono": "◉",
                "clave": "Caudal máximo",
                "valor": "420 m³/h"
            },
            {
                "icono": "◉",
                "clave": "Recolección",
                "valor": "Embolsado continuo"
            }
        ],
        "rutas": [
            {
                "sección": "pulido",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "equipos",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "equipos",
                "subcategoría": "aspiradoras"
            },
            {
                "sección": "mantenimiento",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "mantenimiento",
                "categoría": "equipos",
                "subcategoría": ""
            },
            {
                "sección": "mantenimiento",
                "categoría": "equipos",
                "subcategoría": "aspiradoras"
            }
        ],
        "pdfUrl": "/assets/docs/d301-1779305077186.pdf",
        "visible": true
    },
    {
        "id": "gala-js400",
        "sku": "GALAJS400",
        "nombre": "Aspiradora Gala JS400",
        "secciones": [
            "pulido",
            "mantenimiento"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Aspiradora trifásica compacta con filtración HEPA: potencia industrial en un formato manejable.",
        "imagen": "/assets/img/productos/js400-1778598667668.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/aspiradora-industrial-gala-js400/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Potencia",
                "valor": "5,5 HP – 380 V"
            },
            {
                "icono": "◉",
                "clave": "Caudal máximo",
                "valor": "318 m³/h"
            },
            {
                "icono": "◉",
                "clave": "Recolección",
                "valor": "Tambor de acero inoxidable de 50 L"
            }
        ],
        "rutas": [
            {
                "sección": "pulido",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "equipos",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "equipos",
                "subcategoría": "aspiradoras"
            },
            {
                "sección": "mantenimiento",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "mantenimiento",
                "categoría": "equipos",
                "subcategoría": ""
            },
            {
                "sección": "mantenimiento",
                "categoría": "equipos",
                "subcategoría": "aspiradoras"
            }
        ],
        "pdfUrl": "/assets/docs/js400-1779305112740.pdf",
        "visible": true
    },
    {
        "id": "gala-551",
        "sku": "GALA551",
        "nombre": "Aspiradora Gala G551",
        "secciones": [
            "pulido",
            "mantenimiento"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Aspiradora trifásica de uso continuo, con turbina acoplada al motor y gran área de filtrado.",
        "imagen": "/assets/img/productos/g551-roja-1779469281846.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/aspiradora-industrial-gala-g551/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Motor",
                "valor": "7,5 HP – 380 V"
            },
            {
                "icono": "◉",
                "clave": "Caudal",
                "valor": "530 m³/h"
            },
            {
                "icono": "◉",
                "clave": "Área de filtro",
                "valor": "85.000 cm²"
            }
        ],
        "rutas": [
            {
                "sección": "pulido",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "equipos",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "equipos",
                "subcategoría": "aspiradoras"
            },
            {
                "sección": "mantenimiento",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "mantenimiento",
                "categoría": "equipos",
                "subcategoría": ""
            },
            {
                "sección": "mantenimiento",
                "categoría": "equipos",
                "subcategoría": "aspiradoras"
            }
        ],
        "pdfUrl": "/assets/docs/g551-1779305159626.pdf",
        "visible": true
    },
    {
        "id": "gala-w552",
        "sku": "GALAW552",
        "nombre": "Aspiradora Gala W552",
        "secciones": [
            "pulido",
            "mantenimiento"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Aspiradora trifásica con HEPA y bolsa continua para la captación segura de polvo ultrafino.",
        "imagen": "/assets/img/productos/w552-1779469292469.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/aspiradora-industrial-gala-w552/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Potencia",
                "valor": "7,5 HP – 380 V"
            },
            {
                "icono": "◉",
                "clave": "Caudal máximo",
                "valor": "700 m³/h"
            },
            {
                "icono": "◉",
                "clave": "Filtrado",
                "valor": "0,3 µm ≥ 99,9%"
            }
        ],
        "rutas": [
            {
                "sección": "pulido",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "equipos",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "equipos",
                "subcategoría": "aspiradoras"
            },
            {
                "sección": "mantenimiento",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "mantenimiento",
                "categoría": "equipos",
                "subcategoría": ""
            },
            {
                "sección": "mantenimiento",
                "categoría": "equipos",
                "subcategoría": "aspiradoras"
            }
        ],
        "pdfUrl": "/assets/docs/w552-1779305304094.pdf",
        "visible": true
    },
    {
        "id": "gala-sw551-trifsica",
        "sku": "GALASW551",
        "nombre": "Aspiradora Gala SW551",
        "secciones": [
            "pulido",
            "mantenimiento"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Aspiradora trifásica con ciclón preseparador integrado: menos saturación del filtro y más autonomía.",
        "imagen": "/assets/img/productos/sw551-roja-1778598895574.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/aspiradora-gala-sw551/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Potencia",
                "valor": "7,5 HP – 380 V"
            },
            {
                "icono": "◉",
                "clave": "Caudal máximo",
                "valor": "700 m³/h"
            },
            {
                "icono": "◉",
                "clave": "Recolección",
                "valor": "Bolsa continua"
            }
        ],
        "rutas": [
            {
                "sección": "pulido",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "equipos",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "equipos",
                "subcategoría": "aspiradoras"
            },
            {
                "sección": "mantenimiento",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "mantenimiento",
                "categoría": "equipos",
                "subcategoría": ""
            },
            {
                "sección": "mantenimiento",
                "categoría": "equipos",
                "subcategoría": "aspiradoras"
            }
        ],
        "pdfUrl": "/assets/docs/sw551-1784567798376.pdf",
        "visible": true
    },
    {
        "id": "prod_mpe4er2n",
        "nombre": "Mopa y Cabo extensible",
        "sku": "MOPA",
        "descripcion": "Aplicador con cabo extensible y mopa de microfibra para extender densificadores y selladores de forma uniforme.",
        "imagen": "/assets/img/productos/kit-mopa-2-1779285095682.webp",
        "pdfUrl": "/assets/docs/aplicador-1784567004869.pdf",
        "storeUrl": "https://tiendalonati.com.ar/productos/aplicador-para-pisos/",
        "visible": true,
        "rutas": [
            {
                "sección": "mantenimiento",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "mantenimiento",
                "categoría": "accesorios",
                "subcategoría": ""
            },
            {
                "sección": "mantenimiento",
                "categoría": "accesorios",
                "subcategoría": "mopas"
            }
        ],
        "secciones": [
            "mantenimiento"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "specs": [
            {
                "icono": "◉",
                "clave": "Ancho útil",
                "valor": "60 cm"
            },
            {
                "icono": "◉",
                "clave": "Cabo extensible",
                "valor": "1,2 a 2,5 m"
            },
            {
                "icono": "◉",
                "clave": "Fijación",
                "valor": "Velcro de alta adherencia"
            }
        ]
    },
    {
        "id": "prod_mpe4g539",
        "nombre": "Pulverizador",
        "sku": "PULVERIZADOR",
        "descripcion": "Pulverizador a presión de 10 litros con lanza de acero inoxidable y boquilla regulable.",
        "imagen": "/assets/img/productos/pulverizador-2-1779285159180.webp",
        "pdfUrl": "/assets/docs/pulverizador-1784567014987.pdf",
        "storeUrl": "https://tiendalonati.com.ar/productos/pulverizador/",
        "visible": true,
        "rutas": [
            {
                "sección": "mantenimiento",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "mantenimiento",
                "categoría": "accesorios",
                "subcategoría": ""
            },
            {
                "sección": "mantenimiento",
                "categoría": "accesorios",
                "subcategoría": "mopas"
            }
        ],
        "secciones": [
            "mantenimiento"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "specs": [
            {
                "icono": "◉",
                "clave": "Capacidad",
                "valor": "10 litros"
            },
            {
                "icono": "◉",
                "clave": "Lanza",
                "valor": "Acero inoxidable"
            },
            {
                "icono": "◉",
                "clave": "Boquilla",
                "valor": "Regulable (chorro / niebla)"
            }
        ]
    },
    {
        "id": "prod_mp2zpqbz",
        "nombre": "Disco de Lustre de 20\"",
        "sku": "LUSTRE-20",
        "descripcion": "Paño de lustre de 20” en fibras sintéticas de alta densidad para lustrado, lavado y mantenimiento.",
        "imagen": "/assets/img/productos/pao-rojo-1778612094107.webp",
        "pdfUrl": "/assets/docs/paos-lavado-1784567028420.pdf",
        "storeUrl": "https://tiendalonati.com.ar/productos/pano-de-20/",
        "visible": true,
        "rutas": [
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
                "subcategoría": "panos-diamantados"
            },
            {
                "sección": "mantenimiento",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "mantenimiento",
                "categoría": "accesorios",
                "subcategoría": ""
            },
            {
                "sección": "mantenimiento",
                "categoría": "accesorios",
                "subcategoría": "panos"
            }
        ],
        "secciones": [
            "pulido",
            "mantenimiento"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "specs": [
            {
                "icono": "◉",
                "clave": "Diámetro",
                "valor": "20” (50 cm)"
            },
            {
                "icono": "◉",
                "clave": "Material",
                "valor": "Fibras sintéticas de alta densidad"
            },
            {
                "icono": "◉",
                "clave": "Uso",
                "valor": "Seco y húmedo"
            }
        ]
    },
    {
        "id": "prod_mp2zmp7j",
        "nombre": "Discos de Lustre de 17\"",
        "sku": "LUSTRE-17",
        "descripcion": "Paño de lustre de 17” en fibras sintéticas de alta densidad; la abrasividad varía según el color.",
        "imagen": "/assets/img/productos/pao-blanco-1778611869906.webp",
        "pdfUrl": "/assets/docs/paos-lavado-1784567036632.pdf",
        "storeUrl": "https://tiendalonati.com.ar/productos/panos-lustre/",
        "visible": true,
        "rutas": [
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
                "subcategoría": "panos-diamantados"
            },
            {
                "sección": "mantenimiento",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "mantenimiento",
                "categoría": "accesorios",
                "subcategoría": ""
            },
            {
                "sección": "mantenimiento",
                "categoría": "accesorios",
                "subcategoría": "panos"
            }
        ],
        "secciones": [
            "pulido",
            "mantenimiento"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "specs": [
            {
                "icono": "◉",
                "clave": "Diámetro",
                "valor": "17” (43 cm)"
            },
            {
                "icono": "◉",
                "clave": "Material",
                "valor": "Fibras sintéticas de alta densidad"
            },
            {
                "icono": "◉",
                "clave": "Uso",
                "valor": "Seco y húmedo"
            }
        ]
    },
    {
        "id": "extensin-curva-para-cepillo-barredor",
        "sku": "EXTENSINCURVA",
        "nombre": "Extensión curva para cepillo barredor",
        "secciones": [
            "pulido"
        ],
        "categoria": "equipos",
        "cat_label": "Equipos",
        "subcategoria": "accesorios-aspiradoras",
        "descripcion": "Extensión metálica curva que mejora el alcance y la ergonomía del cepillo barredor.",
        "imagen": "/assets/img/productos/extension-aspiradora-1778613659418.png",
        "storeUrl": "https://tiendalonati.com.ar/productos/aspiradora-extension-curva/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Modelo",
                "valor": "MC/75"
            },
            {
                "icono": "◉",
                "clave": "Construcción",
                "valor": "Metálica"
            },
            {
                "icono": "◉",
                "clave": "Aplicación",
                "valor": "Superficies amplias, esquinas y zonas bajas"
            }
        ],
        "pdfUrl": "/assets/docs/acc-aspiradora-1784567045490.pdf",
        "visible": true,
        "rutas": [
            {
                "sección": "pulido",
                "categoría": "equipos",
                "subcategoría": "accesorios-aspiradoras"
            }
        ]
    },
    {
        "id": "cepillo-barredor-con-ruedas-mc75",
        "sku": "CEPILLOBARREDOR",
        "nombre": "Cepillo barredor con ruedas MC75",
        "secciones": [
            "pulido"
        ],
        "categoria": "equipos",
        "cat_label": "Equipos",
        "subcategoria": "accesorios-aspiradoras",
        "descripcion": "Cepillo barredor con base rodante para recolectar polvo en superficies amplias sin esfuerzo.",
        "imagen": "/assets/img/productos/cepillo-1778613646978.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/cepillo-barredor-para-asiradora/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Modelo",
                "valor": "MC/75"
            },
            {
                "icono": "◉",
                "clave": "Diseño",
                "valor": "Base rodante"
            },
            {
                "icono": "◉",
                "clave": "Aplicación",
                "valor": "Grandes superficies"
            }
        ],
        "pdfUrl": "/assets/docs/acc-aspiradora-1784567068756.pdf",
        "visible": true,
        "rutas": [
            {
                "sección": "pulido",
                "categoría": "equipos",
                "subcategoría": "accesorios-aspiradoras"
            }
        ]
    },
    {
        "id": "manguera-de-aspiracin",
        "sku": "MANGUERADE",
        "nombre": "Manguera de aspiración",
        "secciones": [
            "pulido"
        ],
        "categoria": "equipos",
        "cat_label": "Equipos",
        "subcategoria": "accesorios-aspiradoras",
        "descripcion": "Manguera de PVC con interior liso que maximiza el caudal de aire y evita obstrucciones.",
        "imagen": "/assets/img/productos/manguera-aspiradora-1778613632365.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/manguera-de-aspiracion-pvc-4umte/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Material",
                "valor": "PVC"
            },
            {
                "icono": "◉",
                "clave": "Diámetro",
                "valor": "50 mm"
            },
            {
                "icono": "◉",
                "clave": "Interior",
                "valor": "Liso, optimiza el flujo de aire"
            }
        ],
        "pdfUrl": "/assets/docs/acc-aspiradora-1784567073929.pdf",
        "visible": true,
        "rutas": [
            {
                "sección": "pulido",
                "categoría": "equipos",
                "subcategoría": "accesorios-aspiradoras"
            }
        ]
    },
    {
        "id": "bifurcacin-metlica-mc75",
        "sku": "BIFURCACINMETLICA",
        "nombre": "Bifurcación metálica MC75",
        "secciones": [
            "pulido"
        ],
        "categoria": "equipos",
        "cat_label": "Equipos",
        "subcategoria": "accesorios-aspiradoras",
        "descripcion": "Bifurcación metálica que divide la línea de aspiración de 50 mm en dos salidas de 40 mm.",
        "imagen": "https://acdn.mitiendanube.com/stores/003/469/628/products/bifurcacion-8cd7ec039f0771391217310967788401-480-0.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/bifurcacion-metalica-mc75/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Modelo",
                "valor": "MC/75"
            },
            {
                "icono": "◉",
                "clave": "Entrada",
                "valor": "50 mm"
            },
            {
                "icono": "◉",
                "clave": "Salidas",
                "valor": "2 × 40 mm"
            }
        ],
        "pdfUrl": "/assets/docs/acc-aspiradora-1784567832291.pdf",
        "visible": true,
        "rutas": [
            {
                "sección": "pulido",
                "categoría": "equipos",
                "subcategoría": "accesorios-aspiradoras"
            }
        ]
    },
    {
        "id": "terminales-para-manguera-mc75",
        "sku": "TERMINALESPARA",
        "nombre": "Terminales para manguera MC/75",
        "secciones": [
            "pulido"
        ],
        "categoria": "equipos",
        "cat_label": "Equipos",
        "subcategoria": "accesorios-aspiradoras",
        "descripcion": "Terminales de acople entre la manguera de aspiración y los accesorios del equipo.",
        "imagen": "/assets/img/productos/adaptadores-de-manguera-1778613607167.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/terminales-para-manguera-mc-75/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Modelo",
                "valor": "MC/75"
            },
            {
                "icono": "◉",
                "clave": "Diámetros",
                "valor": "40 y 50 mm"
            },
            {
                "icono": "◉",
                "clave": "Función",
                "valor": "Conexión manguera–accesorio"
            }
        ],
        "pdfUrl": "/assets/docs/acc-aspiradora-1784567061127.pdf",
        "visible": true,
        "rutas": [
            {
                "sección": "pulido",
                "categoría": "equipos",
                "subcategoría": "accesorios-aspiradoras"
            }
        ]
    },
    {
        "id": "cepillo-redondo-mc75",
        "sku": "CEPILLOREDONDO",
        "nombre": "Cepillo redondo MC/75",
        "secciones": [
            "pulido"
        ],
        "categoria": "equipos",
        "cat_label": "Equipos",
        "subcategoria": "accesorios-aspiradoras",
        "descripcion": "Cepillo redondo de cuerpo metálico para aspiración detallada en zonas de difícil acceso.",
        "imagen": "/assets/img/productos/pico-redondo-con-cepillo-1778613583922.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/cepillo-redondo-aspiracion/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Modelo",
                "valor": "MC/75"
            },
            {
                "icono": "◉",
                "clave": "Construcción",
                "valor": "Cuerpo metálico"
            },
            {
                "icono": "◉",
                "clave": "Aplicación",
                "valor": "Rincones, maquinaria y superficies delicadas"
            }
        ],
        "pdfUrl": "/assets/docs/acc-aspiradora-1784567055024.pdf",
        "visible": true,
        "rutas": [
            {
                "sección": "pulido",
                "categoría": "equipos",
                "subcategoría": "accesorios-aspiradoras"
            }
        ]
    },
    {
        "id": "pico-chato-metlico-mc75",
        "sku": "PICOCHATO",
        "nombre": "Pico chato metálico MC/75",
        "secciones": [
            "pulido"
        ],
        "categoria": "equipos",
        "cat_label": "Equipos",
        "subcategoria": "accesorios-aspiradoras",
        "descripcion": "Pico chato para aspiración en ranuras y espacios estrechos.",
        "imagen": "/assets/img/productos/pico-chato-1778613541688.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/pico-chato-para-aspiradora-mc-75-eijsi/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Modelo",
                "valor": "MC/75"
            },
            {
                "icono": "◉",
                "clave": "Diámetro",
                "valor": "50 mm"
            },
            {
                "icono": "◉",
                "clave": "Aplicación",
                "valor": "Ranuras y espacios estrechos"
            }
        ],
        "pdfUrl": "/assets/docs/acc-aspiradora-1784567081253.pdf",
        "visible": true,
        "rutas": [
            {
                "sección": "pulido",
                "categoría": "equipos",
                "subcategoría": "accesorios-aspiradoras"
            }
        ]
    },
    {
        "id": "prod_mp2z44ba",
        "nombre": "Velcro Auto Adhesivo",
        "sku": "VELCROAUTO",
        "descripcion": "Velcro autoadhesivo de 100 mm que convierte una base en superficie de fijación para discos resinoides.",
        "imagen": "/assets/img/productos/base-adhesiva-1778611780470.webp",
        "pdfUrl": "/assets/docs/acc-pulidora-1784567086542.pdf",
        "storeUrl": "https://tiendalonati.com.ar/productos/velcro-auto-adhesivo/",
        "visible": true,
        "rutas": [
            {
                "sección": "pulido",
                "categoría": "equipos",
                "subcategoría": "accesorios-pulidoras"
            },
            {
                "sección": "pulido",
                "categoría": "insumos",
                "subcategoría": ""
            }
        ],
        "secciones": [
            "pulido"
        ],
        "categoria": "equipos",
        "cat_label": "Equipos",
        "subcategoria": "accesorios-pulidoras",
        "specs": [
            {
                "icono": "◉",
                "clave": "Diámetro",
                "valor": "100 mm"
            },
            {
                "icono": "◉",
                "clave": "Tipo",
                "valor": "Autoadhesivo"
            },
            {
                "icono": "◉",
                "clave": "Compatibilidad",
                "valor": "Discos resinoides"
            }
        ]
    },
    {
        "id": "discos-resinoides-para-empastado",
        "sku": "DISCOSRESINOIDES",
        "nombre": "Discos resinoides para empastado",
        "secciones": [],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Disco resinoide flexible para distribuir pastas de relleno y compactar la superficie del hormigón.",
        "imagen": "/assets/img/productos/empastinado-1778605511973.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/discos-empastinado/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Grano",
                "valor": "150"
            },
            {
                "icono": "◉",
                "clave": "Diámetro",
                "valor": "100 mm"
            },
            {
                "icono": "◉",
                "clave": "Fijación",
                "valor": "Velcro"
            }
        ],
        "pdfUrl": "/assets/docs/resinas-empastinado-1784567098375.pdf",
        "visible": true,
        "rutas": []
    },
    {
        "id": "adaptador-universal",
        "sku": "ADAPTADORUNIVERSAL",
        "nombre": "Adaptador Universal",
        "secciones": [
            "pulido"
        ],
        "categoria": "equipos",
        "cat_label": "Equipos",
        "subcategoria": "accesorios-pulidoras",
        "descripcion": "Interfaz entre el plato de la pulidora y los segmentos metálicos, trapezoidales o circulares.",
        "imagen": "/assets/img/productos/adaptador-1-1778605650302.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/adaptador-universal-para-segmentos-metalicos-ygg07/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Función",
                "valor": "Montaje de segmentos trapezoidales y circulares"
            },
            {
                "icono": "◉",
                "clave": "Compatibilidad",
                "valor": "Pulidoras NewConcret"
            },
            {
                "icono": "◉",
                "clave": "Ventaja",
                "valor": "Fijación estable y menor vibración"
            }
        ],
        "rutas": [
            {
                "sección": "pulido",
                "categoría": "equipos",
                "subcategoría": "accesorios-pulidoras"
            },
            {
                "sección": "pulido",
                "categoría": "insumos",
                "subcategoría": ""
            }
        ],
        "pdfUrl": "/assets/docs/acc-pulidora-1784567115118.pdf",
        "visible": true
    },
    {
        "id": "base-con-velcro-p-disco-resinoide",
        "sku": "BASECON",
        "nombre": "Base con velcro",
        "secciones": [
            "pulido"
        ],
        "categoria": "insumos",
        "cat_label": "Insumos",
        "subcategoria": "",
        "descripcion": "Base rígida con velcro industrial de alta retención para fijar discos resinoides de 100 mm.",
        "imagen": "/assets/img/productos/base-con-velcro-1778605723104.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/base-con-velcro/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Diámetro",
                "valor": "100 mm"
            },
            {
                "icono": "◉",
                "clave": "Fijación",
                "valor": "Velcro industrial"
            },
            {
                "icono": "◉",
                "clave": "Compatibilidad",
                "valor": "Pulidoras NewConcret"
            }
        ],
        "rutas": [
            {
                "sección": "pulido",
                "categoría": "insumos",
                "subcategoría": ""
            }
        ],
        "pdfUrl": "/assets/docs/acc-pulidora-1784567122498.pdf",
        "visible": true
    },
    {
        "id": "faldas-para-pulidoras",
        "sku": "FALDASPARA",
        "nombre": "Faldas para pulidoras",
        "secciones": [
            "pulido"
        ],
        "categoria": "equipos",
        "cat_label": "Equipos",
        "subcategoria": "accesorios-pulidoras",
        "descripcion": "Faldas perimetrales que contienen el polvo alrededor del plato y mejoran la extracción.",
        "imagen": "/assets/img/productos/pollera-pulidora-1778605789155.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/faldas-para-pulidoras/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Función",
                "valor": "Contención de polvo y residuos"
            },
            {
                "icono": "◉",
                "clave": "Compatibilidad",
                "valor": "Pulidoras NewConcret"
            },
            {
                "icono": "◉",
                "clave": "Ventaja",
                "valor": "Mejor extracción con aspiradora"
            }
        ],
        "rutas": [
            {
                "sección": "pulido",
                "categoría": "equipos",
                "subcategoría": "accesorios-pulidoras"
            },
            {
                "sección": "pulido",
                "categoría": "insumos",
                "subcategoría": ""
            }
        ],
        "pdfUrl": "/assets/docs/acc-pulidora-1784567128370.pdf",
        "visible": true
    },
    {
        "id": "concret-restor",
        "sku": "CONCRETRESTOR",
        "nombre": "Concret Restor",
        "secciones": [],
        "categoria": "p",
        "cat_label": "p",
        "subcategoria": "r",
        "descripcion": "Aglutinante líquido que, mezclado con el polvo del pulido, sella fisuras, poros y pequeños huecos.",
        "imagen": "https://acdn.mitiendanube.com/stores/003/469/628/products/restor1-06d0849cb3d57c801617095792871763-1024-1024.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/concret-restor/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Presentación",
                "valor": "5, 10 y 20 litros"
            },
            {
                "icono": "◉",
                "clave": "Efecto",
                "valor": "Sella fisuras, poros y huecos"
            },
            {
                "icono": "◉",
                "clave": "Aplicación",
                "valor": "Durante el pulido del hormigón"
            }
        ]
    },
    {
        "id": "concret-sodium",
        "sku": "CONCRETSODIUM",
        "nombre": "Concret Sodium",
        "secciones": [
            "pulido"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Densificador de silicatos de sodio que sella, endurece y deja el hormigón a prueba de agua.",
        "imagen": "/assets/img/productos/sodium-5-l-1778605845082.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/concret-sodium/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Presentación",
                "valor": "5, 10 y 20 litros"
            },
            {
                "icono": "◉",
                "clave": "Efecto",
                "valor": "Densificador y endurecedor"
            },
            {
                "icono": "◉",
                "clave": "Aplicación",
                "valor": "En pisos de hormigón"
            }
        ],
        "rutas": [
            {
                "sección": "pulido",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "productos-quimicos",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "productos-quimicos",
                "subcategoría": "densificadores"
            }
        ],
        "pdfUrl": "/assets/docs/ficha-tcnica-concret-sodium-1784567193545.pdf",
        "visible": true
    },
    {
        "id": "concret-litium",
        "sku": "CONCRETLITIUM",
        "nombre": "Concret Litium",
        "secciones": [
            "pulido"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Densificador líquido de litio que penetra el hormigón, reduce su porosidad y lo endurece sin formar película.",
        "imagen": "/assets/img/productos/litium-5l-1778606771146.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/concret-litium/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Base",
                "valor": "Nanotecnología de litio"
            },
            {
                "icono": "◉",
                "clave": "Efecto",
                "valor": "Densificador y endurecedor"
            },
            {
                "icono": "◉",
                "clave": "Ventaja",
                "valor": "No forma película ni altera el color"
            },
            {
                "icono": "◉",
                "clave": "Presentación",
                "valor": "5, 10 y 20 litros"
            }
        ],
        "rutas": [
            {
                "sección": "pulido",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "productos-quimicos",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "productos-quimicos",
                "subcategoría": "densificadores"
            }
        ],
        "pdfUrl": "/assets/docs/ficha-tcnica-concret-litium-1784567228412.pdf",
        "visible": true
    },
    {
        "id": "concret-lock",
        "sku": "CONCRETLOCK",
        "nombre": "Concret Lock",
        "secciones": [
            "pulido"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Hidrorrepelente de alta penetración que impermeabiliza superficies porosas sin alterar su aspecto.",
        "imagen": "/assets/img/productos/lock-5l-1778606821609.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/concret-lock1/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Efecto",
                "valor": "Impermeabilización invisible"
            },
            {
                "icono": "◉",
                "clave": "Aplicación",
                "valor": "Pulverizador, rodillo o pincel"
            },
            {
                "icono": "◉",
                "clave": "Uso",
                "valor": "Ladrillos, lajas, piedras y mampostería"
            },
            {
                "icono": "◉",
                "clave": "Presentación",
                "valor": "5, 10 y 20 litros"
            }
        ],
        "rutas": [
            {
                "sección": "pulido",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "productos-quimicos",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "productos-quimicos",
                "subcategoría": "impermeabilizantes"
            }
        ],
        "pdfUrl": "/assets/docs/ficha-tcnica---new-concret---concret-lock-1778606837774.pdf",
        "visible": true
    },
    {
        "id": "concret-max",
        "sku": "CONCRETMAX",
        "nombre": "Concret Max",
        "secciones": [
            "pulido",
            "mantenimiento"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Sellador de alto brillo que forma una micro película resistente sin alterar la textura del piso.",
        "imagen": "/assets/img/productos/max-5l-1778606902219.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/selladores-concret-max/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Rendimiento",
                "valor": "10 a 15 m² por litro"
            },
            {
                "icono": "◉",
                "clave": "Aplicación",
                "valor": "Mopa o paño de microfibra"
            },
            {
                "icono": "◉",
                "clave": "Efecto",
                "valor": "Alto brillo sin ceras"
            },
            {
                "icono": "◉",
                "clave": "Presentación",
                "valor": "5, 10 y 20 litros"
            }
        ],
        "pdfUrl": "/assets/docs/ficha-tcnica-concret-max-1784567208842.pdf",
        "visible": true,
        "rutas": [
            {
                "sección": "pulido",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "productos-quimicos",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "productos-quimicos",
                "subcategoría": "selladores"
            },
            {
                "sección": "mantenimiento",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "mantenimiento",
                "categoría": "productos-quimicos",
                "subcategoría": ""
            },
            {
                "sección": "mantenimiento",
                "categoría": "productos-quimicos",
                "subcategoría": "selladores"
            }
        ]
    },
    {
        "id": "concret-finish",
        "sku": "CONCRETFINISH",
        "nombre": "Concret Finish",
        "secciones": [
            "pulido",
            "mantenimiento"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Sellador acuoso de terminación satinada que realza el color y facilita la limpieza de superficies cementicias.",
        "imagen": "/assets/img/productos/finish-5l-1778606979003.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/concret-finish/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Acabado",
                "valor": "Satinado realzador del color"
            },
            {
                "icono": "◉",
                "clave": "Aplicación",
                "valor": "Rodillo o pulverizador"
            },
            {
                "icono": "◉",
                "clave": "Uso",
                "valor": "Interior y exterior, tránsito medio"
            },
            {
                "icono": "◉",
                "clave": "Presentación",
                "valor": "5, 10 y 20 litros"
            }
        ],
        "rutas": [
            {
                "sección": "pulido",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "productos-quimicos",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "productos-quimicos",
                "subcategoría": "selladores"
            },
            {
                "sección": "mantenimiento",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "mantenimiento",
                "categoría": "productos-quimicos",
                "subcategoría": ""
            },
            {
                "sección": "mantenimiento",
                "categoría": "productos-quimicos",
                "subcategoría": "selladores"
            }
        ],
        "pdfUrl": "/assets/docs/ficha-tcnica-concret-finish-1784567219919.pdf",
        "visible": true
    },
    {
        "id": "concret-d",
        "sku": "CONCRETD",
        "nombre": "Concret D",
        "secciones": [
            "pulido",
            "mantenimiento"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Desengrasante de doble acción y baja espuma para grasas y aceites en pisos de hormigón.",
        "imagen": "/assets/img/productos/concret-d-5-1778606889938.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/concret-d/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Rendimiento",
                "valor": "300–500 m²/L de concentrado"
            },
            {
                "icono": "◉",
                "clave": "Presentación",
                "valor": "5, 10 y 20 litros"
            },
            {
                "icono": "◉",
                "clave": "Aplicación",
                "valor": "Manual o con lavasecapisos"
            }
        ],
        "rutas": [
            {
                "sección": "pulido",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "productos-quimicos",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "productos-quimicos",
                "subcategoría": "detergentes"
            },
            {
                "sección": "mantenimiento",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "mantenimiento",
                "categoría": "productos-quimicos",
                "subcategoría": ""
            },
            {
                "sección": "mantenimiento",
                "categoría": "productos-quimicos",
                "subcategoría": "desengrasantes"
            }
        ],
        "pdfUrl": "/assets/docs/ficha-tcnica-concret-d-1784567245888.pdf",
        "visible": true
    },
    {
        "id": "gala-jb3",
        "sku": "GALAJB3",
        "nombre": "Aspiradora Gala JB3",
        "secciones": [
            "pulido",
            "mantenimiento"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Aspiradora industrial de tres motores para sólidos y líquidos, con tanque de acero inoxidable de 60 litros.",
        "imagen": "/assets/img/productos/jb3-1784565356385.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/aspiradora-gala-jb3-7v7t1/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Potencia",
                "valor": "4500 W (3 motores de 1500 W)"
            },
            {
                "icono": "◉",
                "clave": "Capacidad",
                "valor": "60 L en acero inoxidable"
            },
            {
                "icono": "◉",
                "clave": "Uso",
                "valor": "Seco y húmedo"
            }
        ],
        "rutas": [
            {
                "sección": "pulido",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "equipos",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "equipos",
                "subcategoría": "aspiradoras"
            },
            {
                "sección": "mantenimiento",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "mantenimiento",
                "categoría": "equipos",
                "subcategoría": ""
            },
            {
                "sección": "mantenimiento",
                "categoría": "equipos",
                "subcategoría": "aspiradoras"
            }
        ],
        "pdfUrl": "",
        "visible": true
    },
    {
        "id": "sistema-newconcret-5l",
        "sku": "SISTEMANEWCONCRET5L",
        "nombre": "Sistema 3 Pasos",
        "secciones": [
            "pulido",
            "mantenimiento"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Tratamiento de 3 pasos que endurece, protege y da brillo premium a los pisos de hormigón.",
        "imagen": "/assets/img/productos/kit-nc-5l-sfondo-1784565744336.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/sistema-newconcret/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Contenido",
                "valor": "Concret Sodium, Concret Lock y Concret Finish"
            },
            {
                "icono": "◉",
                "clave": "Presentación",
                "valor": "5 litros por paso"
            },
            {
                "icono": "◉",
                "clave": "Efecto",
                "valor": "Endurece, impermeabiliza y abrillanta"
            }
        ],
        "rutas": [
            {
                "sección": "pulido",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "productos-quimicos",
                "subcategoría": ""
            },
            {
                "sección": "pulido",
                "categoría": "productos-quimicos",
                "subcategoría": "selladores"
            },
            {
                "sección": "mantenimiento",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "mantenimiento",
                "categoría": "productos-quimicos",
                "subcategoría": ""
            },
            {
                "sección": "mantenimiento",
                "categoría": "productos-quimicos",
                "subcategoría": "sistema-3-pasos"
            }
        ],
        "pdfUrl": "/assets/docs/sistema-3-pasos-nc-1784565561209.pdf",
        "visible": true
    },
    {
        "id": "pano-microfibra-60",
        "sku": "PANOMICROFIBRA60",
        "nombre": "Paño de Microfibra Azul 60 cm",
        "secciones": [
            "mantenimiento"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Paño de microfibra con velcro para mopa, para aplicar densificadores y selladores sin marcas.",
        "imagen": "/assets/img/productos/pao-mopa-4-1784565760881.webp",
        "storeUrl": "https://tiendalonati.com.ar/productos/pano-de-microfibra/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Ancho",
                "valor": "60 cm"
            },
            {
                "icono": "◉",
                "clave": "Material",
                "valor": "Microfibra de alta resistencia"
            },
            {
                "icono": "◉",
                "clave": "Fijación",
                "valor": "Compatible con velcro"
            }
        ],
        "rutas": [
            {
                "sección": "mantenimiento",
                "categoría": "",
                "subcategoría": ""
            },
            {
                "sección": "mantenimiento",
                "categoría": "accesorios",
                "subcategoría": ""
            },
            {
                "sección": "mantenimiento",
                "categoría": "accesorios",
                "subcategoría": "panos"
            }
        ],
        "pdfUrl": "/assets/docs/aplicador-1784568012313.pdf",
        "visible": true
    }
];