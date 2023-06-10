const formContacto = document.querySelector('#form-contacto');
const boxForm = document.querySelector('#box-form');
const boxInputs = document.querySelectorAll('#box-inputs');
const btnEnviar = document.querySelector('#btn-enviar');

const inputNomApe = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const inputTelefono = document.querySelector('#telefono');

btnEnviar.addEventListener('click', botonEnviar);

<<<<<<< HEAD
=======


>>>>>>> b59518beb2c74140bd1d3bc30b1ca235541bc515
function botonEnviar(e){
    e.preventDefault();

    if(inputNomApe.value === '' || inputEmail.value === '' || inputTelefono.value === ''){
        
        btnEnviar.onclick = () => {
            Swal.fire(
                {
                    icon: 'error',
<<<<<<< HEAD
                    title: 'Datos incorrectos',
=======
                    tittle: 'Datos incorrectos',
>>>>>>> b59518beb2c74140bd1d3bc30b1ca235541bc515
                    text: 'Asegurese de llenar todos los campos',
                });
        }

<<<<<<< HEAD
    }else if (!validarEmail(inputEmail.value)) {
        Swal.fire({
            icon: 'error',
            title: 'Correo electrónico inválido',
            text: 'Ingrese un correo electrónico válido',
        });
=======
>>>>>>> b59518beb2c74140bd1d3bc30b1ca235541bc515
    }else{
        btnEnviar.onclick = () => {
            Swal.fire(
                {
<<<<<<< HEAD
                    title: 'Enviado',
=======
                    tittle: 'Enviado',
>>>>>>> b59518beb2c74140bd1d3bc30b1ca235541bc515
                    text: 'En estos días nos estaremos comunicando con usted. Gracias',
                    icon: 'success'
                });
        }
    }
}

<<<<<<< HEAD
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

=======
>>>>>>> b59518beb2c74140bd1d3bc30b1ca235541bc515
