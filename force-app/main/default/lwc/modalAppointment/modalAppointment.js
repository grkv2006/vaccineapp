import { LightningElement, api } from 'lwc';
import BOOKING_OBJECT from '@salesforce/schema/vaccine_booking__c';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ModalCarRental extends LightningElement {
    objectApiName = BOOKING_OBJECT;
    
    @api vaccineobject;
   

    @api status;

    @api show(){
        this.status= true;
    }

    closeModal(){
        this.status = false;
    }

    onSubmitHandler(event){
        event.preventDefault();

        const fields = event.detail.fields;
        fields.Vaccine_name__c = this.vaccineobject.Id;
       

        this.template.querySelector('lightning-record-edit-form').submit(fields);
         
        this.status = false;
    }

    handleSuccess(event){
        const evt = new ShowToastEvent({
            title: 'Hurray! Your Booking Id is: ' + event.detail.id,
            message: 'appointment booked',
            variant : 'success',
            mode: 'sticky'
        });
        this.dispatchEvent(evt);
    }
}