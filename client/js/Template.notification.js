Template.notification.helpers({
	message: function(){
		return Session.get('notification');
	},
	messagecount: function(){
		if (Session.get('notificationCount') > 0)
			return true;
		else
			return false;
	}

});