$(document).ready(function(){
    $("#signup-modal").modal('show');

    // SCRIPT TO CREATE CSRF_TOKEN IN EXTERNAL JAVASCRIPT FILE.
    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }


    $("#signup").click(function(){ 
        var reg =  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (reg.test($("#email").val())){
            let password1=$("#pwd1").val();
            let password2=$("#pwd2").val();

            if (password1==password2){
                $.ajax({    
                    headers: {'X-CSRFToken': getCookie('csrftoken')},
                    method: "POST",
                    url: window.location.href,
                    dataType: "json",    
                    data: {
                        email :$("#email").val(),
                        password:password1
                    },
                    success: function(response){

                        $("#signup-modal").modal('hide');
                        alert(response.msg);
                    },
                    error: function(){

                        $("#signup-modal").modal('hide');
                        alert("Something wrong!");

                    }
                });
            }else{
                alert("Password didn't matched!");

            }
        }
        else{
            alert("Invalid Email !");
            $("#signup-modal").modal('hide');

        }
    });
});