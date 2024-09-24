// una API es una aplicacion web de terceros que se usan para acceder a la info

// VIDEO COMPLETO: https://www.youtube.com/watch?v=95BFumHfwAA


const urlUsuarios = "https://jsonplaceholder.typicode.com/users";
const listaUsuarios = document.querySelector("#lista-usuarios");

fetch(urlUsuarios)
      .then(response => response.json())
      .then(json => console.log(json))

// Se usan 2 "then" aka promesas pq te devuelve un archivo json, que se tiene que pasar a un objeto o array

fetch(urlUsuarios)
      .then(response => response.json())
      .then(json => {
        json.forEach(element => {
            const li = document.createElement("li");
            li.textContent = element.name + " - telefono " + element.phone;
            listaUsuarios.append(li);

            // para cada elemento, crea un li con el nombre
        });
      })

