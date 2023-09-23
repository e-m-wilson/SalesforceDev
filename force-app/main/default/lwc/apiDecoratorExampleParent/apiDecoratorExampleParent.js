import { LightningElement } from 'lwc';

export default class ApiDecoratorExampleParent extends LightningElement {
    message;
    
    handleBtnClick() {
        this.message = this.template.querySelector('c-api-decorator-example-child').childMethod();
    }
}