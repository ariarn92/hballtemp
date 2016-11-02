Template.insertPlayers.events({
    "submit form": function(event) {
        event.preventDefault();

        var player = {
            squadNumber: event.target.squadNumber.value,
			firstName: event.target.firstName.value,
			lastName: event.target.lastName.value
		};

        Meteor.call('insertPlayer', player, function(error) {
			if (error) {
				return alert(error.reason);
			} else {
				console.log("Created new player");
			}
		});

        event.target.firstName.value = "";
        event.target.lastName.value = "";

        Router.go('players');
    }
});
