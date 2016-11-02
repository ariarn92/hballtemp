Meteor.subscribe('players');

Template.players.helpers({
    players: function () {
        Meteor.subscribe("players");
        return Players.find({});
    }
});

Template.players.events({
    "click .deletePlayer": function(event) {
        if (confirm("Ertu viss um að þú viljir eyða þessum leikmanni?")) {
			var playerId = this._id;

			Meteor.call('removePlayer', playerId, function(error) {
				if(error) {
					return alert(error.reason);
                } else {
                    console.log("Deleted player " + playerId);
                }
			});
		}
    }
});
