import { LightningElement, wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactHelper.getContacts';

export default class DatatableExample extends LightningElement {

    data;
    
    @wire(getContacts)
    getConsWire(result) {
        if(result.data) {
      

            this.data = result.data.map((elem) => ({
                ...elem,
                ...{
                    'FirstName': elem.FirstName,
                    'LastName': elem.LastName,
                    'Phone': elem.Phone,
                    'Email': elem.Email,
                    'Account': elem?.Account?.Name
                }
            }));
    
        }
    }

    columns = [
        { label: 'First Name', fieldName: 'FirstName' },
        { label: 'Last Name', fieldName: 'LastName' },
        { label: 'Phone', fieldName: 'Phone'},
        { label: 'Email', fieldName: 'Email'},
        { label: 'Account', fieldName: 'Account'}
    ];
}