Meteor.subscribe("items");

Template.itemViewer.created = function(){
	this.item = Items.findOne({}, {sort: {createdAt: 1}});
}
