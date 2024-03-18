function openNav() {
    document.getElementById("mobile-menu").style.width = "100%";
}

function closeNav() {
    document.getElementById("mobile-menu").style.width = "0%";
}

const changingWordElement = document.getElementById("changing-word");
const words = ["Copywriter...", "Redactora creativa...", "Profesional de marketing...", "Especialista en optimización de contenidos..."];

let index = 0;

function changeWord() {
    changingWordElement.textContent = words[index];
    index = (index + 1) % words.length;
    setTimeout(changeWord, 5000); // Llama a la función nuevamente después de 10 segundos
}

// Llama a la función por primera vez después de un segundo
setTimeout(changeWord, 1000);

// Sección de notas // PENDIENTE VER CUÁL ES EL ERROR ACÁ, NO SE FILTRAN TODAS LAS ETIQUETAS
function filtrarPorEtiqueta(etiqueta) {
    // Ocultar todas las notas
    var notas = document.querySelectorAll('.note-wrapper');
    notas.forEach(function (nota) {
        nota.style.display = 'none';
    });

    // Mostrar solo las notas con la etiqueta seleccionada
    var notasConEtiqueta = document.querySelectorAll('.note-wrapper.' + etiqueta);
    notasConEtiqueta.forEach(function (nota) {
        nota.style.display = 'block';
    });

    // Actualizar la descripción de la sección
    document.getElementById('descripcion-seccion').textContent = 'Notas filtradas por ' + etiqueta;
}
