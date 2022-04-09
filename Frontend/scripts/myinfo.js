if(localStorage.getItem("session_id") == undefined) {
    window.location.href = "http://localhost/payroll/Frontend/views/login.html";
}

$(document).ready(function() {
    getMyInfo();
});

$(".logout").click(function(){
    localStorage.removeItem("session_id");
    window.location.href = "http://localhost/payroll/Frontend/views/login.html";
});

function getMyInfo() {
    console.log("getMyInfo");
    $.get("http://localhost/payroll/Backend/server.php?action=getMyInfo&id=" + localStorage.getItem("session_id"), function(data){
        var html = "";
        $(data).each(function(key, object) {
            html += "<tr><td>" + object['id'] + "</td><td>" + object['first_name'] + "</td>" + "<td>" + object['last_name'] + "</td>" + "<td>" + object['email'] + "</td>" + "<td>" + object['phone'] + "</td>"
            html += "<td>" + object['hire_date'] + "</td>" + "<td>" + object['job_title'] + "</td>" + "<td>" + object['salary'] + "</td>" + "<td>" + object['hours'] + "</td>" + "<td>" + object['city'] + "</td>"
        });
        $(".myinfo-table").html(html);
        
    });
}
