<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Newsletter extends Model
{
    protected $primaryKey = 'email';

    protected $fillable = ['email'];
}
