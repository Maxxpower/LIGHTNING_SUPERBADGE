({
	onFormSubmit : function(component, event, helper) {

		console.log("PARENT COMPONENT CALLED");
		var boatTypeId=event.getParam("formData").boatTypeId;
		console.log("BOATTYPE EVT RETRIEVED ",boatTypeId);
		var searchComponent=component.find("searchResultsCMP");
		var auraMethodRes=searchComponent.search(boatTypeId);
		console.log("PUBLIC METHOD RESULT: " , auraMethodRes);



	}
})