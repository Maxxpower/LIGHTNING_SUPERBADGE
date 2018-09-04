public with sharing class BoatSearchResults {

	@AuraEnabled
	public static List<Boat__c> getBoats(String boatTypeId){

		return boatTypeId!=''?[SELECT ID,Contact__c,Contact__r.Name,Picture__c,Geolocation__Latitude__s,Geolocation__Longitude__s  FROM Boat__c WHERE BoatType__c= :boatTypeId]:[SELECT ID,Contact__c,Contact__r.Name,Picture__c,Geolocation__Latitude__s,Geolocation__Longitude__s FROM Boat__c];


	}


}
