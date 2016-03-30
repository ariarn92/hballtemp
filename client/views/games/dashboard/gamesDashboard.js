drawBars = function(firstHalf, secondHalf) {
    var weekData = {
        labels: firstHalf.firstNames,
        datasets: [
            {
                label: "First half",
                fillColor: "#D65251",
                strokeColor: "#D65251",
                highlightFill: "#D63F3E",
                highlightStroke: "#D63F3E",
                data: firstHalf.goals
            },
            {
                label: "Second half",
                fillColor: "#14acde",
                strokeColor: "#14acde",
                highlightFill: "#D63F3E",
                highlightStroke: "#D63F3E",
                data: secondHalf.goals
            }
        ]
    };

    var weekOptions = {
        //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
        scaleBeginAtZero : true,
        //Boolean - Whether grid lines are shown across the chart
        scaleShowGridLines : true,
        //String - Colour of the grid lines
        scaleGridLineColor : "rgba(0,0,0,.05)",
        //Number - Width of the grid lines
        scaleGridLineWidth : 1,
        //Boolean - Whether to show horizontal lines (except X axis)
        scaleShowHorizontalLines: true,
        //Boolean - Whether to show vertical lines (except Y axis)
        scaleShowVerticalLines: true,
        //Boolean - If there is a stroke on each bar
        barShowStroke : true,
        //Number - Pixel width of the bar stroke
        barStrokeWidth : 2,
        //Number - Spacing between each of the X value sets
        barValueSpacing : 5,
        //Number - Spacing between data sets within X values
        barDatasetSpacing : 1,
        //String - A legend template
        legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",

        responsive: true,
    };

    var ctx = document.getElementById("theWeek").getContext("2d");
    var myBarChart = new Chart(ctx).Bar(weekData, weekOptions);
};

Template.gamesDashboard.onRendered(function () {
    Tracker.autorun(function () {
        var firstHalf = topPlayers();
        var secondHalf = secondHalfGoals();
        drawBars(firstHalf, secondHalf);
    });
});

Template.gamesDashboard.helpers({
    getFreeThrows: function() {
        var freeThrows = this.freeThrows;
        if (freeThrows) {
            return freeThrows;
        } else {
            return 0;
        }
    },
    gameHasStarted: function() {
        if(this.started === 1)
            return true;
    },
    newsFeed: function() {
        var events = Events.find({}, {sort: {createdAt: -1}}).fetch();

        var messages = [];

        for (var i = 0; i < events.length; i++) {
            messages.push({
                time: moment(events[i].createdAt).fromNow(),
                player: Players.findOne({_id: events[i].playerId}).firstName,
                message: EventTypes.findOne({_id: events[i].eventId}).message
            });
        }

        console.log("MEssages: " + messages);

        return messages;
    },
    lostBalls: function() {
        var data = getType("lostball");

        return data;
    },
    opponentGoals: function() {
        var identities = [];
        var eventTypes = EventTypes.find({identity: {$regex : ".*scored.*"}}).fetch();

        for (var i = 0; i < eventTypes.length; i++) {
            identities.push(eventTypes[i]._id);
        }

        var goalkeepers = Players.find({goalkeeper: true}).fetch();

        var goalkeepersId = [];
        for (var x = 0; x < goalkeepers.length; x++) {
            goalkeepersId.push(goalkeepers[x]._id);
        }

        var events = Events.find({
                        $and : [
                            {eventId: { $in: identities }},
                            {playerId: { $in: goalkeepersId }}
                    ]}).count();

        console.log("Fengin mörk: " + events);

        return events;
    },
    saveRatio: function() {
        // Varðir boltar / (Varðir boltar + Fengin mörk)
        var defended = [];
        var eventTypes = EventTypes.find({identity: {$regex : ".*defended.*"}}).fetch();

        for (var i = 0; i < eventTypes.length; i++) {
            defended.push(eventTypes[i]._id);
        }

        var goalkeepers = Players.find({goalkeeper: true}).fetch();

        var goalkeepersId = [];
        for (var x = 0; x < goalkeepers.length; x++) {
            goalkeepersId.push(goalkeepers[x]._id);
        }

        var events = Events.find({
                        $and : [
                            {eventId: { $in: defended }},
                            {playerId: { $in: goalkeepersId }}
                    ]}).count();

        console.log("Varðir boltar: " + events);

        var scoredAgainst = [];
        var eventTypes2 = EventTypes.find({identity: {$regex : ".*scored.*"}}).fetch();

        for (var y = 0; y < eventTypes2.length; y++) {
            scoredAgainst.push(eventTypes2[y]._id);
        }

        var events2 = Events.find({
                        $and : [
                            {eventId: { $in: scoredAgainst }},
                            {playerId: { $in: goalkeepersId }}
                    ]}).count();

        console.log("Mörk fengin á okkur: " + events);

        var percentage = events / (events + events2);

        if(isNaN(percentage)) {
            return 0;
        } else {
            return percentage.toFixed(2) * 100;
        }
    },
    skotnyting: function() {
        // Markmenn
        var goalkeepersId = [];
        var goalkeepers = Players.find({goalkeeper: true}).fetch();
        for (var x = 0; x < goalkeepers.length; x++) {
            goalkeepersId.push(goalkeepers[x]._id);
        }

        var identities = [];
        var eventTypes = EventTypes.find({identity: {$regex : ".*scored.*"}}).fetch();

        for (var i = 0; i < eventTypes.length; i++) {
            identities.push(eventTypes[i]._id);
        }

        // Mörk hjá útileikmönnum
        var goals = Events.find({
                        $and : [
                            {eventId: { $in: identities }},
                            {playerId: { $nin: goalkeepersId }}
                    ]}).count();

        console.log("Mörk hjá útileikmönnum: " + goals);

        var identities2 = [];
        var eventTypes2 = EventTypes.find({identity: {$regex : ".*defended.*"}}).fetch();

        for (var y = 0; y < eventTypes2.length; y++) {
            identities2.push(eventTypes2[y]._id);
        }

        var opponentSaves = Events.find({
                        $and : [
                            {eventId: { $in: identities2 }},
                            {playerId: { $nin: goalkeepersId }}
                    ]}).count();

        console.log("Varið hjá andstæðingi: " + opponentSaves);

        var identities3 = [];
        var eventTypes3 = EventTypes.find({identity: {$regex : ".*off-target.*"}}).fetch();

        for (var k = 0; k < eventTypes3.length; k++) {
            identities3.push(eventTypes3[k]._id);
        }

        var skotIStong =  Events.find({
                        $and : [
                            {eventId: { $in: identities3 }},
                            {playerId: { $nin: goalkeepersId }}
                    ]}).count();

        console.log("Skot í stöng: " + skotIStong);

        var summa = goals / (goals + opponentSaves + skotIStong) * 100;

        if(isNaN(summa)) {
            return 0;
        } else {
            return summa.toFixed(0);
        }
    },
    soknarnyting: function() {
        // Markmenn
        var goalkeepersId = [];
        var goalkeepers = Players.find({goalkeeper: true}).fetch();
        for (var x = 0; x < goalkeepers.length; x++) {
            goalkeepersId.push(goalkeepers[x]._id);
        }

        var identities = [];
        var eventTypes = EventTypes.find({identity: {$regex : ".*scored.*"}}).fetch();

        for (var i = 0; i < eventTypes.length; i++) {
            identities.push(eventTypes[i]._id);
        }

        // Mörk hjá útileikmönnum
        var goals = Events.find({
                        $and : [
                            {eventId: { $in: identities }},
                            {playerId: { $nin: goalkeepersId }}
                    ]}).count();

        console.log("Mörk hjá útileikmönnum: " + goals);

        var identities2 = [];
        var eventTypes2 = EventTypes.find({identity: {$regex : ".*defended.*"}}).fetch();

        for (var y = 0; y < eventTypes2.length; y++) {
            identities2.push(eventTypes2[y]._id);
        }

        var opponentSaves = Events.find({
                        $and : [
                            {eventId: { $in: identities2 }},
                            {playerId: { $nin: goalkeepersId }}
                    ]}).count();

        console.log("Varið hjá andstæðingi: " + opponentSaves);

        var identities3 = [];
        var eventTypes3 = EventTypes.find({identity: {$regex : ".*off-target.*"}}).fetch();

        for (var k = 0; k < eventTypes3.length; k++) {
            identities3.push(eventTypes3[k]._id);
        }

        var skotIStong =  Events.find({
                        $and : [
                            {eventId: { $in: identities3 }},
                            {playerId: { $nin: goalkeepersId }}
                    ]}).count();

        console.log("Skot í stöng: " + skotIStong);


        var lostBalls = getType("lostball");

        var summa = goals / (goals + opponentSaves + skotIStong + lostBalls) * 100;

        if(isNaN(summa)) {
            return 0;
        } else {
            return summa.toFixed(0);
        }
    },
    framlag: function() {
        var game = Games.findOne({"_id": this._id});

        var scores = game.scores;

        return scores;
    }
});
