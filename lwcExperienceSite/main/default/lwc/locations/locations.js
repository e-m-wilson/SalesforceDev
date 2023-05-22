import { LightningElement, wire } from 'lwc';
import getAllLocationNamesWithVacantResidences from '@salesforce/apex/PropertyManagementHelper.getAllLocationNamesWithVacantResidences';

export default class Locations extends LightningElement {

    homePage;
    
    @wire(getAllLocationNamesWithVacantResidences)
    props;

}