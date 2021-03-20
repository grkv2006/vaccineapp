public with sharing class caseIdSearch {
    public caseIdSearch() {

    }
     @AuraEnabled
    public static List<Case> matchingAccountName(String Id){
        Id = '%' + Id + '%';
        List<Case> caseList = [SELECT Id  FROM Case
                                    WHERE  Id =: Id];
        return caseList;
    }
}
