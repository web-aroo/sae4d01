<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreOrderRequest;
use App\Models\Availability;
use Inertia\Inertia;

class OrderController extends Controller
{

	public function order()
	{

		$availabilities = Availability::with(['adventure','priceFormula'])->get()->toArray(); // For test purpose

		return Inertia::render('Order', [
			"availabilities" => $availabilities
		]);
	}

	public function confirmation(StoreOrderRequest $request)
	{

		dd($request);

		return Inertia::render('Cart/Confirmation');
	}
}
