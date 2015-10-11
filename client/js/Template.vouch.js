Template.vouch.events({
	'click .upload': function(e, tmpl){
		// upload a photo
	},
	'click .takePhoto': function(e, tmpl){
		// take a photo with camera
	},
	'click .search': function(e, tmpl){
		// search a photo
	},
	'submit .new-vouch': function (event, tmpl) {
		event.preventDefault();

		console.log('event: ', event);

		// Get values from form elements
		var brief = event.target.brief.value;
		var price = event.target.brief.value;
		var deadline = event.target.deadline.value;
		var story = event.target.story.value;

		console.log('brief: ', brief);
		console.log('price: ', price);
		console.log('deadline: ', deadline);
		console.log('story: ', story);

		Items.insert({
			brief: brief,
			price: price,
			deadline: deadline,
			story: story,
			createdAt: new Date(),
			userId: Meteor.userId()
		});

		// Clear form
		event.target.brief.value = "";
		event.target.price.value = "";
		event.target.deadline.value = "";
		event.target.story.value = "";
	}
});


accountsUIBootstrap3.logoutCallback = function(error) {
  if(error) console.log("Error:" + error);
  Router.go('home');
}