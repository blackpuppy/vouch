Template.itemViewer.created = function(){
	// this.item = Meteor.call("getItem");
	// TODO: should subscribe to the data here
}

Template.itemViewer.helpers({
	getItem: function() {
		var item = Items.findOne();
	  	console.info('helper getItem(): found item ', item);
	  	return item;
	}
});

Template.itemViewer.events({
	'click .details': function(e, tmpl){
		// show the current item in details
		Router.go('itemDetails', {_id: this._id});
	},
	'click .skip': function(e, tmpl){
		// get next item
	}
});
