//interface dice como lucen los objetos aka no hace nada en especial pero dice como es la firma


interface Hero{
    name: string;
    age: number;
    codeName: string;
    power?: string;
}




export const person : Hero = {
    name: "Tony",
    age: 45,
    codeName: "IronMan",

}

const createHero = ( {name, age, codeName, power}: any) =>({

    id : 1,
    name : name,
    age : age,
    codeName: codeName,
    power: power ?? "No tiene",

})


const characters = ["Harry", "Draco", "Blaise", "Theo"];

//la desestructuracion de arrays consiste en extraer un valor del array y definir una variable con ese valor


const [ h , d, b] = characters;

// h = posicion 1 , d= posicion 2 del array 

const [,, blaise] = characters; //las , representan posiciones

const returnArray = () => {
    return [123, "abc"];
}






