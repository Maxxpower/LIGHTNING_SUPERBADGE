({
	newBoat : function(component, event, helper) {

        var fieldValues={};
    	var createRecordEvent = $A.get("e.force:createRecord");
    	createRecordEvent.setParams({
        	"entityApiName": "Boat__c",
            "defaultFieldValues" : fieldValues
    	});
    	createRecordEvent.fire();



	},

    doInit : function(component,event,helper){

        console.log("DO INIT");
        //helper.checkPermissions(component,event);

        var action=component.get("c.getAllBoatTypes");
        action.setCallback(this,function(response){
           	console.log("GET ALL BOAT TYPES CALLED");

            var state=response.getState();
            if(state==="SUCCESS" && component.isValid()){
                console.log("component valido " ,response.getReturnValue());
                component.set("v.boatTypes",response.getReturnValue());

            }


        });
        $A.enqueueAction(action);






    },

    onFormSubmit : function(component,event,helper){

        var selectTypeId=component.get("v.selectedTypeId");
        var formDataObj={"boatTypeId":selectTypeId};
        var submitEvent=component.getEvent("formsubmit");
        submitEvent.setParams({"formData":formDataObj});
        submitEvent.fire();
        console.log("EVENT CALLED: ", submitEvent.getParam("formData").boatTypeId);

    }
})