Session.setDefault('currentImage', null);

Template.imageChooser.created = function(){
	this.imagesToLoad = [
		'/images/india.jpg',
		'/images/apple-watch.jpg',
		'/images/david-beckham.jpg'
	];

	this.loadedImages = [];

	Session.set('currentImage', this.imagesToLoad[_.random(0, this.imagesToLoad.length)]);
}

Template.imageChooser.helpers({
	currentImage: function(){
		return Session.get('currentImage');
	}
});

Template.imageChooser.events({
	'click .goodLuck': function(e, tmpl){
		var src = Session.get('currentImage');

		tmpl.imagesToLoad = _.reject(tmpl.imagesToLoad, function(item){
			return item === src;
		});

		if(tmpl.imagesToLoad.length <= 0){
			alert("No images left to load");
		}		

		tmpl.loadedImages.push(src);

		Session.set('currentImage', tmpl.imagesToLoad[_.random(0, tmpl.imagesToLoad.length -1)]);
	}
});