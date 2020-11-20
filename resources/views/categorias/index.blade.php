@extends('layouts.plantilla')
@section('title','home')
@section('content')
<?php $conteo_total = count($final); ?>
<section class="category-section spad">
    <div class="container">
        <div class="row">
            <div class="col-lg-3 order-2 order-lg-1">
                <div class="filter-widget">
                    <h2 class="fw-title">Categorias</h2>
                    <ul class="category-menu noselect">
                        <?php
                            $contador = 0; 
                            foreach ($final as $key => $value) {
                        ?>      
                            <li id="list_<?php echo $contador; ?>"> 
                            <a onclick="abrirMenu('list_<?php echo $contador; ?>')">{{$key}}<span></span></a> 
                                <ul class="sub-menu">
                                    @for ($i = 0; $i < count($value); $i++)
                                        <li><a>{{$value[$i]}}<span></span></a></li>
                                    @endfor
                                </ul>
                            </li>
                        <?php
                            $contador++;
                            }
                        ?>
                    </ul>
                </div>    
                <div class="filter-widget mb-0">
                    <h2 class="fw-title">Filtrar por</h2>
                    <div class="price-range-wrap">
                        <h4>Precio</h4>
                        <div class="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content" data-min="1000" data-max="270000">
                            <div class="ui-slider-range ui-corner-all ui-widget-header" style="left: 0%; width: 100%;"></div>
                            <span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 0%;">
                            </span>
                            <span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 100%;">
                            </span>
                        </div>
                        <div class="range-slider">
                            <div class="price-input">
                                <input type="text" id="minamount">
                                <input type="text" id="maxamount">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="filter-widget">
                    <h2 class="fw-title">Marca</h2>
                    <ul class="category-menu">
                        <li><a href="#">HOTSECRET <span>(10)</span></a></li>
                    </ul>
                </div> 
            </div>
            <div class="col-lg-9  order-1 order-lg-2 mb-5 mb-lg-0">
                <div class="row">
                    <div class="col-lg-4 col-sm-6">
                        <div class="product-item">
                            <div class="pi-pic">
                                <?php $i=0; if($i%2 == 0){ ?>
                                <div class="tag-sale">Oferta</div>
                                <?php }else{ ?>
                                <div class="tag-new">Nuevo</div>
                                <?php } ?>
                                <img onclick="" src="http://www.hotsecret.com.co/documentos/producto/2242116402/03708324518.png" alt="" >
                                <div class="pi-links">
                                    <a href="#" class="add-card"><i class="flaticon-bag"></i><span>Añadir</span></a>
                                    <a href="#" class="wishlist-btn"><i class="flaticon-heart"></i></a>
                                </div>
                            </div>
                            <div class="pi-text">
                                <div class="col s12 text-center">
                                    <p style="height:48px;max-height:48px;overflow: hidden;font-weight:bold">ACEITE SENSUAL HEMP x 30 ml</p>
                                    <h4>$15.000</h4>
                                </div>
                                <h6></h6>
                                <br>
                            </div>
                        </div>
                    </div>
                    <div class="text-center w-100 pt-3">
                        <button class="site-btn sb-line sb-dark">Cargar mas</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<script>
    var seleccionado = '';
    var total = <?php echo $conteo_total; ?>
    /*------------------
		Category menu
	--------------------*/
	function abrirMenu(a){
		for(var key = 0;key < total;key++){
			$('#list_'+key).removeClass('active');
        }
		if(seleccionado !== a) {
            $('#'+a).addClass('active');
            seleccionado = a;
		}else{
            seleccionado = '';
        }
	};
</script>
@endsection
