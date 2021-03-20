
import { api, LightningElement, wire } from 'lwc';
import { getObjectInfo, getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi'
import VACCINE_OBJECT from '@salesforce/schema/Vaccines__c';
import { publish, MessageContext } from 'lightning/messageService';
import VACCINE_FILTER_MESSAGE from '@salesforce/messageChannel/VaccinefilterMessageChannel__c';

export default class VaccineSearch extends LightningElement {
    @api Vaccinetype;
    @api ZipCode;
    Vaccinetypeoptions;
    @wire(MessageContext)
    messageContext;

    @wire(getObjectInfo, { objectApiName: VACCINE_OBJECT })
    objectInfo;

    @wire(getPicklistValuesByRecordType, {
        recordTypeId: '$objectInfo.data.defaultRecordTypeId',
        objectApiName: VACCINE_OBJECT
    })
    wiredRecordtypeValues({ data, error }) {
        if (data) {

            this.Vaccinetypeoptions = data.picklistFieldValues.vaccine_type__c.values;
            this.HospitalTypeoptions  = data.picklistFieldValues.HospitalType__c.values;
        }
        if (error) {
            console.log(error);
        }
    }
    handleVaccinetypeChange(event){
        this.Vaccinetype = event.target.value;
    }
    handleHospitalTypeChange(event){
        this.HospitalType = event.target.value;
    }
    
    handleZipcode(event){
        this.ZipCode = event.target.value;
    }
    showVaccines(){
        const message = {

            Vaccinetype : this.Vaccinetype,
            HospitalType : this. HospitalType,
            ZipCode : this.ZipCode,
            
        };
        
        publish(this.messageContext, VACCINE_FILTER_MESSAGE, message);
        console.log("Message is being published succesfully");
    }

}