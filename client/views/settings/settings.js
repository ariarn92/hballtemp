Meteor.subscribe('eventTypes');

Template.settings.helpers({
    eventTypes: function(){
        return EventTypes.find({});
    }
});

Template.settings.events({
    "submit form": function(event) {
        event.preventDefault();

        var settings = {
            name: event.target.name.value,
            oldPassword: event.target.oldPassword.value,
            newPassword: event.target.newPassword.value,
        };

        Meteor.call("updateSettings", settings, function(error) {
            if(error) {
                console.log(error.reason);
            } else {
                console.log("Settings updated!");
            }
        });
    }
});
