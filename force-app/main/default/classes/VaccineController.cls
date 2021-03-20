public with sharing class VaccineController {
    public VaccineController() {

    }
    @AuraEnabled(cacheable = true)
    public static list<Vaccines__c> filteredVaccineList(String VaccineType, String  ZipCode 
                                                       ){

    if(Vaccinetype == 'None' || Vaccinetype == ''){
       Vaccinetype = '%';
    }
   // if(ZipCode == 'None' || ZipCode == ''){
    //    ZipCode = '';
    //}
   
    return [SELECT Id,	Picture_URL__c,  Hospital_Name__c,Hospital_Zipcode__c,vaccine_type__c
                       FROM Vaccines__c
                       WHERE Hospital_Zipcode__c =:  ZipCode AND vaccine_type__c =: VaccineType ];
    }
}