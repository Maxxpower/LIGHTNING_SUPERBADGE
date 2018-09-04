({
	search : function(component, event, helper) {

			var params=event.getParam('arguments');
			console.log('CALLED PUBLIC METHOD WITH PARAM:: ' , params.boatTypeId);
			component.set("v.boatTypeId", params.boatTypeId);
			component.set("v.boatType", params.boatTypeId);
			console.log("BOAT TYPE ID SELECTED ",component.get("v.boatType"));
			//helper.onSearch(component);
			var doSearchCall=component.get("c.doSearch");
			$A.enqueueAction(doSearchCall);
			return 'COMPLETED SEARCH';



	},


	doSearch : function (component,event,helper){

		helper.onSearch(component);

	},

	onBoatSelect : function (component,event,helper){

		var selectedId=event.getParam("boatId");
		console.log("SELECTED ID FROM SEARCH RESULT ", selectedId);
		component.set("v.selectedBoatId",selectedId);

	}

})