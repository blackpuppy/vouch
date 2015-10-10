Items = new Mongo.Collection("items");

Meteor.methods({
	getItem: function () {
		return Items.find({}, {sort: {createdAt: 1}, limit: 1}).fetch();
		// return Items.find({});
		// console.info('server getFirstItem() ', this.item);
	}
});