Template.login.events({
    'submit form': function(event) {
        event.preventDefault();

        var email = event.target.email.value;
        var password = event.target.password.value;

        Meteor.loginWithPassword(email, password, function(error) {
            if (error) {
                Session.set('errorMessage', error.reason);
            } else {
                console.log("Successfully logged in!");
            }
        });
    }
});
