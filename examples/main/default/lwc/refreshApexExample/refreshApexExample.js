import { LightningElement, wire } from 'lwc';
import getNonHighPriorityCases from '@salesforce/apex/CaseHelper.getNonHighPriorityCases';
import markAsHighPriority from '@salesforce/apex/CaseHelper.markAsHighPriority';
import { refreshApex } from '@salesforce/apex';

export default class RefreshApexExample extends LightningElement {

    @wire(getNonHighPriorityCases)
    results;

    selectedIds;

    columns = [
        { label: 'Case Number', fieldName: 'CaseNumber', type: 'name' },
        { label: 'Status', fieldName: 'Status', type: 'picklist' },
        { label: 'Reason', fieldName: 'Reason', type: 'picklist' },
        { label: 'Description', fieldName: 'Description', type: 'long text area' }
    ];

    getSelectedIds(event) {
        const selectedRows = event.detail.selectedRows;
        let selectedIds = [];

        for (let i = 0; i < selectedRows.length; i++) {
            selectedIds.push(selectedRows[i].Id);
        }

        this.selectedIds = selectedIds;
    }

    async changePriority(){ 
        await markAsHighPriority({idList : this.selectedIds});
        refreshApex(this.results);
    }
}