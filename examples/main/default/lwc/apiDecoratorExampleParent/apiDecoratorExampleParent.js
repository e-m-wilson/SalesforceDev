import { LightningElement } from 'lwc';

export default class ApiDecoratorExampleParent extends LightningElement {
    message;
    input;
    handleChange(e) {
        this.input = e.target.value;
    }
    handleBtnClick() {
        this.message = this.template.querySelector('c-api-decorator-example-child').childMethod();
    }

    
}