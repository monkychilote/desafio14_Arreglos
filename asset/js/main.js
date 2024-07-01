// Arreglos de propiedades
const propiedadesVenta = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    costo: 65000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa de playa, Huentelauquén",
    src: "https://a0.muscache.com/im/pictures/8511d2c3-783b-4618-83ea-afe1d4feab3e.jpg",
    descripcion:
      "Cerca de la playa y con una inigualable vista del mar, está esta casa ecológica",
    ubicacion: "Huentelauquén",
    habitaciones: 3,
    costo: 82000,
    smoke: false,
    pets: false,
  },
  {
    nombre: "La Casa Azul, Los Molles",
    src: "https://a0.muscache.com/im/pictures/941088fb-272e-4b9f-904f-f0c9b63ea67a.jpg",
    descripcion:
      "Esta casa de tres pisos está justo enfrente al mar en Los Molles",
    ubicacion: "Los Molles",
    habitaciones: 4,
    costo: 73000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Domo Geodésico, Reserva La Campana",
    src: "https://a0.muscache.com/im/pictures/f8d5b829-51f3-405a-bfbe-eae4c3586e6d.jpg",
    descripcion:
      "A 15 km de Olmué y a los pies del cerro El Roble y la Reserva de la biósfera La Campana",
    ubicacion: "Reserva La Campana",
    habitaciones: 1,
    costo: 62000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa de playa, Pullay",
    src: "https://a0.muscache.com/im/pictures/b4336f01-bf9b-44ea-8889-fd0b5232b654.jpg",
    descripcion:
      "a cinco minutos en auto de Buchupureo y a dos horas de Chillán",
    ubicacion: "Pullay",
    habitaciones: 4,
    costo: 64500,
    smoke: true,
    pets: false,
  },
  {
    nombre: "New Cabin, Corralco",
    src: "https://a0.muscache.com/im/pictures/fd7c2fd6-80f5-4636-9818-bc0abc651a19.jpg",
    descripcion:
      "Los fanáticos de la montaña y los deportes de nieve quedarán fascinados",
    ubicacion: "Corralco",
    habitaciones: 4,
    costo: 96000,
    smoke: false,
    pets: true,
  },
  // Agrega más propiedades
];

const propiedadesAlquiler = [
  {
    nombre: "Camper en el lago",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion: "Este apartamento acogedor está situado a orillas del lago.",
    ubicacion: "Lago Caburga",
    habitaciones: 1,
    costo: 2400,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Apartamento acogedor en la montaña",
    src: "https://img.freepik.com/free-photo/photorealistic-timber-house-interior-with-wooden-decor-furnishings_23-2151263619.jpg",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    ubicacion: "cordillera de la costa",
    habitaciones: 2,
    costo: 1200,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Punta Quintay, Loft Gris - Quintay",
    src: "https://assets.turismocity.com/cdn-cgi/image/format=auto,width=1400,fit=scale-down/airbnb_cl-1.jpeg",
    descripcion:
      "La casa tiene una estructura por fuera que sostiene el inmueble, que “flota” sobre el mar.",
    ubicacion: "Quintay",
    habitaciones: 2,
    costo: 1200,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Tiny House en el Valle de Elqui - Algarrobito",
    src: "https://a0.muscache.com/im/pictures/miso/Hosting-46254620/original/361470ed-ce50-491b-b89e-c6dcc33bb338.jpeg",
    descripcion:
      "Tyni house comoda y con instalaciones de mucho confort. Aire limpio acompañado de una tinaja.",
    ubicacion: "Algarrobito",
    habitaciones: 2,
    costo: 6400,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Singular Coach, un vagón de tren en Pirque",
    src: "https://assets.turismocity.com/cdn-cgi/image/format=auto,width=1400,fit=scale-down/airbnb_cl-3.jpeg",
    descripcion:
      "Este vagón de tren ofrece todas las comodidades posibles, hasta desayuno incluído.",
    ubicacion: "Pirque",
    habitaciones: 2,
    costo: 1200,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa remota frente al mar, Pichicuy",
    src: "https://assets.turismocity.com/cdn-cgi/image/format=auto,width=1400,fit=scale-down/airbnb_cl-4.jpeg",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    ubicacion: "Pichicuy",
    habitaciones: 2,
    costo: 1200,
    smoke: false,
    pets: false,
  },
  // Agrega más propiedades
];

document.addEventListener("DOMContentLoaded", () => {
  const contenedorVenta = document.getElementById("propiedades-venta");
  const contenedorAlquiler = document.getElementById("propiedades-alquiler");

  if (contenedorVenta && contenedorAlquiler) {
    // Renderizar propiedades en index.html
    renderizarPropiedades(propiedadesVenta.slice(0, 3), contenedorVenta);
    renderizarPropiedades(propiedadesAlquiler.slice(0, 3), contenedorAlquiler);
  } else if (contenedorVenta) {
    // Renderizar propiedades en propiedades_venta.html
    renderizarPropiedades(propiedadesVenta, contenedorVenta);
  } else if (contenedorAlquiler) {
    // Renderizar propiedades en propiedades_alquiler.html
    renderizarPropiedades(propiedadesAlquiler, contenedorAlquiler);
  }
});

function renderizarPropiedades(propiedades, contenedor) {
  propiedades.forEach((propiedad) => {
    const card = document.createElement("div");
    card.classList.add("col-md-4", "mb-4");
    card.innerHTML = `
          <div class="card">
              <img src="${
                propiedad.src
              }" class="card-img-top" alt="Imagen del departamento" />
              <div class="card-body">
                  <h5 class="card-title">${propiedad.nombre}</h5>
                  <p class="card-text">${propiedad.descripcion}</p>
                  <p><i class="fas fa-map-marker-alt"></i> ${
                    propiedad.ubicacion
                  }</p>
                  <p><i class="fas fa-bed"></i> ${
                    propiedad.habitaciones
                  } Habitaciones | <i class="fas fa-bath"></i> ${
      propiedad.banos || ""
    } Baños</p>
                  <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                  ${
                    propiedad.smoke
                      ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>'
                      : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'
                  }
                  ${
                    propiedad.pets
                      ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>'
                      : '<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>'
                  }
              </div>
          </div>
      `;
    contenedor.appendChild(card);
  });
}
