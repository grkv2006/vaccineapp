import { LightningElement ,wire} from 'lwc';
import { getAccountRecords } from '@salesforce/apex/accountcontroller.getAccountRecords';

export default class DisplayAccountRecords extends LightningElement {

    @wire(getAccountRecords)
    property;
}