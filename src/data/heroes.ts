interface Hero{
    id: number;
    name: string;
    owner : Owner;
     // owner: "DC" | "Marvel"; // sirve cuando no se van a tocar las variables
}


type Owner = "DC" | "Marvel";

const heroes: Hero [] = [
    {
        id: 1,
        name: 'Batman',
        owner : "DC",
       // owner: 'dsad' //tira error porque no es dc o marvel

    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];


export const owners = ['DC','Marvel'];

export default heroes;