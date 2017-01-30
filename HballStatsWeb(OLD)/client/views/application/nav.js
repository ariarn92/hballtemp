Template.nav.events({
  'submit form': function(event) {
      event.preventDefault();

      var date = event.target.date.value;

      Meteor.listGamesByDate(date, function(error) {
          if (error) {
              Session.set('errorMessage', error.reason);
          } else {
              console.log("Successfully logged date!");
          }
      });
  }

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
