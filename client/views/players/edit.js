Template.editPlayers.events({
    "submit form": function(event) {
		event.preventDefault();

		var player = {
            squadNumber: event.target.squadNumber.value,
			firstName: event.target.firstName.value,
			lastName: event.target.lastName.value
		};

		Meteor.call('updatePlayer', this._id, player, function(error) {
			if (error) {
				return alert(error.reason);
			} else {
				console.log("Updated Player!");
			}
		});
	},
});
