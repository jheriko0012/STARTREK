// Obtener referencias a los elementos del DOM
const commentForm = document.getElementById('commentForm');
const commentSection = document.getElementById('commentSection');

// Función para agregar un nuevo comentario
commentForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir que el formulario se envíe

    // Obtener el texto del comentario
    const commentText = document.getElementById('commentText').value;

    // Crear un nuevo elemento de comentario
    const newComment = document.createElement('div');
    newComment.classList.add('comment');

    // Añadir el contenido al comentario
    newComment.innerHTML = `<div class="text">${commentText}</div>`;

    // Añadir el nuevo comentario a la sección de comentarios
    commentSection.appendChild(newComment);

    // Limpiar el formulario
    commentForm.reset();
});