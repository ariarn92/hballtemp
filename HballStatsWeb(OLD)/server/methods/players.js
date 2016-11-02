Meteor.methods({
    'insertPlayer': function(player) {
        check(Meteor.userId(), String);
        check(player, {
            squadNumber: String,
            firstName: String,
            lastName: String
        });

        var squadNumber = player.squadNumber;
        var firstName = player.firstName;
        var lastName = player.lastName;

        Players.insert({
            squadNumber: squadNumber,
            firstName: firstName,
            lastName: lastName,
            createdAt: new Date()
        });

        console.log("Created new player");
    },
    'updatePlayer': function(playerId, player) {
        check(Meteor.userId(), String);
        check(player, {
            squadNumber: String,
            firstName: String,
            lastName: String
        });

        var squadNumber = player.squadNumber;
        var firstName = player.firstName;
        var lastName = player.lastName;

        Players.update(playerId, {
            $set: {
                squadNumber: squadNumber,
                firstName: firstName,
                lastName: lastName,
                updatedAt: new Date()
            }
        }, function(error) {
            if (error) {
                console.log(error.reason);
            } else {
                console.log("Player updated: " + playerId);
            }
        });
    },
    'removePlayer': function(playerId) {
        Players.remove(playerId, function(error) {
            if (error) {
                console.log(error.reason);
            } else {
                console.log("Deleted player");
            }
        });
    }
});
