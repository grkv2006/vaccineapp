import { api, LightningElement, wire } from 'lwc';
import { subscribe, MessageContext } from 'lightning/messageService';
import  VACCINE_FILTER_MESSAGE from '@salesforce/messageChannel/VaccinefilterMessageChannel__c';
import filteredVaccineList from '@salesforce/apex/VaccineController.filteredVaccineList';

export default class VaccineSearchList extends LightningElement {
    
    VaccineType='';
    ZipCode ='';
    
    isOpen = false;

    @api
    searchData;
    error;

    @api
    vaccineobject;

    @wire(MessageContext)
    messageContext;

    connectedCallback(){
        console.log('Inside connectedCallback');
        this.subscribeMessageChannel();
    }

    subscribeMessageChannel(){
     
        subscribe(this.messageContext, VACCINE_FILTER_MESSAGE, (result) => this.handleResult(result));
        console.log('Message Subscribed');
       
    }

    handleResult(result){
      
        if(result.Vaccinetype != undefined){
            this.Vaccinetype = result.Vaccinetype;
          
        }
        if(result.ZipCode != undefined){
            this.ZipCode = result.ZipCode;
           
        }
        if(result.HospitalType  != undefined){
            this.HospitalType  = result.HospitalType;
           
        }
        
       
        console.log('Value stored');
    }

    @wire(filteredVaccineList, {

        VaccineType : '$Vaccinetype',
        ZipCode : '$ZipCode',
        HospitalType : '$HospitalType'
    }) 
    wireddata({error, data}){
        if(data){
            this.searchData = data;
            this.error = undefined;
        } else if (error){
            this.searchData = undefined;
            this.error = error;
            console.log('Error is found' , error);
        }
    }

    
    handleBookingEvent(event){
        this.vaccineobject = event.detail;
        this.isOpen = true;

      const modal = this.template.querySelector('c-modal-appointment');
        modal.show();
    }
}