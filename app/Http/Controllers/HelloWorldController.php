<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HelloWorldController extends Controller
{
    public function Hello(){
        return response()->json(["mensagem"=>"Ola, mundo!"]);
    }
}