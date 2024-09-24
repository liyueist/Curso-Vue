
export const person = {
    lastName: 'Swift',
    age: 33,
    adress: {
        city: 'New York',
        zip: 1408,
        street: 'Cornelia St.',
    }
} // as const; (se crea un objeto de solo lectura aka no se puede modificar) 

const person2 = person; // si queres hacer un cambio a p2, va a cambiar a p1 tambien

const person3 = structuredClone(person); //crea un clon exacto




