
if(Meteor.isClient){
	Template.register.events({
		'submit form': function(event, template){
			event.preventDefault();
			
			var emailVar = template.find('#email').value;
			var passwordVar = template.find('#password').value;
			var acctypeVar = $("input[name='acc-type']:checked").val();
			Accounts.createUser({
				email: emailVar,
				password: passwordVar,
				profile: {
					account: acctypeVar
				}
			});
			
		}
	});

	Template.login.events({
		'submit form': function(event, template){
			event.preventDefault();
			var emailVar = template.find('#login-email').value;
			var passwordVar = template.find('#login-password').value;
			Meteor.loginWithPassword(emailVar,passwordVar);
		}
	});

	Template.dashboard.events({
		'click .logout': function(event){
			event.preventDefault();
			Meteor.logout();
		}
	});
}
