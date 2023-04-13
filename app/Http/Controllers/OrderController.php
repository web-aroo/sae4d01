<?php

namespace App\Http\Controllers;

use App\Models\Availability;
use App\Models\Order;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{

	private function showCart($availabilitiesIds)
	{
		$availabilities = Availability::whereIn('id', array_keys($availabilitiesIds))->with(['adventure', 'priceFormula'])->get();

		return Inertia::render('Order', [
			"availabilities" => $availabilities
		]);
	}

	public function toggleAvailability(Request $request)
	{
		$availabilityId = $request->input("availability_id");
		$availability = Availability::find($availabilityId);
		$cart = unserialize($request->session()->get('cart', 'a:0:{}'));
		if (!empty($availability->order_id)) {
			throw new \Exception("Availability is already booked");
		} else {
			if (array_key_exists($availabilityId, $cart)) {
				unset($cart[$availabilityId]);
			} else {
				$cart[$availabilityId] = true;
			}
			$request->session()->put('cart', serialize($cart));
		}
		return $this->showCart($cart);
	}

	public function order(Request $request)
	{
		$availabilitiesIds = unserialize($request->session()->get('cart', 'a:0:{}'));
		return $this->showCart($availabilitiesIds);
	}

	public function checkout(Request $request)
	{

		$firstName = $request->input("first_name");
		$lastName = $request->input("last_name");
		$emailAddress = $request->input("email_address");
		$phoneNumber = $request->input("phone_number");
		$availabilities = $request->input("availabilities");

		$user = User::firstOrCreate(
			['name' => $firstName . " " . $lastName],
			['email' => $emailAddress],
			['phone_number' => $phoneNumber] // TODO: fix le numéro qui ne veut pas s'enregister
		);

		$order = new Order();
		$order->user_id = $user->id;
		$order->paid = 1;
		$order->save();

		foreach ($availabilities as $a) {
			$availability = Availability::find($a["id"]);
			$availability->order_id = $order->id;
			$availability->save();
		}
	}
}
