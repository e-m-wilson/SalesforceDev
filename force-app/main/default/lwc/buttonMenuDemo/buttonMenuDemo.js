import { LightningElement } from 'lwc';

export default class ButtonMenuDemo extends LightningElement {

    iconChange(e) {
        if(e.target.iconName !== 'utility:close') {
            e.target.iconName = 'utility:close';
        } else if(e.target.iconName === 'utility:close') {
            e.target.iconName = 'utility:rows'
        }
        
    }
}