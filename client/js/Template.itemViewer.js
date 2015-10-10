Template.itemViewer.rendered = function(){
	// this.item = Meteor.call("getItem");
}

Template.itemViewer.helpers({
	getItem: function() {
		var item = Items.find({}).fetch()[0];
	  	console.info('helper getItem(): found item ', item);
	  	return item;
	}
});

Template.itemViewer.events({
	'click .details': function(e, tmpl){
		// show the current item in details
		Router.go('/items/' + this._id);
	},
	'click .skip': function(e, tmpl){
		// get next item
	}
});
