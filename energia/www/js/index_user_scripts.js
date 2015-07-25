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
		var alum_public = 2.19;
		var cargofijo = 3.59;
		var energia = 3.88;
		var intereses = 0.08;
		var mantenimiento = 0.68;
		
		var igv = 0.18;
		var consumoIgual = 5;
		
        
		var fose = -12.03;
		
		
		var electrificacion = 0.42;
		
		
        if((lecturaAc.value)*1 > (lecturaAn.value)*1)
		
		
		{ 
            var resultado = (lecturaAc.value)*1 - (lecturaAn.value)*1;
			
			if(resultado >30)
			{
				 console.log('exito el resultado es mayor a 30');
			     var pago = 5;
				 document.getElementById('resulataEntra').innerHTML='El KHW consumido es:'+'<div 		   style="color:red">'+pago+' KW   menima es el consumoo</div>';
				
			}
            var costo = resultado*0.6470;
			var pago = costo*0.18;
			var pagoigv = pago + costo;
			
			
         
            document.getElementById('resulataEntra').innerHTML='El KHW consumido es:'+'<div 		   style="color:red">'+resultado+' KW </div><br>'+'El pago a realizar es:'+'<div style="color:blue"> S/. '+costo+' </div><br>'+'Pago con IGV es:'+'<div style="color:yellow">S/.'+pagoigv+'</div>' ;
            
                    
        }
		  else if((lecturaAc.value)*1==(lecturaAn.value)*1)
		
		
		{  alert("Datos iguales");
            var resultado = lecturaAc.value*1;
            var costo1 = resultado+2;
			var pago1 = "hola";
			
         
            document.getElementById('resulataEntra').innerHTML='El KW consumido es:'+'<div 		   style="color:red">'+resultado+' KW </div><br>'+'El subtotal es:'+'<div style="color:blue"> S/. '+costo1+' </div><br>'+'Pago a realizar por el consumo:'+'<div style="color:yellow">S/.'+pago1+'</div>' ;
            
                    
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
    $(document).on("click", "#cancelar", function(evt)
    {
			alert("Se  cancelara los dato");
			var lecturaAn = document.getElementById('lec1');
        	var lecturaAc = document.getElementById('lec2');		
					
		    document.getElementById('resulataEntra').innerHTML='Se cancelo la operacion';
            lecturaAc.value='';
            lecturaAn.value='';	
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
