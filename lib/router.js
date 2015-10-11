Router.configure({
  layoutTemplate: 'main'
});

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

// render login template
Router.route('/login', function () {
    this.render('login');
});  

// render vouch template
Router.route('/vouch', function () {
    this.render('vouch');
});  



// we want to be sure that the user is logging in
// for all routes but login
Router.onBeforeAction(function () {
    if (!Meteor.user() && !Meteor.loggingIn()) {
        Router.render('login.html');
        this.next();
    } else {
        // required by Iron to process the route handler
        this.next();
    }
}, {
    except: ['login', 'itemDetails', 'home']
});

// add here other routes

// catchall route
Router.route('/(.*)', function () {
    this.redirect('/catchallpage');
});