/* 
   NEWCONCRET - productos.js
   Catalogo unificado de productos.
*/

const STORE_BASE = 'https://tiendalonati.com.ar';

const productos = [
    {
        "id": "prod_mp48pywy",
        "nombre": "Barredora M50",
        "sku": "BARR-MS50",
        "descripcion": "Barredora hombre a bordo",
        "imagen": "/assets/img/productos/ms50-1778687672939.png",
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
        "specs": []
    },
    {
        "id": "prod_mp48ol0v",
        "nombre": "Barredora MS30",
        "sku": "BARR-MS30",
        "descripcion": "Barredora hombre a bordo",
        "imagen": "/assets/img/productos/ms30-1778682885069.png",
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
        "specs": []
    },
    {
        "id": "frida-400-eco",
        "sku": "FRIDA400",
        "nombre": "Frida 400 ECO",
        "secciones": [
            "pulido"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Pulidora semi-profesional",
        "imagen": "/assets/img/productos/frida-400.png",
        "storeUrl": "https://tiendalonati.com.ar/productos/frida-400/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Ancho de trabajo",
                "valor": "400 mm"
            },
            {
                "icono": "◉",
                "clave": "Potencia",
                "valor": "220 V (monofásica)"
            },
            {
                "icono": "◉",
                "clave": "Placas de fijacion",
                "valor": "3"
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
        "nombre": "Frida 450",
        "secciones": [
            "pulido"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Pulidora semi-profesional",
        "imagen": "/assets/img/productos/frida-450.png",
        "storeUrl": "https://tiendalonati.com.ar/productos/frida-450/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Ancho de trabajo",
                "valor": "450 mm"
            },
            {
                "icono": "◉",
                "clave": "Potencia",
                "valor": "220 V (monofásica)"
            },
            {
                "icono": "◉",
                "clave": "Placas de fijacion",
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
            "construccion",
            "reparacion"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Endurecedor superficial no metálico para hormigón fresco",
        "imagen": "/assets/img/productos/concretdur.png",
        "storeUrl": "https://tiendalonati.com.ar/productos/concret-dur/",
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
        "pdfUrl": "/assets/docs/ficha-tecnica-concret-dur-1778593121150.pdf",
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
        "storeUrl": "https://tiendalonati.com.ar/productos/discos-para-pulido-para-allanadora/",
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
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
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
        "id": "ruedas-de-bujardado",
        "sku": "RUEDASDE",
        "nombre": "Ruedas de Bujardado",
        "secciones": [
            "reparacion"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Texturado de hormigón",
        "imagen": "/assets/img/productos/ruedas-bujardado.png",
        "storeUrl": "https://tiendalonati.com.ar/productos/ruedas-de-bujardado/",
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
        "descripcion": "Texturado de hormigón",
        "imagen": "/assets/img/productos/bujardado.png",
        "storeUrl": "https://tiendalonati.com.ar/productos/ruedas-de-bujardado/",
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
        "id": "chavela-550s",
        "sku": "CHAVELA550S",
        "nombre": "Chavela 550s",
        "secciones": [
            "pulido"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Pulidora Satelital Profesional",
        "imagen": "/assets/img/productos/chavela-550.png",
        "storeUrl": "https://tiendalonati.com.ar/productos/chavela-550s/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Ancho de trabajo",
                "valor": "550 mm"
            },
            {
                "icono": "◉",
                "clave": "Potencia",
                "valor": "220 V (monofásica)"
            },
            {
                "icono": "◉",
                "clave": "Placas de fijacion",
                "valor": "9"
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
        "nombre": "Chavela 680",
        "secciones": [
            "pulido"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Pulidora Satelital Industrial",
        "imagen": "/assets/img/productos/chavela-680.png",
        "storeUrl": "https://tiendalonati.com.ar/productos/chavela-680/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Ancho de trabajo",
                "valor": "680 mm"
            },
            {
                "icono": "◉",
                "clave": "Potencia",
                "valor": "380 V (trifásica)"
            },
            {
                "icono": "◉",
                "clave": "Placas de fijacion",
                "valor": "12"
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
        "descripcion": "Pulidora Satelital Industrial",
        "imagen": "/assets/img/productos/chavela-750.png",
        "storeUrl": "https://tiendalonati.com.ar/productos/chavela-750/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Ancho de trabajo",
                "valor": "750 mm"
            },
            {
                "icono": "◉",
                "clave": "Potencia",
                "valor": "380 V (trifásica)"
            },
            {
                "icono": "◉",
                "clave": "Placas de fijacion",
                "valor": "12"
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
        "descripcion": "Pulidora Satelital Industrial a control remoto",
        "imagen": "/assets/img/productos/chavela-750cr.png",
        "storeUrl": "https://tiendalonati.com.ar/productos/chavela-750cr/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Ancho de trabajo",
                "valor": "750 mm"
            },
            {
                "icono": "◉",
                "clave": "Potencia",
                "valor": "380 V (trifásica)"
            },
            {
                "icono": "◉",
                "clave": "Placas de fijacion",
                "valor": "12"
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
        "nombre": "Chavela 850",
        "secciones": [
            "pulido"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Pulidora Satelital Industrial",
        "imagen": "/assets/img/productos/chavela-850.png",
        "storeUrl": "https://tiendalonati.com.ar/productos/chavela-850/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Ancho de trabajo",
                "valor": "850 mm"
            },
            {
                "icono": "◉",
                "clave": "Potencia",
                "valor": "380 V (trifásica)"
            },
            {
                "icono": "◉",
                "clave": "Placas de fijacion",
                "valor": "12"
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
        "nombre": "Chavela 900",
        "secciones": [
            "pulido"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Pulidora Satelital Industrial a control remoto",
        "imagen": "/assets/img/productos/chavela-900.png",
        "storeUrl": "https://tiendalonati.com.ar/productos/chavela-900/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Ancho de trabajo",
                "valor": "900 mm"
            },
            {
                "icono": "◉",
                "clave": "Potencia",
                "valor": "380 V (trifásica)"
            },
            {
                "icono": "◉",
                "clave": "Placas de fijacion",
                "valor": "12"
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
        "nombre": "Chavela 1366",
        "secciones": [
            "pulido"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Pulidora Satelital de dos Motores a Control Remoto",
        "imagen": "/assets/img/productos/chavela-1366.png",
        "storeUrl": "https://tiendalonati.com.ar/productos/chavela-1366/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Ancho de trabajo",
                "valor": "1366 mm"
            },
            {
                "icono": "◉",
                "clave": "Potencia",
                "valor": "380 V (trifásica)"
            },
            {
                "icono": "◉",
                "clave": "Placas de fijacion",
                "valor": "24"
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
        "id": "tarsila-c1500-light",
        "sku": "TARSILAC1500",
        "nombre": "Tarsila C1500 Light",
        "secciones": [
            "pulido",
            "mantenimiento"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Lustradora de Alta Velocidad",
        "imagen": "/assets/img/productos/tarseila-c1500-light-7-1773156559338.png",
        "storeUrl": "https://tiendalonati.com.ar/productos/lustradora-tarsila-c1500-light/",
        "specs": [
            {
                "icono": "◉",
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
        "nombre": "Tarsila C1500",
        "secciones": [
            "pulido",
            "mantenimiento"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Lustradora industrial",
        "imagen": "/assets/img/productos/1500-nueva-1778598427788.png",
        "storeUrl": "https://tiendalonati.com.ar/productos/tarsila-c1500/",
        "specs": [
            {
                "icono": "◉",
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
        "descripcion": "Lavasecapisos con cable",
        "imagen": "/assets/img/productos/mb460-1778600227857.png",
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
                "valor": " 1.850 m²/h"
            },
            {
                "icono": "◉",
                "clave": "Ancho de limpieza",
                "valor": "450 mm"
            },
            {
                "icono": "◉",
                "clave": "Ancho de succión/secado",
                "valor": "680 mm"
            }
        ]
    },
    {
        "id": "prod_mp2t7yml",
        "nombre": "Lavasecapisos MX3",
        "sku": "MX3",
        "descripcion": "Lavasecapisos a Batería",
        "imagen": "/assets/img/productos/mx3-1778601166341.png",
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
                "clave": "Ancho de succión/secado",
                "valor": "830 mm"
            }
        ]
    },
    {
        "id": "prod_mp2tfel4",
        "nombre": "Lavasecapisos MX3T",
        "sku": "MX3T",
        "descripcion": "Lavasecapisos con tracción propia",
        "imagen": "/assets/img/productos/mx3-1778601543367.png",
        "pdfUrl": "/assets/docs/mx3t-1778601462133.pdf",
        "storeUrl": "",
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
                "clave": "Ancho de succión/secado",
                "valor": "830 mm"
            }
        ]
    },
    {
        "id": "prod_mp40z4uh",
        "nombre": "Lavasecapisos MB135",
        "sku": "LAV-MB135",
        "descripcion": "Lavasecapisos hombre a bordo",
        "imagen": "/assets/img/productos/mb135-1778674658727.png",
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
                "clave": "Tracción",
                "valor": "Motorizada – Ride-On"
            },
            {
                "icono": "◉",
                "clave": "Rendimiento",
                "valor": "4.500–5.600 m²/h"
            },
            {
                "icono": "◉",
                "clave": "Ancho de limpieza",
                "valor": "800 mm"
            }
        ]
    },
    {
        "id": "prod_mp2zb57m",
        "nombre": "Pads Manual de Pulido",
        "sku": "PADPULIDO",
        "descripcion": "Pads de pulido Manual",
        "imagen": "/assets/img/productos/espnoja-manual-grano-100-1778611557051.png",
        "pdfUrl": "",
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
                "valor": "50, 100, 200 y 400"
            },
            {
                "icono": "◉",
                "clave": "Agarre",
                "valor": "Hergonómico"
            },
            {
                "icono": "◉",
                "clave": "Variantes",
                "valor": "Texturado y Liso"
            }
        ]
    },
    {
        "id": "prod_mp2zpqbz",
        "nombre": "Disco de Lustre de 20\"",
        "sku": "LUSTRE-20",
        "descripcion": "Disco de lustre de 20 pulgadas",
        "imagen": "/assets/img/productos/pao-rojo-1778612094107.png",
        "pdfUrl": "",
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
                "valor": "20 pulgadas"
            },
            {
                "icono": "◉",
                "clave": "Variantes",
                "valor": "Blanco y Rojo"
            },
            {
                "icono": "◉",
                "clave": "Usos",
                "valor": "Lustrado y Mantenimiento"
            }
        ]
    },
    {
        "id": "prod_mp2zmp7j",
        "nombre": "Discos de Lustre de 17\"",
        "sku": "LUSTRE-17",
        "descripcion": "Paños de lustre de 17 pulgadas",
        "imagen": "/assets/img/productos/pao-blanco-1778611869906.png",
        "pdfUrl": "",
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
                "clave": "Variantes",
                "valor": "Blanco, Rojo, Verde, Negro"
            },
            {
                "icono": "◉",
                "clave": "Diámetro",
                "valor": "17 pulgadas"
            },
            {
                "icono": "◉",
                "clave": "Función",
                "valor": "Limpieza y Lustrado"
            }
        ]
    },
    {
        "id": "prod_mp2xi1g1",
        "nombre": "Metales PCD Right/Left",
        "sku": "PCD-ROJO-AZUL",
        "descripcion": "Remoción de Recubrimientos",
        "imagen": "/assets/img/productos/epoxy-y-pcd-1778608255871.png",
        "pdfUrl": "",
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
                "valor": " >1300 m²"
            },
            {
                "icono": "◉",
                "clave": "Aplicación",
                "valor": "Remoción de epoxi, poliuretanos, adhesivos y pinturas"
            }
        ]
    },
    {
        "id": "prod_mp2xw1r5",
        "nombre": "Metal Epoxi Circular",
        "sku": "EPOXI-CIRCULAR",
        "descripcion": "Metal para remoción de recubrimientos",
        "imagen": "/assets/img/productos/circular-epoxy-2-1778608929665.png",
        "pdfUrl": "",
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
                "clave": "Composicion",
                "valor": " Policristalinos de diamante"
            },
            {
                "icono": "◉",
                "clave": "Rendimiento",
                "valor": "1300 m²"
            },
            {
                "icono": "◉",
                "clave": "Comaptibilidad",
                "valor": "Pulidoras NewConcret"
            }
        ]
    },
    {
        "id": "prod_mp2z1hgg",
        "nombre": "Discos Resinoides Espesor 15 mm",
        "sku": "RESINOIDE-15MM",
        "descripcion": "Disco resinoide de 100mm de diámetro y 15mm de espesor",
        "imagen": "/assets/img/productos/resinas-15mm-grano-50-2-1778610727067.png",
        "pdfUrl": "",
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
                "valor": "50 al 400"
            }
        ]
    },
    {
        "id": "prod_mp2yumhm",
        "nombre": "Discos Resinoides Espesor 3 mm",
        "sku": "RESINOIDE-3MM",
        "descripcion": "Disco resinoide de 100mm de diámetro y 3mm de espesot",
        "imagen": "/assets/img/productos/grano-400-1778610389925.png",
        "pdfUrl": "",
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
                "valor": "50 al 800"
            }
        ]
    },
    {
        "id": "prod_mp2z44ba",
        "nombre": "Velcro Auto Adhesivo",
        "sku": "VELCROAUTO",
        "descripcion": "Velcro Auto Adhesivo de 100 para adhesión de insumos",
        "imagen": "/assets/img/productos/base-adhesiva-1778611780470.png",
        "pdfUrl": "",
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
                "valor": "100 mmm"
            },
            {
                "icono": "◉",
                "clave": "Función",
                "valor": "Velcro para adhesión de insumos"
            },
            {
                "icono": "◉",
                "clave": "",
                "valor": ""
            }
        ]
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
        "pdfUrl": "/assets/docs/ficha-tcnica-concret-microstrong-1778591010565.pdf",
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
        "pdfUrl": "/assets/docs/ficha-tcnica---new-concret---concret-restor-1777920767131.pdf",
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
                "clave": "Modo de uso",
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
            "reparacion",
            "pulido"
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
        "id": "gala-d301",
        "sku": "GALAD301",
        "nombre": "Gala D301",
        "secciones": [
            "pulido",
            "mantenimiento"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Aspiradora Monofásica",
        "imagen": "/assets/img/productos/d301-1778598595180.png",
        "storeUrl": "https://tiendalonati.com.ar/productos/aspiradora-industrial-gala-d301",
        "specs": [
            {
                "icono": "◉",
                "clave": "Ideal para",
                "valor": "Uso continuo"
            },
            {
                "icono": "◉",
                "clave": "Motor",
                "valor": "7.5 HP"
            },
            {
                "icono": "◉",
                "clave": "Filtro",
                "valor": "38.600 cm3"
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
        "id": "gala-js400",
        "sku": "GALAJS400",
        "nombre": "Gala JS400",
        "secciones": [
            "pulido",
            "mantenimiento"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Aspiradora Trifásica Compacta",
        "imagen": "/assets/img/productos/js400-1778598667668.png",
        "storeUrl": "https://tiendalonati.com.ar/productos/aspiradora-industrial-gala-js400",
        "specs": [
            {
                "icono": "◉",
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
        "id": "gala-551",
        "sku": "GALA551",
        "nombre": "Gala G551",
        "secciones": [
            "pulido",
            "mantenimiento"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Aspiradora Industrial Trifásica",
        "imagen": "/assets/img/productos/g551-1778598776964.png",
        "storeUrl": "https://tiendalonati.com.ar/productos/aspiradora-industrial-gala-g551/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Motor",
                "valor": "7.5 HP"
            },
            {
                "icono": "◉",
                "clave": "Área de Filtrado",
                "valor": "85.000 cm3"
            },
            {
                "icono": "◉",
                "clave": "Potencia",
                "valor": "380 V"
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
        "id": "gala-w552",
        "sku": "GALAW552",
        "nombre": "Gala W552",
        "secciones": [
            "pulido",
            "mantenimiento"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Aspiradora Industrial Trifásica",
        "imagen": "/assets/img/productos/552-1778598825390.png",
        "storeUrl": "https://tiendalonati.com.ar/productos/aspiradora-industrial-gala-w552",
        "specs": [
            {
                "icono": "◉",
                "clave": "Motor",
                "valor": "7.5 HP"
            },
            {
                "icono": "◉",
                "clave": "Área de Filtrado",
                "valor": "85.000 cm3"
            },
            {
                "icono": "◉",
                "clave": "Potencia",
                "valor": "380 V"
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
        "id": "gala-sw551-trifsica",
        "sku": "GALASW551",
        "nombre": "Gala SW551 Trifásica",
        "secciones": [
            "pulido",
            "mantenimiento"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Aspiradora Industrial Trifásica",
        "imagen": "/assets/img/productos/sw551-roja-1778598895574.png",
        "storeUrl": "https://tiendalonati.com.ar/productos/aspiradora-gala-sw551/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Motor",
                "valor": "7.5 HP"
            },
            {
                "icono": "◉",
                "clave": "Área de Filtrado",
                "valor": "38.600 cm2"
            },
            {
                "icono": "◉",
                "clave": "Potencia",
                "valor": "380V"
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
        "descripcion": "Ciclón Preseparador de residuos",
        "imagen": "/assets/img/productos/ciclon-1778598944444.png",
        "storeUrl": "${STORE_BASE}/productos/ciclon-preseparador/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Peso",
                "valor": "55 kg"
            },
            {
                "icono": "◉",
                "clave": "Volumen de recolección:",
                "valor": "20 L+"
            },
            {
                "icono": "◉",
                "clave": "Método de recolección",
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
        "pdfUrl": "",
        "visible": true
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
        "descripcion": "",
        "imagen": "/assets/img/productos/extension-aspiradora-1778613659418.png",
        "storeUrl": "${STORE_BASE}/productos/extension-curva-para-cepillo-barredor/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Diametro",
                "valor": "50mm"
            }
        ],
        "pdfUrl": "",
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
        "descripcion": "",
        "imagen": "/assets/img/productos/cepillo-1778613646978.png",
        "storeUrl": "${STORE_BASE}/productos/cepillo-barredor-con-ruedas-mc75/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Diametro",
                "valor": "50 mm a 2 x 40 mm"
            }
        ],
        "pdfUrl": "",
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
        "descripcion": "",
        "imagen": "/assets/img/productos/manguera-aspiradora-1778613632365.png",
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
        ],
        "pdfUrl": "",
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
        "descripcion": "",
        "imagen": "https://acdn.mitiendanube.com/stores/003/469/628/products/bifurcacion-8cd7ec039f0771391217310967788401-480-0.webp",
        "storeUrl": "${STORE_BASE}/productos/bifurcacion-metalica-mc75/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Diametro",
                "valor": "50 mm a 2 x 40 mm"
            }
        ],
        "pdfUrl": "",
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
        "descripcion": "",
        "imagen": "/assets/img/productos/adaptadores-de-manguera-1778613607167.png",
        "storeUrl": "${STORE_BASE}/productos/terminales-para-manguera-mc-75/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Diametro",
                "valor": "40 y 50mm"
            }
        ],
        "pdfUrl": "",
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
        "descripcion": "",
        "imagen": "/assets/img/productos/pico-redondo-con-cepillo-1778613583922.png",
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
        ],
        "pdfUrl": "",
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
        "descripcion": "Pico chato para aspiradoras NewConcret ",
        "imagen": "/assets/img/productos/pico-chato-1778613541688.png",
        "storeUrl": "${STORE_BASE}/productos/pico-chato-metalico-mc-75/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Diametro",
                "valor": "50mm"
            }
        ],
        "pdfUrl": "",
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
        "id": "metales-para-desbaste-circulares",
        "sku": "METALESPARA",
        "nombre": "Metal para desbaste Circular",
        "secciones": [
            "pulido"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Desbaste de Superficies",
        "imagen": "/assets/img/productos/circulares-8-2-1778604202928.png",
        "storeUrl": "https://tiendalonati.com.ar/productos/metales-circulares/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Linea",
                "valor": "Metales Circulares"
            },
            {
                "icono": "◉",
                "clave": "Grano",
                "valor": "8, 16, 30, 60, 120, 240 y 400"
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
        "id": "metales-para-desbaste-trapezoidal",
        "sku": "METALESPARA",
        "nombre": "Metal para desbaste Alto Rendimiento",
        "secciones": [
            "pulido"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Desbaste de Superficies",
        "imagen": "/assets/img/productos/1-1778604259666.png",
        "storeUrl": "https://tiendalonati.com.ar/productos/metales-alto-rendimiento/",
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
        "pdfUrl": "",
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
        "descripcion": "Desbaste de Superficies",
        "imagen": "/assets/img/productos/grano-30-2-1778604302525.png",
        "storeUrl": "https://tiendalonati.com.ar/productos/metales-eco/",
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
        "pdfUrl": "",
        "visible": true
    },
    {
        "id": "metal-epoxi",
        "sku": "METALEPOXI",
        "nombre": "Metal Epoxi",
        "secciones": [
            "pulido"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Metal PCD Right-Left",
        "imagen": "/assets/img/productos/epoxy-1778605387003.png",
        "storeUrl": "https://tiendalonati.com.ar/productos/metal-epoxy-trapezoidal/",
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
        "pdfUrl": "",
        "visible": true
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
        "descripcion": "Desbaste y Pulido de Superficies",
        "imagen": "/assets/img/productos/metal-epoxy-trapezoidal-2-1778609116513.png",
        "storeUrl": "https://tiendalonati.com.ar/productos/discos-resinoide-12mm/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Diametro",
                "valor": "100 mm"
            },
            {
                "icono": "◉",
                "clave": "Grano",
                "valor": "30 al 800"
            },
            {
                "icono": "◉",
                "clave": "Espesor",
                "valor": "12 mm"
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
        "pdfUrl": "",
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
        "descripcion": "Desbaste y Pulido de Superficies",
        "imagen": "/assets/img/productos/grano-30-1778605279602.png",
        "storeUrl": "${STORE_BASE}/productos/discos-resinoides-diametro-100-mm-8-mm-espesor/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Diametro",
                "valor": "100 mm"
            },
            {
                "icono": "◉",
                "clave": "Granos",
                "valor": "30 al 3000"
            },
            {
                "icono": "◉",
                "clave": "Espesor",
                "valor": "8 mm"
            }
        ],
        "pdfUrl": "",
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
        "id": "discos-resinoides-para-empastado",
        "sku": "DISCOSRESINOIDES",
        "nombre": "Discos resinoides para empastado",
        "secciones": [],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "",
        "imagen": "/assets/img/productos/empastinado-1778605511973.png",
        "storeUrl": "https://tiendalonati.com.ar/productos/discos-empastinado/",
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
        ],
        "pdfUrl": "",
        "visible": true,
        "rutas": []
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
        "descripcion": "Paños diamantados para micro-pulido",
        "imagen": "/assets/img/productos/3-pasos-2-1778605551012.png",
        "storeUrl": "https://tiendalonati.com.ar/productos/panos-diamantados1/",
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
        "pdfUrl": "",
        "visible": true
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
        "descripcion": "Adaptador universal para pulidoras",
        "imagen": "/assets/img/productos/adaptador-1-1778605650302.png",
        "storeUrl": "${STORE_BASE}/productos/adaptador-universal/",
        "specs": [
            {
                "icono": "◉",
                "clave": "Ideal para",
                "valor": "Usar nuestros insumos en todo tipo de máquinas"
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
        "pdfUrl": "",
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
        "descripcion": "Base con velcro p/ Disco resinoide",
        "imagen": "/assets/img/productos/base-con-velcro-1778605723104.png",
        "storeUrl": "https://tiendalonati.com.ar/productos/base-con-velcro/",
        "specs": [],
        "rutas": [
            {
                "sección": "pulido",
                "categoría": "insumos",
                "subcategoría": ""
            }
        ],
        "pdfUrl": "",
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
        "descripcion": "En pulidoras",
        "imagen": "/assets/img/productos/pollera-pulidora-1778605789155.png",
        "storeUrl": "https://tiendalonati.com.ar/productos/faldas-para-pulidoras/",
        "specs": [],
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
        "pdfUrl": "",
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
        "secciones": [
            "pulido"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Densificador a base de Sodio",
        "imagen": "/assets/img/productos/sodium-5-l-1778605845082.png",
        "storeUrl": "https://tiendalonati.com.ar/productos/concret-sodium",
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
        "pdfUrl": "",
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
        "descripcion": "Densificador y sellador a base de litio",
        "imagen": "/assets/img/productos/litium-5l-1778606771146.png",
        "storeUrl": "https://tiendalonati.com.ar/productos/concret-litium/",
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
        "pdfUrl": "/assets/docs/ficha-tcnica---new-concret---concret-litium-1778606790413.pdf",
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
        "descripcion": "Impermeabilizante oleo e hidro repelente",
        "imagen": "/assets/img/productos/lock-5l-1778606821609.png",
        "storeUrl": "https://tiendalonati.com.ar/productos/concret-lock1/",
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
        "descripcion": "Detergente removedor y desengrasante",
        "imagen": "/assets/img/productos/concret-d-5-1778606889938.png",
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
        "pdfUrl": "",
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
        "descripcion": "Sellador de Alto Brillo",
        "imagen": "/assets/img/productos/max-5l-1778606902219.png",
        "storeUrl": "https://tiendalonati.com.ar/productos/selladores-concret-max/",
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
        ],
        "pdfUrl": "",
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
        "descripcion": "Sellador de Alto Solidos",
        "imagen": "/assets/img/productos/finish-5l-1778606979003.png",
        "storeUrl": "https://tiendalonati.com.ar/productos/concret-finish/",
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
        "pdfUrl": "/assets/docs/ficha-tcnica---new-concret---concret-finish-1778606985264.pdf",
        "visible": true
    },
    {
        "id": "gala-b480",
        "sku": "GALAB480",
        "nombre": "Gala B480",
        "secciones": [
            "pulido",
            "mantenimiento"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Aspiradora Industrial Monofásica",
        "imagen": "/assets/img/productos/b480-1778599117879.png",
        "storeUrl": "https://tiendalonati.com.ar/productos/aspiradora-gala-b480/",
        "specs": [
            {
                "icono": "◉",
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
        "id": "gala-b301",
        "sku": "GALAB301",
        "nombre": "Gala B301",
        "secciones": [
            "pulido",
            "mantenimiento"
        ],
        "categoria": "",
        "cat_label": "",
        "subcategoria": "",
        "descripcion": "Aspiradora Industrial Monofásica",
        "imagen": "/assets/img/productos/gala-b301-4-1778599236971.png",
        "storeUrl": "https://tiendalonati.com.ar/productos/aspiradora-industrial-gala-b301",
        "specs": [
            {
                "icono": "◉",
                "clave": "Cantidad de Motores",
                "valor": "3"
            },
            {
                "icono": "◉",
                "clave": "Potencia",
                "valor": "3500 W"
            },
            {
                "icono": "◉",
                "clave": "Capacidad",
                "valor": "80 L"
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
    }
];