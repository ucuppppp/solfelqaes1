<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
// use App\Models\Form;

class AuthController extends Controller
{
    //

    public function login(Request $request){

        
        $validator = Validator::make($request->all(), [
            "email" => "required|email",
            "password" => "required|min:5"
        ]);
        
        if($validator->fails()){
            return response()->json([
                "message" => "Invalid field",
                "errors" => $validator->errors()
            ], 422);
        }
        $user = User::where('email', $request->email)->first();

        if(!$user || !Hash::check($request->password, $user->password)){
            return response()->json([
                "message" => "Email or password incorrect"
            ], 401);
        }

        $token = $user->createToken($request->email)->plainTextToken;

        return response()->json([
            "message" => "Login success",
            "user" => [
                "name" => $user->name,
                "email" => $user->email,
                "accessToken" => $token
            ]
            ]);
    }


    public function logout(){
        
        $user = auth()->user();

        $user->currentAccessToken()->delete();

        return response()->json([
            "message" => "Logout success"
        ]);

    }

}
