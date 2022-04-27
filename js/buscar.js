const buscar = document.getElementById('search');

 buscar.addEventListener('focus',function(){
    document.getElementsByName('buscar')[0].placeholder='¿Que desea buscar?';


})
 buscar.addEventListener('blur',function(){
    document.getElementsByName('buscar')[0].placeholder='Click me. . .';

})

//otra opcion para obtener el placeholder

// let input = getElementById( 'inputID' );

// // Obtener el valor del placeholder
// let placeholder = input.placeholder;

// // Establecer un nuevo valor
// input.placeholder = "Aquí el nuevo valor para el placeholder";
