Handlebars.registerHelper("math", function(lvalue, operator, rvalue, options) {
    lvalue = parseFloat(lvalue);
    rvalue = parseFloat(rvalue);

    return {
        "+": lvalue + rvalue,
        "-": lvalue - rvalue,
        "*": lvalue * rvalue,
        "/": lvalue / rvalue,
        "%": lvalue % rvalue
    }[operator];
});

getType = function(string) {
    var identities = [];
    var eventTypes = EventTypes.find({
        identity: {
            $regex: ".*" + string + ".*"
        }
    }).fetch();

    for (var i = 0; i < eventTypes.length; i++) {
        identities.push(eventTypes[i]._id);
    }

    var events = Events.find({
        eventId: {
            $in: identities
        }
    }).count();

    return events;
};
/**
 * Find goals from first half
 * @return {[type]} [description]
 */
topPlayers = function() {
    var identities = [];
    var eventTypes = EventTypes.find({
        identity: {
            $regex: ".*scored.*"
        }
    }).fetch();

    for (var x = 0; x < eventTypes.length; x++) {
        identities.push(eventTypes[x]._id);
    }

    var players = Players.find({
        goalkeeper: false
    }).fetch();

    console.log(players);

    var firstNames = [];
    var goals = [];

    for (var i = 0; i < players.length; i++) {
        firstNames.push(players[i].firstName);

        goals.push(Events.find({
            $and: [{
                playerId: players[i]._id
            }, {
                eventId: {
                    $in: identities
                }
            }, {
                halftime: 1
            }]
        }).count());
    }

    console.log(goals);

    var data = {
        firstNames: firstNames,
        goals: goals
    };

    return data;
};

secondHalfGoals = function() {
    var identities = [];
    var eventTypes = EventTypes.find({
        identity: {
            $regex: ".*scored.*"
        }
    }).fetch();

    for (var x = 0; x < eventTypes.length; x++) {
        identities.push(eventTypes[x]._id);
    }

    var players = Players.find({
        goalkeeper: false
    }).fetch();

    console.log(players);

    var firstNames = [];
    var goals = [];

    for (var i = 0; i < players.length; i++) {
        firstNames.push(players[i].firstName);

        goals.push(Events.find({
            $and: [{
                playerId: players[i]._id
            }, {
                eventId: {
                    $in: identities
                }
            }, {
                halftime: 2
            }]
        }).count());
    }

    console.log(goals);

    var data = {
        firstNames: firstNames,
        goals: goals
    };

    return data;
};
