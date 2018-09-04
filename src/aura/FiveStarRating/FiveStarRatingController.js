({
	afterScriptsLoaded : function(component, event, helper) {

		var currentRating=component.get("v.value");
		var readOnly=component.get("v.readonly");
		var domEL=component.find("ratingarea").getElement();
		var maxRating=5;


		var callBack= function(rating){
			component.set('v.value',rating);
			console.log('CURRENT RATING ' + rating);
		}
		component.ratingObj=rating(domEL,currentRating,maxRating,callBack,readOnly);

	},

	onValueChange : function(component,event,helper){

		if(component.ratingObj){
			var value=component.get("v.value");
			component.ratingObj.setRating(value,false);
		}


	}

})
