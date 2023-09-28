
    // verifikacija forme

    $(document).ready(function(){
    })

    function submitMail() {
        
        if(isValidForm())
        {
            sendEmail();
        }
    }

    function isValidForm(){
        var isValid = true;
        var ime = $("#poljeIme").val();
        var prezime = $("#poljePrezime").val();
        var email = $("#poljeEmail").val();

        $(".error").remove();

        if(ime.length < 1){
            $("#poljeIme").after('<span class = "error error-ime">Ovo polje je obavezno!</span>');
            isValid = false;
        }
        if(prezime.length < 1){
            $("#poljePrezime").after('<span class = "error">jelena je car!</span>');
            isValid = false;
        }
        if(email.length < 1 ){
            $("#poljeEmail").after('<span class = "error">Ovo polje je obavezno!</span>');
            isValid = false;
        } else{
            var regEx= new RegExp(
            "^[a-zA-Z0-p._%+-]{1,63}@([a-zA-Z0-9]{1,53}.){1,125}[a-zA-Z]{2,63}$");
            var validEmail = regEx.test(email);
            if(!validEmail){
                $("#poljeEmail").after(
                    '<span class="error">Unesite validnu email adresu</>'
                );
                isValid = false;
            }
        }

        return isValid;
    }

    function sendEmail(){
        let ime = document.getElementById('poljeIme').value;
        let prezime = document.getElementById('poljePrezime').value;
        let brTel = document.getElementById('poljeBrTelefona').value;
        let email = document.getElementById('poljeEmail').value;
        let poruka = document.getElementById('poljePoruka').value;
        let body = 'ime: '+ ime + '<br/> prezime: ' + prezime + '<br/> broj telefona: ' + brTel
            +'<br/> email: ' + email + '<br/> poruka: ' + poruka;

            
            Email.send({
                Host : "smtp.elasticemail.com",
                Username : "dragansimic29@gmail.com",
                Password : "4496F2214B29CBDDEDBBDE10EB59225730CE",
                To : 'dragansimic29@gmail.com',
                From : 'dragansimic29@gmail.com',
                Subject: 'This is subject',
                Body : body
                }).then(
                massage => alert(massage)
                );
                document.getElementById("formaId").reset();
    }

    // // function checkValidationInput() {
    // //     let ime = document.getElementById('poljeIme').value;
    // //     if(ime.length > 0){
    // //         $(".error-ime").hide();
    // //     }
    // //     else {
    // //         $(".error-ime").hide();
    // //         $("#poljeIme").after('<span class = "error error-ime">Ovo polje je obavezno!</span>');
    // //     }
    // }

    $(document).ready(function(){
        $(".popup").click(function(){
            var src= $(this).attr("src");
            $(".modal").modal("show");
            $("#popup-img").attr("src",src);
        });
    });

   

