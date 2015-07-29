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
    
    /*
        c -> cantidad de equipo
        p -> watts que consume el equipo
        t -> tiempo en horas
        var montoTotalArtefactos = ((equipo.c*(equipo.p * equipo.t))/1000) * costoKWh;
    var equipo = {
        c: null,
        p: null, 
        t: null,
        monto: null
    }
    */
					
    $(document).on("click", "#idbtnCalcular", function(evt)
    {
        var lecActual = document.getElementById('idLecturaActual');
        var lecAnterior = document.getElementById('idLecturaAnterior');
		var igv = 0.18;
		var consumo = 0;
        var alum_public = 0.0945;
		var primeros30kw = 8.82; 
		var mantenimiento = 0.67;
		var costoKWh = 0.6070;
		var electrificacion = 0.42;
		

        var cargofijo = 3.59;
        var intereses = 0.08;
        var energia = 0;     
                //var condicion = ((lecAnterior.value)*1 < (lecActual.value)*1) && (lecActual.value != '' && lecAnterior.value != '');
		var condicion1 = (lecAnterior.value)*1 < (lecActual.value)*1;
        var condicion2 = lecActual.value != '' && lecAnterior.value != '';
        //var condicion3 = (lecActual.value)*1 == (lecAnterior.value)*1;
        var condicion = condicion1 && condicion2;
        
        if(condicion)
		{     
            var diferenciaLectura = (lecActual.value)*1 - (lecAnterior.value)*1;

            if (diferenciaLectura<=30) {
				
				alert("USTED TIENE LA POSIBILIDAD DE AFILIARSE AL FISE");

                energia = diferenciaLectura * costoKWh;
                var costoAlumbrado= energia * alum_public;
                
                var subtotal = energia + costoAlumbrado + cargofijo + mantenimiento;
                var sbtt= subtotal.toFixed(2);
                var total = subtotal + subtotal * igv;
                var TotalPago = total + electrificacion;
                var ppgg= TotalPago.toFixed(2);
                document.getElementById('idTextCosto').innerHTML='USTED CONSUMIO :'+'<div style="color:#8B4513">'+diferenciaLectura+' KW </div><br>'+'EL SUBTOTAL ES: '+'<div style="color:#B8860B"> S/. '+ sbtt + ' </div><br>' + 'EL PAGO A REALIZAR POR EL CONSUMO ES: '+'<div style="color:#DAA520">S/. '+ppgg+'</div><br>'+ 'NO SE OLVIDE QUE PAGE ANTES DEL 28 DE CADA MES'+'<div style ="color:#FF4500"'+'<br>';
            }
            else
            { alert(" SU CONSUMO ES MAYOR QUE  30 KWH");
                var nuevoresult = diferenciaLectura - 30;//calcula la diferencia
                energia = nuevoresult * costoKWh;
                var costoAlumbrado = energia * alum_public;
                var subtotal = (energia + costoAlumbrado + cargofijo + mantenimiento + primeros30kw)*1;
                var sbt = subtotal.toFixed(2);
                var Total = (subtotal * igv)*1;
                var TotalPagar = Total+subtotal+electrificacion;
                var topag = TotalPagar.toFixed(2);
                document.getElementById('idTextCosto').innerHTML='USTED HA CONSUMISO:'+'<div style="color:#32CD32">'+diferenciaLectura+' KW </div><br>'+'EL SUBTOTAL ES :'+'<div style="color:#00FF00 style=" font-size:15px"> S/.  '+sbt+' </div><br>'+'EL PAGO A REALIZAR POR EL CONSUMO ES: '+'<div style="color:#7CFC00">S/. '+topag+'</div><br>'+'NO SE OLVIDE DE PAGAR ANTES DEL 28 DE CADA MES'+'<div style ="color:#FF4500"'+'<br>' ;  
            }            
        }               
        else
        {
            if (condicion2 == false) {
                alert("DEBE INGRESAR LOS CAMPOS");


            }else{
                alert(" ERROR DE LECTURA: LA LECTURA ACTUAL ES MENOR  O SON IGUALES  ");


            }
            //document.getElementById('idTextCosto').innerHTML='Ingrese nuevamente los datos';
            lecActual.value='';
            lecAnterior.value='';
        }
       
      /* if (condicion3 ==true) {
            alert("USTED NO TIENE NINGUN CONSUMO ES IGUAL A 0 ");
                var diferenciaLectura =0;
                var costoAlumbrado = 1* alum_public;
                var subtotal = (costoAlumbrado + cargofijo + mantenimiento )*1;
                var sbt = subtotal.toFixed(2);
                var Total = (subtotal * igv)*1;
                var TotalPagar = Total+subtotal+electrificacion;
                var topag = TotalPagar.toFixed(2);
                document.getElementById('idTextCosto').innerHTML='USTED HA CONSUMISO:'+'<div style="color:#32CD32">'+diferenciaLectura+' KW </div><br>'+'EL SUBTOTAL ES:'+'<div style="color:#00FF00 style=" font-size:15px"> S/. '+sbt+' </div><br>'+'EL PAGO A REALIZAR POR EL CONSUMO ES:'+'<div style="color:#7CFC00">S/.'+topag+'</div><br>'+'NO SE OLVIDE DE PAGAR ANTES DEL 28 DE CADA MES'+'<div style ="color:#FF4500"'+'<br>' ;  


        }
            else{ 
            alert("CONSUMO no son iguales");

            /*lecActual.value='';
            lecAnterior.value='';



        }*/
         activate_page("#mainpage"); 
        
    });
    
    $(document).on("click", "#cancelar", function(evt)
    {
			alert("DATOS CANCELADOS");
			var lecActual = document.getElementById('idLecturaActual');
        	var lecAnterior = document.getElementById('idLecturaAnterior');		
					
		    document.getElementById('idTextCosto').innerHTML='SE CANCELO LA OPERACION ';
            lecActual.value='';
            lecAnterior.value='';	
    });

    $(document).on("click", "#idEquipoSonido", function(evt)
    {   
        var div = document.getElementById("idtxtnombre");
        nombreEquipo = "Equipo de Sonido"
        div.textContent = nombreEquipo;

    });

    $(document).on("click", "#idLavadora", function(evt)
    {   
        var div = document.getElementById("idtxtnombre");
        nombreEquipo = "Lavadora"
        div.textContent = nombreEquipo;

    });

    $(document).on("click", "#idbtnlaptop", function(evt)
    {   
        var div = document.getElementById("idtxtnombre");
        nombreEquipo = "Laptop"
        div.textContent = nombreEquipo;

    });

    $(document).on("click", "#idbtnrefri", function(evt)
    {   
        var div = document.getElementById("idtxtnombre");
        nombreEquipo = "Refrigeradora"
        div.textContent = nombreEquipo;

    });
    $(document).on("click", "#idbtndvd", function(evt)
    {   
        var div = document.getElementById("idtxtnombre");
        nombreEquipo = "Equipo DVD"
        div.textContent = nombreEquipo;

    });

    $(document).on("click", "#idbtntv", function(evt)
    {   
        var div = document.getElementById("idtxtnombre");
        nombreEquipo = "Televisor"
        div.textContent = nombreEquipo;

    });

    $(document).on("click", "#idbtnplancha", function(evt)
    {   
        var div = document.getElementById("idtxtnombre");
        nombreEquipo = "Plancha"
        div.textContent = nombreEquipo;

    });

    $(document).on("click", "#idbtnducha", function(evt)
    {   
        var div = document.getElementById("idtxtnombre");
        nombreEquipo = "Ducha Eléctrica"
        div.textContent = nombreEquipo;

    });

    $(document).on("click", "#idbtngame", function(evt)
    {   
        var div = document.getElementById("idtxtnombre");
        nombreEquipo = "Video Juego"
        div.textContent = nombreEquipo;

    });

    $(document).on("click", "#idbtnfoco", function(evt)
    {   
        var div = document.getElementById("idtxtnombre");
        nombreEquipo = "LED"
        div.textContent = nombreEquipo;

    });


    $(document).on("click", "#idbtnAgregar", function(evt)
    {   
        var cantidad = document.getElementById('idcantidad');
        var potencia = document.getElementById('idwatts');
        var tiempo = document.getElementById('idhrs');
           
        equiposGasto(cantidad.value*1,potencia.value*1,tiempo.value*1);
        
    });


    $(document).on("click", "#idbtnConsultar", function(evt)
    {   
        
        for (var i = 0; i < equipos.length; i++) {
            //document.getElementById('idtxtresultado').innerHTML='Cantidad de equipo:'+'<div style="color:red">'+equipos[i].c+'</div><br>'+'Potencia(watts):'+'<div style="color:blue">'+equipos[i].p+' </div><br>'+'Tiempo de uso:'+'<div style="color:yellow">'+equipos[i].t+' Hrs</div>'+'Costo por mes:'+'<div style="color:yellow">S/.'+equipos[i].monto+'</div>';
            //$("#idtxtresultado").append('Cantidad de equipo:'+'<div style="color:red">'+equipos[i].c+'</div><br>'+'Potencia(watts):'+'<div style="color:blue">'+equipos[i].p+' </div><br>'+'Tiempo de uso:'+'<div style="color:yellow">'+equipos[i].t+' Hrs</div>'+'Costo por mes:'+'<div style="color:yellow">S/.'+equipos[i].monto+'</div>');
            $("#idtxtresultado").append('<div style="color:blue">Nombre Equipo: '+equipos[i].nombre+'</div>'+'Cantidad de equipo:'+equipos[i].c+'<br>'+'Potencia(watts):'+equipos[i].p +'<br>'+'Tiempo de uso:'+ equipos[i].t+' Hrs<br>'+'<div style="color:blue">Costo por mes: S/.'+equipos[i].monto+'</div><br>');
        };
        $("#idtxtresultado").append('<div style="color:blue" >Monto Total: S/.'+montoTotal+'</div>');
    
    });


    function equiposGasto(cantidad,potencia,tiempo){
        
        var costoKWh = 0.6070;
        var montoTotalArtefacto = ((cantidad*(potencia * tiempo))/1000) * costoKWh;
        
        var equipo = {}
        
            equipo.nombre = nombreEquipo; 
            equipo.c = cantidad;
            equipo.p = potencia;
            equipo.t = tiempo;
            equipo.monto = montoTotalArtefacto;

        equipos.push(equipo);

        montoTotal += montoTotalArtefacto;
        //alert(montoTotalArtefacto);
    }

}
document.addEventListener("app.Ready", register_event_handlers, false);
})();

