<?php

use App\Http\Controllers\AdventureController;
use App\Http\Controllers\OrderController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', function () {
	return Inertia::render('Home', [
		'adventures' => \App\Models\Adventure::orderBy('difficulty')->take(3)->get()->toArray(),
		'reviews' => \App\Models\Review::with('user')->inRandomOrder()->take(2)->get()->toArray(),
	]);
});

Route::get('adventures', function () {
	return Inertia::render('Adventures', [
		'adventures' => \App\Models\Adventure::all()->toArray(),
	]);
});

Route::resource('adventures', AdventureController::class)->only(['show']);
Route::get('/order', [OrderController::class, "order"]);
Route::patch('/order', [OrderController::class, "toggleAvailability"]);
Route::post('/checkout', [OrderController::class, "checkout"]);

Route::get("/legal-notices", function (){
	return Inertia::render('LegalNotices');
});

Route::get("/terms-of-use", function (){
	return Inertia::render('TermsOfUse');
});

Route::get("/terms-of-sale", function (){
	return Inertia::render('TermsOfSale');
});

Route::get("/privacy-policy", function (){
	return Inertia::render('PrivacyPolicy');
});

require __DIR__ . '/auth.php';
