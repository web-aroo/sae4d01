<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use CrudTrait;
    protected $fillable = [
        'user_id',
        'adventure_id',
        'stars',
        'text',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function adventure()
    {
        return $this->belongsTo(Adventure::class);
    }
}
