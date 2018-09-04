public class BoatSearchFormController {
    
    @AuraEnabled
    public static Boolean checkPermission(){
        
        return Schema.SObjectType.BoatType__c.isCreateable();
        
        
    }
    
    
    @AuraEnabled
    public static List<BoatType__c> getAllBoatTypes(){
        
        return [SELECT Id,Name FROM BoatType__c];
        
        
    }

}