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

$(".logout").click(function(){
    localStorage.removeItem("session_id");
    window.location.href = "http://localhost/payroll/Frontend/views/login.html";
});


//---------------------------------------------------------------------------------------------------------------------


// On document ready
$(document).ready(function() {
    getAllEmployees();
    $(".add-employee-form").hide();
});

// Load all employees to the table
function getAllEmployees() {
    console.log("getAllEmployees");
    $.get("http://localhost/payroll/Backend/server.php?action=getAllEmployees", function(data){
        var html = "";
        $(data).each(function(key, object) {
            html += "<tr><td>" + object['id'] + "</td><td>" + object['first_name'] + "</td>" + "<td>" + object['last_name'] + "</td>" + "<td>" + object['email'] + "</td>" + "<td>" + object['phone'] + "</td>"
            html += "<td>" + object['hire_date'] + "</td>" + "<td>" + object['job_title'] + "</td>" + "<td>" + object['salary'] + "</td>" + "<td>" + object['hours'] + "</td>" + "<td>" + object['city'] + "</td>";
        });
        $(".myinfo-table").html(html);
    });
}

// remove given employee (by input id)
function deleteEmployee(){
    var idToDelete = $("#id-input").val();
    $.get("http://localhost/payroll/Backend/server.php?action=deleteEmployee&id=" + idToDelete, function(data){
    });
}


// show/hide add employee form
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

//add employee (post)
function addEmployee() {
    console.log("addEmployee");
    var first_name = $("#first_name").val();
    var last_name = $("#last_name").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var hire_date = $("#hire_date").val();
    var job_title = $("#job_title").val();
    var salary = $("#salary").val();
    var hours = $("#hours").val();
    var city = $("#city").val();
    var data = {
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone: phone,
        hire_date: hire_date,
        job_title: job_title,
        salary: salary,
        hours: hours,
        city: city
    };

    console.log(data);
    $.get("http://localhost/payroll/Backend/server.php?action=addEmployee", data, function(data){
      });

}

$("add-employee-button").submit(function (e) { 
    e.preventDefault();
    addEmployee();
    
});