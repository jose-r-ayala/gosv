<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Chat extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'id_usuario1',
        'id_usuario2',
    ];
    
    public $timestamps = false;

    // chats ---1...1-> users
    /*
     * for this relationship we should use Laravel's query builder with where and orwhere:
     * 
     * $chats = DB::table('chats')->where('id_usuario1','id')->orwhere('id_usuario2','id')->get();
     * 
    */
}
