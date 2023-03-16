<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreOrderRequest;
use App\Http\Requests\UpdateOrderRequest;
use App\Models\Order;
use Inertia\Inertia;

class OrderController extends Controller
{
	/**
	 * Display a listing of the resource.
	 */
	public function index()
	{
		return;
	}

	/**
	 * Show the form for creating a new resource.
	 */
	public function create()
	{
		return Inertia::render('Cart/Cart');
	}

	/**
	 * Store a newly created resource in storage.
	 */
	public function store(StoreOrderRequest $request)
	{
		return Inertia::render('Cart/Checkout');
	}

	/**
	 * Pays a created order
	 */
	public function checkout(Order $order)
	{
		return Inertia::render('Cart/Confirmation');
	}

	/**
	 * Display the specified resource.
	 */
	public function show(Order $order)
	{
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 */
	public function edit(Order $order)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 */
	public function update(UpdateOrderRequest $request, Order $order)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 */
	public function destroy(Order $order)
	{
		//
	}
}
