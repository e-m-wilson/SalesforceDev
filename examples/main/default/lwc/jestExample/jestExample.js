import { LightningElement } from 'lwc';

export default class JestExample extends LightningElement {

    message = 'Hello World!';

    handleClick() {
        this.message = 'The message changed!';
    }
}