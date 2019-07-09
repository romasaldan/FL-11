let email = prompt('enter your email');
const MIN_LENGTH_OF_EMAIL = 6;
const MIN_LENGTH_OF_PASSWORD = 5;
if (email===''||email===null) {
	alert('Canceled');
} else if (email.length<MIN_LENGTH_OF_EMAIL) {
	alert('I don’t know any emails having name length less than 6 symbols');
} else if (email==='user@gmail.com'||email==='admin@gmail.com') {
	let password = prompt('enter your password');
	if (password===''||password===null) {
		alert('Canceled');		
	} else if(email==='user@gmail.com'&&password==='UserPass'||email==='admin@gmail.com'&&password==='AdminPass') {
		let answer = confirm('Do you want to change your password?');
		if (!answer) {
			alert('You have failed the change.');
		} else {
			let oldPassword = prompt('enter your old password');
			if (email==='user@gmail.com') {
				if(oldPassword===password) {
					let newPassword = prompt('enter your new password');
					if (newPassword.length<MIN_LENGTH_OF_PASSWORD) {
						alert('It’s too short password. Sorry.');
					} else {
						let confirmPassword = prompt('confirm your new password')
						if (confirmPassword===newPassword) {
							alert('You have successfully changed your password.');
						} else {
							alert('You wrote the wrong password.');
						}
					}
				} else {
					alert('Wrong password');
				}
			}
			if (email==='admin@gmail.com') {
				if(oldPassword===password) {
					let newPassword = prompt('enter your new password');
					if (newPassword.length<MIN_LENGTH_OF_PASSWORD) {
						alert('It’s too short password. Sorry.');
					} else {
						let confirmPassword = prompt('confirm your new password');
						if (confirmPassword===newPassword) {
							alert('You have successfully changed your password.');
						} else {
							alert('You wrote the wrong password.');
						}
					}
				} else {
					alert('Wrong password');
				}
			}	
		}
	} else {
		alert('Wrong password');
	}
} else {
	alert('I don’t know you')
}
