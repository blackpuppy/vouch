Router.configure({
  layoutTemplate: 'main'
});

Router.route('home', {
  name: 'home',
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

/*// render login template
Router.route('/login', function () {
    name: 'login',
    this.render('login');
    //this.next();
  });*/  

this.loginController = RouteController.extend({
  template : 'login',
  action: function(){
    this.render();
  }
})

Router.map(function(){
  this.route("login", {path: "/login", controller: "loginController"})
});

this.vouchController = RouteController.extend({
  template: 'vouch',
  action: function(){
    this.render();
  },
  onBeforeAction: function () {
    if(!Meteor.user()) 
    {
        console.log("user not present")
        if (Meteor.loggingIn())
        {
          console.log("logging in");
          Session.set('notificationCount', 0);
          this.next();
        }
        else
        {
          console.log("not loggin in")
          Session.set('notification',"Please log in");
          Session.set('notificationCount', 1);
          console.log("message: ", Session.get('notification'));
          Router.go('home');
          this.next();
        }
    }
    else
    {
      console.log("user present");
      Session.set('notificationCount', 0);
      this.next();
    }
  }
});

Router.map(function(){
  this.route("vouch",{path: "/vouch", controller: "vouchController"})
})

// render vouch template
// Router.route('/vouch', function () {
//   this.render('vouch');

//   onBeforeAction(function () {
//     if(!Meteor.user()) 
//     {
//         console.log("user not present")
//         if (Meteor.loggingIn())
//         {
//           console.log("logging in");
//           this.next();
//         }
//         else
//         {
//           console.log("not loggin in")
//           Router.go('login');
//           this.next();
//         }
//     }
//     else
//     {
//       console.log("user present");
//       this.next();
//     }
//   },
//   {
//       //except: ['login', 'itemDetails', 'item', 'home']
//   });

// });  



// we want to be sure that the user is logging in
// for all routes but login
/*Router.onBeforeAction(function () {
    if(!Meteor.user()) 
    {
        console.log("user not present")
        if (Meteor.loggingIn())
        {
          console.log("logging in");
          this.next();
        }
        else
        {
          console.log("not loggin in")
          Router.go('login');
          this.next();
        }
    }
    else
    {
      console.log("user present");
      this.next();
    }
  },
  {
      except: ['login', 'itemDetails', 'item', 'home']
  });*/

// add here other routes

// catchall route
Router.route('/(.*)', function () {
  this.redirect('/catchallpage');
});