({
	onInit : function(component) {

		var action=component.get("c.getAll");
		action.setParams({"boatId":component.get("v.boat").Id});
		action.setCallback(this,function(response){

			if(component.isValid() && response.getState()==="SUCCESS"){
				console.log("SUCCESS REVIEWS RETRIEVAL: " , response.getReturnValue());
				component.set("v.boatReviews",response.getReturnValue());
			}else{
				console.log("GENERIC ERROR");
			}
		});

		$A.enqueueAction(action);




	}
})
