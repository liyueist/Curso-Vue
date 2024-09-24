const { createApp, ref} = Vue;

// create app para crear la app y ref para que sea una variable reactiva???




const app = createApp({

    /* CREAR LA APP DESDE EL JAVASCRIPT y no html
    
    template: `
    <h1> Hola mundo, {{ message }} </h1>
    <p> - {{ messageDos }}</p>
    `
    ,

    */

    
    setup(){
        
        const message = ref("soy abundancia");
        // el ref hace que la variable sea reactiva

        const messageDos = ref("manifesting queen");

        //funcion para cambiar el mensaje
        const changeQuote = () => {
            message.value = ref ("AUUUUUUUUUUUUUUUUUUUUU");
            messageDos.value = ref("Hi Siss");
        }


        setTimeout(() => {
            message.value = "soy dinero";
            messageDos.value = "programming queen";
        } , 1000); // cambias el valor después del tiempo puesto

        return {
            message, messageDos, changeQuote
        }


        



    }
// una vez creada la app, se tiene que poner en el html

})

app.mount("#myApp");

