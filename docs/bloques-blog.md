# Bloques de contenido para artículos del blog

Snippets listos para pegar dentro del cuerpo del artículo, en el campo
**Cuerpo (Markdown)** del panel admin.

## Cómo funciona

El cuerpo del artículo se escribe en Markdown, pero **acepta HTML**. El pipeline es:

```
cuerpo_md  →  marked (Markdown → HTML)  →  sanitize-html  →  blog/<slug>/index.html
```

`marked` deja pasar el HTML tal cual, y `sanitize-html` conserva las etiquetas
(`div`, `span`, `table`, `figure`, `img`, …) y el atributo `class`. Por eso los
bloques de abajo funcionan sin tocar el generador.

Lo que el sanitizador **elimina siempre**, aunque lo pegues:

- `<script>` y cualquier JS inline (`onclick=`, `onerror=`, …)
- El atributo `style=` — usá las clases, no estilos inline
- Enlaces `javascript:`

Los estilos viven en `assets/css/blog.css`, al final, bajo el prefijo `nb-`.

### Reglas de tipeo

- Dejá **una línea en blanco antes y después** de cada bloque. Si el HTML queda
  pegado a un párrafo, Markdown puede envolverlo en un `<p>` y romper el layout.
- No indentes el bloque con 4 espacios: Markdown lo interpretaría como código.

---

## 1. Nota técnica

Para una aclaración, una advertencia o un dato que merece salir del párrafo.

```html
<div class="nb-nota">
  <span class="nb-k">Dato técnico</span>
  <p>El densificador reacciona con la cal libre del hormigón. En pisos muy viejos
  o con curadores previos, conviene hacer una prueba en un sector chico.</p>
</div>
```

Variante gris, para advertencias:

```html
<div class="nb-nota nb-nota--alerta">
  <span class="nb-k">Antes de empezar</span>
  <p>No apliques sobre hormigón que no haya curado sus 28 días.</p>
</div>
```

---

## 2. Datos clave

Una fila de cifras. Se acomoda sola: poné de 2 a 4 celdas.

```html
<div class="nb-datos">
  <div><b>25 años</b><span>Garantía del tratamiento</span></div>
  <div><b>9–10</b><span>Rango de pH ideal</span></div>
  <div><b>300–500 m²/L</b><span>Rendimiento del concentrado</span></div>
</div>
```

---

## 3. Pasos numerados

Cuando el orden importa y una lista `1. 2. 3.` de Markdown queda pobre.

```html
<div class="nb-pasos">
  <div><b>01</b><p><strong>Barrido en seco</strong>Sacá el polvo y las partículas
  sueltas antes de mojar el piso.</p></div>
  <div><b>02</b><p><strong>Lavado con Concret D</strong>Diluí según la ficha
  técnica y dejá actuar unos minutos.</p></div>
  <div><b>03</b><p><strong>Enjuague y secado</strong>Retirá con lavasecapisos o
  mopa limpia.</p></div>
</div>
```

---

## 4. Antes y después

Dos imágenes lado a lado. En mobile se apilan.

```html
<div class="nb-ab">
  <figure>
    <img src="/assets/img/blog/antes.webp" alt="Piso opaco antes del tratamiento"
         loading="lazy" width="800" height="600">
    <figcaption>Antes</figcaption>
  </figure>
  <figure>
    <img src="/assets/img/blog/despues.webp" alt="Piso con brillo tras el tratamiento"
         loading="lazy" width="800" height="600">
    <figcaption>Después</figcaption>
  </figure>
</div>
```

> Poné siempre `alt`, `width` y `height`: el `alt` es SEO y accesibilidad, y las
> medidas evitan que el texto salte mientras carga la imagen.

---

## 5. CTA de producto

Para enlazar a un producto o sección desde la mitad del artículo.

```html
<div class="nb-cta">
  <div>
    <span class="nb-k">Producto relacionado</span>
    <strong>Fórmula NC</strong>
    <p>Sodium, Lock y Finish: densifica, impermeabiliza y sella el hormigón.</p>
  </div>
  <a href="/proteccion/">Ver la fórmula</a>
</div>
```

---

## 6. Cita con atribución

```html
<div class="nb-cita">
  <p>Un piso no se termina cuando se pule: se termina cuando se protege.</p>
  <span>Equipo técnico NewConcret</span>
</div>
```

Si no necesitás atribución, alcanza con el `>` de Markdown, que ya tiene estilo.

---

## 7. Texto + imagen en la misma fila

La imagen queda a la mitad de ancho y acompaña al texto en lugar de cortar la
lectura. Es la mejor opción cuando la foto ilustra algo puntual de un párrafo.

```html
<div class="nb-split">
  <div>
    <h3>El punto intermedio</h3>
    <p>Entre esos dos extremos está la terminación <strong>sal y pimienta</strong>:
    un desbaste algo mayor retira la capa más superficial.</p>
  </div>
  <figure>
    <img src="/assets/img/blog/terminacion-sal-y-pimienta.webp"
         alt="Piso con terminación sal y pimienta" loading="lazy"
         width="1100" height="1100">
    <figcaption>Sal y pimienta</figcaption>
  </figure>
</div>
```

El `<h3>` y el `<figcaption>` son opcionales.

Para alternar el lado y que dos bloques seguidos no queden iguales, agregá
`nb-split--inv`: la imagen pasa a la izquierda.

```html
<div class="nb-split nb-split--inv">
  ...
</div>
```

En mobile los dos se apilan en una sola columna y **el texto siempre va primero**,
incluso en la variante invertida.

---

## 8. Tablas

Las tablas de Markdown ahora tienen estilo propio, así que escribilas normal:

```markdown
| Producto | Función | Rendimiento |
| --- | --- | --- |
| Concret Sodium | Densificador | 8–10 m²/L |
| Concret Lock | Impermeabilizante | 10–12 m²/L |
```

Si la tabla tiene muchas columnas y se aprieta en el celular, envolvela para que
scrollee sola:

```html
<div class="nb-scroll">

| Producto | Función | Rendimiento | Presentación |
| --- | --- | --- | --- |
| Concret Sodium | Densificador | 8–10 m²/L | 5, 10 y 20 L |

</div>
```

Las líneas en blanco dentro del `div` son necesarias para que Markdown procese la
tabla en vez de tratarla como texto plano.

---

## Después de editar

Los artículos son páginas estáticas: hay que regenerarlas.

```bash
npm run blog
```
