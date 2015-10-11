Router.route('home', {
	path: "/",
	template: "itemViewer"
});

Router.route('/items/:_id', {
  name: 'item',
  template: 'itemViewer',
  action: function() {
    // console.log(this.params, 'itemDetails');
    this.render();
  }
});

Router.route('/itemDetails/:_id', {
  name: 'itemDetails',
  template: 'itemDetails',
  action: function() {
    // console.log(this.params, 'itemDetails');
    this.render();
  }
});

Router.route('/login', {
  name: 'login',
  template: 'loginButtons',
  onAfterAction: function() {
    console.info('after login');
    Router.go('/vouch');
  }
});

Router.route('/vouch', {
  name: 'vouch',
  template: 'vouch'
});
