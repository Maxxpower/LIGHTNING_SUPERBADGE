({
	onSearch : function(component) {

		var action=component.get("c.getBoats");
		action.setParams({"boatTypeId":component.get("v.boatType")});
		console.log("PARAM PASSED " , component.get("v.boatType"));
		action.setCallback(this,function(response){

			if(component.isValid() && response.getState()==="SUCCESS"){

				component.set("v.boats",response.getReturnValue());
				console.log("BOAT LIST", response.getReturnValue());


			}




		});

		$A.enqueueAction(action);

	}
})