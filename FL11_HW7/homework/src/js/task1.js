// Your code goes here
let email = prompt("enter your email")
if (email===""||email===null) {
	alert("Canceled");
} else if (email.length<6) {
	alert("I don't know any emails having name length less than 6 symbols");
} else if (email==="user@gmail.com"||email==="admin@gmail.com") {
	let password = prompt("enter your password");
	if (password===""||password===null) {
		alert("Canceled");		
	} else if(email==="user@gmail.com"&&password==="UserPass"||email==="admin@gmail.com"&&password==="AdminPass") {
		let answer = confirm("Do you want to change your password?");
		if (!answer) {
			alert("You have failed the change.");
		} else {
			let oldPassword = prompt('enter your old password');
			if (email==="user@gmail.com") {
				if(oldPassword===password) {
					let newPassword = prompt('enter your new password');
					if (newPassword.length<5) {
						alert("It’s too short password. Sorry.");
					} else {
						let confirmPassword = prompt('confirm your new password')
						if (confirmPassword===newPassword) {
							alert("You have successfully changed your password.");
						} else {
							alert("You wrote the wrong password.");
						}
					}
				} else {
					alert("Wrong password");
				}
			}
			if (email==="admin@gmail.com") {
				if(oldPassword===password) {
					let newPassword = prompt('enter your new password');
					if (newPassword.length<5) {
						alert("It’s too short password. Sorry.");
					} else {
						let confirmPassword = prompt('confirm your new password')
						if (confirmPassword===newPassword) {
							alert("You have successfully changed your password.");
						} else {
							alert("You wrote the wrong password.");
						}
					}
				} else {
					alert("Wrong password");
				}
			}	
		}
	} else {
		alert("Wrong password");
	}
} else {
	alert("I don’t know you")
}