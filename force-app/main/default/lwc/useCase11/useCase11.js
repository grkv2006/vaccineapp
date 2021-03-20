import { LightningElement, track, wire } from 'lwc';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { createRecord } from 'lightning/uiRecordApi';
import CASE_OBJECT from '@salesforce/schema/Case';
import ORIGIN_FIELD from '@salesforce/schema/Case.Origin';

export default class UseCase11 extends LightningElement {

    @track value;
    subject;
    description;
    @track caseId;

    @wire(getObjectInfo, { objectApiName: CASE_OBJECT })
    objectInfo;

    @wire(getPicklistValues, { recordTypeId: '$objectInfo.data.defaultRecordTypeId', fieldApiName: ORIGIN_FIELD})
    OriginValues;

    OriginhandleChange(event) {
        this.value = event.detail.value;
    }
    subjectChangedHandler(event){
        this.subject = event.target.value;
    }
   
    descriptionChangedHandler(event){
        this.description = event.target.value;
    }
    createCase(){

        // Creating mapping of fields of Case with values
        var fields = {'Subject' : this.subject, 'Description' : this.description, 'Origin' : this.value};

        // Record details to pass to create method with api name of Object.
        var objRecordInput = {'apiName' : 'Case', fields};

        // LDS method to create record.
        createRecord(objRecordInput).then(response => {
            alert('case created with Id: ' +response.id);
            this.caseId = response.id ;

        }).catch(error => {
            alert('Error: ' +JSON.stringify(error));
        });
    }
}