({
	doInit : function(component, event, helper) {

		helper.onInit(component);

	},

	onUserInfoClick : function (component,event,helper){

		//PRENDE IL TAG CORRENTE SU CUI SI E' SCATENATO IL CLICK
		var userId=event.currentTarget.getAttribute("data-userid");
		var navEvt = $A.get("e.force:navigateToSObject");
		navEvt.setParams({
			"recordId": userId,
			"slideDevName": "details"
		});
		navEvt.fire();

	},

	refresh : function(component,event,helper){
		//REFRESH THE VIEW-->PUBLIC METHOD
		var initAction=component.get("c.doInit");
		$A.enqueueAction(initAction);

	}

})
