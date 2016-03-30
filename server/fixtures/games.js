Meteor.startup(function () {
	if (Games.find().count() === 0) {
		var games = [
			{
                homeTeam: "Víkingur",
                awayTeam: "FRAM",
                homeTeamScore: null,
                awayTeamScore: null,
				stadium: "Víkingsheimilið",
				freeThrows: 0,
				finished: 0,
				halftime: 1
				// Setja inn dagsetningu
            },
			{
                homeTeam: "FRAM",
                awayTeam: "FH",
                homeTeamScore: null,
                awayTeamScore: null,
				stadium: "FRAMhús",
				freeThrows: 0,
				finished: 1
				// Setja inn dagsetningu
            },
			{
                homeTeam: "FRAM",
                awayTeam: "Afturelding",
                homeTeamScore: 20,
                awayTeamScore: 14,
				stadium: "FRAMhús",
				finished: 1
				// Setja inn dagsetningu
            },
			{
                homeTeam: "ÍR",
                awayTeam: "FRAM",
                homeTeamScore: 27,
                awayTeamScore: 28,
				stadium: "Austurberg",
				finished: 1
				// Setja inn dagsetningu
            }
		];

		_.each(games, function (game) {
            Games.insert({
                stadium: game.stadium,
                homeTeam: game.homeTeam,
                awayTeam: game.awayTeam,
                homeTeamScore: game.homeTeamScore,
                awayTeamScore: game.awayTeamScore,
				//date: fixture.date,
				finished: game.finished,
				halftime: game.halftime
            });
		});
	}
});
