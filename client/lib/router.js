Router.route('home', {
	path: "/",
	template: "itemViewer",
	waitFor: function(){
		return Meteor.subscribe("items");
	}
});

Router.route('/items/:_id', function () {
  var item = Items.findOne({_id: this.params._id});
  this.render('itemDetails', {data: item});
});
