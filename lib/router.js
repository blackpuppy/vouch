Router.route('home', {
	path: "/",
	template: "itemViewer"
});

Router.route('/items/:_id', {
  name: 'itemDetails',
  template: 'itemDetails',
  action: function () {
    // console.log(this.params, 'itemDetails');
    this.render();
  }
});