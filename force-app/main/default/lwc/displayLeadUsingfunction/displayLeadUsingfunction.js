import { LightningElement, wire } from 'lwc';
import getLeadRecords from '@salesforce/apex/leadController.getLeadRecords';
import getLeadRec from '@salesforce/apex/leadController.getLeadRec';

export default class DisplayAccountUsingFunction extends LightningElement {
    result = '';
    error;

    @wire(getLeadRecords)
    wiredData({ error,data }){
        if(data){
            this.result = data;
            this.error= undefined;
        } else if(error){
            this.error = error;
            this.result = undefined;
        }
    }

    handleClick(){
        alert('Calling Imperatively');
        getLeadRec()
            .then((result) => {
                this.result = result;
                this.error = undefined;
            }).catch((error) => {
                this.error = error;
                this.result = undefined;
            });
    }
}