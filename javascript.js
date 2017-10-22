/* webcoder assignment JavaScript */
$(function () {
    
        // on submitting the form
        $('form').submit(function (event) {
            // prevent the default action of reloading the page
            event.preventDefault();
    
            var sendData = {};
            $(event.target.nodeName + ' :input').each(function(){
                sendData[this.name] = $(this).val();
            });
    
            var posting = $.ajax({
                type: 'POST',
                url: $(event.target.nodeName).prop('action'),
                data: sendData
            });
    
            posting.done(function (response) {
                console.log(response);
                
                if($('#alert-id').length > 0){
                    $('#alert-id').prop('hidden', false);
                } else {
                    $('form').append('<p>Thank you</p>')
                }
                
                $('form :input').each(function(){
                    $(this).val('');
                })
            });
            posting.fail(function (response) {
                console.log(response);
            });
        });
    
    // RESPONSE ALERT WINDOW-------------------------------------------------------------------------------
    /* include the following HTML to use:
    <div class="form-group">
        <button type="submit" class="btn btn-default my-btn form-control" id="submit-id">submit</button>                   
        <div class="alert alert-danger alert-dismissible fade in" hidden id="alert-id">
            <button type="button" class="close" id="close-id"><span>&times;</span></button>
            Thank you! I will get in touch.
        </div>
    </div>
    */
    
        // on clicking the X button
        $('#close-id').click(function(){
            // hide the alert panel by adding the hidden property
            $('#alert-id').prop('hidden', true);
            // optionally reload the webpage
            location.reload();
        });
    
    });


// Get Current Time
function display_ct() {
        var strcount;
        var x = new Date();
        var y1=x.getMonth()+1;
        var z1=x.getYear()-100;
            if(y1>12){z=z1+1; y=1;}
                else {y=y1;   z=z1;}    
        var DDMMYY=x.getDate() + "/" + y + "/" + z;
            // (getMonth & getYear func has bug)  var x1=x.getMonth() + "/" + x.getDate() + "/" + x.getYear();
            // x1 = x1 + " - " +  x.getHours( )+ ":" +  x.getMinutes() + ":" +  x.getSeconds();
            // document.getElementById('ct').innerHTML = x1;
            // tt=display_c();
            document.getElementById('e1').value = DDMMYY;
                      }
        display_ct();
// End of Current Time


// Enable #x
$( "#e1" ).prop( "disabled", false ); 
if(e1.length>0)
    {
    // Disable #x
    $( "registerField" ).prop( "disabled", false );
    }
else
    {
    // Enable #x
    $( "registerField" ).prop( "disabled", true );
    } 