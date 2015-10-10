Template.itemDetails.helpers({
	getItem: function() {
		var params = Router.current().params;
		var item = Items.findOne(params._id);
		// console.info('helper getItem(): found item ', item);
		return item;
	}
});

// Template.itemDetails.events({
// 	'click .details': function(e, tmpl){
// 		// show the current item in details
// 		Router.go('/items/' + this._id);
// 	},
// 	'click .skip': function(e, tmpl){
// 		// get next item
// 	}
// });
