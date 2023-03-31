<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Model;

class PriceFormula extends Model
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

    public function availabilities()
    {
        return $this->hasMany(Availability::class);
    }
}
