import { LightningElement,api} from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class LwcData extends LightningElement {
    @api recordId; 
    connectedCallback(){
        alert('lwcdata component');
        
        }
        showToast(){
            const event = new ShowToastEvent({
                title: 'record details',
                message: 'record id'+{recordId}
            });
            this.dispatchEvent(event);

        }
        
}