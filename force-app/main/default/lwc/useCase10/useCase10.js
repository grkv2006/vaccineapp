import { LightningElement,api,wire } from 'lwc';
import LEAD_OBJECT from '@salesforce/schema/Lead';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import SOURCE_FIELD from '@salesforce/schema/Lead.LeadSource';
import matchingLeadName from '@salesforce/apex/leadNameSearch.matchingLeadName';

export default class UseCase10 extends LightningElement {

    result;
    error;
    strAccountName= '';
    columns = [
        {
            label : "Name",
            fieldName : "Name"
        },
        {
            label : " LeadSource",
            fieldName : " LeadSource"
        }
    ];

    @wire(getObjectInfo, { objectApiName: LEAD_OBJECT })
    objectInfo;

    @wire(getPicklistValues, { recordTypeId: '$objectInfo.data.defaultRecordTypeId', fieldApiName:SOURCE_FIELD})
    LeadSourceValue;

    handleLeadName(event){
        this.strLeadName = event.detail.value;
    }
    handleReset(){
        this.result = false;
    }
    SourcehandleChange(event) {
        this.value = event.detail.value;
    }

    handleSearch(){
        matchingLeadName({LeadName : this.strLeadName,
            LeadSource: this.value })
            .then((result) => {
                alert(result);
                this.result = result;
            }).catch((error) => {
                alert(error);
                this.error = error;
            })
    }
}