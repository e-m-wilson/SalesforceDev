import { LightningElement } from 'lwc';
import createCaseSubjectOrigin from '@salesforce/apex/CaseHelper.createCaseSubjectOrigin';

export default class CaseForm extends LightningElement {

    origin = '--None--';

    responseMessage = '';

    get originOptions(){
        return [
            {label: '--None--', value: '--None--'},
            {label: 'Phone', value: 'Phone'},
            {label: 'Email', value: 'Email'},
            {label: 'Web', value: 'Web'},
        ];
    }


    createCase(){

        createCaseSubjectOrigin({subject: this.refs.subject.value, origin: this.origin})
        .then((res) => {
            this.responseMessage = 'Created new Case';
            this.dispatchEvent(new CustomEvent('createevent'));
        })
        .catch((e) => {
            console.log(e);
            this.responseMessage = e.body.message;
        })
    }

    handleOriginChange(event) {
        this.origin = event.detail.value;
    }
}