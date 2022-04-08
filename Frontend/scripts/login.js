// script for login page


// Login function
$("login-button").click(function (e) { 
    e.preventDefault();

    var username = $("#username").val();
    var password = $("#password").val();

    $.ajax({
        url: "http://localhost:8080/login",
        type: "POST",
        data: {
            username: username,
            password: password
        },
        success: function (data) {
            if (data.success) {
                window.location.href = "http://localhost:8080/";
            } else {
                $("#error-message").html(data.message);
            }
        }
    });

});