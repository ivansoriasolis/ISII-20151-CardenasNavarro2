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
            var resultado = (lecturaAc.value)*1 - (lecturaAn.value)*1;
            var costo = resultado*0.56;
           // var igv =costo*0.18;
            document.getElementById('resulataEntra').innerHTML='El KHW consumido es:'+'<div style="color:red">'+resultado+' KW </div><br>'+'El pago a realizar es:'+'<div style="color:blue"> S/. '+costo+' </div> ;
            
                    
        }
        
                if((lecturaAc.value)*1 == (lecturaAn.value)*1){ 
            var resultado = (lecturaAc.value)*1 - (lecturaAn.value)*1;
            var costo = resultado+5;
            document.getElementById('resulataEntra').innerHTML='El KHW consumido es:'+'<div style="color:red">'+resultado+' KW </div><br>'+'El pago minimo es:'+'<div style="color:blue"> S/. '+costo+' </div>';
            
                    
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
