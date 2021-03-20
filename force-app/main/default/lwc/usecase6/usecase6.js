import { LightningElement ,api} from 'lwc';
import ACCOUNTID from '@salesforce/schema/Opportunity.AccountId';
import NAME_FIELD from '@salesforce/schema/Opportunity.Name';
import DESC_FIELD from '@salesforce/schema/Opportunity.Description';
import CLOSE_FIELD from '@salesforce/schema/Opportunity.CloseDate';
import STAGE_FIELD from '@salesforce/schema/Opportunity.StageName';
import TYPE_FIELD from '@salesforce/schema/Opportunity.Type';
import OWNERID_FIELD from '@salesforce/schema/Opportunity.OwnerId';



export default class DataServicesExample extends LightningElement {

    @api
    recordId;

    @api
    objectApiName;

    fields =[ ACCOUNTID,NAME_FIELD,DESC_FIELD,CLOSE_FIELD,STAGE_FIELD,TYPE_FIELD, OWNERID_FIELD];
}