if(localStorage.getItem("session_id") == undefined) {
    window.location.href = "http://localhost/payroll/Frontend/views/login.html";
}

$(document).ready(function() {
    console.log("dada");
    getPayHistory();
});

$(".logout").click(function(){
    localStorage.removeItem("session_id");
    window.location.href = "http://localhost/payroll/Frontend/views/login.html";
});

function getPayHistory() {
    $.get("http://localhost/payroll/Backend/server.php?action=getPayHistory&id=" + localStorage.getItem("session_id"), function(data){
        var html = "";
        $(data).each(function(key, object) {
            html += "<tr><td>" + object['pay_id'] + "</td><td>" + object['amount'] + "</td><td>" + object['date'] + "</td></tr>"; 
        });

        $(".payhistory-table").html(html);
    });
}