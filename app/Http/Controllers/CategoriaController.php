<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Productos;
use App\Models\Categoria;

class CategoriaController extends Controller
{
    public function index(){
        $productos = Productos::all();
        $categoria = Categoria::all();
        $variable = Categoria::select('categoria_hot.nombre_cat','subcategoria_hot.nombre_sub')->join('categoria_x_subcategoria','categoria_hot.id_categoria','=','categoria_x_subcategoria.id_creacion_subtegoria')->join('subcategoria_hot','categoria_x_subcategoria.id_subcategoria','=','subcategoria_hot.id')->get();
        $final = [];
        foreach ($variable as $key => $value) {
            $final[$value['nombre_cat']][] = $value['nombre_sub'];
        }
        return view('categorias/index',compact('productos','categoria','final'));
    }
}
