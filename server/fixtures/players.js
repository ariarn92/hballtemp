Meteor.startup(function () {

	if (Meteor.users.find().count() === 0) {
		var userId = Accounts.createUser({
			username: "fram",
			email: "fram@fram.is",
			password: "safamyri",
			profile: {
				name: "Knattspyrnufélagið FRAM"
			}
		});
	}

	if (Players.find().count() === 0) {
		var players = [
			{ squadNumber: 16, firstName: "Kristófer Fannar", lastName: "Guðmundsson", goalkeeper: true },
            { squadNumber: 71, firstName: "Valtýr Már", lastName: "Hákonarson", goalkeeper: true },
            { squadNumber: 2, firstName: "Ólafur Jóhann", lastName: "Magnússon", goalkeeper: false },
            { squadNumber: 4, firstName: "Ólafur Ægir", lastName: "Ólafsson", goalkeeper: false },
            { squadNumber: 5, firstName: "Stefán Baldvin", lastName: "Stefánsson", goalkeeper: false },
            { squadNumber: 10, firstName: "Stefán Darri", lastName: "Þórsson", goalkeeper: false },
            { squadNumber: 13, firstName: "Garðar B.", lastName: "Sigurjónsson", goalkeeper: false },
            { squadNumber: 11, firstName: "Arnar Freyr", lastName: "Arnarsson", goalkeeper: false },
            { squadNumber: 14, firstName: "Arnar (Freysi)", lastName: "Ársælsson", goalkeeper: false },
            { squadNumber: 17, firstName: "Elías", lastName: "Bóasson", goalkeeper: false },
            { squadNumber: 20, firstName: "Þorgrímur Smári", lastName: "Ólafsson", goalkeeper: false },
            { squadNumber: 21, firstName: "Arnar Snær", lastName: "Magnússon", goalkeeper: false },
			{ squadNumber: 23, firstName: "Óðinn Þór", lastName: "Ríkharðsson", goalkeeper: false },
			{ squadNumber: 27, firstName: "Sigurður Örn", lastName: "Þorsteinsson", goalkeeper: false }
		];

		_.each(players, function (player) {
            Players.insert({
                squadNumber: player.squadNumber,
                firstName: player.firstName,
                lastName: player.lastName,
				goalkeeper: player.goalkeeper,
				userId: userId
            });
		});
	}
});
