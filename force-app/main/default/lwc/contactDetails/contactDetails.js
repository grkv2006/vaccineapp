import { LightningElement } from 'lwc';

export default class ContactDetails extends LightningElement {

    
    name="";
    phone="";
    email="";

    handSubmit(event){
        
        this.name = event.detail.param;
        this.phone = event.detail.param1;
        this.email = event.detail.param2;
    }
}