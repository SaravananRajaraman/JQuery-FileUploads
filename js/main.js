/************************************************************************/
/*                         Learn to built with @                        */
/*  http://abandon.ie/notebook/simple-file-uploads-using-jquery-ajax    */
/*  http://api.jquery.com/jQuery.ajax/                                  */
/************************************************************************/

$(function(){
    // Variable to store your files
    var files;
    var endpoint;

    // Add events
    $('#file').on('change', function(event){
        // Grab the files and set them to our variable
        files = event.target.files;
    });

    $("#upload").on("click",function(event){
        event.stopPropagation(); // Stop stuff happening
        event.preventDefault(); // Totally stop stuff happening

        // Create a formdata object and add the files
        var data = new FormData();
        $.each(files, function(key, value){
            data.append(key, value);
            console.log(key+"||"+value);
        });

        if($("#urlPost").val()==''){
           endpoint='http://192.168.1.8:4100/kutung/test/fileupload';
        }else{
           endpoint=$('#urlPost').val();
        }
        $.ajax({
            url: endpoint,
            type: 'POST',
            data: data,
            //cache: false,
            //dataType: 'json',
            processData: false, // Don't process the files
            contentType: false, // Set content type to false as jQuery will tell the server its a query string request
            success: function(res){
                console.log(res);
                $('#file').val('');
            },
            error: function(err){
               console.log(err);
                $('#file').val('');
            }
        });
    });
});