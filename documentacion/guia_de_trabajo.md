# Guía rápida de trabajo y sustentación

## Antes de abrir el proyecto

- Instalar Node.js LTS y Visual Studio Code.
- Abrir la carpeta `EA2_Voltia_Casa` en VS Code.
- Ejecutar `npm install` y `npm run sass`.
- Abrir `index.html` con Live Server.

## Demostración del sitio

1. En Inicio, explicar el contexto de El Niño y aclarar que precio de bolsa y tarifa residencial son conceptos diferentes.
2. Abrir Catálogo; mostrar las categorías y cambiar la tarifa de referencia.
3. Buscar un producto por nombre y probar una categoría.
4. Agregar dos productos, aumentar o reducir cantidades y mostrar total, ahorro mensual y recuperación.
5. Vaciar el carrito.
6. Mostrar Nosotros y el formulario de Contacto.
7. Abrir el sitio en modo móvil y mostrar el menú, una tarjeta por fila y el carrito debajo del catálogo.

## Código que puedes explicar

- `scss/_variables.scss`: colores, tipografías, radios y sombras centralizados.
- `scss/estilos.scss`: `@use`, variables, mixins, anidamiento, selectores CSS, media queries y personalización Bootstrap.
- `js/tienda.js`: arreglo de productos, funciones de ahorro, filtro con `click`, buscador con `input`, template strings y cálculo del carrito.
- `js/contacto.js`: validación nativa y evento `submit`.

## Guion de cinco minutos (aprox. 4:30)

- 0:00-0:30: nombre de la tienda y objetivo.
- 0:30-1:05: portada y datos oficiales.
- 1:05-2:25: catálogo, filtros, buscador, agregar, cantidades, total, ahorro y recuperación.
- 2:25-3:10: sitio responsive en vista móvil.
- 3:10-4:10: explicar el mixin o la estructura Sass y una función propia de JavaScript.
- 4:10-4:30: mostrar repositorio, publicación y cierre.

No leas el guion completo: demuestra el sitio y explica el código con tus propias palabras.
