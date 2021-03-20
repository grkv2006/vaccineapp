public with sharing class leadController {
    public leadController() {

    }
     @AuraEnabled(cacheable = true)
    public static List<lead> getLeadRecords(){
        List<lead> leadList = [SELECT Id, Name FROM lead LIMIT 5];
        return leadList;
    }

    @AuraEnabled
    public static List<lead> getLeadRec(){
        List<lead> leadList = [SELECT Id, Name FROM lead LIMIT 10];
        return leadList;
    }
}
