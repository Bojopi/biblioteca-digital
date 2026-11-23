
const formulario = document.getElementById("formularioBusqueda");
const parametros = new URLSearchParams(window.location.search);

const libros = [
    {
        id: 1,
        titulo: "Harry Potter y la piedra filosofal",
        autor: "J. K. Rowling",
        categoria: "Fantasía",
        descripcion: "Harry descubre que es un mago y comienza sus estudios en Hogwarts.",
        imagen: "assets/images/harry_potter.png",
        disponible: true
    },
    {
        id: 2,
        titulo: "El principito",
        autor: "Antoine de Saint-Exupéry",
        categoria: "Literatura",
        descripcion: "Un pequeño príncipe viaja por diferentes planetas y conoce diversas personas.",
        imagen: "assets/images/harry_potter.png",
        disponible: true
    },
    {
        id: 3,
        titulo: "Don Quijote de la Mancha",
        autor: "Miguel de Cervantes",
        categoria: "Clásico",
        descripcion: "Las aventuras de un hombre que decide convertirse en caballero andante.",
        imagen: "assets/images/harry_potter.png",
        disponible: true
    },
    {
        id: 4,
        titulo: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        categoria: "Novela",
        descripcion: "La historia de la familia Buendía en el pueblo de Macondo.",
        imagen: "assets/images/harry_potter.png",
        disponible: true
    },
    {
        id: 5,
        titulo: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        categoria: "Novela",
        descripcion: "La historia de la familia Buendía en el pueblo de Macondo.",
        imagen: "assets/images/harry_potter.png",
        disponible: true
    }
];

const idLibro = Number(parametros.get("id"));
const libroSeleccionado = libros.find(libro => libro.id == idLibro);


function prueba(event) {
    event.preventDefault();
    console.log('prueba');
    alert("Se hizo clic en el boton de buscar");
}

function mostrarLibros(libros) {
    const contenedor = document.getElementById("contenedorLibros");
    if (!contenedor) {
        return;
    }

    contenedor.innerHTML = "";
    libros.forEach(element => {
        const tarjeta = document.createElement("div");
        tarjeta.className = "col-12 col-md-3";
        tarjeta.innerHTML = `
            <article class="card libro-card h-100">
                <img 
                src="${element.imagen}" 
                alt="Harry Potter"
                class="card-img-top">
                <div class="card-body">
                    <h3
                    class="card-title h6"
                    >${element.titulo}</h3>
                    <p
                    class="autor-libro"
                    >${element.autor}</p>
                    <p class="card-text small"
                    >${element.descripcion}</p>
                    <a 
                    href="detalle.html?id=${element.id}"
                    class="btn btn-biblioteca w-100">Ver detalle</a>
                </div>
            </article>
        `
        tarjeta.querySelector("img").alt = "Harry Potter";
        contenedor.appendChild(tarjeta);
    });
}

if(formulario) {
    formulario.addEventListener("submit", function(event) {
        event.preventDefault();
        const busqueda = document.getElementById("buscarLibro")
        .value
        .trim()
        .toLowerCase();

        const resultado = libros.filter(libro => {
            return (
                libro.titulo.toLowerCase().includes(busqueda)
                || libro.autor.toLowerCase().includes(busqueda)
            )
        });
        mostrarLibros(resultado);
    })
}

mostrarLibros(libros);

//CAMBIAR LOS DATOS DE LA PAGINA
const tituloLibro = document.getElementById("titulo-libro");
const autorLibro = document.getElementById("autor-libro");
const descLibro = document.getElementById("desc-libro");

if(tituloLibro) {
    tituloLibro.textContent = libroSeleccionado.titulo;
}

if(autorLibro) {
    autorLibro.textContent = libroSeleccionado.autor;
}

if(descLibro) {
    descLibro.textContent = libroSeleccionado.descripcion;
}