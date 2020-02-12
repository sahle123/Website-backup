 $(document).ready(function(){
    $('#send_message').click(function(e){
        
        //Stop form submission & check the validation
        e.preventDefault();

        // Variable declaration
        var error = false;
        var name = $('#name').val();
        var email = $('#email').val();
        var subject = $('#subject').val();
        var message = $('#message').val();
        
        // Form field validation
        if(name.length == 0){
            var error = true;
            $('#name').addClass('error');
        }else{
            $('#name').removeClass('error');
        }
        if(email.length == 0 || email.indexOf('@') == '-1' || email.indexOf('.') == '-1'){
            var error = true;
            $('#email').addClass('error');
        }else{
            $('#email').removeClass('error');
        }
        if(subject.length == 0){
            var error = true;
            $('#subject').addClass('error');
        }else{
            $('#subject').removeClass('error');
        }
        if(message.length == 0){
            var error = true;
            $('#message').addClass('error');
        }else{
            $('#message').removeClass('error');
        }
        
        // If there is no validation error, next to process the mail function
        if(error == false){
            
            /* Post Ajax function of jQuery to get all the data from the submission of the form as soon as the form sends the values to email.php*/
            $.post("email.php", $("#contact_form").serialize(),function(result){
                //Check the result set from email.php file.
                if(result == 'sent'){
                    //If the email is sent successfully, hides form and display success message.
                    $('#contact form').slideUp();
                    $('#contact .message-sent').css('display', 'block'); 
                    
                }else{
                    alert('Failed To Send Message');
                }
            });
        }
    });    
});