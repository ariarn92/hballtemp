Meteor.startup(function () {
	if (EventTypes.find().count() === 0) {
		var events = [
			{ order: 1, identity: "scored-fastbreak", name: "Skorað hraðaupphlaup", message: "- skorað úr hraðaupphlaupi" },
            { order: 2, identity: "scored-right-wing", name: "Skorað hægra horn", message: "- skorað úr hægra horni" },
            { order: 3, identity: "scored-right-backcourt", name: "Skorað hægri skytta", message: "- skorað úr hægri skyttu" },
			{ order: 4, identity: "scored-pivot", name: "Skorað lína", message: " - skorað af línunni" },
			{ order: 5, identity: "scored-center-backcourt", name: "Skorað miðja", message: " - skorað frá miðjunni" },
			{ order: 6, identity: "scored-secondwave", name: "Skorað seinni bylgja", message: "- skorað úr seinni bylgju" },
			{ order: 7, identity: "scored-left-wing", name: "Skorað vinstra horn", message: " - skorað úr vinstra horni" },
			{ order: 8, identity: "scored-left-backcourt", name: "Skorað vinstri skytta", message: " - skorað úr vinstri skyttu" },
			{ order: 9, identity: "scored-penalty", name: "Skorað víti", message: " - skorað úr vítakasti" },
			{ order: 10, identity: "defended-fastbreak", name: "Varið hraðaupphlaup", message: "- varið úr hraðaupphlaupi" },
			{ order: 11, identity: "defended-right-wing", name: "Varið hægra horn", message: "- varið úr hægra horni" },
			{ order: 12, identity: "defended-right-backcourt", name: "Varið hægri skytta", message: "- varið úr hægri skyttu" },
			{ order: 13, identity: "defended-pivot", name: "Varið lína", message: "- varið á línunni" },
			{ order: 14, identity: "defended-center-backcourt", name: "Varið miðja", message: "- varið á miðju" },
			{ order: 15, identity: "defended-left-wing", name: "Varið vinstra horn", message: "- varið úr vinstrahorni" },
			{ order: 16, identity: "defended-left-backcourt", name: "Varið vinstri skytta", message: "- varið úr vinstri skyttu" },
			{ order: 17, identity: "defended-penalty", name: "Varið víti", message: "- varið víti" },
			{ order: 18, identity: "defended-in-defence", name: "Varið í vörn", message: "- varið í vörn" },
			{ order: 19, identity: "2mins", name: "2 mín", message: "fékk 2 mín brottvísun" },
			{ order: 20, identity: "won-penalty", name: "Fiskað Víti", message: "fiskaði víti" },
			{ order: 21, identity: "off-target",name: "Framhjá/stöng", message: "skaut framhjá/í stöng" },
			{ order: 22, identity: "won-the-ball",name: "Unnin Bolti", message: "vann boltann" },
			{ order: 23, identity: "lostball", name: "Tapaður bolti", message: "tapaði boltanum" },
			{ order: 24, identity: "lostball-pivot", name: "Tapaður bolti - Lína", message: "steig á línuna" },
			{ order: 25, identity: "lostball-offensive-violation", name: "Tapaður Bolti - Ruðningur", message: "fékk á sig ruðning" },
			{ order: 26, identity: "lostball-steps", name: "Tapaður Bolti - Skref", message: "tók of mörg skref" },
			{ order: 27, identity: "lostball-illegal-block", name: "Tapaður Bolti - Ólögleg blokk", message: "fékk dæmda ólöglega blokk á sig" }
		];

		_.each(events, function (event) {
            EventTypes.insert({
				order: event.order,
				identity: event.identity,
                name: event.name,
				message: event.message,
				points: 2
            });
		});
	}
});
