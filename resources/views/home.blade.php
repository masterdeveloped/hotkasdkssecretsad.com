@extends('layouts.plantilla')
@section('title','home')
@section('content')
    <section class="hero-section d-none d-md-block d-lg-block d-xl-block">
        <div class="hero-slider owl-carousel">
            @foreach ($portada as $portada)
                <div class="hs-item set-bg" data-setbg="{{ asset($portada -> ruta_imagen) }}" style="height:400px">
                    <div class="container">
                        <div class="row">
                        </div>
                    </div>
                </div>
            @endforeach
        </div>
    </section>
    <section class="features-section">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-4 p-0 feature">
                    <div class="feature-inner">
                        <div class="feature-icon">
                            <img src="{{ asset('img/icons/1.png')}}" alt="#">
                        </div>
                        <h2>PAGOS SEGUROS</h2>
                    </div>
                </div>
                <div class="col-md-4 p-0 feature">
                    <div class="feature-inner">
                        <div class="feature-icon">
                            <img src="{{ asset('img/icons/2.png')}}" alt="#">
                        </div>
                        <h2>PRODUCTOS ESCLUSIVOS</h2>
                    </div>
                </div>
                <div class="col-md-4 p-0 feature">
                    <div class="feature-inner">
                        <div class="feature-icon">
                            <img src="{{ asset('img/icons/3.png')}}" alt="#">
                        </div>
                        <h2>ENTREGA RÁPIDA</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="top-letest-product-section">
        <div class="container">
            <div class="section-title">
                <h3>Nuestros Productos</h3>
            </div>
            <div class="product-slider owl-carousel" style="padding:0;">          
                @foreach ($productos as $item)
                    <div class="product-item" style="border-radius:5px;padding-top:1px;">
                        <div class="pi-pic" style="background-image:url({{ asset($item->imagen_uno)}} );height:199px;"> 
                            <div class="pi-links">
<!-- {{route('add',$item)}} -->

                                <a href="{{route('producto',$item)}}" class="add-card"><i class="flaticon-bag"></i><span>AÑADIR</span></a>
                                <a href="#" class="wishlist-btn"><i class="flaticon-heart"></i></a>
                            </div>
                        </div>
                        <div onclick="verproducto('')" class="pi-text">
                            <div class="col s12 text-center">
                                <p style="height:48px;max-height:48px;overflow: hidden;">{{$item->nombredepr}}</p>
                                <h4>${{number_format($item->preciogene, 0, ',', '.')}}</h4>
                            </div>
                            <h6></h6>
                            <br/>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </section>
    <div class="container" >
        <div class="section-title ">
            <h3 style="color:#F51167">Nuestro Portafolio</h3>
        </div>
    </div>
    <div class="container" style="margin-top:40px;;">
        <div class="row">
            @foreach ($categoria as $categorias)
                <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4" style="padding:10px;">
                    <div class="card">
                        <div class="card-body" style="padding:0;border:0">
                            <div class="product-item" style="padding:0;border:0">
                                <div class="pi-pic" style="background-image:url({{ asset($categorias->fotoimagen)}} );height:200px"> 
                                </div>
                            </div>
                        </div>
                        <div onclick="verproducto('')" class="pi-text">
                            <div class="col-12 text-center" style="padding:0;border:0">
                                <button class="btn button_categories"><b>{{$categorias->nombre_cat}}</b></button>
                            </div>
                        </div>
                    </div>
                </div>
            @endforeach
        </div>
    </div>
    <div style="height:1px;background-color:#E0E0E0;margin-top:30px"></div>
    <div class="container" style="margin-top:40px;">
        <div style="height:1px;background-color:#E0E0E0;margin-top:30px;margin-bottom:20px" ></div>
        <h3>Blog</h3>
        <div class="row" style="margin-top:30px">
            <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4" style="padding:10px;">
                <div class="card">
                    <img class="card-img-top" src="https://cde.laprensa.e3.pe/ima/0/0/2/3/8/238082.jpg" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">¿Que es un sexshop?</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4" style="padding:10px;">
                <div class="card">
                    <img class="card-img-top" src="https://cde.laprensa.e3.pe/ima/0/0/2/3/8/238082.jpg" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">¿Que es un sexshop?</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4" style="padding:10px;">
                <div class="card">
                    <img class="card-img-top" src="https://cde.laprensa.e3.pe/ima/0/0/2/3/8/238082.jpg" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">¿Que es un sexshop?</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container" style="margin-top:40px">
        <div class="section-title ">
            <h3 style="color:#F51167">Eventos</h3>
        </div>
    </div>
    <div class="container" style="margin-top:40px">
        <div class="row" style="margin-top:30px">
            <iframe class="col-6" height="315" src="https://www.youtube.com/embed/rPwCTVJp6vw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe class="col-6" height="315" src="https://www.youtube.com/embed/Ck58nU8Oiqc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
    <div class="col s12" style="margin-bottom:40px"></div>
@endsection
