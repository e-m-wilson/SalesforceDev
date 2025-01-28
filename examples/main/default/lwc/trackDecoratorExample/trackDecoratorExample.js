import { LightningElement, track } from 'lwc';

export default class TrackDecoratorExample extends LightningElement {
    fruits = ['Apple', 'Banana', 'Cherry'];
    vegetables = ['Lettuce', 'Asparagus', 'Cabbage'];

    @track
    myVariable = {message: 'hello world'};

    handleButtonClick() {
        // This will trigger a re-render, because we're modifying an @track property
        this.fruits.push('Date');
        this.vegetables.push('Broccoli');
        this.myVariable.message = 'hello mars';
    }

    
}