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
    console.log("dada");
    getPayHistory();
});

$(".logout").click(function(){
    localStorage.removeItem("session_id");
    window.location.href = "http://localhost/payroll/Frontend/views/login.html";
});

function getPayHistory() {
    $.get("http://localhost/payroll/Backend/server.php?action=getAllPayHistory&id=" + localStorage.getItem("session_id"), function(data){
        var html = "";
        $(data).each(function(key, object) {
            html +=  "<tr><td>" + object['id'] + "</td><td>" + object['pay_id'] + "</td><td>" + object['amount'] + "</td><td>"
             + object['date'] + "</td><td><a class='btn' style='cursor:pointer;' onclick='deletePay()'>-</a></td></tr>"; 
        });

        $(".allpayhistory-table").html(html);
    });
}

function deletePay() {

    $.get("http://localhost/payroll/Backend/server.php?action=getAllPayHistory", function(data){
        $(data).each(function(key, object) {
            console.log(object['id']);
        });

    });


}