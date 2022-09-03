/* Swal.fire({
    title: "¿Sos mayor a 18 años?",
    icon: "question",
    showConfirmButton: true,
    confirmButtonText:"Si",
    confirmButtonColor: "#0AC804",
    showCancelButton: true,
    cancelButtonText: "No",
    footer: " ¡Tienes que ser mayor de edad para poder acceder! ",
    
  
  });
 */
/*  const Toast = Swal.fire({
    position: "top-end",
    toast: true,
    timer: 3000,
    timerProgressBar: true,
  }) */

  /* function enviarMail(){
    if(Nombre === " "){
        const Toast = Swal.fire({
            title:"¡Su consulta fue enviada correctamente!",
            icon:"error"
        })
    }
    else{
    const Toast = Swal.fire({
        title:"¡Su consulta fue enviada correctamente!",
        showConfirmButton: false,
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        icon: "success",
        didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
      }, 
      });

    }

  } */
const formulario = document.getElementById("formulario")
const inputs = document.querySelectorAll("#formulario input")

  const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}
const validarFormulario =(e) =>{
switch(e.target.name){
    case "nombre":
        if(expresiones.nombre.test(e.target.value)){
            document.getElementById("grupo__nombre").classList.remove("formulario__grupo-incorrecto")
            document.getElementById("grupo__nombre").classList.add("formulario__grupo-correcto")

        }
        else{
    document.getElementById("grupo__nombre").classList.add("formulario__grupo-incorrecto")

         }
break;

    case "Correo":
break;

    case "Telefono":
break;
    
}

}

inputs.forEach((input)=>{
input.addEventListener("keyup",validarFormulario )
input.addEventListener("blur",validarFormulario )
});


formulario.addEventListener("submit",(e) =>{
e.preventDefault();

})

//min 27 del video