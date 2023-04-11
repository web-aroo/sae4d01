<?php

namespace App\Http\Controllers;

use App\Models\Availability;
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
		$cardHolder = $request->input("card_holder");
		$cardNumber = $request->input("card_number");
		$expirationDateMonth = $request->input("expiration_date_month");
		$expirationDateYear = $request->input("expiration_date_year");
		$cvc = $request->input("cvc");
		$availabilities = $request->input("availabilities");

		dd($phoneNumber);

		$user = User::firstOrCreate(
			['name' => $firstName." ".$lastName],
			['email' => $emailAddress],
			['phone_number' => $phoneNumber]
		);

	}
}
