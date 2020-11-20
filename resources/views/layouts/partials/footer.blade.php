<section class="footer-section">
     <div class="container">
        <div class="footer-logo text-center">
            <a href="index.html"><img src="assets/img/logo-light.png" alt=""></a>
        </div>
        <div class="row">
            <div class="col-lg-6 col-sm-4">
                <div class="footer-widget about-widget">
                    <h2>Sobre Hot Secret</h2>
                    <p> Somos una tienda que busca mediante la comodidad de las compras online, entregas con discreto domicilio y eficientes  envíos de mensajería, llevar a las personas productos de óptima calidad que llevaran sus vidas sexuales a nuevos niveles de satisfacción, placer y mejoramiento.</p>
                    <?php /* <img src="assets/img/cards.png" alt=""> */ ?>
                </div>
            </div>
          <div class="col-lg-3 col-sm-4">
                <div class="footer-widget about-widget">
                    <h2>Questions</h2>
                    <ul>
                        <li><a href="">Sobre Nostros</a></li>
                        <li><a href="">¿Que ofrecemos?</a></li>
                        <li><a href="">Partners</a></li>
                        <li><a href="">Bloggers</a></li>
                    </ul>
                </div>
            </div>
         
            <div class="col-lg-3 col-sm-4">
                <div class="footer-widget contact-widget">
                    <h2>Datos de Ubicación</h2>
                    <div class="con-info">
                        <span>C.</span>
                        <p>Hot Secret ® Tienda Erótica Virtual </p>
                    </div>
                    <div class="con-info">
                        <span>B.</span>
                        <p>Oficina: Calle 16 con Kra 83. Cali – Valle del Cauca Atención y envíos a todos los rincones del país.</p>
                    </div>
                    <div class="con-info">
                        <span>T.</span>
                        <p>316 3591831 - 3185048940</p>
                    </div>
                    <div class="con-info">
                        <span>E.</span>
                        <p>hotsecret@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    </div> 




    

    <div class="social-links-warp">
        <div class="container">
            <div class="social-links centrado">
                <a href="https://www.instagram.com/tiendahotsecret" target="_blank" class="instagram"><i class="fa fa-instagram"></i><span>instagram</span></a>
                <a href="https://www.facebook.com/HotSecretStore/" target="_blank" class="facebook"><i class="fa fa-facebook"></i><span>facebook</span></a>
                <a href="https://twitter.com/HotSecretStore" target="_blank" class="twitter"><i class="fa fa-twitter"></i><span>twitter</span></a>
                <a href="https://www.youtube.com/channel/UCdBecKp3vjbnevy16B9WRhQ" target="_blank" class="youtube"><i class="fa fa-youtube"></i><span>youtube</span></a>
                <?php /*
                <a href="" target="_blank" class="tumblr"><i class="fa fa-tumblr-square"></i><span>tumblr</span></a>
                <a href="" target="_blank" class="google-plus"><i class="fa fa-google-plus"></i><span>g+plus</span></a>
                <a href="" target="_blank" class="pinterest"><i class="fa fa-pinterest"></i><span>pinterest</span></a>
                */ ?>
            </div>

            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> 
            <p class="text-white text-center mt-5">Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved</p>
            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->

        </div>
    </div>
</section>
<!--====== Javascripts & Jquery ======-->
<script src="{{ asset('js/jquery-3.2.1.min.js')}}?<?php echo microtime();?>"></script>
<script src="{{ asset('js/bootstrap.min.js')}}?<?php echo microtime();?>"></script>
<script src="{{ asset('js/jquery.slicknav.min.js')}}?<?php echo microtime();?>"></script>
<script src="{{ asset('js/owl.carousel.min.js')}}?<?php echo microtime();?>"></script>
<script src="{{ asset('js/jquery.nicescroll.min.js')}}?<?php echo microtime();?>"></script>
<script src="{{ asset('js/jquery.zoom.min.js')}}?<?php echo microtime();?>"></script>
<script src="{{ asset('js/jquery-ui.min.js')}}?<?php echo microtime();?>"></script>
<script src="{{ asset('js/main.js')}}?<?php echo microtime();?>"></script>
<script>
    function bajar () {
        $('html, body').animate({
        scrollTop: $(document).height()
        }, 'slow');
    }
    function verproducto(a){
        console.log('hola')
        //location.href="/producto";
    }
</script>
</body>
</html>
