@extends('layouts.plantilla')
@section('title','home')
@section('content')

<section class="contact-section">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 contact-info">
                <h3>Dejanos un Mensaje</h3>
                <p>Oficina: Calle 16 con Kra 83. Cali – Valle del Cauca </p>
                <p>316 3591831 - 3185048940</p>
                <p>hotsecret@gmail.com</p>
             
                <form class="contact-form">
                    <input type="text" placeholder="Nombre">
                    <input type="text" placeholder="Correo">
                    <input type="text" placeholder="Subject">
                    <textarea placeholder="Mensaje"></textarea>
                    <button class="site-btn">Enviar</button>
                </form>
            </div>
            <div class="col-lg-6 contact-info">


            </div>
        </div>
    </div>
    <div class="map"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14376.077865872314!2d-73.879277264103!3d40.757667781624285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1546528920522" style="border:0" allowfullscreen></iframe></div>

</div>

</section>

<section class="related-product-section spad">
    <div class="container">

    </div>

</section>




@endsection