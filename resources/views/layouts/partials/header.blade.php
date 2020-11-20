<header class="header-section">
    <div class="header-top">
        <div class="container">
            <div class="row">
                <div class="col-lg-2 text-center text-lg-left" style="display:flex;align-items: center;justify-content: center;">
                    <!-- logo -->
                    <a href="" class="site-logo">
                        <img src="{{ asset('img/logo/logo.png') }}" alt="" style="max-height:50px">
                    </a>
                </div>
                <div class="col-xl-6 col-lg-5" style="padding:8px 0">
                    <form class="header-search-form">
                        <input type="text" placeholder="Buscar en HotSecret ....">
                        <button><i class="flaticon-search"></i></button>
                    </form>
                </div>
                <div class="col-xl-4 col-lg-5" style="padding:12px 10px">
                    <div class="user-panel">
                        <div class="up-item">
                            <i class="flaticon-profile"></i>
                            <a href="#">Iniciar sesión</a>
                        </div>
                        <div class="up-item">
                            <div class="shopping-card">
                                <i class="flaticon-bag"></i>
                                <span>0</span>
                            </div>
                            <a href="">Carrito de compras</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <nav class="main-navbar">
        <div class="container">
            
            <!-- menu -->
            <ul class="main-menu">
                <li><a href="/">Home</a></li>
                <li><a href="/">Categorias</a></li>
                <li><a href="/">Blog</a></li>
                <li><a href="/">Sobre Nosotros</a></li>


                
                <?php 

/*
                    $tass = "SELECT nombre_cat,id_categoria FROM hot_secret.categoria_hot";
                    $k = $EKqVhaoanMTYsZiXiSVh->query($tass); 
                    $usa = [];
                    if ($k->num_rows > 0) {
                        $coluo=$k->num_rows;
                        while($row = $k->fetch_assoc()) {
                            $usa[] = $row;
                        }
                    }

                ?>
                <li><a href="/">Home</a></li>

                <?php 

                for ($i=0; $i < count($usa) ; $i++) {
                    


                    ?>

                    <li><a href="/categorias"><?php echo $usa[$i]['nombre_cat'];?></a>
                        <!-- <ul class="sub-menu"> -->

                        <?php 
                        /*$key = $usa[$i]['id_categoria'];


                        $tassser ="SELECT nombre_subcat FROM hot_secret.categoria_x_subcategoria p1 inner join  hot_secret.subcategoria_hot p2 WHERE p1.id_subcategoria = p2.id and id_subcategoria = '".$key."'" ;
                    $krare = $EKqVhaoanMTYsZiXiSVh->query($tassser);
                    $dos=[];

                    if ($krare->num_rows > 0) {
                        while($row = $krare->fetch_assoc()) {
                            $dos[] = $row;
                        }
                    }
                        for ($z=0; $z <count($dos) ; $z++) {  ?>
                                    <li><a href="./product.html"><?php echo $dos[$z]['nombre_subcat'].'asdsa';?></a></li>
                        <?php }   ?>
                
                        </li>
                    <!-- 000</ul> -->



                    </li>

                <?php 

                }
*/
                ?>


                <?php  ?>



                 
            </ul>
        </div>
    </nav>
</header>
