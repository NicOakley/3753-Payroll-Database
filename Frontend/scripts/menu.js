console.log(localStorage.getItem("session_id"));
if(localStorage.getItem("session_id") == undefined) {
    window.location.href = "http://localhost/payroll/Frontend/views/login.html";
}
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