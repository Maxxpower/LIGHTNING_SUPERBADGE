({
	onBoatClick : function(component, event, helper) {

		var boatSelectEvent=component.getEvent("BoatSelect");
		console.log("BoatID: " ,component.get("v.boat").Id);
		boatSelectEvent.setParams({"boatId":component.get("v.boat").Id});
		boatSelectEvent.fire();
		console.log("EVENT CALLED: ", boatSelectEvent.getParam("boatId"));

		//FIRING THE APPLICATION EVENT FOR OUTER COMPONENTS
		var boatSelected=$A.get("e.c:BoatSelected");
		boatSelected.setParams({"boat":component.get("v.boat")});
		boatSelected.fire();
		console.log("APPLICATION EVENT CALLED: ", boatSelected.getParam("boat"));

		//FIRING APPLICATION EVENT FOR MAP COMPONENT
		var mapEvent=$A.get("e.c:PlotMapMarker");
		mapEvent.setParams({"lat":component.get("v.boat").Geolocation__Latitude__s,"long":component.get("v.boat").Geolocation__Longitude__s,"sObjectId":component.get("v.boat").Id,"label":component.get("v.boat").Name});
		mapEvent.fire();
		console.log("MAP LOCATION FIRED");

	}
})
