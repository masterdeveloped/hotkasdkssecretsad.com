<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use  App\Http\Controllers\HomeController;
use  App\Http\Controllers\CategoriaController;

Route::get('/clear', function () {
   echo Artisan::call('config:clear');
   echo Artisan::call('config:cache');
   echo Artisan::call('cache:clear');
   echo Artisan::call('route:clear');
});


Route::get('/',[HomeController::class,'index'])->name('home');
Route::get('add/{id}',[HomeController::class,'add'])->name('add');


Route::resource('categorias', CategoriaController::class);


Route::get('producto/{id}',[HomeController::class,'producto'])->name('producto');
Route::get('carrito',[HomeController::class,'carrito'])->name('carrito');
Route::get('pay',[HomeController::class,'pay'])->name('pay');



//Route::get('index',[CategoriaController::class])->name('categoria');




Route::get('contactanos', function(){
    return view('contactanos/index');
    });






