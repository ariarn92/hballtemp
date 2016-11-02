Meteor.subscribe('games');

Template.games.helpers({
    games: function() {
        return Games.find({
            finished: 0
        });
    },
    results: function() {
        return Games.find({
            finished: 1
        });
    },
    date: function() {
        return moment(this.date).format("ddd D.MMM YYYY");
    },
    time: function() {
        return moment(this.date).format("HH:mm");
    },
    gameIsFinished: function() {
        if (this.finished === 1) {
            return true;
        }
    },
    gameHasNotFinished: function() {
        if (this.finished === 0) {
            return true;
        }
    }
});

Template.games.events({
    "click #gamesDashboard": function(event) {

        console.log(this._id);

        Session.set('selectedFixture', this._id);

        Router.go('gamesDashboard', {
            _id: this._id
        });

    },
    "click #gamesPlay": function(event) {

        console.log(this._id);

        Session.set('selectedFixture', this._id);

        Router.go('gamesPlay', {
            _id: this._id
        });
    }
});
