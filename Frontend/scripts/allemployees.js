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

$(document).ready(function() {
    getAllEmployees();
    $(".add-employee-form").hide();
});

function getAllEmployees() {
    $.get("http://localhost/payroll/Backend/server.php?action=getAllEmployees", function(data){
        var html = "";
        $(data).each(function(key, object) {
            html += "<tr><td>" + object['id'] + "</td><td>" + object['first_name'] + "</td>" + "<td>" + object['last_name'] + "</td>" + "<td>" + object['email'] + "</td>" + "<td>" + object['phone'] + "</td>"
            html += "<td>" + object['hire_date'] + "</td>" + "<td>" + object['job_title'] + "</td>" + "<td>" + object['salary'] + "</td>" + "<td>" + object['hours'] + "</td>" + "<td>" + object['city'] + 
                    "</td><td><a style='cursor: pointer;' onclick='deleteEmployee()'>-</a></td>"
        });
        $(".myinfo-table").html(html);
    });
}

$(".logout").click(function(){
    localStorage.removeItem("session_id");
    window.location.href = "http://localhost/payroll/Frontend/views/login.html";
});

function deleteEmployee(){
    $.get("http://localhost/payroll/Backend/server.php?action=deleteEmployee&id=" + localStorage.getItem("session_id"), function(data){
    });
}


// add employee code here
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
