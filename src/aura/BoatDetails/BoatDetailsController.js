({
	onBoatSelected : function(component, event, helper) {
		console.log("BOAT DETAILS EVENT FIRE");
		var boat=event.getParam("boat");
		component.set("v.boat",boat);
		component.set("v.Id",boat.Id);
		console.log("BOAT SETUP ON DETAILS",boat,boat.Id);
		var service = component.find("service");
		service.reloadRecord();

	},

	onRecordUpdated : function(component,event,helper){

		var reviewListComp=component.find("reviewComp");
		if(typeof reviewListComp != 'undefined'){
					var auraMethodRes=reviewListComp.refresh();
		}



	},

	onBoatReviewAdded : function(component,event,helper){

		component.find("details").set("v.selectedTabId", 'boatreviewtab');
		var reviewListComp=component.find("reviewComp");
		if(typeof reviewListComp != 'undefined'){
					var auraMethodRes=reviewListComp.refresh();
		}



	}

})
