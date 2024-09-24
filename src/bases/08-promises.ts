import { getHeroById } from "./07-imp-exp";

new Promise (() => {





})

//  una promesa es un objeto que representa el eventual resultado (éxito o fallo) de una operación asíncrona, como pedir datos de un servidor.

// Las promesas son muy útiles cuando trabajamos con operaciones que toman tiempo, como leer archivos, consultar APIs, etc., y permiten escribir código que no se detiene mientras espera el resultado.


function pedirDatos() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulamos que conseguimos los datos con éxito
        resolve("Datos recibidos del servidor");
      }, 2000);
    });
  }
  
  pedirDatos()
    .then((datos) => {
      console.log(datos); // "Datos recibidos del servidor" después de 2 segundos
    })
    .catch((error) => {
      console.error(error); // Si algo sale mal, se imprime el error
    });
  


     const data= [{
        title: "seven",
        album: "folklore"
     } , {
        title: "paper rings",
        album: "lover"
     } , {
        title: "dress",
        album: "reputation"
     }]

    function getData (){
        return new Promise ((resolve, reject) => {
            if (data.length === 0){
                reject(new Error ("Data is empty"))
            }

            setTimeout(() => {
                resolve (data);
            } , 2000)

        })
    }

    getData()
    .then((response) => console.log(response))
    .catch((err) => console.log(err.message))


    //EJEMPLO

    const getHeroByIdAsync = (id : number):Promise <Hero> =>{
        return new Promise ( (resolve, reject) => {

            setTimeout(() => {
               const hero = getHeroById( id );

               if(hero){
                resolve(hero)
               } else{
                reject ("No encontrado")
               }
            }, 1500);


        })



    }