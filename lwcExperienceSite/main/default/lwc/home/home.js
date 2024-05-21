import { LightningElement, track, wire } from 'lwc';
import getAllVacantResidences from '@salesforce/apex/PropertyManagementHelper.getAllResidencesWithVacancies';
import { NavigationMixin } from 'lightning/navigation';
import isGuest from '@salesforce/user/isGuest';

export default class Home extends NavigationMixin(LightningElement) {

    @wire(getAllVacantResidences)
    residences;


    navToResidencePage(e) {

        // the name Residence_Viewer__c needs to correspond with
        // the api name of the page made in experience builder
        this[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
                name: 'Residence_Viewer__c',
            },
            state: {
                c__recordId: e.target.dataset.id
            }
        });
    }
}