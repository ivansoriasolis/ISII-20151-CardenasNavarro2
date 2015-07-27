(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    var nombreEquipo = null;
    var montoTotal = 0;
    var equipos = [];
    
  
	/*function limpiarFomIN(){
			
    }
	 document.getElementById('cancelar').addEventListener('click',limpiarFomIN,false);
    */
		
					
					
    $(document).on("click", "#butoncalcu", function(evt)
    {
        var lecActual = document.getElementById('idLecturaActual');
        var lecAnterior = document.getElementById('idLecturaAnterior');
		
        var igv = 0.18;
		var consumo = 0;
        var alum_public = 0.0945;
		var primeros30kw = 8.82; 
		var mantenimiento = 0.67;
		var costoKWh = 0.6070;
		
        var cargofijo = 3.59;
        var intereses = 0.08;
        var energia = 0;  	
		
		var electrificacion = 0.42;
		
		*//Condiciones para restringir ingesos
					var condicion1 = (lecAnterior.value)*1 < (lecActual.value)*1;
        			var condicion2 = lecActual.value != '' && lecAnterior.value != '';
        			var condicion = condicion1 && condicion2;
		
		
		//la   condicion para determinar el consumo de menor de 30 kwh
		 if(condicion)
		{     
            var diferenciaLectura = (lecActual.value)*1 - (lecAnterior.value)*1;

            if (diferenciaLectura<=30) {

                energia = diferenciaLectura * costoKWh;
                var costoAlumbrado= energia * alum_public;
                
                var subtotal = energia + costoAlumbrado + cargofijo + mantenimiento;
                var total = subtotal + subtotal * igv;
                var TotalPago = total + electrificacion;
                document.getElementById('idTextCosto').innerHTML='USTED CONSUMIO :'+'<div style="color:#8B4513">'+diferenciaLectura+' KW </div><br>'+'EL SUBTOTAL ES:'+'<div style="color:#B8860B"> S/. '+ subtotal + ' </div><br>' + 'EL PAGO A REALIZAR POR EL CONSUMO ES:'+'<div style="color:#DAA520">S/.'+TotalPago+'</div>';
            }
		
			
			else
            {
                var nuevoresult = diferenciaLectura - 30;//calcula la diferencia
                energia = nuevoresult * costoKWh;
                var costoAlumbrado = energia * alum_public;
                var subtotal = energia + costoAlumbrado + cargofijo + mantenimiento + primeros30kw;
                var Total = subtotal * igv;
                var TotalPago = Total + electrificacion;
                document.getElementById('idTextCosto').innerHTML='USTED HA CONSUMISO:'+'<div style="color:#32CD32">'+diferenciaLectura+' KW </div><br>'+'EL SUBTOTAL ES:'+'<div style="color:#00FF00 style=" font-size:15px"> S/. '+subtotal+' </div><br>'+'EL PAGO A REALIZAR POR EL CONSUMO ES:'+'<div style="color:#7CFC00">S/.'+TotalPago+'</div><br>'+'NO SE OLVIDE QUE PAGE ANTES DE 28 DE CADA MES'+'<div style ="color:#FF4500"' ;  
            }     
			
			
			        else
        {
            if (condicion2 == false) {
                alert("Debe ingresar los campos de lectura");
            }else{
                alert("Error de lectura: Lectura Actual es menor");
            }
            //document.getElementById('idTextCosto').innerHTML='Ingrese nuevamente los datos';
            lecActual.value='';
            lecAnterior.value='';
        }
         activate_page("#mainpage"); 
    });
    
    $(document).on("click", "#cancelar", function(evt)
    {
			alert("Datos cancelados");
			var lecActual = document.getElementById('idLecturaActual');
        	var lecAnterior = document.getElementById('idLecturaAnterior');		
					
		    document.getElementById('idTextCosto').innerHTML='Se canceló la operación';
            lecActual.value='';
            lecAnterior.value='';	
    });

		
		
        if((lecturaAc.value)*1 > (lecturaAn.value)*1)
		
		
		{ 
            var resultado = (lecturaAc.value)*1 - (lecturaAn.value)*1;
			
		if(resultado*1 < 30)
			{
				 console.log('Uds tiene  la posibilidad de afiliarse al FISE');
			
			     var energia = resultado*0.6070;
				var alumbradoP= resultado*0.0945;
				var subtotal = energia+alumbradoP+cargofijo+mantenimiento;
				var total=subtotal*0.18;
				var TotalPago = total+electrificacion;
				
            document.getElementById('resulataEntra').innerHTML='USTED CONSUMIO :'+'<div 		   style="color:#8B4513">'+resultado+' KW </div><br>'+'EL SUBTOTAL ES:'+'<div style="color:#B8860B"> S/. '+subtotal+' </div><br>'+'EL PAGO A REALIZAR POR EL CONSUMO ES:'+'<div style="color:#DAA520">S/.'+TotalPago+'</div>' ;
				
			}
			var nuevoresult = lecturaAc-30;//calcula la diferencia
			var energia = nuevoresult*0.6070;
			var alumbradoP = energia*0.0945;
			var subtotal = energia+alumbradoP+cargofijo+mantenimiento+primeros30kw;
			var Total =subtotal*0.18;
			var TotalPago = Total+electrificacion;
			
			
         
            document.getElementById('resulataEntra').innerHTML='USTED HA CONSUMISO:'+'<div 		   style="color:#32CD32">'+resultado+' KW </div><br>'+'EL SUBTOTAL ES:'+'<div style="color:#00FF00 style=" font-size:15px"> S/. '+subtotal+' </div><br>'+'EL PAGO A REALIZAR POR EL CONSUMO ES:'+'<div style="color:#7CFC00">S/.'+TotalPago+'</div><br>'+'NO SE OLVIDE QUE PAGE ANTES DE 28 DE CADA MES'+'<div style ="color:#FF4500"' ;
            
                    
        }
		  else if((lecturaAc.value)*1==(lecturaAn.value)*1)
		
		
		{ 
			
			
			alert("USTED NO TUVO CONSUMO EN ESTA VEZ");
            var resultado = lecturaAc.value*1;

		    var subtotal = cargofijo+intereses+mantenimiento;
			var Total =subtotal*0.18;
			var TotalPago = Total+electrificacion;
		 
			//var pago1 = "hola";
			
         
            document.getElementById('resulataEntra').innerHTML='SU CONSUMO ES:'+'<div 		   style="color:#000000">'+resultado+' KW </div><br>'+'El subtotal es:'+'<div style="color:blue"> S/. '+subtotal+' </div><br>'+'Pago a realizar por el consumo:'+'<div style="color:yellow">S/.'+ TotalPago+'</div>' ;
            
                    
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
