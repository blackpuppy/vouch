Meteor.startup(function(){
	if(!Items.find().count()) {
		Items.insert({
			image: '/images/apple-watch.jpg',
			brief: "I really want to own this watch in 3 weeks!",
			price: 16000,
			story: "I tried on the Apple Watch Vintage in my cousin’s party last night and suddenly I felt like a movie star. People were telling me it’s a cool watch and I really wish it’s mine. The only problem? It costs 16 grand. My cousin had been working all along to afford this watch and I think I can too."
		},{
			image: '/images/david-beckham.jpg',
			brief: "I really want to own this guy in 2016",
			price: 1000000,
			story: "Damn my youth is running out! I need a husband NOW! Can I buy this man?!"
		});
	}
});
