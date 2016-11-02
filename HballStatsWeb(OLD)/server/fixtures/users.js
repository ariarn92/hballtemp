Meteor.startup(function () {
	if (Meteor.users.find().count() === 0) {
		var userId = Accounts.createUser({
			username: "fram",
			email: "fram@fram.is",
			password: "safamyri",
			profile: {
				name: "Knattspyrnufélagið FRAM"
			}
		});
	}
});
