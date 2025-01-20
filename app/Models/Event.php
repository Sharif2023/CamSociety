<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    protected $fillable = [
        'event_name',
        'location',
        'start_date',
        'end_date',
        'start_time',
        'end_time',
        'rate',
        'description',
        'photo_url',
    ];
}
?>