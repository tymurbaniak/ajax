$(function(){
    $("form#addtogroup-form").submit(function(){
         
        //if not call by ajax
        //submit to showformAction
        if (is_xmlhttprequest == 0) 
            return true;
         
        //if by ajax
        //check by ajax : validatepostajaxAction
        $.post(urlform,
               { 'name' : $(':input') }, function(itemJson){
                 
                var error = false;
                console.log(itemJson.name , "kek");
                if (itemJson.name != undefined){
                    
                    if ($(".modal-body ul").length == 0){

                        $(".modal-body").append("<ul></ul>");
                    }
                     
                    for(var i=0;i<itemJson.name.length;i++)
                    {
                       if ($(".modal-body ul").html().substr(itemJson.name[i]) == '')
                            $(".modal-body ul").append('<li>'+itemJson.name[i]+'</li>');
                    }
                     
                    error = true;
                }
                 
                if (!error){
                    $("#winpopup").modal('hide');
                     
                    if (itemJson.success == 1){
                        alert('Data saved');   
                    }
                }
                 
        }, 'json');
         
        return false;
    });
});    