import { LightningElement ,api} from 'lwc';
import ACCOUNTID from '@salesforce/schema/Contact.AccountId';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import TITLE_FIELD from '@salesforce/schema/Contact.Title';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';

export default class DataServicesExample extends LightningElement {

    @api
    recordId;

    @api
    objectApiName;

    fields =[ ACCOUNTID,NAME_FIELD,TITLE_FIELD,PHONE_FIELD,EMAIL_FIELD];
}