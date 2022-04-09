if(localStorage.getItem("session_id") == undefined) {
    window.location.href = "http://localhost/payroll/Frontend/views/login.html";
}

//check if user role is admin from server.php
$.get("http://localhost/payroll/Backend/server.php?action=getUserRole&id=" + localStorage.getItem("session_id"), function(data){
    $(data).each(function(key, object) {
    if(object['role'] != "admin") {
        localStorage.removeItem("session_id");
        window.location.href = "http://localhost/payroll/Frontend/views/login.html";
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

$(".allemployees").click(function(){
    window.location.href = "http://localhost/payroll/Frontend/views/allemployees.html";
});

$(".allpay").click(function(){
    window.location.href = "http://localhost/payroll/Frontend/views/allpay.html";
});

$(".manageusers").click(function(){
    window.location.href = "http://localhost/payroll/Frontend/views/manageusers.html";
});
