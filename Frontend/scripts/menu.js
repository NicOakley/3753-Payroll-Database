//import var session_id from login.js
import session_id from './login.js';


function logout(){
    //clear session id from login.js
    console.log(session_id);
    window.location.href = "http://localhost/payroll/Frontend/views/login.html";
}