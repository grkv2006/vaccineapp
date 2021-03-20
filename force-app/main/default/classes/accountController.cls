public with sharing class accountController {
    public accountController() {

    }
    
    @AuraEnabled(cacheable = true)
    public static List<Account> getAccountRecords(){
        List<Account> accList = [SELECT Id, Name, AnnualRevenue, Rating, Industry FROM Account LIMIT 5];
        return accList;
    }

    @AuraEnabled
    public static List<Account> getAccountRec(){
        List<Account> accList = [SELECT Id, Name, AnnualRevenue, Rating, Industry FROM Account LIMIT 10];
        return accList;
    }
}