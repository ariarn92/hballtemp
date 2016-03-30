Template.gamesPlay.helpers({
    players: function() {
        return Players.find({});
    },
    events: function() {
        return EventTypes.find({}, {
            sort: {
                order: 1
            }
        });
    },
    selectedPlayer: function() {
        if (Session.get('selectedPlayer')) {
            var playerId = Session.get('selectedPlayer');
            return Players.findOne({
                _id: playerId
            }).firstName;
        } else {
            return "Enginn valin";
        }
    },
    selectedEvent: function() {
        if (Session.get('selectedEvent')) {
            var eventId = Session.get('selectedEvent');
            return EventTypes.findOne({
                _id: eventId
            }).name;
        } else {
            return "Ekkert valið";
        }
    },
    isGoalkeeper: function() {
        if (this.goalkeeper === true) {
            return true;
        }
    },
    isHalftime: function() {
        if (this.halftime === 1) {
            return true;
        } else {
            return false;
        }
    }
});

Template.gamesPlay.events({
    // "change .playersSelectBox": function(event) {
    //     Session.set('selectedPlayer', event.target.value);
    // },
    // "change .eventsSelectBox": function(event) {
    //     Session.set('selectedEvent', event.target.value);
    // },

    "click .rightButtons": function(event) {
    Session.set('selectedPlayer', event.target.value);
    console.log("Leikmadur valinn");
  },

  "click .actionButtons": function(event) {
    Session.set('selectedEvent', event.target.value);
    console.log("Action valid");

    var halfleikur = Session.get('halfleikur');
    console.log("halfleikur");

    var gameId = Session.get('selectedFixture');
    var playerId = Session.get('selectedPlayer');
    var eventId = Session.get('selectedEvent');
    console.log(gameId),
    console.log(playerId),
    console.log(eventId);

    Events.insert({
        gameId: gameId,
        userId: Meteor.userId(),
        playerId: playerId,
        eventId: eventId,
        halftime: halfleikur,
        createdAt: new Date()
  }),
  reiknaFramlag(gameId, playerId, eventId);

  console.log("New event created");
},
    //
    // "click .confirmEvent": function(event) {
    //
    //     var halfleikur = Session.get('halfleikur');
    //     console.log("halfleikur");
    //
    //     var gameId = Session.get('selectedFixture');
    //     var playerId = Session.get('selectedPlayer');
    //     var eventId = Session.get('selectedEvent');
    //
    //     Events.insert({
    //         gameId: gameId,
    //         userId: Meteor.userId(),
    //         playerId: playerId,
    //         eventId: eventId,
    //         halftime: halfleikur,
    //         createdAt: new Date()
    //     });
    //
    //     reiknaFramlag(gameId, playerId, eventId);
    //
    //     console.log("New event created");
    // },
    "click .freeThrow": function(event) {
        Fixtures.update({
            _id: this._id
        }, {
            $inc: {
                freeThrows: 1
            }
        });
    },


    "click .endGameButton": function(event) {
        Session.set('selectedFixture', this._id);
        console.log(this._id);

        //gameIsFinished.update=1;

        Router.go('gamesDashboard', {
            _id: this._id
          });
        },


    "click .toggleHalftimeButton": function(event) {
        console.log("clicked halftime tooggle");
        if (this.halftime === 1) {
            Games.update({
                _id: this._id
            }, {
                $set: {
                    halftime: 2
                }
            });
            Session.set('halfleikur', 2);
        } else if (this.halftime === 2) {
            Games.update({
                _id: this._id
            }, {
                $set: {
                    halftime: 1
                }
            });
            Session.set('halfleikur', 1);
        }
    },
    "click .incrementFreeThrows": function(event) {
        Games.update({
            _id: this._id
        }, {
            $inc: {
                freeThrows: 1
            }
        });
    },
    "click .decrementFreeThrows": function(event) {
        Games.update({
            _id: this._id
        }, {
            $inc: {
                freeThrows: -1
            }
        });
    }
});
