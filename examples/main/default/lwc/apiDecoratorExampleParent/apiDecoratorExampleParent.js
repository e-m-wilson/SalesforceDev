import { LightningElement } from 'lwc';

export default class ApiDecoratorExampleParent extends LightningElement {
    message;
    input;
    
    handleBtnClick() {
        this.message = this.template.querySelector('c-api-decorator-example-child').childMethod();
    }

    handleChange(e) {
        this.input = e.target.value;
    }
}