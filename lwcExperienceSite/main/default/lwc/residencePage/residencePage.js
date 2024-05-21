import { LightningElement, track, wire } from 'lwc';
import { CurrentPageReference, NavigationMixin } from 'lightning/navigation';
import  residenceReference from '@salesforce/schema/Residence__c';
import  numberOfBaths  from '@salesforce/schema/Residence__c.number_of_baths__c';
import  numberOfBedrooms  from '@salesforce/schema/Residence__c.number_of_beds__c';
import  hasGarage  from '@salesforce/schema/Residence__c.Has_Garage__c';

export default class ResidencePage extends NavigationMixin(LightningElement) {

    @track
    currentPageReference;

    

    @wire(CurrentPageReference)
    setCurrentPageReference(currentPageReference) {
        this.currentPageReference = currentPageReference;
    }

    
    recordId; 

    connectedCallback() {
        this.recordId = this.currentPageReference?.state?.c__recordId;
    }

    objectApiName = residenceReference;

    numberOfBaths = numberOfBaths;

    numberOfBedrooms = numberOfBedrooms;

    hasGarage = hasGarage;
}