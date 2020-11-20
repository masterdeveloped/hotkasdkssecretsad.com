@extends('layouts.plantilla')
@section('title','home')
@section('content')

<div id="preloder">
    <div class="loader"></div>
</div>



	<section class="cart-section spad">
		<div class="container">
			<div class="row">
				<div class="col-lg-8">
					<div class="cart-table">
						<h3>Tu carrito</h3>
						<div class="cart-table-warp">
							<table>
							<thead>
								<tr>
									<th class="product-th">Producto</th>
									<th class="quy-th">Cantidad</th>
									<th class="size-th">Talla</th>
									<th class="total-th">Precio</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td class="product-col">
										<img src="assets/img/Productos/ACEITE DE MASAJES Y AROMATERAPIA x 240.png" alt="">
										<div class="pc-title">
											<h4>ACEITE DE MASAJES Y AROMATERAPIA x 240</h4>
											<p>$45.90</p>
										</div>
									</td>
									<td class="quy-col">
										<div class="quantity">
					                        <div class="pro-qty">
												<input type="text" value="1">
											</div>
                    					</div>
									</td>
									<td class="size-col"><h4>M</h4></td>
									<td class="total-col"><h4>$45.90</h4></td>
								</tr>
							</tbody>
						</table>
						</div>
						<div class="total-cost">
							<h6>Total <span>$99.90</span></h6>
						</div>
					</div>
				</div>
				<div class="col-lg-4 card-right">
					<form class="promo-code-form">
						<input type="text" placeholder="Enter promo code">
						<button>Enviar</button>
					</form>
					<a href="" class="site-btn">Confirmar compra</a>
					<a href="/" class="site-btn sb-dark">Continuar comprando</a>
				</div>
			</div>
		</div>
	</section>
	<!-- cart section end -->
<?php  /* 
	<section class="related-product-section">
		<div class="container">
			<div class="section-title">
				<h2>Continuar comprando</h2>
			</div>
			<div class="product-slider owl-carousel">
				<?php for($i=0;$i < 6;$i++){ ?>
					<div class="product-item">
						<div class="pi-pic">
								<?php if($i%2 == 0){ ?>
									<div class="tag-sale">Oferta</div>
								<?php }else{ ?>
									<div class="tag-new">Nuevo</div>
								<?php } ?>
							<img onclick="verproducto('')" src="assets/img/Productos/VELA PARA MASAJES SEN PHEROMONAS x30 ML 2.jpg" alt="">
							<div class="pi-links">
								<a href="/producto" class="add-card"><i class="flaticon-bag"></i><span>Añadir</span></a>
								<a href="#" class="wishlist-btn"><i class="flaticon-heart"></i></a>
							</div>
						</div>
						<div onclick="verproducto('')" class="pi-text">
							<h6>$95.000</h6>
							<p>VELA PARA MASAJES SEN PHEROMONAS x30 ML</p>
						</div>
					</div>
				<?php } ?>
			</div>
		</div>
	</section>
-->
*/
?>



@endsection
