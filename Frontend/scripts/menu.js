console.log(localStorage.getItem("session_id"));
if(localStorage.getItem("session_id") == undefined) {
    window.location.href = "http://localhost/payroll/Frontend/views/login.html";
}

//check if user role is admin from server.php
$.get("http://localhost/payroll/Backend/server.php?action=getUserRole&id=" + localStorage.getItem("session_id"), function(data){
    $(data).each(function(key, object) {
    if(object['role'] == "admin") {
        window.location.href = "http://localhost/payroll/Frontend/views/admin-menu.html";
        }
    });
});


//on click of logout button, logout
$(".logout").click(function(){
    localStorage.removeItem("session_id");
    window.location.href = "http://localhost/payroll/Frontend/views/login.html";
});

$(".payhistory").click(function(){
    window.location.href = "http://localhost/payroll/Frontend/views/payhistory.html";
});

$(".myinfo").click(function(){
    window.location.href = "http://localhost/payroll/Frontend/views/myinfo.html";
});
