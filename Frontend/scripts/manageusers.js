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
    $(".add-employee-form").hide();
});

function getAllEmployees() {
    console.log("getlogin");
    $.get("http://localhost/payroll/Backend/server.php?action=login", function(data){
        var html = "";
        $(data).each(function(key, object) {
            html += "<tr><td>" + object['id'] + "</td><td>" + object['username'] + "</td>" + "<td>" + object['password'] + "</td>" + "<td>" + object['role'] + "</td>";
        });
        $(".login-table").html(html);
    });
}

// add employee form
$(".show-hide-btn").click(function (e) {
    e.preventDefault();
    // if .show-hide-btn has style display-none, then show the form
    if ($(".add-employee-form").css("display") == "none") {
        $(".add-employee-form").show();
        $(".show-hide-btn").text("Hide form");
    } else {
        $(".add-employee-form").hide();
        $(".show-hide-btn").text("Add Employee");
    }
});

function deleteUser(){
    var idToDelete = $("#id-input").val();
    $.get("http://localhost/payroll/Backend/server.php?action=deleteLogin&id=" + idToDelete, function(data){

    });
}
