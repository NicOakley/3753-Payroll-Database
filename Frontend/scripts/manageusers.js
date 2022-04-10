if(localStorage.getItem("session_id") == undefined) {
    window.location.href = "http://localhost/payroll/Frontend/views/login.html";
}

$.get("http://localhost/payroll/Backend/server.php?action=getUserRole&id=" + localStorage.getItem("session_id"), function(data){
    $(data).each(function(key, object) {
    if(object['role'] != "admin") {
        localStorage.removeItem("session_id");
        window.location.href = "http://localhost/payroll/Frontend/views/login.html";
        }
    });
});

// -------------------------------------------------

$(document).ready(function() {
    getAllEmployees();
    $(".add-user-form").hide();
});

function getAllEmployees() {
    console.log("getlogin");
    $.get("http://localhost/payroll/Backend/server.php?action=login", function(data){
        var html = "";
        $(data).each(function(key, object) {
            html += "<tr><td>" + object['id'] + "</td><td>" + object['username'] + "</td>" + "<td>" + object['password'] + "</td>" + "<td>" + object['role'] + "</td>" + "<td>" + object['phone'] + "</td>"
                    "</td><td><a style='cursor: pointer;' onclick='deleteUser()'>-</a></td>"
        });
        $(".login-table").html(html);
    });
}


function deleteUser(){
    $.get("http://localhost/payroll/Backend/server.php?action=deleteLogin&id=" + localStorage.getItem("session_id"), function(data){
    });
}
