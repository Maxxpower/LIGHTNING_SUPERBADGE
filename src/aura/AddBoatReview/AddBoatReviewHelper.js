({
	onInit : function(component) {

		component.find("service").getNewRecord("BoatReview__c",null,false,
																														 $A.getCallback(function(){

																																 var rec=component.get("v.boatReview");
																																 var error=component.get("v.recordError");
																																 //SETTING THE BOAT ID:
																																 rec.Boat__c=component.get("v.boat").Id;
																																 if(error || (rec===null)){
																																		 console.log("ERROR:::",error);
																																 }else{
																																		 console.log("INIZIALIZZATO IL TEMPLATE RECORD::",rec);
																																		 component.set("v.boatReview",rec);
																																 }
																														 })
																														);





	}

})
