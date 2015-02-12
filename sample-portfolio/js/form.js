function validateMessage() {
	if(($.trim($("#contact-message").val()).length) < 10) {
		$("#contact-message").addClass("required");
	}
	else $("#contact-message").removeClass("required");
}

function validateEmail() {
	var email = $("#contact-email").val();
	jQuery.post("includes/validate_email.php",{email: email}, 
			function (data) {
				if (data != 1) {
					$("#contact-email").addClass("required");
				};
				if (data == 1) {
					$("#contact-email").removeClass("required");
				};
			}
	);	
}
function validateSubject() {
	if(($.trim($("#contact-subject").val()).length) == 0) {
		$("#contact-subject").addClass("required");
	}
	else $("#contact-subject").removeClass("required");
}

function sendMessage() {
	validateEmail();
	validateSubject();
	validateMessage();
	if (!$("#contact-email,#contact-message","#contact-subject").hasClass("required")) {
		name = $("#contact-name").val();
		email = $("#contact-email").val();
		subject = $("#contact-subject").val();
		message= $("#contact-message").val().replace(/<\/?[^>]+>/gi, '');
		jQuery.post("includes/send_message.php",{name : name, email : email, subject : subject, message : message},
			function (status) {
				$("#message-status").slideDown(300).html(status);
				setTimeout(function() {
				      $("#message-status").slideUp(300).html('<!-- status goes here -->');
				}, 10000);
				$("#contact-form")[0].reset();
			}
		
		);
	}
}