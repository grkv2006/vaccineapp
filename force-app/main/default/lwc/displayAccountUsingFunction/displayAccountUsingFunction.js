import { LightningElement, wire } from 'lwc';
import getAccountRecords from '@salesforce/apex/accountController.getAccountRecords';
import getAccountRec from '@salesforce/apex/accountController.getAccountRec';

export default class DisplayAccountUsingFunction extends LightningElement {
    result = '';
    error;

    @wire(getAccountRecords)
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
        getAccountRec()
            .then((result) => {
                this.result = result;
                this.error = undefined;
            }).catch((error) => {
                this.error = error;
                this.result = undefined;
            });
    }
}