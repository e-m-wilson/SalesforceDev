import { LightningElement } from 'lwc';
import getImgs from '@salesforce/apex/AttachmentHelper.getRecordAttachments';

export default class DisplayRecordAttachmentsDemo extends LightningElement {
  
    imgUrlList;
    idList = [];
    
    search() {
        this.imgUrlList = null;
        this.idList = [];
        let query = this.template.querySelector('.input').value;
        
        getImgs({recordId : query})
        .then(response => {
            console.log(response);
            this.imgUrlList = response;
        })
        .catch(e => {
            console.log(e);
        })
        
    }
}