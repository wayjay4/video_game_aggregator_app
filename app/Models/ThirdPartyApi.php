<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ThirdPartyApi extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'authorization_token', 'expires_in'];

    /* @var string[] */
    protected array $dates = ['created_at', 'updated_at', 'deleted_at'];
}
