import { LightningElement } from 'lwc';


export default class Usecase12 extends LightningElement {
    contactname= '';
    handleContactChange(event){

        this.contactname = event.detail.value;

       
    }
}