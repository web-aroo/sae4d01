<?php

namespace App\Http\Controllers;

use App\Models\Adventure;
use Inertia\Inertia;

class AdventureController extends Controller
{
	/**
	 * Display the specified resource.
	 */
	public function show(Adventure $adventure)
	{
		$adventure->load(['availabilities' => function ($query) {
			$query->where('order_id', null)->orderBy('start_at');
		}, 'availabilities.priceFormula']);
		return Inertia::render('Adventure', [
			'adventure' => $adventure,
		]);
	}
}
