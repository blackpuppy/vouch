Router.route('home', {
	path: "/",
	template: "itemViewer",
	waitFor: function(){
		return Meteor.subscribe("items");
	}
});
