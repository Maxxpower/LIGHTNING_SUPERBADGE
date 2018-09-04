public with sharing class BoatReviews {

	//BOATREVIEW LIGHTNING COMPONENT CONTROLLER

	@AuraEnabled
	public static List<BoatReview__c> getAll(Id boatId ){

		return [SELECT ID,Name,Comment__c,Rating__c,LastModifiedDate,CreatedDate,CreatedBy.Name,CreatedBy.SmallPhotoUrl,CreatedBy.CompanyName,CreatedBy.Id FROM BoatReview__c WHERE Boat__c=:boatId];

	}


}
