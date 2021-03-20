public with sharing class ContactNameSearch {
    public ContactNameSearch() {


    }

     @AuraEnabled(cacheable=true)
    public static List<Contact> matchingContactName(String ContactName){
       ContactName = '%' +ContactName +'%';

        
        List<Contact> contactList = [SELECT Id, FirstName,LastName,email,Phone,accountId FROM Contact
                                    WHERE Name  LIKE :ContactName ] ;

                                     return contactList;
    }
}
