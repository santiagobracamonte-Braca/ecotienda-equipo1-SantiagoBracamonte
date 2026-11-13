"use strict";

// Catálogo construido a partir de objetos literales. Los datos son demostrativos.
const productos = [
  { id: 1, nombre: "Bombillo LED A60 9W", categoria: "iluminacion", precio: 12900, potenciaAnterior: 60, potenciaNueva: 9, horasDia: 5, icono: "✦", imagen: "assets/productos/bombillo-led.svg", descripcion: "Luz cálida de bajo consumo para espacios interiores." },
  { id: 2, nombre: "Panel LED de sobreponer 24W", categoria: "iluminacion", precio: 55000, potenciaAnterior: 48, potenciaNueva: 24, horasDia: 6, icono: "▦", imagen: "assets/productos/panel-led.svg", descripcion: "Iluminación uniforme para salas, estudios y oficinas." },
  { id: 3, nombre: "Cinta LED eficiente 10 m", categoria: "iluminacion", precio: 89500, potenciaAnterior: 100, potenciaNueva: 36, horasDia: 4, icono: "〰", imagen: "assets/productos/cinta-led.svg", descripcion: "Iluminación decorativa con consumo optimizado." },
  { id: 4, nombre: "Nevera inverter 300 L", categoria: "refrigeracion", precio: 1899000, potenciaAnterior: 350, potenciaNueva: 180, horasDia: 8, icono: "▯", imagen: "assets/productos/nevera.svg", descripcion: "Refrigeración de uso familiar con compresor inverter." },
  { id: 5, nombre: "Nevera compacta inverter 120 L", categoria: "refrigeracion", precio: 999000, potenciaAnterior: 180, potenciaNueva: 100, horasDia: 8, icono: "▯", imagen: "assets/productos/nevera-compacta.svg", descripcion: "Formato compacto para espacios pequeños." },
  { id: 6, nombre: "Congelador horizontal inverter", categoria: "refrigeracion", precio: 2199000, potenciaAnterior: 400, potenciaNueva: 220, horasDia: 8, icono: "▱", imagen: "assets/productos/congelador.svg", descripcion: "Conservación de alimentos con potencia optimizada." },
  { id: 7, nombre: "Ventilador DC de 16 pulgadas", categoria: "climatizacion", precio: 249000, potenciaAnterior: 75, potenciaNueva: 28, horasDia: 8, icono: "✺", imagen: "assets/productos/ventilador.svg", descripcion: "Circulación de aire con motor de corriente directa." },
  { id: 8, nombre: "Aire acondicionado inverter 9.000 BTU", categoria: "climatizacion", precio: 1699000, potenciaAnterior: 1400, potenciaNueva: 850, horasDia: 6, icono: "❄", imagen: "assets/productos/aire-acondicionado.svg", descripcion: "Climatización inverter para habitaciones medianas." },
  { id: 9, nombre: "Aire acondicionado inverter 12.000 BTU", categoria: "climatizacion", precio: 2399000, potenciaAnterior: 1800, potenciaNueva: 1100, horasDia: 6, icono: "❄", imagen: "assets/productos/aire-acondicionado.svg", descripcion: "Climatización inverter para espacios amplios." }
];

const nombresCategorias = {
  iluminacion: "Iluminación",
  refrigeracion: "Refrigeración",
  climatizacion: "Climatización"
};

let categoriaActiva = "todas";
let terminoBusqueda = "";
let carrito = [];
let tarifaKwh = 950;

const contenedorProductos = document.querySelector("#contenedorProductos");
const contenedorCarrito = document.querySelector("#productosCarrito");
const filtrosCategorias = document.querySelector("#filtrosCategorias");
const buscador = document.querySelector("#buscadorProductos");
const entradaTarifa = document.querySelector("#tarifaKwh");
const estadoResultados = document.querySelector("#estadoResultados");

/** Calcula kWh evitados en 30 días frente al equipo de referencia. */
function calcularAhorroKwhMes(producto) {
  const diferenciaWatts = Math.max(0, producto.potenciaAnterior - producto.potenciaNueva);
  return (diferenciaWatts / 1000) * producto.horasDia * 30;
}

/** Convierte el ahorro energético estimado a pesos colombianos. */
function calcularAhorroPesosMes(producto) {
  return calcularAhorroKwhMes(producto) * tarifaKwh;
}

/** Presenta valores monetarios en formato COP sin decimales. */
function formatearPesos(valor) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0
  }).format(valor);
}

/** Devuelve el nombre legible de una categoría. */
function obtenerNombreCategoria(categoria) {
  return nombresCategorias[categoria] || "Otras categorías";
}

/** Evita que tildes y mayúsculas afecten la búsqueda. */
function normalizarTexto(texto) {
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}

/** Aplica filtro y búsqueda en memoria antes de generar las tarjetas. */
function obtenerProductosVisibles() {
  const busquedaNormalizada = normalizarTexto(terminoBusqueda);
  return productos.filter((producto) => {
    const coincideCategoria = categoriaActiva === "todas" || producto.categoria === categoriaActiva;
    const coincideBusqueda = normalizarTexto(producto.nombre).includes(busquedaNormalizada);
    return coincideCategoria && coincideBusqueda;
  });
}

/** Genera todas las tarjetas con template strings: no hay tarjetas estáticas en HTML. */
function renderizarCatalogo() {
  const productosVisibles = obtenerProductosVisibles();
  estadoResultados.textContent = `${productosVisibles.length} producto${productosVisibles.length === 1 ? "" : "s"} encontrado${productosVisibles.length === 1 ? "" : "s"}`;

  if (productosVisibles.length === 0) {
    contenedorProductos.innerHTML = `<div class="no-results"><span>⌕</span><h3>No encontramos resultados</h3><p>Prueba con otro nombre o selecciona una categoría diferente.</p></div>`;
    return;
  }

  let tarjetasHTML = "";
  for (const producto of productosVisibles) {
    const ahorroKwh = calcularAhorroKwhMes(producto);
    const ahorroPesos = calcularAhorroPesosMes(producto);
    tarjetasHTML += `
      <article class="product-card card">
        <div class="product-visual visual-${producto.categoria}"><span class="product-icon"><img src="${producto.imagen}" alt="Ilustración de ${producto.nombre}" loading="lazy" width="77" height="77"></span><span class="product-category">${obtenerNombreCategoria(producto.categoria)}</span></div>
        <div class="product-content">
          <div class="product-title-row"><h3>${producto.nombre}</h3><span class="product-id">VC-${String(producto.id).padStart(3, "0")}</span></div>
          <p class="product-description">${producto.descripcion}</p>
          <div class="product-specs"><span><small>Antes</small><strong>${producto.potenciaAnterior} W</strong></span><span><small>Nuevo</small><strong>${producto.potenciaNueva} W</strong></span><span><small>Uso diario</small><strong>${producto.horasDia} h</strong></span></div>
          <div class="product-saving"><span>Ahorro estimado / mes</span><strong>${ahorroKwh.toFixed(2).replace(".", ",")} kWh · ${formatearPesos(ahorroPesos)}</strong></div>
          <div class="product-buy-row"><strong class="product-price">${formatearPesos(producto.precio)}</strong><button class="btn btn-add" type="button" data-agregar="${producto.id}" aria-label="Agregar ${producto.nombre} al carrito">Agregar <span aria-hidden="true">+</span></button></div>
        </div>
      </article>`;
  }
  contenedorProductos.innerHTML = tarjetasHTML;
}

/** Agrega una unidad; si ya existe, incrementa su cantidad. */
function agregarAlCarrito(idProducto) {
  const producto = productos.find((item) => item.id === idProducto);
  if (!producto) return;
  const itemExistente = carrito.find((item) => item.id === idProducto);
  if (itemExistente) {
    itemExistente.cantidad += 1;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }
  renderizarCarrito();
}

/** Elimina o decrementa una unidad de un producto del carrito. */
function cambiarCantidad(idProducto, delta) {
  const item = carrito.find((producto) => producto.id === idProducto);
  if (!item) return;
  item.cantidad += delta;
  if (item.cantidad <= 0) {
    carrito = carrito.filter((producto) => producto.id !== idProducto);
  }
  renderizarCarrito();
}

/** Calcula inversión, ahorro total y recuperación de la compra. */
function calcularResumenCarrito() {
  return carrito.reduce((resumen, producto) => {
    resumen.total += producto.precio * producto.cantidad;
    resumen.ahorroMensual += calcularAhorroPesosMes(producto) * producto.cantidad;
    resumen.cantidad += producto.cantidad;
    return resumen;
  }, { total: 0, ahorroMensual: 0, cantidad: 0 });
}

/** Pinta el contenido y el resumen del carrito en el DOM. */
function renderizarCarrito() {
  const resumen = calcularResumenCarrito();
  document.querySelector("#cantidadCarrito").textContent = resumen.cantidad;
  document.querySelector("#totalCarrito").textContent = formatearPesos(resumen.total);
  document.querySelector("#ahorroCarrito").textContent = formatearPesos(resumen.ahorroMensual);
  const meses = resumen.ahorroMensual > 0 ? resumen.total / resumen.ahorroMensual : 0;
  document.querySelector("#recuperacionCarrito").textContent = resumen.total === 0 ? "—" : (meses > 0 ? `${meses.toFixed(1).replace(".", ",")} meses` : "No estimable");
  document.querySelector("#vaciarCarrito").disabled = carrito.length === 0;

  if (carrito.length === 0) {
    contenedorCarrito.innerHTML = `<div class="cart-empty"><span>＋</span><p>Tu carrito está vacío.</p><small>Agrega equipos para calcular la inversión y el ahorro.</small></div>`;
    return;
  }

  contenedorCarrito.innerHTML = carrito.map((producto) => `
    <article class="cart-item">
      <div class="cart-item-icon" aria-hidden="true">${producto.icono}</div>
      <div class="cart-item-info"><strong>${producto.nombre}</strong><small>${formatearPesos(producto.precio)} · ${producto.cantidad} unidad(es)</small><div class="quantity-controls"><button type="button" data-cantidad="-1" data-id="${producto.id}" aria-label="Quitar una unidad de ${producto.nombre}">−</button><span>${producto.cantidad}</span><button type="button" data-cantidad="1" data-id="${producto.id}" aria-label="Agregar una unidad de ${producto.nombre}">+</button></div></div>
      <strong class="cart-item-total">${formatearPesos(producto.precio * producto.cantidad)}</strong>
    </article>`).join("");
}

// Delegación de eventos: un único listener para todos los botones de producto.
contenedorProductos.addEventListener("click", (evento) => {
  const botonAgregar = evento.target.closest("[data-agregar]");
  if (botonAgregar) agregarAlCarrito(Number(botonAgregar.dataset.agregar));
});

filtrosCategorias.addEventListener("click", (evento) => {
  const boton = evento.target.closest("[data-categoria]");
  if (!boton) return;
  categoriaActiva = boton.dataset.categoria;
  filtrosCategorias.querySelectorAll("[data-categoria]").forEach((filtro) => {
    const seleccionado = filtro === boton;
    filtro.classList.toggle("is-active", seleccionado);
    filtro.setAttribute("aria-pressed", String(seleccionado));
  });
  renderizarCatalogo();
});

buscador.addEventListener("input", (evento) => {
  terminoBusqueda = evento.target.value;
  renderizarCatalogo();
});

entradaTarifa.addEventListener("input", (evento) => {
  const valor = Number(evento.target.value);
  if (Number.isFinite(valor) && valor >= 100 && valor <= 5000) {
    tarifaKwh = valor;
    renderizarCatalogo();
    renderizarCarrito();
  }
});

contenedorCarrito.addEventListener("click", (evento) => {
  const botonCantidad = evento.target.closest("[data-cantidad]");
  if (botonCantidad) cambiarCantidad(Number(botonCantidad.dataset.id), Number(botonCantidad.dataset.cantidad));
});

document.querySelector("#vaciarCarrito").addEventListener("click", () => {
  carrito = [];
  renderizarCarrito();
});

// Estado inicial del catálogo y del carrito.
renderizarCatalogo();
renderizarCarrito();
