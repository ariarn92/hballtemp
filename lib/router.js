Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
});

Router.route('/', {name: 'home',});

Router.route('/login', {
    name: 'login',
    layoutTemplate: '',
    onBeforeAction: function () {
        if (Meteor.user()) {
            Router.go('home');
            this.next();
        } else {
            this.next();
        }
    }
});

Router.route('/players', {name: 'players'});
Router.route('/players/create', {name: 'insertPlayers'});
Router.route('/players/:_id/edit', {
	name: 'editPlayers',
	data: function() { return Players.findOne(this.params._id); }
});

Router.route('/games', {name: 'games'});
Router.route('/games/create', {name: 'insertGames'});
Router.route('/games/:_id', {
    name: 'gamesDashboard',
    data: function() { return Games.findOne(this.params._id); }
});
Router.route('/games/:_id/play', {
    name: 'gamesPlay',
    data: function() { return Games.findOne(this.params._id); }
});

Router.route('/settings', {name: 'settings'});
Router.route('/settings/eventTypes/:_id', {
    name: 'eventTypes',
    data: function() { return EventTypes.findOne(this.params._id); }
});


var requireLogin = function() {
    if (! Meteor.user()) {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        } else {
            Router.go('login');
        }
    } else {
        this.next();
    }
};

Router.onBeforeAction(requireLogin, {except: ['landing', 'login']});
