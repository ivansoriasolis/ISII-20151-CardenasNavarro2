(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #butoncalcu */
    
    
        /* button  #butoncalcu */
    $(document).on("click", "#butoncalcu", function(evt)
    {
        var lecturaAn = document.getElementById('lec1');
        var lecturaAc = document.getElementById('lec2');
        
        if((lecturaAc.value)*1 >= (lecturaAn.value)*1){ 
            var resultado = (lecturaAn.value)*1 + (lecturaAc.value)*1;
            document.getElementById('resulataEntra').innerHTML='El resultado es:'+'<div style="color:yellow">'+resultado+'</div>';
        }
        else
        {
            document.getElementById('resulataEntra').innerHTML='Ingrese nuevamente los datos';
            lecturaAc.value='';
            lecturaAn.value='';
        }
         activate_page("#mainpage"); 
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
