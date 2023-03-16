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
		return Inertia::render('Adventure', [
			'adventure' => $adventure,
		]);
	}
}
