Template.nav.events({
    'click #logout': function(event) {
        Meteor.logout(function(error) {
            if (error) {
                throw new Meteor.Error("Logout failed");
            } else {
                console.log("Logged out successfully!");
            }

            Router.go('login');
        });
    }
});
