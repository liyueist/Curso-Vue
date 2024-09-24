import heroes, { owners } from "../data/heroes";

console.log(owners, heroes);

//con esto podemos separar la logica en diferentes archivos y exportarlos


export const getHeroById = (id : number) => {
    return heroes.find(hero => hero.id === id);
    
}

 const getHeroByOwner = (owner : String ) => {
    return heroes.filter (hero => hero.owner.toLocaleLowerCase === owner.toLocaleLowerCase);

    //devuelve todos los heroes que cumplen con el requisito
 }

 console.log(getHeroByOwner("dc"));

