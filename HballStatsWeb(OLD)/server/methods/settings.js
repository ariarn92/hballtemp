Meteor.methods({
    updateSettings: function(settings) {
        console.log("Called updateSettings");

        var userId = Meteor.userId();
        var name = settings.name;
        var oldPassword = settings.oldPassword;
        var newPassword = settings.newPassword;

        Meteor.users.update(userId, {
            $set: {
                "profile.name": name
            }
        });
    }
});
