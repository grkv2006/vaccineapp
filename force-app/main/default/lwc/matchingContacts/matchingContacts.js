import { LightningElement,api,wire } from 'lwc';
import matchingContactName from '@salesforce/apex/ContactNameSearch.matchingContactName';

export default class MatchingContacts extends LightningElement {
@api contactname;
result;
_selectedData = {} ; 
error;
    columns = [
        {
            label : "FirstName",
            fieldName : "FirstName"
        },
        {
            label : "LastName",
            fieldName : "LastName"
        },
        {
            label : "Email",
            fieldName : "Email"
        },
        {
            label : "Phone",
            fieldName : "Phone"
        },
        {
            label : "Account Name",
            fieldName : "AccountId"
        }
        
    ];
    @wire( matchingContactName, { ContactName : '$contactname' }) 
    contacts({ error, data }) {
        if (data) {
            this.result = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.result = undefined;
        }
    }
    selectedRowHandler(event){
        const selectedRows = event.detail.selectedRows; 
         for ( let i = 0; i < selectedRows.length; i++ ){             
                this._selectedData[selectedRows[i].id] = selectedRows[i] 
               
            }
            alert('@@:::Selected DATA:::'+JSON.stringify(this._selectedData));
        }

}