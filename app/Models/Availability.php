<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Model;

class Availability extends Model
{
	use CrudTrait;
	protected $fillable = [
		'adventure_id',
		'start_at',
		'end_at',
		'price',
	];

	/**
	 * The attributes that should be cast.
	 *
	 * @var array
	 */
	protected $casts = [
		'start_at' => 'datetime',
		'end_at' => 'datetime'
	];

	public function adventure()
	{
		return $this->belongsTo(Adventure::class);
	}

	public function priceFormula()
	{
		return $this->belongsTo(PriceFormula::class);
	}

	public function order()
	{
		return $this->belongsTo(Order::class);
	}
}
