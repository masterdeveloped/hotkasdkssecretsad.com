@extends('layouts.plantilla')
@section('title','home')
@section('content')

<div id="preloder">
    <div class="loader"></div>
</div>


<section class="product-section">
    <div class="container">
        <div class="back-link">
            <a href="/categorias"> &lt;&lt; Atras a Categorias</a>
        </div>
        <div class="row">
            <div class="col-lg-6">
                <div class="product-pic-zoom" style="text-align: center;">
                     <img class="product-big-img" src="{{ asset($productos->imagen_uno)}}" height="300px" alt="">   
                </div>
                <div class="product-thumbs" tabindex="1" style="overflow: hidden; outline: none;">
                    <div class="product-thumbs-track">
                        <?php   for($i = 0;$i < count($variable);$i++){ ?>
                        <div class="pt <?php if($i == 0){ echo 'active'; } ?>" data-imgbigurl="{{asset($variable[$i])}}"><img src="{{asset($variable[$i])}}" alt=""></div>
                        <?php }  ?>
                    </div>
                </div>
            </div>

       
         
            <div class="col-lg-6 product-details">
            <h2 class="p-title">{{$productos->nombredepr}}</h2>
                <h3 class="p-price">${{number_format($productos->preciogene, 0, ',', '.')}}</h3>
                <h4 class="p-stock">Disponible: <span>En stock</span></h4>
                <div class="p-rating">
                    <i class="fa fa-star-o"></i>
                    <i class="fa fa-star-o"></i>
                    <i class="fa fa-star-o"></i>
                    <i class="fa fa-star-o"></i>
                    <i class="fa fa-star-o fa-fade"></i>
                </div>
                <div class="p-review">
                    <a href="">3 Reseñas</a>|<a href="">Añadir Tu Reseña</a>
                </div>
          
                <div class="quantity">
                    <p>Cantidad</p>
                    <div class="pro-qty"><input type="text" value="1"></div>
                </div>
                <a href="#" class="site-btn">Añadir al carrito</a>
                <div id="accordion" class="accordion-area">
                    <div class="panel">
                        <div class="panel-header" id="heading">
                            <button class="panel-link" data-toggle="collapse" data-target="#collapse" aria-expanded="false" aria-controls="collapse">Información</button>
                        </div>
                        <div id="collapse" class="collapse" aria-labelledby="heading" data-parent="#accordion">
                            <div class="panel-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra tempor so dales. Phasellus sagittis auctor gravida. Integer bibendum sodales arcu id te mpus. Ut consectetur lacus leo, non scelerisque nulla euismod nec.</p>
                                <p>Approx length 66cm/26" (Based on a UK size 8 sample)</p>
                                <p>Mixed fibres</p>
                                <p>The Model wears a UK size 8/ EU size 36/ US size 4 and her height is 5'8"</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="social-sharing">
                    <?php /*
                    <a href=""><i class="fa fa-google-plus"></i></a>
                    <a href=""><i class="fa fa-pinterest"></i></a>
                    */ ?>
                    <a href="https://www.instagram.com/tiendahotsecret/" target="_blank"><i class="fa fa-instagram"></i></a>
                    <a href="https://www.facebook.com/HotSecretStore/" target="_blank"><i class="fa fa-facebook"></i></a>
                    <a href="https://twitter.com/HotSecretStore" target="_blank"><i class="fa fa-twitter"></i></a>
                    <a href="https://www.youtube.com/channel/UCdBecKp3vjbnevy16B9WRhQ" target="_blank"><i class="fa fa-youtube"></i></a>
                </div>
            </div>
        </div>
    </div>
</section>







@endsection
