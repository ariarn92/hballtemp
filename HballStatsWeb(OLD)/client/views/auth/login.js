Template.login.events({
    'submit form': function(event) {
        event.preventDefault();

        var team = event.target.team.value;
        var password = event.target.password.value;

        Meteor.loginWithPassword(team, password, function(error) {
            if (error) {
                Session.set('errorMessage', error.reason);
            } else {
                console.log("Successfully logged in!");
            }
        });
    }
});
