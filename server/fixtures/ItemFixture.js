Meteor.startup(function(){
	if(!Items.find().count()) {
		Items.insert({
			image: '/images/apple-watch.jpg',
			brief: "I really want to own this watch in 3 weeks!",
			price: 16000,
			story: "I tried on the Apple Watch Vintage in my cousin’s party last night and suddenly I felt like a movie star. People were telling me it’s a cool watch and I really wish it’s mine. The only problem? It costs 16 grand. My cousin had been working all along to afford this watch and I think I can too.",
			createdAt: new Date(2015, 10, 11, 1, 0, 0, 0),
			deadline: new Date(2015, 11, 1, 1, 0, 0, 0)
		});
		Items.insert({
			image: '/images/david-beckham.jpg',
			brief: "I really want to own this guy in 2016",
			price: 1000000,
			story: "Damn my youth is running out! I need a husband NOW! Can I buy this man?!",
			createdAt: new Date(2015, 10, 11, 2, 0, 0, 0),
			deadline: new Date(2016, 10, 11, 2, 0, 0, 0)
		});
		Items.insert({
			image: '/images/appstore.png',
			brief: "I want to own this store in 2116",
			price: 1000000000,
			story: "That's the gold mine?!",
			createdAt: new Date(2015, 10, 11, 8, 50, 0, 0),
			deadline: new Date(2116, 10, 11, 8, 50, 0, 0)
		});
		Items.insert({
			image: '/images/india-u683-fr.jpg',
			brief: "I really dream to own such a palace within 5 years",
			price: 50000000,
			story: "When I becomes a king ...!",
			createdAt: new Date(2015, 10, 11, 8, 55, 0, 0),
			deadline: new Date(2020, 10, 11, 8, 55, 0, 0)
		});
	}
});
