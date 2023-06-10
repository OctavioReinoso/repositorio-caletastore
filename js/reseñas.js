const reseñasApi = 'https://jsonplaceholder.typicode.com/comments?postId=1';
const divReseña = document.querySelector('#box-reseña');

fetch(reseñasApi)
    .then(response => response.json())
    .then(data => {
        mostrarComentarios(data);
    })
    .catch(error => console.log(error));

function mostrarComentarios(comentarios){
    comentarios.forEach(reseña => {
        const comentarioBox = document.createElement('div');
        comentarioBox.classList.add('comentario-box');
        const correoUsuario = document.createElement('a');
        correoUsuario.href = "mail:" + reseña.email;
        correoUsuario.innerText = reseña.email;
        correoUsuario.classList.add('correo-usuario');
        comentarioBox.appendChild(correoUsuario);
    
        const reseñaUsuario = document.createElement('p');
        reseñaUsuario.innerText = reseña.body;
        reseñaUsuario.classList.add('reseña-usuario');
        comentarioBox.appendChild(reseñaUsuario);
        divReseña.appendChild(comentarioBox);
    });

}