
var caract = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);



function valida(e){
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla==8){
        return true;
    }
    patron =/[0-9]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
} 
function filterFloat(evt,input){
    var key = window.Event ? evt.which : evt.keyCode;   
    var chark = String.fromCharCode(key);
    var tempValue = input.value+chark;
    if(key >= 48 && key <= 57 ){
        if(filter(tempValue)=== false){
            return false;
        }else{      
            return true;
        }
    }else{
          if(key == 8 || key == 13 || key == 0 ) {    
              return true;             
          }else if(key == 46){
                if(filter(tempValue)=== false){
                    return false;
                }else{      
                    return true;
                }
          }else{
              return false;
          }
    }
}
function filter(__val__){
    var preg = /^([0-9,$,%]+\.?[0-9,$,%]{0,2})$/;
    if(preg.test(__val__) === true){
        return true;
    }else{
       return false;
    }
   
}

 function mask_moneys(a) {
	 	var info = $('.number_dp').map(function () { return $(this).val(); }).get();
	 	var sume = 0;
	 	for(var k=0;k<info.length;k++){
	 		sume = sume + parseFloat(info[k].replace('$','').replace('%',''));
	 	}
	 	
	 	if($('#modopago').val() == '1'){
	 		var not_sume_por = sume - parseFloat($(a).val().replace('%',''));
	 		if ($(a).val()=='%' || $(a).val()==''){
	             $(a).val('0%');
	         }else if(sume > 100){
	         	$(a).val((100-not_sume_por).toString()+'%');
	         }else{
	         	$(a).val($(a).val().replace('%','')+'%');
	         }
	 	}else{
	 		var not_sume_efe = sume - parseFloat($(a).val().replace('$','')).toFixed(2);
	 		var e_p = total_a_pagar();
	 		if ($(a).val()=='$' || $(a).val()==''){
	             $(a).val('$0');
	         }else if(sume > e_p){
	         	var wwq= e_p-not_sume_efe;
	         	if ( wwq % 1 == 0) {
	         		$(a).val('$'+parseInt(wwq).toString());
	         	}else{
	         		$(a).val('$'+parseFloat(wwq).toFixed(2).toString());
	         	}
	         	
	         }
	 	}
         comp_val();
     }

     function mask_m(a){
     	var ww = $(a);
     	
     	if($('#modopago').val() == '1'){
     		var s = ww.val().replace('%','');
	        if (s == '' || parseFloat(s.trim())==0  || parseFloat(s.trim()) == '' || s =='%') {
	             ww.val('0%');
	        }else{
	             ww.val(parseFloat(s.trim())+'%');
	        };

		}else{
			var s = ww.val().replace('$','');
	        if (s == '' || parseFloat(s.trim())==0  || parseFloat(s.trim()) == '' || s =='$') {
	            ww.val('$0');
	        }else{
	            ww.val('$'+parseFloat(s.trim()));
	        };
		}

     }

     function focusio(q){
		if (q.value=='$0' ){ 
			q.value='$';
		}else if(parseInt(q.value) <= 0){ 
			q.value='';
		}else{ 
			q.value = q.value.replace('%','');
		}
	}

	var arreglo_cc = []; 
	function sele(a,b){
		var opcions = {'a':['71701002 Auditorio Javeriano',
							'71706004 Casa Villa Javier',
							'71709001 Centro de servicios informaticos',
							'71702001 Contabilidad y Presupuesto',
							'71708001 Credito y Cartera',
							'71701001 Dir. Adtiva y Financiera',
							'71704001 Gestión Humana',
							'71707001 Gestión por Procesos',
							'71706002 Oficina de Compras',
							'71705001 Servicios Operacionales',
							'71706001 Tienda Universitaria'],
					   'b':['313013181 Contabilidad Financiera Internacional',
					   		'313000191 Dirección Postgrados',
					   		'313014011 Doctorado ciencias economicas',
					   		'313013061 Espec. Administracion de Salud',
					   		'313013101 Espec. en Finanzas',
					   		'313013071 Espec. en Mercadeo',
					   		'313013041 Espec. Gerencia Social',
					   		'313013161 Espec. Gestion Tributaria',
					   		'313013201 Espec. Negocios Internacionales',
					   		'313012231 Maestria en ciencias economicas',
					   		'313012151 Maestría en Economía',
					   		'313012201 Maestria en Finanzas',
					   		'313012221 Maestria en mercadeo',
					   		'313012171 MBA',
					   		'313012171 MBA b/quilla',
					   		'313012181 MBA Ejecutivo'],
					   'c':['310011031 Carrera de enfermeria',
					   		'310011011 Carrera de Medicina',
					   		'310011021 Carrera de nutricion',
					   		'310030031 Clínicas Médicas',
					   		'310030021 Dpto. Ciencias Básicas de la Salud',
					   		'310030011 Dpto. Salud Pública y Epidemiología',
					   		'310013011 Especializacion oftolmalogia',
					   		'310013021 Urgencia',
					   		'310012011 Maestria Salud Pública',
					   		'310013031 Medicina familiar',
					   		'310011021 Nutricion y dietetica'],
					   'd':['313000011 Decanatura FCEA',
					   		'313011021 Carrera Admon de Empresas Noct',
					   		'313011111 Carrera de Economía',
					   		'313011022 Carrera Administ. de Empresas',
					   		'313011031 Carrera Contaduria',
					   		'313011032 Carrera de Contaduria Diurna',
					   		'313011041 Carrera Negocios Internacionales',
					   		'313030091 Departamento de Economía',
					   		'313030131 Departamento de Contabilidad y Finanzas',
					   		'313030141 Departamento Gestión de Organizaciones',
					   		'20101032 Negocios e Historia'],
					   'e':['328011181 C. Diseño de Comunicación Visual',
					   		'328011031 Carrera de Arquitectura',
					   		'328011191 Carrera de Artes Visuales',
					   		'328011071 Carrera De Ciencia Política',
					   		'328011121 Carrera de Comunicación',
					   		'328011061 Carrera de Derecho',
					   		'328011171 Carrera de Filosofía',
					   		'328011022 Carrera de Psicología',
					   		'328000011 Decanatura FHCS',
					   		'328000011 Decanatura FHCS (020101066)',
					   		'328000011 Decanatura FHCS (020101072)',
					   		'328000011 Decanatura FHCS (020100602)',
					   		'328000011 Decanatura FHCS (020101054)',
					   		'328000011 Decanatura FHCS (306060011)',
					   		'328030161 Departamento de Ciencias Sociales',
					   		'328030171 Departamento de Comunicación y Lenguaje',
					   		'328030111 Departamento de Humanidades',
					   		'328014011 Doctorado en psicologia',
					   		'328030121 Dpto. Arte, Arquitectura y Diseño',
					   		'328030151 Dpto. Ciencia J y P(Clinicas Juridicas 120100003)',
					   		'328030151 Dpto. de C.Jur y Pol. (Fondo Inv 120100003)',
					   		'328030151 Dpto. de Ciencia Jurídica y Política',
					   		'20101054 Semillero de Hermeneutica'],
					   'f':['318011131 Carrera de Biologia',
					   		'318011141 Carrera Matematicas Aplicadas',
					   		'318040012 Centro De Automatización De Procesos -C.A.P.',
					   		'318000011 Decanatura F Ingeniería',
					   		'318030111 Dpto de Ing. Civil e Industrial',
					   		'318030121 Dpto Electronica y Computación',
					   		'318030091 Dpto. Ciencias Naturales y Matemáticas',
					   		'318011032 Ingeniería Civil',
					   		'318011052 Ingeniería de Sistemas y Comp.',
					   		'318011042 Ingeniería Electrónica',
					   		'318011022 Ingeniería Industrial'],
					   'g':['328013111 Espec.  Ps y Desarrollo Organizacional',
					   		'328013131 Especialización En Cultura de Paz y D.I.H.',
					   		'328013141 Especialización En Derecho Comercial',
					   		'328013121 Especialización en Neuropsicología Infantil',
					   		'328013231 Especializacion Seguridad Social',
					   		'328012051 M Virtual',
					   		'328012061 M. Educación',
					   		'328012021 Maestría Derechos Humanos',
					   		'328012031 Maestria en Derecho Empresarial',
					   		'328012011 Maestria en Familia',
					   		'328012041 MP de la Salud'],
					   'h':['318014011 Doctorado en Ingenieria',
					   		'318013071 Esp. En Gerencia de Construcciones',
					   		'318013061 Esp. Sist. Gerenciales',
					   		'318013051 Espec. Ingeniería de la Calidad',
					   		'318013101 Espec. Logística Integral',
					   		'318013151 Especial modelamiento simulación',
					   		'318012141 Maestría en Civil',
					   		'318012131 Maestría en Ingeniería'],
					   'i':['15002002 Archivo Central',
					   		'15003001 Oficina Jurídica',
					   		'15001001 Rectoria de la seccional',
					   		'15002001 Secretaria General de la seccional'],
					   'j':['15008001 Centro de Servicios Informaticos',
					   		'15006001 Emisora Javeriana Stereo Cali',
					   		'15005001 Multimedios',
					   		'15010001 Oficina de Comunicaciones',
					   		'15012001 Oficina de Egresados',
					   		'15004001 Planeación',
					   		'15009001 Relaciones Internacionales'],
					   'k':['15013001 Trabajo de Liderazgo',
					   		'306060061 Formación javeriana'],
					   'l':['306050041 Biblioteca',
					   		'306050021 Nuevas Tecnologias y Universidad Virtual',
					   		'130601 Proyectos academicos',
					   		'306050051 Sello Editorial Javeriano'],
					   'm':['306060011 Autoevaluacion y Acreditacion',
					   		'306060051 Centro para la enseñanza',
					   		'306000013 Desarrollo Academico',
					   		'306050071 Of. Apoyo al Emprendimiento',
					   		'306060041 Oficina Gestión Estudiantil',
					   		'306060031 Oficina Gestión Profesoral',
					   		'306050031 Registro Academico',
					   		'306000011 Vicerrectoria Academica'	],
					   'n':['306030041 Instituto de Estudio Interculturales',
					   		'306030041 Códigos'	],
					   'o':['306060021 Investigación, Des. E Innovación'],
					   'p':['51507001 Centro De Bienestar',
					   		'51503001 Centro De Expresión Cultural',
					   		'51503002 Centro Deportivo',
					   		'51502001 Centro Pastoral San Francisco Javier',
					   		'51504001 Sector Proyección Social',
					   		'51505001 Sector Salud',
					   		'51501001 Vicerrectoria del  Medio Universitario'],
					   'q':['306030011 Educación Continua'],
					   'r':['15016001 Promoción Institucional']
					}
		$('.ca').remove();

		$('.cc').removeClass('ac');
		$(b).addClass('ac');
		for(var i=0;i < opcions[a].length;i++){
			$('#opcion_cc').append('<div id="ol'+i+'" class="col s12 z-depth-3 hoverable ca" onclick="hol(&quot;'+opcions[a][i]+'&quot;,this)"><p>'+opcions[a][i]+'</p></div>');
			if(arreglo_cc.indexOf(opcions[a][i]) > -1){
				$('#ol'+i).addClass('cac');
			}
		}
	}


	function hol(a,b){
		var data_send_cc = '';
		

		if(arreglo_cc.indexOf(a) > -1){
			var g = arreglo_cc.indexOf(a);
			arreglo_cc.splice(g, 1);
			$(b).removeClass('cac');
			$('#'+$.md5(a)).remove();

		}else{
			arreglo_cc.push(a);
			$(b).addClass('cac');
			var hw = ($('#modopago').val() == '1') ? '0%':'$0';
			$('#opcion_cc_val').append('<div id="'+$.md5(a)+'" class="col s12 z-depth-3 hoverable dp ce mapeo"><p class="col s8">'+a+'</p><input style="height:34px;margin-top:6px;" onkeypress="return filterFloat(event,this);" value="'+hw+'" onFocus="focusio(this);" onblur="mask_moneys(this)" onchange="mask_m(this);" class="number_dp browser-default col s4 depen_pago_val" onchange="comp_val();" type="text" min="0" value="" name="depens_value[]"><div>');
		}
		comp_val();

		var ghjkl = $('.mapeo').map(function () { return $(this).text(); }).get().join();
		if(ghjkl.length <= 0){
			console_show('error.png','<p  style="margin:0;">No hay ningún centro de costos seleccionado.</p>');
		}

		$('#depnde2').val(ghjkl);
	}

	


	//////////////////////viejo
	$('#precifot').val('0');
	$('#preciimp').val('0');
	$('#preciani').val('0');
	$('#preciesc').val('0');

	var arreglo_foto_color_select = [];
	var ids_foto_color_select = [];
	function foto_color_select_Vv(id,valor){

		
		if(ids_foto_color_select.indexOf(id) < 0){
			ids_foto_color_select.push(id);
			arreglo_foto_color_select.push(valor);
		}else{
			arreglo_foto_color_select[ids_foto_color_select.indexOf(id)] = valor;
		}
		$("input[name='foto_color_select']").val(arreglo_foto_color_select);
	};



	var arreglo_rmp_color_select = [];
	var ids_imp_color_select = [];
	function imp_color_select_sS(id,valor){
		
		if(ids_imp_color_select.indexOf(id) < 0){
			ids_imp_color_select.push(id);
			arreglo_rmp_color_select.push(valor);
		}else{
			arreglo_rmp_color_select[ids_imp_color_select.indexOf(id)] = valor;
		}
		$("input[name='imp_color_select']").val(arreglo_rmp_color_select);
	};



	var idf = 0;
	var idi = 0;
	var ani = 0;
	var scn = 0;
	var idf_array =[];
	var idi_array = [];
	var ani_array = [];
	var esc_array = [];
	var contador = 0;
	var validador = false;
	var cc_cc = $('#cc_cc');
	var wqqq = $('#arrow_cc');
	function obtenerparametro(valor){

				switch(valor) {
		    case 'f':
		        $("#contenedor").append('<div id="fotocopias'+idf+'" class="col s12" style="background-color:#d2e8fd;border-radius:5px; height:50px;margin-top:10px;padding:0;"><div class="col s6" style="padding:0;"><div class="col s6 l2 xl1 " style="padding:0;height:50px;widt:50px;border-radius:5px 0px 0px 5px;"><div style="background-color:white;float:left;padding:0;height:50px;width:50px;border-radius:5px 0px 0px 5px;border:4px solid #d2e8fd;"><img src="<?php echo RUTA_IMG ?>copy-machine.png" style="margin:0; width:32px;height:32px;margin-top:6px;margin-left:3px;margin-right:5px;" /></div></div><div class="col s12 xl2" style="text-align:center !important;padding:0;"><p style="border-radius:0 60px 60px 0;background-color:#c0d9f2;padding-top:1px;margin-top:13px;text-align:center;">FOTOCOPIAS</p></div><div id="fotocopia_id'+idf+'" class="col s12 xl3" style="height:50px;"><label class="col l3" style="padding:0;" ><input required type="radio" name="x'+idf+'" value="small" onclick="cambiar_total_pagar_foto();$(&quot;#cant_copy_foto'+idf+'&quot;).removeAttr(&quot;disabled&quot;);$(&quot;#cant_ori_foto'+idf+'&quot;).removeAttr(&quot;disabled&quot;);"/><img style="margin-top:11px;" src="<?php echo RUTA_IMG ?>byn.png" onclick="cambiar_total_pagar_foto();$(&quot;#text_sel_fotocopia_id'+idf+'&quot;).text(&quot;B/N&quot;);foto_color_select_Vv(&quot;'+idf+'&quot;,&quot;B/N&quot; );"></label><label class="col l3" style="padding:0;"><input type="radio" onclick="cambiar_total_pagar_foto();$(&quot;#cant_copy_foto'+idf+'&quot;).removeAttr(&quot;disabled&quot;);$(&quot;#cant_ori_foto'+idf+'&quot;).removeAttr(&quot;disabled&quot;);" name="x'+idf+'" value="big"/><img style="margin-top:11px;" src="<?php echo RUTA_IMG ?>rgb.png" onclick="cambiar_total_pagar_foto();$(&quot;#text_sel_fotocopia_id'+idf+'&quot;).text(&quot;COLOR&quot;);foto_color_select_Vv(&quot;'+idf+'&quot;,&quot;color&quot;);"></label><p id="text_sel_fotocopia_id'+idf+'" class="col l6" style="padding:0;padding-left:5px;"></p></div><div class="col l6" style="padding:0;margin-top:13px;margin-bottom:10px;" required><div class="col s3 truncate" style="padding:0;padding-left:5px;padding-right:5px;"><p style="color:#000 !important;font-size:14px;margin:0;float:right;margin-top:2.5px;padding:0;"> Archivo<span style="color:red">*</span> : </p></div><input id ="nombre_foto'+idf+'"  class="browser-default col xl9" type="text" style="margin:0;margin-top:-7px;" name="nomarc[]" placeholder="Nombre o código" required></div></div><div class="col s6" style="padding:0;"><div class="col xl2" style="padding:0;margin-top:11px;margin-bottom:10px;padding-left:2px;padding-right:2px;"><input value="0" min="0" id ="cant_copy_foto'+idf+'" disabled="" class="numr browser-default col s12 tooltipped" data-position="top" data-tooltip="Cantidad" type="number" style="margin:0;margin-top:-5px; height:10px;" name="secatjscopi[]" placeholder="" required></div><div class="col xl2" style="padding:0;margin-top:11px;margin-bottom:10px;padding-left:2px;padding-right:2px;"><input value="0" disabled="" min="0" id ="cant_ori_foto'+idf+'" class="numr browser-default col s12 tooltipped" data-position="top" data-tooltip="Originales" type="number" style="margin:0;margin-top:-5px; height:10px;" name="djcatkdorikcop[]" placeholder="" required></div><div class="col xl2" style="padding:0;margin-top:13px;margin-bottom:10px;"><i class="material-icons " style="float:left">chevron_right</i><p id="total_number_foto'+idf+'"  style="color:#000 !important;font-size:14px;margin:0;float:left;margin-top:2.5px;margin-left:5px;margin-right:5px;"> 0 </p></div><div class="col xl6" style="padding:0;margin-top:11px;margin-bottom:10px;"><input id ="pag_foto'+idf+'" class="browser-default col s10" type="text" style="margin:0;margin-top:-5px;height:10px;" name="marcml[]" placeholder="Paginas a fotocopiar" ><a style="float:right;margin-right:15px;margin-top:6px;" href="#" onclick="$(&quot;#fotocopias'+idf+'&quot;).remove();contador--;$(&quot;#total_solicitud&quot;).text(contador.toString());var pos = idf_array.indexOf('+idf+');idf_array.splice(pos,1);arreglo_foto_color_select.splice(pos,1);ids_foto_color_select.splice(pos,1);cambiar_total_pagar_foto();"><img src="<?php echo RUTA_IMG ?>delete.png"></a></div></div>');

		        $('<script> $("#cant_copy_foto'+idf+'").change(function(){if($(this).val() != "" && $("#cant_ori_foto'+idf+'").val() != ""){$("#total_number_foto'+idf+'").text((parseInt($(this).val())*parseInt($("#cant_ori_foto'+idf+'").val())).toString());cambiar_total_pagar_foto();}}); $("#cant_ori_foto'+idf+'").change(function(){if($(this).val() != "" && $("#cant_copy_foto'+idf+'").val() != ""){$("#total_number_foto'+idf+'").text((parseInt($(this).val())*parseInt($("#cant_copy_foto'+idf+'").val())).toString());cambiar_total_pagar_foto();}});</'+'script>').appendTo(document.body);
		        	idf_array.push(idf);
		        	idf++;

		        break;

		    case 'i':
		        $("#contenedor").append('<div  id="impresiones'+idi+'" class="col s12" style="margin-top:10px;padding:0;"><div class="col s6" style="border-radius:5px 0px 0px 5px;padding:0;background-color:#ffe8c9;height:50px;"><div class="col s1 " style="padding:0;height:50px;border-radius:5px 0px 0px 5px;"><div style="background-color:white;float:left;padding:0;height:50px;width:50px;border-radius:5px 0px 0px 5px;border:5px solid #ffe8c9;"><img src="<?php echo RUTA_IMG ?>print.png" style="margin:0; width:32px;height:32px;margin-top:4px;margin-left:5px;margin-right:5px;" /></div></div><div class="col s12 xl2" style="text-align:center;padding:0;"><p style="border-radius:0 60px 60px 0;background-color:#f4d7b0;padding-top:1px;margin-top:13px;text-align:center;">IMPRESIÓN</p></div><div id="impresion_id'+idi+'" class="col s12 xl3" style="height:50px;"><label class="col l3" style="padding:0;" ><input required onclick="cambiar_total_pagar_impre();$(&quot;#cant_copy_imp'+idi+'&quot;).removeAttr(&quot;disabled&quot;);$(&quot;#cant_ori_imp'+idi+'&quot;).removeAttr(&quot;disabled&quot;);" type="radio" name="w'+idi+'" value="small" /><img style="margin-top:11px;" src="<?php echo RUTA_IMG ?>byn.png"onclick="cambiar_total_pagar_impre();$(&quot;#text_sel_impresion_id'+idi+'&quot;).text(&quot;B/N&quot;);imp_color_select_sS(&quot;'+idi+'&quot;,&quot;B/N&quot;);"></label><label class="col l3" style="padding:0;"><input type="radio" onclick="cambiar_total_pagar_impre();$(&quot;#cant_copy_imp'+idi+'&quot;).removeAttr(&quot;disabled&quot;);$(&quot;#cant_ori_imp'+idi+'&quot;).removeAttr(&quot;disabled&quot;);" name="w'+idi+'" value="big"/><img style="margin-top:11px;" src="<?php echo RUTA_IMG ?>rgb.png" onclick="cambiar_total_pagar_impre();$(&quot;#text_sel_impresion_id'+idi+'&quot;).text(&quot;COLOR&quot;);imp_color_select_sS(&quot;'+idi+'&quot;,&quot;color&quot;);"></label><p id="text_sel_impresion_id'+idi+'" class="col l6" style="padding:0;padding-left:5px;"></p></div><div class="col l6" style="padding:0;margin-top:13px;margin-bottom:10px;" required> <div class="col s3 truncate" style="padding:0;padding-left:5px;padding-right:5px;"><p style="color:#000 !important;font-size:14px;margin:0;float:right;margin-top:2.5px;padding:0;"> Archivo<span style="color:red">*</span> : </p></div><input id ="nombre_imp'+idi+'"  class="browser-default col xl9" type="text" style="margin:0;margin-top:-7px;" name="wernomsimpr[]" placeholder="Nombre o código" required></div></div><div class="col s6" style="border-radius:0px 5px 5px 0px;padding:0;background-color:#ffe8c9;height:50px;"><div class="col xl2" style="padding:0;margin-top:11px;margin-bottom:10px;padding-left:2px;padding-right:2px;"><input value="0" min="0" id ="cant_copy_imp'+idi+'"  class="browser-default col s12 tooltipped" data-position="top" data-tooltip="Cantidad" type="number" style="margin:0;margin-top:-5px; height:10px;" name="ekjcatjkipm[]" placeholder="" disabled="" required></div><div class="col xl2" style="padding:0;margin-top:11px;margin-bottom:10px;padding-left:2px;padding-right:2px;"><input value="0" min="0" id ="cant_ori_imp'+idi+'"  class="browser-default col s12 tooltipped" data-position="top" data-tooltip="Originales" type="number" style="margin:0;margin-top:-5px; height:10px;" name="fescatkdori[]" placeholder="" disabled="" required></div><div class="col xl2" style="padding:0;margin-top:13px;margin-bottom:10px;"><i class="material-icons " style="float:left">chevron_right</i><p id="total_number_impre'+idi+'" style="color:#000 !important;font-size:14px;margin:0;float:left;margin-top:2.5px;margin-left:5px;margin-right:5px;"> 0 </p></div><div class="col xl6" style="padding:0;margin-top:13px;margin-bottom:10px;"><input id ="pag_imp'+idi+'"  class="browser-default col s8" type="text" style="margin:0;margin-top:-5px; height:10px;" name="nimpsaimp[]" placeholder="Paginas a imprimir"><div class="col s2 truncate" style="padding:0;"><a href="#" class="tooltipped" data-position="top" data-tooltip="Anexar Documento" onclick="$(&quot;#docu'+idi+'&quot;).toggle();" style="float:left;margin-left:15px;"><i class="material-icons " style="float:left;color:#E3B16D;">cloud_upload</i></a></div><a href="#" style="float:right;margin-right:15px;margin-top:4px;" onclick="$(&quot;#impresiones'+idi+'&quot;).remove();contador--;$(&quot;#total_solicitud&quot;).text(contador.toString());var pos = idi_array.indexOf('+idi+');idi_array.splice(pos,1);arreglo_rmp_color_select.splice(pos,1);ids_imp_color_select.splice(pos,1);cambiar_total_pagar_impre();"><img src="<?php echo RUTA_IMG ?>delete.png"></a></div></div><div id="docu'+idi+'" class="col s3 offset-s9 truncate" style="display:none;height:38px;background-color:#ffe8c9;border-radius:0px 0px 5px 10px;padding-top:3px;padding:0;"><input class="col s12 truncate" name="archivo[]" style="color:#A88351;margin-top:3px;" type="file" accept="%/,.pdf,.doc"required ></div>');



				$('<script> $("#cant_copy_imp'+idi+'").change(function(){if($(this).val() != "" && $("#cant_ori_imp'+idi+'").val() != ""){$("#total_number_impre'+idi+'").text((parseInt($(this).val())*parseInt($("#cant_ori_imp'+idi+'").val())).toString());cambiar_total_pagar_impre();}});$("#cant_ori_imp'+idi+'").change(function(){if($(this).val() != "" && $("#cant_copy_imp'+idi+'").val() != ""){$("#total_number_impre'+idi+'").text((parseInt($(this).val())*parseInt($("#cant_copy_imp'+idi+'").val())).toString());cambiar_total_pagar_impre();}});</'+'script>').appendTo(document.body);
					idi_array.push(idi);


        		idi++;
		        break;
		    case 'a':
		   		  $("#contenedor").append('<div  id="anillados'+ani+'" class="col s12" style="background-color:#e1ffc9;border-radius:5px; height:50px;margin-top:10px;padding:0;"><div class="col s6" style="padding:0;"><div class="col s1 " style="padding:0;height:50px;border-radius:5px 0px 0px 5px;"><div style="background-color:white;float:left;padding:0;height:50px;width:50px;border-radius:5px 0px 0px 5px;border:5px solid #e1ffc9;"><img src="<?php echo RUTA_IMG ?>anillado.png" style="margin:0; width:32px;height:32px;margin-top:4px;margin-left:5px;margin-right:5px;" /></div></div><div class="col s12 xl2" style="text-align:center;padding:0;"><p style="border-radius:0 60px 60px 0;background-color:#cef3b0;padding-top:1px;margin-top:13px;text-align:center;">ANILLADO</p></div><div  class="col s12 xl3" style="height:50px;"></div><div class="col s6" style="padding:0;margin-top:13px;margin-bottom:10px;"><div class="col s3 truncate" style="padding:0;padding-left:5px;padding-right:5px;"><p style="color:#000 !important;font-size:14px;margin:0;float:right;margin-top:2.5px;padding:0;"> Archivo<span style="color:red">*</span> : </p></div><input id="nomani_arch'+ani+'"   class="browser-default col xl9" type="text" style="margin:0;margin-top:-7px;" name="nombl[]" placeholder="Nombre o código" required></div></div><div class="col s6" style="padding:0;"><div class="col xl2" style="padding:0;margin-top:11px;margin-bottom:10px;padding-left:2px;padding-right:2px;"><input value="0" min="0" id="cantani_arch'+ani+'"   class="browser-default col s12 tooltipped" data-position="top" data-tooltip="Cantidad" type="number" style="margin:0;margin-top:-5px; height:10px;" name="canksanil[]" placeholder="" required value="0"></div><div class="col xl2" style="padding:0;"><select id="tipo_anillado'+ani+'" name="tipo_anillado[]" style="display: block;height:38px;margin-top:6px"><option  value="#6" selected>#6</option><option  value="#8">#8</option><option  value="#9" >#9</option><option  value="#11" >#11</option><option  value="#12" >#12</option><option  value="#14" >#14</option><option  value="#16" >#16</option><option  value="#18" >#18</option><option  value="#22" >#22</option><option  value="#25" >#25</option><option  value="#28" >#28</option><option  value="#32" >#32</option><option  value="#35" >#35</option><option  value="#40" >#40</option></select></div><div class="col xl8" style="padding:0;margin-top:13px;margin-bottom:10px;padding-left:2px;"><input id="com_serani'+ani+'"   class="browser-default col s10" type="text" style="margin:0;margin-top:-7px; height:10px;" name="sfdcomakdeakani[]" placeholder="¿Cómo desea el servicio de anillado?" ><a href="#" style="float:right;margin-right:15px;margin-top:4px;" onclick="$(&quot;#anillados'+ani+'&quot;).remove();contador--;$(&quot;#total_solicitud&quot;).text(contador.toString());var pos = ani_array.indexOf('+ani+');ani_array.splice(pos,1);cambiar_total_pagar_ani();"><img src="<?php echo RUTA_IMG ?>delete.png"></a></div></div></div>');

		   		  	$('<script>$("#cantani_arch'+ani+',#tipo_anillado'+ani+'").change(function(){cambiar_total_pagar_ani();}); </'+'script>').appendTo(document.body);
		   		  		ani_array.push(ani);
		   		  	  ani++;
       			break;
       		case 's':
       			 $("#contenedor").append('<div  id="scaneado'+scn+'" class="col s12" style="background-color:#ebe8fb;border-radius:5px; height:50px;margin-top:10px;padding:0;"><div class="col s6" style="padding:0;"><div class="col s1 " style="padding:0;height:50px;border-radius:5px 0px 0px 5px;"><div style="background-color:white;float:left;padding:0;height:50px;width:50px;border-radius:5px 0px 0px 5px;border:5px solid #ebe8fb;"><img src="<?php echo RUTA_IMG ?>office-scanner.png" style="margin:0; width:32px;height:32px;margin-top:4px;margin-left:5px;margin-right:5px;" /></div></div><div class="col s12 xl2" style="text-align:center;padding:0;"><p style="border-radius:0 60px 60px 0;background-color:#d4d0ee;padding-top:1px;margin-top:13px;text-align:center;">SCANNER</p></div><div  class="col s12 xl3" style="height:50px;"></div><div class="col s6" style="padding:0;margin-top:13px;margin-bottom:10px;"><div class="col s3 truncate" style="padding:0;padding-left:5px;padding-right:5px;"><p style="color:#000 !important;font-size:14px;margin:0;float:right;margin-top:2.5px;padding:0;"> Archivo<span style="color:red">*</span> : </p></div><input id="nomesc_arch'+scn+'"   class="browser-default col xl9" type="text" style="margin:0;margin-top:-7px;" name="dfnomjarchkesc[]" placeholder="Nombre o código" required></div></div><div class="col s6" style="padding:0;"><div class="col xl2" style="padding:0;margin-top:11px;margin-bottom:10px;padding-left:2px;padding-right:2px"><input value="0" min="0" id="cantesc_arch'+scn+'"   class="browser-default col s12 tooltipped" data-position="top" data-tooltip="Cantidad" type="number" style="margin:0;margin-top:-5px; height:10px;" name="fadcantkesc[]" placeholder="" value="0"required></div><div class="col xl10" style="padding:0;margin-top:13px;margin-bottom:10px;padding-left:2px;"><input id="com_seresc'+scn+'"   class="browser-default col s11" type="text" style="margin:0;margin-top:-7px; height:10px;" name="fggpagbnescan[]" placeholder="   ¿Cuáles paginas desea scannear? "><a href="#" style="float:right;margin-right:15px;margin-top:4px;" onclick="$(&quot;#scaneado'+scn+'&quot;).remove();contador--;$(&quot;#total_solicitud&quot;).text(contador.toString());var pos = esc_array.indexOf('+scn+');esc_array.splice(pos,1);cambiar_total_pagar_esc();"><img src="<?php echo RUTA_IMG ?>delete.png"></a></div></div></div>');
        	

                    $('<script>$("#cantesc_arch'+scn+'").change(function(){cambiar_total_pagar_esc();}); </'+'script>').appendTo(document.body);
                       	esc_array.push(scn);
        	         scn++;

        		break;
		    default:
		        break;
		} 
		contador++;
		$("#total_solicitud").text(contador.toString());
		validador = false;
		comp_val();
		wqqq.css('color','#011A47');
		cc_cc.hide();
		wqqq.text('arrow_upward');
		$('.tooltipped').tooltip();
	}
	var control_ceros = true;
     
     var totaltodoprecio = 0;

     var c_foto_c = true;
     var c_imp_c = true;
     var c_ani_c = true;
     var c_scan_c = true;

 	function cambiar_total_pagar_foto(){

 		var valor = 0;
 		var precio_color = 300;
 		var precio_bn = 65;
 		var valor_total = 0;
 		var cont = 0;

 		for(var e=0; e < idf_array.length; e++ ){
 			valor =parseInt($("#total_number_foto"+idf_array[e]).text());
 			if(valor == 0){
 				cont++;
 			}

 			if(arreglo_foto_color_select[e] == 'color'){
 				
 				valor_total = valor_total + (valor*precio_color);
 			}else if(arreglo_foto_color_select[e] == 'B/N'){
 				valor_total = valor_total + (valor*precio_bn);
 			}

 		}

 		if(cont > 0){
 			c_foto_c = false;
 		}else{
 			c_foto_c = true;
 			
 		}

 		if(c_foto_c && c_imp_c && c_ani_c && c_scan_c){
 			control_ceros = true;
 		}else{
 			control_ceros = false;
 		}

 		//valor_total = valor*precio;
		$('#precio_foto').maskMoney('mask', valor_total);
		$('#precifot').val(valor_total.toString());
		validador = true;
		comp_val();
		total_a_pagar();



 	}


 	function cambiar_total_pagar_impre(){
 		var valorimpre = 0;
 		var prebnimpre = 65;
 		var precolimpre = 300;
 		var valo_totalimpre=0;
  
		var cont = 0;
 		for(var i=0; i < idi_array.length; i++ ){
 			valorimpre =parseInt($("#total_number_impre"+idi_array[i]).text());

 			if(valorimpre == 0){
 				cont++;
 			}

			if(arreglo_rmp_color_select[i] == 'color'){
 				
 				valo_totalimpre = valo_totalimpre+ (valorimpre*precolimpre);
 			}else if(arreglo_rmp_color_select[i] == 'B/N'){
 				valo_totalimpre = valo_totalimpre + (valorimpre*prebnimpre);
 			}

 		}

 		if(cont > 0){
 			c_imp_c = false;
 		}else{
 			c_imp_c = true;
 			
 		}

 		if(c_foto_c && c_imp_c && c_ani_c && c_scan_c){
 			control_ceros = true;
 		}else{
 			control_ceros = false;
 		}

		$('#precio_imp').maskMoney('mask', valo_totalimpre);
		$('#preciimp').val(valo_totalimpre.toString());
		validador = true;
		comp_val();
		total_a_pagar();
 	}


 	function cambiar_total_pagar_ani(){
 		var valor_totalani = 0;
  		var precios_anillado = {'#6':'2000','#8':'2000','#9':'2100','#11':'2100','#12':'2200','#14':'2200','#16':'2500','#18':'2500','#22':'3000','#25':'3000','#28':'3500','#32':'3500','#35':'4000','#40':'4500'};

 		var cont = 0;
 		for(var i=0; i < ani_array.length; i++ ){
 			var value_ani = parseInt($("#cantani_arch"+ani_array[i]).val());
 			if(value_ani == 0){
 				cont++;
 			}
 			valor_totalani = valor_totalani + value_ani*parseInt(precios_anillado[$("#tipo_anillado"+ani_array[i]).val()]);

 		}

 		if(cont > 0){
 			c_ani_c = false;
 		}else{
 			c_ani_c = true;
 			
 		}

 		if(c_foto_c && c_imp_c && c_ani_c && c_scan_c){
 			control_ceros = true;
 		}else{
 			control_ceros = false;
 		}

		$('#precio_ani').maskMoney('mask', valor_totalani);
		$('#preciani').val(valor_totalani.toString());
		validador = true;
		comp_val();
		total_a_pagar();
 	}


   	function cambiar_total_pagar_esc(){
 		var valoresc = 0;
 		var precioesc = 50;
 		var cont = 0;
 		for(var i=0; i < esc_array.length; i++ ){

 			var value_scan = parseInt($("#cantesc_arch"+esc_array[i]).val());
 			if(value_scan == 0){
 				cont++;
 			}
 			valoresc = valoresc + value_scan;
 		}
 		valor_totalesc = valoresc*precioesc;

 		if(cont > 0){
 			c_scan_c = false;
 		}else{
 			c_scan_c = true;
 			
 		}

 		if(c_foto_c && c_imp_c && c_ani_c && c_scan_c){
 			control_ceros = true;
 		}else{
 			control_ceros = false;
 		}

		$('#precio_scan').maskMoney('mask', valor_totalesc);
		$('#preciesc').val(valor_totalesc.toString());
		validador = true;
		comp_val();
		total_a_pagar();

		
 	}


var maile = $('input[name = "corresolisdspor"]');
var maile_autorizador = $('input[name = "correoariato"]');


function cam(){

	if(total_a_pagar() > 0 && control_ceros && validador && caract.test(maile.val()) != false && caract.test(maile_autorizador.val()) != false ){
		cc_cc.toggle();
		if(cc_cc.is(":visible")){
			wqqq.text('arrow_downward');
		}else{
			wqqq.text('arrow_upward');
		}
	}
}

function emails_ver(){
	if(total_a_pagar() > 0 && control_ceros && validador && caract.test(maile.val()) != false && caract.test(maile_autorizador.val()) != false ){
		wqqq.css('color','#1CDDAD');
	}else{
		wqqq.css('color','#011A47');
		cc_cc.hide();
		wqqq.text('arrow_upward');

	}
}

maile.keyup(function(){	emails_ver();});
maile.change(function(){emails_ver();});
maile_autorizador.keyup(function(){	emails_ver();});
maile_autorizador.change(function(){emails_ver();});

$('#ir_a_cc').click(function(){
	cam();

});
	
	
 	function total_a_pagar(){

 		var total = 0;
 			total = parseInt($('#precifot').val() > 0 ? $('#precifot').val() : 0)+parseInt($('#preciimp').val() > 0 ? $('#preciimp').val() : 0)+parseInt($('#preciani').val() > 0 ? $('#preciani').val() : 0)+parseInt($('#preciesc').val() > 0 ? $('#preciesc').val() : 0);
 		if(total > 0 && control_ceros && validador && caract.test(maile.val()) != false && caract.test(maile_autorizador.val()) != false ){
 			wqqq.css('color','#1CDDAD');
 		}else{
 			wqqq.css('color','#011A47');
 			cc_cc.hide();
			wqqq.text('arrow_upward');
		
 		}

 		var f = $('#precio_total');
		f.maskMoney('mask', total);
 		return total;
 	}
 


function comp_val(){

         	var info = $('.number_dp').map(function () { return $(this).val(); }).get();

         	
           	var flag_=false;
         	var suma_= 0;

         for (var e =0; e< info.length;e++) {
         		if(parseInt(info[e].replace('$','').replace('%','')) == 0){
         			suma_= NaN;
         			break;
         		}
         		suma_ += parseFloat(info[e].replace('$','').replace('%',''));
         }

     		

	
     		if(isNaN(suma_)){
     		
     			console_show('error.png','<p  style="margin:0;text-align : justify;">Los centros de costos deben tener un valor mayor a 0 (cero).</p>');
     		}else{
     			if($('#modopago').val() == '1'){
	     			if(suma_ == 100 && suma_>0){
	     				flag_=true;

	     			}else{
	     				console_show('error.png','<p  style="margin:0;text-align : justify;">La suma de todos los centros de costos debe ser igual a : </p><b class="col s12 center" style="font-size: 18px;">100%</b>');
	     			}
	     		} 

	     		if($('#modopago').val() == '2'){
	     			if(suma_ == total_a_pagar() && suma_>0){
	     				flag_=true;
	     			}else{
	     				console_show('error.png','<p  style="margin:0;text-align : justify;">La suma de todos los centros de costos debe ser igual a : </p><b class="col s12 center" style="font-size: 18px;">'+$('#precio_total').val()+'</b>');
	     			}
	     		}
     		}

     		if(info.length <= 0){
				console_show('error.png','<p  style="margin:0;text-align : justify;">No hay ningún centro de costos seleccionado.</p>');
			}

     		if(flag_&&validador&&control_ceros){
     			$('#envio').attr("disabled",false);
     			console_show('success.png','<p  class="col s12 center" style="margin:0;font-size:20px;margin-top:5px;color:#022463;"><b>¡Todo esta OK!</b></p>');
     			$('#envio').css({'background-color':'#1CDDAD','color':'#000'});
     		}else{
     			$('#envio').attr("disabled",true);
     			$('#envio').css({'background-color':'#CDCDCD','color':'#AFAFAF'});
     			

     		}
         }


function console_show(a,b){
			$('#check_val_l').attr('src','<?php echo RUTA_IMG ?>'+a);
			$('#check_text_l').html(b);
		}


$('#modopago').change(function() {
	if($(this).val() == '1'){
		$('.depen_pago_val').val('0%');
		
	}else{
		$('.depen_pago_val').val('$0');
		
	}
	comp_val();

		
});
