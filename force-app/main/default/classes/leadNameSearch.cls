public with sharing class leadNameSearch {
    public leadNameSearch() {

    }
     @AuraEnabled
    public static List<Lead> matchingLeadName(String LeadName,string  LeadSource){
       LeadName = '%' +LeadName +'%';

        
        List<Lead> leadList = [SELECT Id, Name,LeadSource FROM Lead
                                    WHERE Name  LIKE :LeadName AND LeadSource =: LeadSource ] ;

                                    if(leadlist.isEmpty() ){
                                        throw new Exception('no record found ');
                                    }
        return leadList;
    }
}
