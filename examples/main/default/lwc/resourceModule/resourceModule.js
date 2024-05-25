import { myString } from './anotherResourceModule.js';

export function fireMessage() {
    console.log('This should fire from Aura');
    console.log(myString);
}