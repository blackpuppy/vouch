Template.itemDetails.helpers({
	getItem: function() {
		var params = Router.current().params;
		var item = Items.findOne(params._id);
		// console.info('helper getItem(): found item ', item);
		return item;
	}
});

Template.itemDetails.events({
	'click .join': function(e, tmpl){
		// redirect to login/signup
		Router.go('/vouch');
	},
	'click .skip': function(e, tmpl){
		// get next item
	}
});
