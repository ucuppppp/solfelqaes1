<?php

namespace App\Models;

use App\Models\Question;
use App\Models\Response;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Answer extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $guarded = ['id'];

    public function questions()
    {
        return $this->hasMany(Question::class);
    }

    // public function responses(){
    //     return $this->hasMany(Response::class);
    // }

}
