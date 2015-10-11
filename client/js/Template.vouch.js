Template.itemDetails.helpers({
	getItem: function() {
		var params = Router.current().params;
		var item = Items.findOne(params._id);
		// console.info('helper getItem(): found item ', item);
		return item;
	}
});

Template.itemDetails.events({
	'click .upload': function(e, tmpl){
		// upload a photo
	},
	'click .takePhoto': function(e, tmpl){
		// take a photo with camera
	},
	'click .search': function(e, tmpl){
		// search a photo
	}
});


accountsUIBootstrap3.logoutCallback = function(error) {
  if(error) console.log("Error:" + error);
  Router.go('home');
}