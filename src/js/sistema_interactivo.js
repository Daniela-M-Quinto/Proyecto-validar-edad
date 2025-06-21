function enviarFormulario() { 

    // Values ​​of the 'age' and 'name' fields of the form.
    const edad = document.getElementById('edad').value;
    const nombre = document.getElementById('nombre').value;


    let messaje;

    // Verify the age entered
    if (isNaN(edad)) {
        // 'age' is not a number, error message.
        messaje = "Error: Por favor, ingresa una edad válida en números y un nombre es texto.";
    }

    // Check if the age is 18 or older.
    else if (edad >= 18) {
        // If the age is 18 or older, send a message for adults.
        messaje = "hi" + nombre + ", eres mayor de edad. ¡Preparate para grandes opórtunidades en el mundo de la programacion!";
    } 
    // If the age is younger than 18.
    else {
        // If the age is less than 18, send a message for minors.
        messaje = "hi " + nombre + ",eres menor de edad. ¡No te preocupes, la programacion es para todos! Sigue aprendiendo y creciendo.";
    }

    // Display the resulting message in the element with id 'resultado'.
    document.getElementById("resultado").innerHTML = messaje;
}