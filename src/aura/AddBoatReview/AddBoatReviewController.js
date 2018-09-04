({
	doInit : function(component, event, helper) {

		helper.onInit(component);
	},



	onRecordUpdated : function(component,event,helper){

	},

	onSave : function(component,event,helper){

						console.log("ON SAVE CALLED");
						var addedEvt=component.getEvent("BoatReviewAdded");

						component.find("service").saveRecord($A.getCallback(function(saveResult){


						if(saveResult.state==="SUCCESS" || saveResult.state==="DRAFT"){
									console.log('SAVERESULT',saveResult.recordId);
									helper.onInit(component);
									addedEvt.fire();

									if($A.get('e.force:showToast')){

										var showToast = $A.get('e.force:showToast');
										showToast.setParams({'title':'Success',message:'New Review Created','type':'Success'});
										showToast.fire();

									}else{

										alert('New Review Created');


									}



						}else if(saveResult.state==="ERROR"){

							console.log('Problem saving record, error: ' + JSON.stringify(saveResult.error));

						}else if(saveResult.state==="INCOMPLETE"){

							console.log("User is offline, device doesn't support drafts.");


						}else{

							console.log('Unknown problem, state: ' + saveResult.state + ', error: ' + JSON.stringify(saveResult.error));


						}


				}));



	}


})
