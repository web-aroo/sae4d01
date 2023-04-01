<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Model;

class PriceFormula extends Model
{
    use CrudTrait;
    protected $fillable = [
        'name',
        'price',
        'player_count',
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
