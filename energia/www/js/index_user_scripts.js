(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
  
	/*function limpiarFomIN(){
			
    }
	 document.getElementById('cancelar').addEventListener('click',limpiarFomIN,false);
    */
		
					
					
    $(document).on("click", "#butoncalcu", function(evt)
    {
        var lecturaAn = document.getElementById('lec1');
        var lecturaAc = document.getElementById('lec2');
		var igv =0.18;
		var consumo =5;
        
        if((lecturaAc.value)*1 > (lecturaAn.value)*1)
		
		
		{ 
            var resultado = (lecturaAc.value)*1 - (lecturaAn.value)*1;
            var costo = resultado*0.476;
			var pago = costo*0.18;
			
         
            document.getElementById('resulataEntra').innerHTML='El KHW consumido es:'+'<div 		   style="color:red">'+resultado+' KW </div><br>'+'El pago a realizar es:'+'<div style="color:blue"> S/. '+costo+' </div><br>'+'Pago con IGV es:'+'<div style="color:yellow">S/.'+pago+'</div>' ;
            
                    
        }
		        if((lecturaAc.value)*1 == (lecturaAn.value)*1)
		
		
		{ 
            var resultado = lecturaAc.value*1;
            var costo1 = resultado*0.476;
			var pago1 = costo1*0.18;
			
         
            document.getElementById('resulataEntra').innerHTML='El KHW consumido es:'+'<div 		   style="color:red">'+resultado+' KW </div><br>'+'El pago a realizar es:'+'<div style="color:blue"> S/. '+costo1+' </div><br>'+'Pago con IGV es:'+'<div style="color:yellow">S/.'+pago1+'</div>' ;
            
                    
        }
                       
        else
        {
            document.getElementById('resulataEntra').innerHTML='Ingrese nuevamente los datos';
            lecturaAc.value='';
            lecturaAn.value='';
        }
         activate_page("#mainpage"); 
    });
    
        /* button  #cancelar */
/*    $(document).on("click", "#cancelar", function(evt)
    {
			alert();
			var lecturaAn = document.getElementById('lec1');
        	var lecturaAc = document.getElementById('lec2');		
					
		    document.getElementById('resulataEntra').innerHTML='Se cancelo los  datos';
            lecturaAc.value='';
            lecturaAn.value='';	
    });*/
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
