// document.getElementById("submit").onclick = function(){
//     submit()
// }
// function submit(){
//     alert('정상적으로 제출되었습니다.')
// }
function check(){
    var phone = document.getElementById( "cphone" ).value;
    var num = /^010[0-9]{4}[0-9]{4}$/;
    if ( num.test(phone) == false ) {
        alert("번호형식이 올바르지 않습니다.");
      } else {
        alert("올바른 번호 형식입니다.");
      }
}
function echeck(){
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // alert(document.getElementById("email").value);
    var email = document.getElementById( "email" ).value;
    if (re.test(email) == false) {
        alert("메일형식이 올바르지 않습니다.");
      }else{
        alert("올바른 메일 형식입니다.");
      }
}
function allCheck(){
    alert("제출이 완료되었습니다.")
}

