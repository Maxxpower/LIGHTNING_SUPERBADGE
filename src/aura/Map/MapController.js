({
    jsLoaded: function(component) {
        component.set("v.jsLoaded", true);
    },

    onPlotMapMarker: function(component,event,helper){

      console.log("PLOT MARKER EVENT CAUGHT");

      var currentLat=event.getParam("lat");
      var currentLong=event.getParam("long");
      var currentSobjId=event.getParam("sObjectId");

      console.log("PLOT MARKER EVENT DATA " ,currentLat,currentLong,currentSobjId);

      var currentLocObj={"lat":currentLat,"long":currentLong}
      component.set("v.location",currentLocObj);

    }

})
