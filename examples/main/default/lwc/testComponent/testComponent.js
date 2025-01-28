import { LightningElement } from 'lwc';

export default class TestComponent extends LightningElement {

    input = 'hello world!';
    myBool = true;

    handleChange() {
        //let input = this.template.querySelector('.input').value;
        // OR
        this.input = this.refs.input.value;
        
      
    
        
    }

}