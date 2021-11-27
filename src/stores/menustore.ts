import { writable } from 'svelte/store';

const CardInfo = writable (
    [
        {   
            id:0,
            name:'Burger'
        }
    ]
)

export default CardInfo