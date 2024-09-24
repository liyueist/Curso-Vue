function greetPerson(name : string){
    return "hola, ${name}" ;
}


const greetPersonArrow = (name : string) => {
    return "hola, ${name}" ;
}

const getUser =() =>{
    return{
        uid: "abc123",
        username: "taylor001"
    }

}

const singers= [
    {
        id: 1,
        name: "Sabrina",
        hit: "Expresso",
    },

    {
        id: 2,
        name: "Taylor",
    },


]


const singer = singers.find((h) => h.id === 1);


console.log(singer?.hit); //el ? asegura que no de error si no existe lo que se busca

