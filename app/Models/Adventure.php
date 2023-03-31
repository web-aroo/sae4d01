<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Model;

class Adventure extends Model
{
    use CrudTrait;
    protected $fillable = [
        'name',
        'image_url',
        'description',
        'difficulty',
        'latitude',
        'longitude',
        'min_player_count',
        'max_player_count',
        'duration',
    ];

    public function priceFormulas()
    {
        return $this->hasMany(PriceFormula::class);
    }

    public function availabilities()
    {
        return $this->hasMany(Availability::class);
    }
}
