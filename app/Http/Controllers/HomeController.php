<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Productos;
use App\Models\Categoria;
use App\Models\portada;
class HomeController extends Controller
{
    public function index(){
        $productos = Productos::all();
        $categoria = Categoria::all();
        $portada = portada::all();
        return view('home',compact('productos','categoria','portada'));
    }

    public function add(Request $request){
        $arry =  session('idcarrito');
        $arry[] = $request->id;
        session(['idcarrito' =>  $arry]);
        $valor_almacenado = session('idcarrito');
        return $valor_almacenado;
    }


 public function pay(){
        return view('checkout.paytocart');
    }

    
    public function carrito(){


        return view('checkout.cart');
    }

    public function producto($id=""){

        $productos = Productos::find($id);

        $variable=[];

        if($productos['imagen_uno'] != ''){ 
            $variable[]=$productos['imagen_uno'];
        }
        if($productos['imagen_dos'] != ''){
            $variable[]=$productos['imagen_dos'];
        }
        if($productos['imagen_tres'] != ''){
            $variable[]=$productos['imagen_tres'];
        }
        if($productos['imagen_cuatro'] != ''){
            $variable[]=$productos['imagen_cuatro'];
        }


        return view('productos.producto',compact('productos','variable'));
    }






}
