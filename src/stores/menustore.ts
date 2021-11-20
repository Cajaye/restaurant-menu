import { readable } from 'svelte/store';

const CardInfo = readable(
    [
        {   
            id:0,
            name:'Burger'
        }
    ]
)

export default CardInfo