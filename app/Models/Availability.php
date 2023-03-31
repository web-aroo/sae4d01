<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Model;

class Availability extends Model
{
    use CrudTrait;
    protected $fillable = [
        'adventure_id',
        'start_date',
        'end_date',
        'start_time',
        'end_time',
        'price',
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
