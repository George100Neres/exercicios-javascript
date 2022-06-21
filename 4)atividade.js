const btn = document.querySelector("#send"); // Enviar

btn.addEventListener("click", function(e) {

    e.preventDefault();

    const name = document.querySelector("#name"); // pega o nome

    const value = name.value;

    console.log(value);

    
});