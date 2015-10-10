Template.itemViewer.created = function(){
	this.currentItem = new ReactiveVar(null);
	// this.item = Meteor.call("getItem");
	// TODO: should subscribe to the data here
}

Template.itemViewer.helpers({
	getItem: function() {
		var params = Router.current().params,
			item;
		// console.info('helper getItem(): params = ', params);
		if (params && params._id) {
			item = Items.findOne(params._id);
		} else {
			item = Items.findOne();
		}
		// console.info('helper getItem(): found item ', item);
		Template.instance().currentItem.set(item);
		return item;
	}
});

Template.itemViewer.events({
	'click .details': function(e, tmpl) {
		// show the current item in details
		Router.go('itemDetails', {_id: this._id});
	},
	'click .skip': function(e, tmpl) {
		// get next item
		var item = tmpl.currentItem.get(),
			next = Items.find(
				{createdAt: {$gt: item.createdAt}}, 
				{sort: {createdAt: 1}, limit: 1}
			).fetch();
		if (next && next[0] && next[0]._id) {
			Router.go('item', {_id: next[0]._id});
		}
	}
});
