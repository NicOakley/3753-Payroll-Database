if(localStorage.getItem("session_id") != undefined) {
    window.location.href = "http://localhost/payroll/Frontend/views/menu.html";
}


// if enter key is pressed on username or password, login
$("#username").keypress(function(e) {
    if (e.which == 13) {
        login();
    }
});

$("#password").keypress(function(e) {
    if (e.which == 13) {
        login();
    }
});

function login() {
    var username = $("#username").val();
    var password = $("#password").val();
    $.get("http://localhost/payroll/Backend/server.php?action=login&username="+username+"&password="+password, function(data){
        //search through each login_id to see if it matches the username and password
        $(data).each(function(key, object) {
            if(object['username'] == username && object['password'] == password) {
                //set session id
                localStorage.setItem("session_id", object['id']);
                // navigate to menu page if session id is set
                if(localStorage.getItem("session_id") != null) {
                    console.log(localStorage.getItem("session_id"));
                    if(object['role'] == 'admin') {
                        window.location.href = "http://localhost/payroll/Frontend/views/admin-menu.html";
                    }else
                    window.location.href = "http://localhost/payroll/Frontend/views/menu.html";
                }
            } else {
                //display error message
                $("#login-error").html("<p class='text-light'>Invalid username or password</p>");
                //clear username and password
                $("#username").val("");
                $("#password").val("");
                //fade out error message
                $("#login-error").fadeOut(1000);
            }
        });
    });
}
