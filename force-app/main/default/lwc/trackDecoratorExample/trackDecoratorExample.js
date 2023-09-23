import { LightningElement, track } from 'lwc';

export default class TrackDecoratorExample extends LightningElement {
    @track fruits = ['Apple', 'Banana', 'Cherry'];
    vegetables = ['Lettuce', 'Asparagus', 'Cabbage'];

    handleButtonClick() {
        // This will trigger a re-render, because we're modifying an @track property
        this.fruits.push('Date');
        this.vegetables.push('Broccoli');
    }
}