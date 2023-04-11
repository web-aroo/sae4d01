<?php

namespace App\Http\Controllers;

use App\Models\Availability;
use App\Models\Order;
use App\Models\User;
use Illuminate\Http\Request;
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

	public function checkout(Request $request){

		$firstName = $request->input("first_name");
		$lastName = $request->input("last_name");
		$emailAddress = $request->input("email_address");
		$phoneNumber = $request->input("phone_number");
		$availabilities = $request->input("availabilities");

		$user = User::firstOrCreate(
			['name' => $firstName." ".$lastName],
			['email' => $emailAddress],
			['phone_number' => $phoneNumber] // TODO: fix le numéro qui ne veut pas s'enregister
		);

		$order = new Order();
		$order->user_id = $user->id;
		$order->paid = 1;
		$order->save();

		foreach ($availabilities as $a){
			$availability = Availability::find($a["id"]);
			$availability->order_id = $order->id;
			$availability->save();
		}

	}
}
