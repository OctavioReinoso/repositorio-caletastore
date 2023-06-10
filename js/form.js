const formContacto = document.querySelector('#form-contacto');
const boxForm = document.querySelector('#box-form');
const boxInputs = document.querySelectorAll('#box-inputs');
const btnEnviar = document.querySelector('#btn-enviar');

const inputNomApe = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const inputTelefono = document.querySelector('#telefono');

btnEnviar.addEventListener('click', botonEnviar);

function botonEnviar(e){
    e.preventDefault();

    if(inputNomApe.value === '' || inputEmail.value === '' || inputTelefono.value === ''){
        
        btnEnviar.onclick = () => {
            Swal.fire(
                {
                    icon: 'error',
                    title: 'Datos incorrectos',
                    text: 'Asegurese de llenar todos los campos',
                });
        }

    }else if (!validarEmail(inputEmail.value)) {
        Swal.fire({
            icon: 'error',
            title: 'Correo electrónico inválido',
            text: 'Ingrese un correo electrónico válido',
        });
    }else{
        btnEnviar.onclick = () => {
            Swal.fire(
                {
                    title: 'Enviado',
                    text: 'En estos días nos estaremos comunicando con usted. Gracias',
                    icon: 'success'
                });
        }
    }
}

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

