import { LightningElement } from 'lwc';
import getImgs from '@salesforce/apex/attachementHelper.getRecordAttachments';
import getConIdsByName from '@salesforce/apex/ContactHelper.getContactIdsByName';

export default class ImageTest extends LightningElement {
  
    imgUrlList;
    idList = [];
    
    search() {
        this.imgUrlList = null;
        this.idList = [];
        let query = this.template.querySelector('.input').value;
        getConIdsByName({q : query})
        .then(res => {
            
            for(let i of res) {
                this.idList.push(i.Id);
            }
            
            getImgs({recordIds : this.idList})
            .then(response => {
                console.log(response);
                this.imgUrlList = response;
            })
            .catch(e => {
                console.log(e);
            })
        })
        .catch(e => {
            console.log(e);
        });
    }
}