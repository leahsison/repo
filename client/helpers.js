import { Template } from 'meteor/templating';
/*
Template.registerHelper('equals', function(param1,param2){
	return param1 == param2;
});
*/
Template.dashboard.helpers({
	ifHead: function() {
		return "head" === Meteor.user().profile.account;
	},

	ifGuardian: function() {
		return "schomember" === Meteor.user().profile.account;
	}
});