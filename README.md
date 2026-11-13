# Voltía Casa - EA2

Tienda académica demostrativa de equipos eficientes. El sitio usa HTML5, Bootstrap 5.3.3, CSS propio compilado desde Sass y JavaScript para catálogo, filtros, buscador y carrito.

## Estructura

```text
EA2_Voltia_Casa/
├── index.html
├── catalogo.html
├── nosotros.html
├── contacto.html
├── css/estilos.css
├── scss/_variables.scss
├── scss/estilos.scss
├── js/tienda.js
├── js/contacto.js
├── assets/
├── documentacion/
└── package.json
```

## Ejecutar localmente

1. Instala Node.js LTS.
2. Abre esta carpeta en Visual Studio Code.
3. En la terminal ejecuta:

   ```bash
   npm install
   npm run sass
   # o directamente: npx sass scss/estilos.scss css/estilos.css --style=expanded
   ```

4. Abre `index.html` con Live Server (extensión de VS Code). También puedes servir la carpeta con cualquier servidor estático.
5. Cada vez que modifiques Sass, ejecuta `npm run sass`. Para compilar automáticamente mientras trabajas: `npm run sass:watch`.

Bootstrap y Google Fonts se cargan desde CDN; para ver el diseño completo se requiere conexión a Internet.

## Datos y supuestos

- IDEAM: declaratoria del fenómeno de El Niño en Colombia el 8 de octubre de 2026; anomalía de +3,49 °C en la temperatura superficial del Pacífico y 83 % de probabilidad de intensidad fuerte a muy fuerte hasta el primer trimestre de 2027.
- XM: en agosto de 2026 el precio promedio de bolsa fue de 946,6 COP/kWh, 278,2 % más que en agosto de 2025. Es un indicador del mercado mayorista, no la tarifa final del hogar.
- La calculadora inicia con una tarifa de referencia de **$950 COP/kWh**, modificable por el visitante. Es un supuesto de demostración; reemplázalo por el valor aplicable de la factura para una estimación personal.
- Potencias, horas, precios de productos y descripciones son datos ilustrativos del catálogo académico, no cotizaciones comerciales.

## Lógica de ahorro

`kWh ahorrados/mes = ((W anterior - W nuevo) / 1000) × horas/día × 30`.

`COP ahorrados/mes = kWh ahorrados/mes × tarifa de referencia`.

`Meses de recuperación = inversión total del carrito / ahorro estimado mensual del carrito`.

El resultado es un escenario comparativo. El consumo real depende del ciclo de trabajo, eficiencia, temperatura, hábitos y condiciones de instalación de cada equipo.

## Publicar en GitHub Pages

1. Crea un repositorio público con el nombre que corresponda al equipo, por ejemplo `ecotienda-equipoN` (reemplaza N por el número asignado). No subas `node_modules`.
2. Copia el contenido de esta carpeta a la raíz del repositorio.
3. Compila Sass y confirma que `css/estilos.css` esté actualizado.
4. Haz commits reales y descriptivos durante el desarrollo. La evidencia pide mínimo tres commits propios por estudiante; no inventes commits ni autores.
5. En GitHub entra a **Settings → Pages**, selecciona **Deploy from a branch**, rama `main`, carpeta `/ (root)` y guarda.
6. Espera a que GitHub Pages publique el sitio. Prueba las cuatro rutas y copia la URL final.
7. Crea la etiqueta solicitada:

   ```bash
   git tag ea2
   git push origin ea2
   ```

## Ajustes antes de entregar

- Revisa que el nombre del repositorio siga `ecotienda-equipoN`.
- Si hay más integrantes, añade una tarjeta por cada persona real en `nosotros.html` y registra sus funciones en el PDF.
- Sustituye en el PDF los espacios de evidencia por capturas reales del sitio publicado en computador y móvil.
- Valida las cuatro páginas en <https://validator.w3.org/nu/> y `css/estilos.css` en <https://jigsaw.w3.org/css-validator/>. Corrige cualquier error y revisa la consola del navegador.
- Graba el video individual de máximo cinco minutos. Cada estudiante debe explicar una parte que realmente haya desarrollado.

## Fuentes

- IDEAM, seguimiento del Fenómeno de El Niño 2026-2027: <https://www.ideam.gov.co/fenomeno-del-nino>
- IDEAM, declaratoria oficial del 8 de octubre de 2026: <https://www.ideam.gov.co/sala-de-prensa/noticia/ideam-confirma-el-fenomeno-de-el-nino-y-ungrd-articula-la-preparacion-nacional-para-afrontar-sus>
- XM, informe de variables del mercado de energía de agosto de 2026 (publicado el 29 de septiembre de 2026): <https://www.xm.com.co/noticias/9612-informe-de-xm-sobre-las-variables-del-mercado-de-energia-en-agosto-de-2026>

## Publicación del proyecto

- **Sitio web:** https://santiagobracamonte-braca.github.io/ecotienda-equipo1-SantiagoBracamonte/
- **Repositorio:** https://github.com/santiagobracamonte-Braca/ecotienda-equipo1-SantiagoBracamonte

## Autor

**Santiago Bracamonte Suárez**  
Proyecto individual desarrollado para la evidencia EA2 de la IU Digital de Antioquia.

## Tecnologías utilizadas

- HTML5
- CSS3
- Bootstrap 5
- Sass
- JavaScript
- GitHub Pages
